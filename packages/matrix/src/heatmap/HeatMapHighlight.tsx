import { useCallback, useMemo, useRef, useState, MouseEvent, useEffect } from 'react'
import { m } from 'framer-motion'
import {
    getIdKeySets,
    BandAxisScale,
    useProcessedData,
    useScales,
    useDimensions,
    X,
    Y,
    NumericPositionSpec,
    SizeSpec,
    CssProps,
    createBandDetectorIntervals,
    DetectorZone,
    DetectorIntervals,
    inZone,
    findZone,
    getMinMax,
    useTooltip,
    OpacityMotion,
    getAlignPosition,
    getZoneSize,
    getClassName,
} from '@chsk/core'
import { HeatMapHighlightProps } from './types'
import { isHeatMapSetting } from './predicates'

const createDetectorIntervals = (
    scaleX: BandAxisScale,
    scaleY: BandAxisScale,
    idsSet: Set<string>,
    keysSet: Set<string>
): DetectorIntervals => {
    return [
        createBandDetectorIntervals(scaleX, keysSet),
        createBandDetectorIntervals(scaleY, idsSet),
    ]
}

const HeatMapHighlightMask = (
    zone: DetectorZone,
    size: SizeSpec,
    style?: CssProps,
    className?: string,
    animation?: boolean
) => {
    const [width, height] = size
    const commonProps = {
        initial: animation ? { width: 0, height: 0 } : undefined,
        style,
        className,
    }
    return (
        <>
            <m.rect
                key={'top-left'}
                animate={{ width: zone[X][0], height: zone[Y][0] }}
                {...commonProps}
            />
            <m.rect
                key={'top-right'}
                transform={'translate(' + width + ',0)rotate(90)'}
                animate={{ height: width - zone[X][1], width: zone[Y][0] }}
                {...commonProps}
            />
            <m.rect
                key={'bottom-left'}
                transform={'translate(0,' + height + ')rotate(-90)'}
                animate={{ width: height - zone[Y][1], height: zone[X][0] }}
                {...commonProps}
            />
            <m.rect
                key={'bottom-right'}
                transform={'translate(' + width + ',' + height + ')rotate(180)'}
                animate={{ width: width - zone[X][1], height: height - zone[Y][1] }}
                {...commonProps}
            />
        </>
    )
}

export const HeatMapHighlight = ({
    ids,
    keys,
    interactive = true,
    edgeAnimation = false,
    tooltipAlign = [0.5, 0.5],
    className,
    setRole = true,
    style,
}: HeatMapHighlightProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const { size } = useDimensions()
    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)
    const { setData: setTooltipData } = useTooltip()
    const data = processedData.data
    if (!isHeatMapSetting(data, scales)) return null

    const { idSet, keySet, idArray, keyArray } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const scaleColor = scales.color
    const detectorIntervals = useMemo(
        () => createDetectorIntervals(scaleX, scaleY, idSet, keySet),
        [scaleX, scaleY, idSet, keySet]
    )

    useEffect(() => {
        if (!interactive && zone === null) {
            const xInterval = getMinMax(detectorIntervals[0])
            const yInterval = getMinMax(detectorIntervals[1])
            setZone([xInterval, yInterval])
        }
    }, [detectorIntervals, setZone])

    const handleMouseLeave = useCallback(() => {
        setZone(null)
        setTooltipData({})
    }, [setZone, setTooltipData])
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (detectorRef === null || detectorRef.current === null) return
            const { x: detectorX, y: detectorY } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [
                event.clientX - detectorX,
                event.clientY - detectorY,
            ]
            if (inZone(mouse, zone)) return
            const { indexes, zone: newZone } = findZone(mouse, detectorIntervals)
            if (newZone === null) {
                handleMouseLeave()
                return
            }
            const [x, y] = getAlignPosition(
                [newZone[X][0], newZone[Y][0]],
                getZoneSize(newZone),
                tooltipAlign
            )
            const [keyIndex, idIndex] = indexes
            const zoneId = idArray[idIndex]
            const zoneKey = keyArray[keyIndex]
            const zoneValue = data[idIndex].value[keyIndex]
            const zoneSize = data[idIndex].size[keyIndex]
            const zoneLabel =
                (zoneValue === null || isNaN(Number(zoneValue)) ? '' : 'value: ' + zoneValue) +
                ' ' +
                (zoneSize === null || isNaN(Number(zoneSize)) ? '' : 'size: ' + zoneSize)
            const activeData = {
                id: zoneId,
                key: zoneKey,
                value: zoneValue,
                size: zoneSize,
                label: zoneLabel,
                color: scaleColor(zoneValue as number),
            }
            setTooltipData({
                x,
                y,
                title: zoneId + ', ' + zoneKey,
                data: [activeData],
            })
            setZone(newZone)
        },
        [detectorIntervals, detectorRef, zone, setZone]
    )

    // invisible rectangle that detects mouse motion
    const detector = (
        <rect
            ref={detectorRef}
            role={setRole ? 'heatmap-detector' : undefined}
            width={size[X]}
            height={size[Y]}
            style={{ opacity: 0.0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )

    const maskClassName = getClassName('heatmap-highlight', className)
    return (
        <g role={'heatmap-highlight'}>
            <OpacityMotion
                key={'heatmap-highlight-mask'}
                role={setRole ? 'heatmap-highlight-mask' : undefined}
                visible={zone !== null}
                firstRender={false}
            >
                {zone === null
                    ? null
                    : HeatMapHighlightMask(zone, size, style, maskClassName, edgeAnimation)}
            </OpacityMotion>
            {interactive ? detector : null}
        </g>
    )
}

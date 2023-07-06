import { useCallback, useMemo, useRef, useState, MouseEvent, useEffect } from 'react'
import { m } from 'framer-motion'
import {
    useIdsKeys,
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
    interval,
    useTooltip,
    OpacityMotion,
    getAlignPosition,
    getZoneSize,
    getClassName,
    relu,
} from '@chsk/core'
import { HeatMapHighlightProps, HeatMapInteractiveDataItem } from './types'
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
                animate={{ width: relu(zone[X][0]), height: relu(zone[Y][0]) }}
                {...commonProps}
            />
            <m.rect
                key={'top-right'}
                transform={'translate(' + width + ',0)rotate(90)'}
                animate={{ height: relu(width - zone[X][1]), width: relu(zone[Y][0]) }}
                {...commonProps}
            />
            <m.rect
                key={'bottom-left'}
                transform={'translate(0,' + height + ')rotate(-90)'}
                animate={{ width: relu(height - zone[Y][1]), height: relu(zone[X][0]) }}
                {...commonProps}
            />
            <m.rect
                key={'bottom-right'}
                transform={'translate(' + width + ',' + height + ')rotate(180)'}
                animate={{ width: relu(width - zone[X][1]), height: relu(height - zone[Y][1]) }}
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
    ...props
}: HeatMapHighlightProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const { size } = useDimensions()
    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)
    const [activeData, setActiveData] = useState<HeatMapInteractiveDataItem | undefined>(undefined)
    const { setData: setTooltipData } = useTooltip()
    const data = processedData.data
    const { idSet, keySet, idArray, keyArray } = useIdsKeys(ids, keys, processedData)
    if (!isHeatMapSetting(data, scales)) return null

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const scaleColor = scales.color
    const detectorIntervals = useMemo(
        () => createDetectorIntervals(scaleX, scaleY, idSet, keySet),
        [scaleX, scaleY, idSet, keySet]
    )

    useEffect(() => {
        if (!interactive) {
            const xInterval = interval(detectorIntervals[0])
            const yInterval = interval(detectorIntervals[1])
            setZone([xInterval, yInterval])
        }
    }, [detectorIntervals, setZone])

    const handleClick = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onClick?.(activeData, event)
        },
        [activeData, props.handlers]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onMouseLeave?.(activeData, event)
            setZone(null)
            setTooltipData({})
        },
        [activeData, setZone, setTooltipData, props.handlers]
    )
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
                handleMouseLeave(event)
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
            const activeData: HeatMapInteractiveDataItem = {
                id: zoneId,
                key: zoneKey,
                data: zoneValue,
                size: zoneSize,
                label: zoneLabel,
                color: scaleColor(zoneValue as number),
            }
            props.handlers?.onMouseEnter?.(activeData, event)
            setActiveData(activeData)
            setTooltipData({
                x,
                y,
                title: zoneId + ', ' + zoneKey,
                data: [activeData],
            })
            setZone(newZone)
        },
        [detectorIntervals, detectorRef, zone, setZone, props.handlers]
    )

    // invisible rectangle that detects mouse motion
    const detector = (
        <rect
            key={'detector'}
            ref={detectorRef}
            role={setRole ? 'heatmap-detector' : undefined}
            width={size[X]}
            height={size[Y]}
            style={{ opacity: 0.0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        />
    )

    const maskClassName = getClassName('heatmap-highlight', className)
    return (
        <g role={'heatmap-highlight'}>
            <OpacityMotion
                key={'mask'}
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

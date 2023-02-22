import { MouseEvent, useCallback, useMemo, useRef, useState } from 'react'
import { m } from 'framer-motion'
import {
    BandAxisScale,
    getIdKeySets,
    useDimensions,
    useScales,
    X,
    Y,
    useProcessedData,
    SizeSpec,
    CssProps,
    DetectorZone,
    DetectorIntervals,
    createBandDetectorIntervals,
    NumericPositionSpec,
    inZone,
    findZone,
    OpacityMotion,
    useTooltip,
    TooltipDataItem,
    getAlignPosition,
    getZoneSize,
    getClassName,
} from '@chsk/core'
import { BandHighlightProps } from './types'

const createDetectorIntervals = (
    scaleBand: BandAxisScale,
    idsSet: Set<string>,
    valueSize: number,
    horizontal: boolean
): DetectorIntervals => {
    const intervals = createBandDetectorIntervals(scaleBand, idsSet)
    return horizontal ? [[0, valueSize], intervals] : [intervals, [0, valueSize]]
}

const BandHighlightMask = (
    zone: DetectorZone,
    size: SizeSpec,
    horizontal: boolean,
    style?: CssProps,
    className?: string
) => {
    const [width, height] = size
    return horizontal ? (
        <>
            <m.rect
                key={'mask-top'}
                initial={{ height: 0 }}
                animate={{
                    width: zone[X][1],
                    height: zone[Y][0],
                }}
                style={style}
                className={className}
            />
            <m.rect
                key={'mask-bottom'}
                initial={{ height: 0 }}
                transform={'translate(' + width + ',' + height + ')rotate(180)'}
                animate={{
                    width: zone[X][1],
                    height: height - zone[Y][1],
                }}
                style={style}
                className={className}
            />
        </>
    ) : (
        <>
            <m.rect
                key={'mask-left'}
                initial={{ width: 0 }}
                animate={{
                    width: zone[X][0],
                    height: zone[Y][1],
                }}
                style={style}
                className={className}
            />
            <m.rect
                key={'mask-right'}
                initial={{ width: 0 }}
                transform={'translate(' + width + ',' + height + ')rotate(180)'}
                animate={{
                    width: width - zone[X][1],
                    height: zone[Y][1],
                }}
                style={style}
                className={className}
            />
        </>
    )
}

export const BandHighlight = ({
    ids,
    tooltipAlign = [0.5, 0.5],
    className,
    setRole = true,
    style,
}: BandHighlightProps) => {
    const processedData = useProcessedData()
    const { size } = useDimensions()
    const scales = useScales()
    const { setData: setTooltipData } = useTooltip()
    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)

    const { idSet } = useMemo(() => getIdKeySets(ids, [], processedData), [ids, processedData])
    const valueSize = horizontal ? size[X] : size[Y]
    const detectorIntervals = useMemo(
        () => createDetectorIntervals(indexScale, idSet, valueSize, horizontal),
        [indexScale, idSet, valueSize, horizontal]
    )

    // handlers are similar as in HeatMapHighlight
    const handleMouseLeave = useCallback(() => {
        setTooltipData({})
        setZone(null)
    }, [setTooltipData, setZone])
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!detectorRef || !detectorRef.current) return
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
            const idIndex = horizontal ? indexes[Y] : indexes[X]
            const zoneId = processedData.data[idIndex].id
            const seriesData = processedData.data[idIndex].data as Record<string, unknown>[]
            const activeData: TooltipDataItem[] = seriesData.map((data, j) => ({
                ...data,
                id: zoneId,
                key: processedData.keys[j],
            }))
            setTooltipData({
                x,
                y,
                title: zoneId,
                data: activeData,
            })
            setZone(newZone)
        },
        [detectorIntervals, detectorRef, zone, setZone]
    )

    // invisible rectangle that detects mouse motion
    const detector = (
        <rect
            ref={detectorRef}
            role={setRole ? 'band-detector' : undefined}
            width={size[X]}
            height={size[Y]}
            style={{ opacity: 0.0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )

    const maskClassName = getClassName('band-highlight', className)
    return (
        <g role={'band-highlight'}>
            <OpacityMotion
                key={'band-highlight-mask'}
                role={setRole ? 'band-highlight-mask' : undefined}
                visible={zone !== null}
                firstRender={false}
            >
                {zone === null
                    ? null
                    : BandHighlightMask(zone, size, horizontal, style, maskClassName)}
            </OpacityMotion>
            {detector}
        </g>
    )
}

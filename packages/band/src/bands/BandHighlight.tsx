import { MouseEvent, useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
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
} from '@chask/core'
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
    return (
        <AnimatePresence>
            <m.g
                role={'band-highlight-mask'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {horizontal ? (
                    <>
                        <m.rect
                            // mask: top
                            initial={{ height: 0 }}
                            animate={{
                                width: zone[X][1],
                                height: zone[Y][0],
                            }}
                            style={style}
                            className={className}
                        />
                        <m.rect
                            // mask: bottom
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
                            // mask: left
                            initial={{ width: 0 }}
                            animate={{
                                width: zone[X][0],
                                height: zone[Y][1],
                            }}
                            style={style}
                            className={className}
                        />
                        <m.rect
                            // mask: right
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
                )}
            </m.g>
        </AnimatePresence>
    )
}

export const BandHighlight = ({ ids, className, setRole = true, style }: BandHighlightProps) => {
    const processedData = useProcessedData()
    const dimensions = useDimensions()
    const scales = useScales()
    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)

    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)

    const { idSet } = useMemo(() => getIdKeySets(ids, [], processedData), [ids, processedData])
    const valueSize = horizontal ? dimensions.innerSize[X] : dimensions.innerSize[Y]
    const detectorIntervals = useMemo(
        () => createDetectorIntervals(indexScale, idSet, valueSize, horizontal),
        [indexScale, idSet, valueSize, horizontal]
    )

    // handlers are the same as in HeatMapHighlight
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (detectorRef === null) return
            if (detectorRef.current === null) return
            const { x, y } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [event.clientX - x, event.clientY - y]
            if (!inZone(mouse, zone)) {
                setZone(findZone(mouse, detectorIntervals))
            }
        },
        [detectorIntervals, detectorRef, zone]
    )
    const handleMouseLeave = useCallback(() => setZone(null), [])

    // invisible rectangle that detects mouse motion
    const detector = (
        <rect
            ref={detectorRef}
            role={setRole ? 'band-detector' : undefined}
            width={dimensions.innerSize[X]}
            height={dimensions.innerSize[Y]}
            style={{ opacity: 0.0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )

    // rectangles that mask non-selected regions of the heatmap
    const mask =
        zone === null
            ? null
            : BandHighlightMask(zone, dimensions.innerSize, horizontal, style, className)

    return (
        <g role={'band-highlight'}>
            {mask}
            {detector}
        </g>
    )
}

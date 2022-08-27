import { useCallback, useMemo, useRef, useState, MouseEvent } from 'react'
import { sortedIndex } from 'lodash'
import { AnimatePresence, m } from 'framer-motion'
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
} from '@chask/core'
import { HeatMapHighlightProps } from './types'
import { isHeatMapProcessedData } from './HeatMap'

// coordinates for one heatmap cell: [[xmin, xmax], [ymin, ymax]]
type DetectorZone = [[number, number], [number, number]]
type DetectorIntervals = [number[], number[]]

// use bands in a scale to create intervals associated with each index
// result is an array with potentially many duplicates, e.g. [0, 1, 1, 2, 2, 3]
// the duplicates are needed to support band scales with custom padding
const createDetectorIntervals = (
    scaleX: BandAxisScale,
    scaleY: BandAxisScale,
    idsSet: Set<string>,
    keysSet: Set<string>
): DetectorIntervals => {
    const createIntervals = (scale: BandAxisScale, targets: Set<string>) => {
        const halfStep = scale.step() / 2
        return scale
            .domain()
            .filter(item => targets.has(item))
            .map(item => {
                const value = scale(item)
                return [value - halfStep, value + halfStep]
            })
            .flat()
            .sort((a: number, b: number) => a - b)
    }
    return [createIntervals(scaleX, keysSet), createIntervals(scaleY, idsSet)]
}

// determine if cursor is inside current detection zone
const inZone = (pos: NumericPositionSpec, zone: DetectorZone | null): boolean => {
    if (zone === null) return false
    return (
        pos[X] >= zone[X][0] && pos[X] <= zone[X][1] && pos[Y] >= zone[Y][0] && pos[Y] <= zone[Y][1]
    )
}

const findZone = (
    pos: NumericPositionSpec,
    intervals: [Array<number>, Array<number>]
): DetectorZone | null => {
    const i = sortedIndex(intervals[X], pos[X])
    const j = sortedIndex(intervals[Y], pos[Y])
    if (i % 2 == 0 || j % 2 == 0) return null
    if (i >= intervals[X].length || j >= intervals[Y].length) return null
    return [intervals[X].slice(i - 1, i + 1), intervals[Y].slice(j - 1, j + 1)] as DetectorZone
}

const wh0 = { width: 0, height: 0 }

const HeatMapHighlightMask = (
    zone: DetectorZone,
    size: SizeSpec,
    style?: CssProps,
    className?: string
) => {
    const [width, height] = size
    return (
        <AnimatePresence>
            <m.g
                role={'heatmap-highlight-mask'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <m.rect
                    // mask: top left
                    initial={wh0}
                    animate={{
                        width: zone[X][0],
                        height: zone[Y][0],
                    }}
                    style={style}
                    className={className}
                />
                <m.rect
                    // mask: top-right
                    transform={'translate(' + width + ',0)rotate(90)'}
                    initial={wh0}
                    animate={{
                        height: width - zone[X][1],
                        width: zone[Y][0],
                    }}
                    style={style}
                    className={className}
                />
                <m.rect
                    // mask: bottom-left
                    initial={wh0}
                    transform={'translate(0,' + height + ')rotate(-90)'}
                    animate={{
                        width: height - zone[Y][1],
                        height: zone[X][0],
                    }}
                    style={style}
                    className={className}
                />
                <m.rect
                    // mask: bottom-right
                    initial={wh0}
                    transform={'translate(' + width + ',' + height + ')rotate(180)'}
                    animate={{
                        width: width - zone[X][1],
                        height: height - zone[Y][1],
                    }}
                    style={style}
                    className={className}
                />
            </m.g>
        </AnimatePresence>
    )
}

export const HeatMapHighlight = ({ ids, keys, className, style }: HeatMapHighlightProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const dimensions = useDimensions()
    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)
    const data = processedData.data
    if (!isHeatMapProcessedData(data)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const detectorIntervals = useMemo(
        () => createDetectorIntervals(scaleX, scaleY, idSet, keySet),
        [scaleX, scaleY, idSet, keySet]
    )

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
            role={'detector'}
            width={dimensions.innerSize[X]}
            height={dimensions.innerSize[Y]}
            style={{ opacity: 0.0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )
    // rectangles that mask non-selected regions of the heatmap
    const mask =
        zone === null ? null : HeatMapHighlightMask(zone, dimensions.innerSize, style, className)

    return (
        <g role={'heatmap-highlight'}>
            {mask}
            {detector}
        </g>
    )
}

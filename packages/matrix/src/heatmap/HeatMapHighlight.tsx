import { useCallback, useMemo, useRef, useState, MouseEvent, useEffect } from 'react'
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
    createBandDetectorIntervals,
    DetectorZone,
    DetectorIntervals,
    inZone,
    findZone,
    getMinMax,
} from '@chask/core'
import { HeatMapHighlightProps } from './types'
import { isHeatMapSetting } from './utils'

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

export const HeatMapHighlight = ({
    ids,
    keys,
    interactive = true,
    className,
    setRole = true,
    style,
}: HeatMapHighlightProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const dimensions = useDimensions()
    const detectorRef = useRef<SVGRectElement>(null)
    const [zone, setZone] = useState<null | DetectorZone>(null)
    if (!isHeatMapSetting(processedData.data, scales)) return null

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

    useEffect(() => {
        if (!interactive && zone === null) {
            const xInterval = getMinMax(detectorIntervals[0])
            const yInterval = getMinMax(detectorIntervals[1])
            setZone([xInterval, yInterval])
        }
    })

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
            role={setRole ? 'heatmap-detector' : undefined}
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
            {interactive ? detector : null}
        </g>
    )
}

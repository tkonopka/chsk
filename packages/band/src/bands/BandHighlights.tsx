import { ReactNode, useMemo } from 'react'
import { m } from 'framer-motion'
import {
    BandAxisScale,
    composeClassName,
    getIdKeySets,
    useDimensions,
    useScales,
    X,
    Y,
    useProcessedData,
    RecordWithId,
} from '@chask/core'
import { BandHighlightsProps } from './types'

export const BandHighlights = ({
    ids,
    expansion = [0, 0],
    className,
    setRole = false,
    style,
}: BandHighlightsProps) => {
    const processedData = useProcessedData()
    const dimensions = useDimensions()
    const scales = useScales()
    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const step = indexScale.step()
    const keyPrefix = 'band-highlight-'

    const valueSize = horizontal ? dimensions.innerSize[X] : dimensions.innerSize[Y]
    const expandedSize = valueSize + expansion[0] + expansion[1]
    const height = horizontal ? step : expandedSize
    const width = horizontal ? expandedSize : step

    const { idSet } = useMemo(() => getIdKeySets(ids, [], processedData), [ids, processedData])
    const compositeClassName = composeClassName(['bandHighlight', className])

    const bands: Array<ReactNode> = processedData.data
        .map((seriesData: RecordWithId, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            const indexPos = indexScale(seriesData.id)
            const x = horizontal ? -expansion[0] : indexPos - step / 2
            const y = horizontal ? indexPos - step / 2 : -expansion[0]
            return (
                <m.rect
                    key={keyPrefix + j}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    role={setRole ? keyPrefix + j : undefined}
                    className={compositeClassName}
                    style={style}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                />
            )
        })
        .filter(v => v)

    if (bands.length === 0) return null
    return <g role={'band-highlights'}>{bands}</g>
}

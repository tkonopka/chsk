import { useMemo } from 'react'
import { BandAxisScale, Rectangle, useScales } from '@chask/core'
import { HeatMapCellsProps, HeatMapDataContextProps, HeatMapProcessedDataItem } from './types'
import { useProcessedHeatMapData } from './contexts'

// get set objects containing ids and keys to display
const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    preparedData: HeatMapDataContextProps
) => {
    const idSet = ids ? new Set(ids) : new Set(Object.keys(preparedData.seriesIndexes))
    const keySet = keys ? new Set(keys) : new Set(preparedData.keys)
    return { idSet, keySet }
}

export const HeatMapCells = ({
    ids,
    keys,
    cell = Rectangle,
    className,
    style,
}: HeatMapCellsProps) => {
    const processedData = useProcessedHeatMapData()
    const scales = useScales()
    const data = processedData.data
    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )

    const scaleX = scales.scaleX as BandAxisScale
    const scaleY = scales.scaleY as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const width = scales.scaleX.bandwidth()
    const height = scales.scaleY.bandwidth()

    const cells = data
        .map((seriesData: HeatMapProcessedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            const y = scaleY(seriesData.id)
            return seriesData.value.map((v, i) => {
                if (!keySet.has(processedData.keys[i])) return null
                return cell({
                    key: 'cell-' + seriesData.index + '-' + i,
                    x: x[i],
                    y: y,
                    width,
                    height,
                    className,
                    style,
                    center: true,
                    variant: 'cell',
                    setRole: false,
                })
            })
        })
        .flat()
        .filter(v => v !== null)

    if (cells.length === 0) return null
    return (
        <g role={'heatmap-cells'} key={'heatmap-cells'}>
            {cells}
        </g>
    )
}

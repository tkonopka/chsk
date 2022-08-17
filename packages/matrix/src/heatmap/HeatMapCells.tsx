import { useMemo } from 'react'
import {
    addColor,
    BandAxisScale,
    ProcessedDataContextProps,
    Rectangle,
    useProcessedData,
    useScales,
} from '@chask/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { isHeatMapProcessedData } from './HeatMap'

// get set objects containing ids and keys to display
const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    processedData: ProcessedDataContextProps
) => {
    const idSet = ids ? new Set(ids) : new Set(Object.keys(processedData.seriesIndexes))
    const keySet = keys ? new Set(keys) : new Set(processedData.keys)
    return { idSet, keySet }
}

export const HeatMapCells = ({
    ids,
    keys,
    cell = Rectangle,
    className,
    style,
}: HeatMapCellsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = processedData.data
    if (!isHeatMapProcessedData(data)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const width = scales.x.bandwidth()
    const height = scales.y.bandwidth()

    const cells = data
        .map((seriesData: HeatMapProcessedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            const y = scaleY(seriesData.id)
            const values = seriesData.value
            return seriesData.value.map((v, i) => {
                if (!keySet.has(processedData.keys[i])) return null
                const color = colorScale(values[i])
                const cellStyle = addColor(style, color)
                return cell({
                    key: 'cell-' + seriesData.index + '-' + i,
                    x: x[i],
                    y: y,
                    width,
                    height,
                    className,
                    style: cellStyle,
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

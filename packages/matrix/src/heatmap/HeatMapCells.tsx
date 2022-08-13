import { useMemo } from 'react'
import { BandAxisScale, Rectangle, useScales } from '@chask/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { useProcessedHeatMapData } from './contexts'

export const HeatMapCells = ({ cell = Rectangle, rx, ry, className, style }: HeatMapCellsProps) => {
    const processedData = useProcessedHeatMapData()
    const scales = useScales()
    const ids = useMemo(() => processedData.data.map(seriesData => seriesData.id), [processedData])
    const data = processedData.data

    const scaleX = scales.scaleX as BandAxisScale
    const scaleY = scales.scaleY as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const y = ids.map(id => scaleY(id))
    const width = scales.scaleX.bandwidth()
    const height = scales.scaleY.bandwidth()

    const cells = data
        .map((seriesData: HeatMapProcessedDataItem, j) =>
            seriesData.value.map((v, i) =>
                cell({
                    key: 'cell-' + seriesData.index + '-' + i,
                    x: x[i],
                    y: y[j],
                    width,
                    height,
                    rx,
                    ry,
                    className,
                    style,
                    center: true,
                    variant: 'cell',
                    setRole: false,
                })
            )
        )
        .flat()

    return (
        <g role={'heatmap-cells'} key={'heatmap-cells'}>
            {cells}
        </g>
    )
}

import { createElement, useMemo } from 'react'
import {
    addColor,
    getIdKeySets,
    BandAxisScale,
    Rectangle,
    useProcessedData,
    useScales,
    createColorScale,
    isContinuousAxisScale,
    ScalesProvider,
} from '@chask/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { isHeatMapProcessedData } from './HeatMap'
import { cloneDeep } from 'lodash'

export const HeatMapCells = ({
    ids,
    keys,
    cell = Rectangle,
    scaleColor,
    className,
    style,
    children,
}: HeatMapCellsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    if (!isHeatMapProcessedData(data)) return null

    const colorScale = scaleColor ? createColorScale(scaleColor) : scales.color
    const continuous: boolean = isContinuousAxisScale(colorScale)

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
                const color = continuous
                    ? colorScale(Number(values[i]))
                    : colorScale(values[i] as number)
                const cellStyle = addColor(style, color)
                return createElement(cell, {
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
                    animated: false,
                })
            })
        })
        .flat()
        .filter(Boolean)

    if (cells.length === 0 && !children) return null

    const customScales = cloneDeep(scales)
    customScales.color = colorScale

    return (
        <g role={'heatmap-cells'} key={'heatmap-cells'}>
            {cells}
            <ScalesProvider scales={customScales}>{children}</ScalesProvider>
        </g>
    )
}

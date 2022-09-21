import { createElement, useMemo } from 'react'
import {
    addColor,
    getIdKeySets,
    BandAxisScale,
    useProcessedData,
    useScales,
    createColorScale,
    isContinuousAxisScale,
    ScalesProvider,
    composeClassName,
    createContinuousScale,
    ContinuousAxisScale,
} from '@chask/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { isHeatMapSetting } from './predicates'
import { cloneDeep } from 'lodash'
import { HeatMapRectangle } from './HeatMapRectangle'

export const HeatMapCells = ({
    ids,
    keys,
    cell = HeatMapRectangle,
    scaleColor,
    scaleSize,
    className,
    style,
    children,
}: HeatMapCellsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    if (!isHeatMapSetting(data, scales)) return null

    const colorScale = scaleColor ? createColorScale(scaleColor) : scales.color
    const continuous: boolean = isContinuousAxisScale(colorScale)
    const sizeScale = (
        scaleSize ? createContinuousScale(scaleSize) : scales.size
    ) as ContinuousAxisScale
    const maxSize = sizeScale(sizeScale.domain()[1])
    const variableSize = isFinite(maxSize)

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const width = scales.x.bandwidth()
    const height = scales.y.bandwidth()
    const cellClassName = composeClassName(['cell', className])
    const aspectRatio = width / height

    const cells = data
        .map((seriesData: HeatMapProcessedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            const y = scaleY(seriesData.id)
            const values = seriesData.value
            const sizes = seriesData.size
            return seriesData.value.map((v, i) => {
                if (!keySet.has(processedData.keys[i])) return null
                const cellColor = continuous
                    ? colorScale(Number(values[i]))
                    : colorScale(values[i] as number)
                const cellStyle = addColor(style, cellColor)
                // cell2R is 2*radius for the cell symbol
                const cell2R = 2 * (isFinite(sizes[i]) ? sizeScale(sizes[i]) : maxSize)
                return createElement(cell, {
                    key: 'cell-' + seriesData.index + '-' + i,
                    x: x[i],
                    y: y,
                    width: variableSize ? (aspectRatio > 1 ? cell2R * aspectRatio : cell2R) : width,
                    height: variableSize
                        ? aspectRatio > 1
                            ? cell2R
                            : cell2R / aspectRatio
                        : height,
                    cellValue: values[i],
                    cellSize: sizes[i],
                    className: cellClassName,
                    style: cellStyle,
                    center: true,
                    setRole: false,
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

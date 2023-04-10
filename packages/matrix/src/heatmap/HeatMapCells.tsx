import { createElement, useMemo } from 'react'
import {
    addColor,
    getIdKeySets,
    BandAxisScale,
    useProcessedData,
    useScales,
    createColorScale,
    ScalesProvider,
    getClassName,
    createContinuousScale,
    ContinuousAxisScale,
} from '@chsk/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { isHeatMapSetting } from './predicates'
import { cloneDeep } from 'lodash'
import { HeatMapRectangle } from './HeatMapRectangle'
import { createCellFilter } from './helpers'

export const HeatMapCells = ({
    ids,
    keys,
    cells,
    cell = HeatMapRectangle,
    scaleColor,
    scaleSize,
    className,
    style,
    children,
}: HeatMapCellsProps) => {
    const processedData = useProcessedData()
    const scalesContextValue = useScales()
    const scales = scalesContextValue.scales
    const data = processedData.data
    if (!isHeatMapSetting(data, scales)) return null

    const colorScale = scaleColor ? createColorScale(scaleColor) : scales.color
    const sizeScale = (
        scaleSize ? createContinuousScale(scaleSize) : scales.size
    ) as ContinuousAxisScale
    const maxSize = sizeScale(sizeScale.domain()[1])
    const variableSize = isFinite(maxSize)

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, processedData),
        [ids, keys, processedData]
    )
    const cellFilter = useMemo(() => createCellFilter(cells, idSet, keySet), [cells, idSet, keySet])

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const width = scales.x.bandwidth()
    const height = scales.y.bandwidth()
    const cellClassName = getClassName('cell', className)
    const aspectRatio = width / height

    const elements = data
        .map((seriesData: HeatMapProcessedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            const y = scaleY(seriesData.id)
            const values = seriesData.value
            const sizes = seriesData.size
            return seriesData.value.map((v, i) => {
                if (!cellFilter(seriesData.id, processedData.keys[i])) return null
                const cellColor = colorScale(values[i] as number)
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

    if (elements.length === 0 && !children) return null

    const customScalesContextValue = cloneDeep(scalesContextValue)
    customScalesContextValue.scales.color = colorScale

    return (
        <g role={'heatmap-cells'}>
            {elements}
            <ScalesProvider key={'provider'} value={customScalesContextValue}>
                {children}
            </ScalesProvider>
        </g>
    )
}

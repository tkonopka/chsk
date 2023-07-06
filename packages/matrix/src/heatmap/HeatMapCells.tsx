import { createElement, useMemo } from 'react'
import {
    cloneProps,
    addColor,
    useIdsKeys,
    BandAxisScale,
    useProcessedData,
    useScales,
    createColorScale,
    ScalesProvider,
    getClassName,
    createContinuousScale,
    ContinuousAxisScale,
    SimpleDataComponent,
} from '@chsk/core'
import { HeatMapCellsProps, HeatMapProcessedDataItem } from './types'
import { isHeatMapSetting } from './predicates'
import { HeatMapSimpleRectangle } from './HeatMapSimpleRectangle'
import { createCellFilter } from './helpers'

export const HeatMapCells = ({
    ids,
    keys,
    cells,
    component = HeatMapSimpleRectangle,
    componentProps,
    scaleColor,
    scaleSize,
    dataComponent = SimpleDataComponent,
    className,
    style,
    setRole = true,
    children,
    ...props
}: HeatMapCellsProps) => {
    const processedData = useProcessedData()
    const scalesContextValue = useScales()
    const scales = scalesContextValue.scales
    const data = processedData.data
    const { idSet, keySet } = useIdsKeys(ids, keys, processedData)
    if (!isHeatMapSetting(data, scales)) return null

    const colorScale = scaleColor ? createColorScale(scaleColor) : scales.color
    const sizeScale = (
        scaleSize ? createContinuousScale(scaleSize) : scales.size
    ) as ContinuousAxisScale
    const maxSize = sizeScale(sizeScale.domain()[1])
    const variableSize = isFinite(maxSize)
    const cellFilter = useMemo(() => createCellFilter(cells, idSet, keySet), [cells, idSet, keySet])

    const scaleX = scales.x as BandAxisScale
    const scaleY = scales.y as BandAxisScale
    const x = processedData.keys.map(k => scaleX(k))
    const width = scales.x.bandwidth()
    const height = scales.y.bandwidth()
    const aspectRatio = width / height
    const commonProps = { ...componentProps, className: getClassName('cell', className) }
    const elements = data
        .map((seriesData: HeatMapProcessedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            const y = scaleY(seriesData.id)
            const values = seriesData.value
            const sizes = seriesData.size
            return seriesData.value.map((v, i) => {
                const k = processedData.keys[i]
                if (!cellFilter(seriesData.id, k)) return null
                const cellColor = colorScale(values[i] as number)
                const cellStyle = addColor(style, cellColor)
                // cell2R is 2*radius for the cell symbol
                const cell2R = 2 * (isFinite(sizes[i]) ? sizeScale(sizes[i]) : maxSize)

                return createElement(dataComponent, {
                    key: 'cell-' + seriesData.index + '-' + i,
                    component,
                    data: {
                        id: seriesData.id,
                        key: k,
                        data: values[i],
                        size: sizes[i],
                    },
                    props: {
                        ...commonProps,
                        cellValue: values[i],
                        cellSize: sizes[i],
                        x: x[i],
                        y: y,
                        width: variableSize
                            ? aspectRatio > 1
                                ? cell2R * aspectRatio
                                : cell2R
                            : width,
                        height: variableSize
                            ? aspectRatio > 1
                                ? cell2R
                                : cell2R / aspectRatio
                            : height,
                        style: cellStyle,
                    },
                    ...props,
                })
            })
        })
        .flat()
        .filter(Boolean)

    if (elements.length === 0 && !children) return null

    const customScalesContextValue = cloneProps(scalesContextValue)
    customScalesContextValue.scales.color = colorScale

    return (
        <g role={setRole ? 'heatmap-cells' : undefined}>
            {elements}
            <ScalesProvider key={'provider'} value={customScalesContextValue}>
                {children}
            </ScalesProvider>
        </g>
    )
}

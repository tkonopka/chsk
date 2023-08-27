import {
    OpacityMotion,
    useDisabledKeys,
    NumericPositionSpec,
    Label,
    getCenter,
    useScales,
    useProcessedData,
    X,
    Y,
    PreparedDataContextProps,
} from '@chsk/core'
import {
    ScatterSelectedLabelsProps,
    ScatterSelectedLabelData,
    ScatterPreparedDataItem,
} from './types'
import { useScatterPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { blockObject, BlockObject, arrangeBlockObjects } from './charges'
import { createActiveSymbol } from './overlays'
import { useSymbolData } from './helpers'

const getPointPosition = (
    id: string,
    index: number,
    preparedData: PreparedDataContextProps<ScatterPreparedDataItem>
): { position: NumericPositionSpec; r: number } => {
    const seriesIndex = Number(preparedData.seriesIndexes[id])
    const seriesData = preparedData.data[seriesIndex]
    return {
        position: [seriesData?.x[index], seriesData?.y[index]] as NumericPositionSpec,
        r: seriesData?.r[index] as number,
    }
}

export const ScatterSelectedLabels = ({
    data,
    component = Label,
    componentProps,
    anchor = [0.5, 0.5],
    offset = [0, -0.1],
    // symbol
    symbol,
    symbolStyle,
    symbolClassName,
    // connector
    connector,
    connectorStyle,
    connectorClassName,
    // layout
    clearance = 8,
    maxIterations = 10,
    maxDelta = 20,
    minDelta = 0.1,
    //svg
    className,
    style,
    setRole = true,
}: ScatterSelectedLabelsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useScatterPreparedData()
    const { scales } = useScales()
    const { disabledKeys, firstRender } = useDisabledKeys()

    const symbolData = useSymbolData(processedData, preparedData)
    const obstacles = useMemo(() => {
        const result: BlockObject[] = []
        preparedData.data.map((seriesData: ScatterPreparedDataItem) => {
            if (disabledKeys.has(seriesData.id)) return
            seriesData.x.map((v, i) => {
                const position = [v, seriesData?.y[i]] as NumericPositionSpec
                result.push(blockObject(position, undefined, seriesData.r[i]))
            })
        })
        return result
    }, [preparedData, disabledKeys])

    const seriesFilter = (item: ScatterSelectedLabelData) => {
        return !disabledKeys.has(item.id) && preparedData.seriesIndexes[item.id] !== undefined
    }
    const active = data.filter(seriesFilter)
    const labels = useMemo(() => {
        return data.filter(seriesFilter).map((item: ScatterSelectedLabelData) => {
            const { position, r } = getPointPosition(item.id, item.index, preparedData)
            const center = getCenter(
                position,
                item.size ?? [0, 0],
                item.anchor ?? anchor,
                item.offset ?? offset
            )
            return blockObject(center, item.size, r)
        })
    }, [preparedData, disabledKeys])

    const packed = useMemo(() => {
        return arrangeBlockObjects({
            items: labels,
            obstacles,
            clearance,
            maxIterations,
            maxDelta,
            minDelta,
        })
    }, [labels, obstacles])

    const commonProps = {
        variant: 'scatter-label',
        setRole: false,
        ...componentProps,
        style,
        className,
    }
    const result = active.map((item, i) => {
        const seriesIndex = Number(preparedData.seriesIndexes[item.id])
        const activeData = symbolData[seriesIndex]?.[item.index]
        const { position } = getPointPosition(item.id, item.index, preparedData)
        const itemSymbol = symbol
            ? createActiveSymbol({
                  activeData,
                  coordinates: position,
                  scales,
                  seriesIndex,
                  symbol,
                  symbolStyle,
                  symbolClassName,
                  setRole: false,
              })
            : null
        const itemConnector = connector
            ? createElement(connector, {
                  key: 'connector',
                  variant: 'scatter-label',
                  style: connectorStyle,
                  className: connectorClassName,
                  x1: position[X],
                  y1: position[Y],
                  x2: Number(packed[i]?.position[X]),
                  y2: Number(packed[i]?.position[Y]),
                  setRole: false,
              })
            : null
        const itemLabel = createElement(
            component,
            {
                key: 'label',
                ...commonProps,
                ...item,
                position: packed[i]?.position,
            },
            active[i]?.content
        )

        return (
            <g
                key={'l-' + String(active[i]?.content)}
                role={setRole ? 'scatter-selected-label' : undefined}
            >
                {itemConnector}
                {itemSymbol}
                {itemLabel}
            </g>
        )
    })

    return (
        <OpacityMotion
            role={setRole ? 'scatter-selected-labels' : undefined}
            firstRender={firstRender}
        >
            {result}
        </OpacityMotion>
    )
}

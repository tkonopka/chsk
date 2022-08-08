import { ScatterDataItem, ScatterProcessedDataItem, ScatterProps } from './types'
import {
    ContinuousAxisScale,
    DimensionsProvider,
    getScales,
    OriginalDataProvider,
    ScalesProvider,
    useView,
} from '@chask/core'
import { useMemo } from 'react'
import { PreparedScatterDataProvider, ProcessedScatterDataProvider } from './contexts'

type DataItem = Record<string, unknown>
type AccessorFunction = (item: DataItem) => unknown

const getAccessor = (k: number | string | AccessorFunction): AccessorFunction => {
    if (typeof k === 'number') {
        return () => k
    }
    if (typeof k === 'string') {
        return (item: DataItem) => item[k]
    }
    return (item: DataItem) => k(item)
}

// turn raw data into a minimal format
const processData = (
    seriesData: ScatterDataItem,
    index: number,
    getX: AccessorFunction,
    getY: AccessorFunction,
    getR: AccessorFunction
): ScatterProcessedDataItem => {
    return {
        id: seriesData.id,
        index,
        x: seriesData.data.map(item => getX(item) as number),
        y: seriesData.data.map(item => getY(item) as number),
        r: seriesData.data.map(item => getR(item) as number),
    }
}

// turn processed data into view-specific coordinates
const prepareData = (
    seriesData: ScatterProcessedDataItem,
    scaleX: ContinuousAxisScale,
    scaleY: ContinuousAxisScale
): ScatterProcessedDataItem => {
    return {
        id: seriesData.id,
        index: seriesData.index,
        x: seriesData.x.map(v => scaleX(v)),
        y: seriesData.y.map(v => scaleY(v)),
        r: seriesData.r,
    }
}

export const Scatter = ({
    // layout
    position = [0, 0],
    positionRelative = false,
    anchor = [0, 0],
    size,
    padding = [0, 0, 0, 0],
    // content
    data,
    x,
    y,
    r,
    scaleX,
    scaleY,
    //
    children,
}: ScatterProps) => {
    const { dimsProps, translate } = useView({ position, positionRelative, size, padding, anchor })
    const scales = getScales({ ...dimsProps, scaleX, scaleY })

    // assemble information about series
    const seriesIndexes: Record<string, number> = {}
    const seriesIds: string[] = data.map((seriesData, seriesIndex) => {
        seriesIndexes[seriesData.id] = seriesIndex
        return seriesData.id
    })

    // process and prepare data
    const getX = useMemo(() => getAccessor(x), [x])
    const getY = useMemo(() => getAccessor(y), [y])
    const getR = useMemo(() => getAccessor(r), [r])
    const processedData = data.map((seriesData, seriesIndex) =>
        processData(seriesData, seriesIndex, getX, getY, getR)
    )
    const preparedData = processedData.map(seriesData =>
        prepareData(
            seriesData,
            scales.scaleX as ContinuousAxisScale,
            scales.scaleY as ContinuousAxisScale
        )
    )

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <ProcessedScatterDataProvider
                    data={processedData}
                    seriesIds={seriesIds}
                    seriesIndexes={seriesIndexes}
                >
                    <ScalesProvider scales={scales}>
                        <PreparedScatterDataProvider
                            data={preparedData}
                            seriesIds={seriesIds}
                            seriesIndexes={seriesIndexes}
                        >
                            <g role="view-scatter" transform={translate}>
                                {children}
                            </g>
                        </PreparedScatterDataProvider>
                    </ScalesProvider>
                </ProcessedScatterDataProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

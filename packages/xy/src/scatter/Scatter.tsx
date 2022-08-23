import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import { ScatterDataItem, ScatterProcessedDataItem, ScatterProps } from './types'
import {
    AccessorFunction,
    ContinuousAxisScale,
    DimensionsProvider,
    getAccessor,
    createAxisScales,
    createContinuousScaleProps,
    OriginalDataProvider,
    ProcessedDataProvider,
    ScalesProvider,
    useView,
    ContinuousScaleProps,
    ContinuousScaleSpec,
    isScaleWithDomain,
    getMinMax,
    getIndexes,
    defaultLinearScaleSpec,
    createColorScale,
    defaultCategoricalScaleSpec,
    useDisabledKeys,
} from '@chask/core'
import { ScatterPreparedDataProvider } from './context'

// turn raw data into a minimal format
const processData = (
    seriesData: ScatterDataItem,
    index: number,
    getX: AccessorFunction<number>,
    getY: AccessorFunction<number>,
    getR: AccessorFunction<number>
): ScatterProcessedDataItem => {
    return {
        id: seriesData.id,
        index,
        x: seriesData.data.map(item => getX(item)),
        y: seriesData.data.map(item => getY(item)),
        r: seriesData.data.map(item => getR(item)),
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

const getScaleProps = (
    data: Array<ScatterProcessedDataItem>,
    scaleSpecX: ContinuousScaleSpec,
    scaleSpecY: ContinuousScaleSpec
) => {
    const result = { scalePropsX: cloneDeep(scaleSpecX), scalePropsY: cloneDeep(scaleSpecY) }
    if (!isScaleWithDomain(scaleSpecX)) {
        const domain = getMinMax(data.map(seriesData => seriesData.x).flat())
        result.scalePropsX = createContinuousScaleProps(scaleSpecX, domain)
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const domain = getMinMax(data.map(seriesData => seriesData.y).flat())
        result.scalePropsY = createContinuousScaleProps(scaleSpecY, domain)
    }
    return result as { scalePropsX: ContinuousScaleProps; scalePropsY: ContinuousScaleProps }
}

export const isScatterProcessedData = (
    data: Array<unknown>
): data is Array<ScatterProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'x' in item && 'y' in item && 'r' in item
    })
    return result.reduce((acc: boolean, v: boolean) => acc && v, true)
}

export const Scatter = ({
    // layout
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    x,
    y,
    r,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor = defaultCategoricalScaleSpec,
    //
    children,
}: ScatterProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const { disabledKeys } = useDisabledKeys()
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    // process dataset
    const getX = useMemo(() => getAccessor(x), [x])
    const getY = useMemo(() => getAccessor(y), [y])
    const getR = useMemo(() => (typeof r === 'number' ? () => r : getAccessor(r)), [r])
    const processedData = data.map((seriesData, seriesIndex) =>
        processData(seriesData, seriesIndex, getX, getY, getR)
    )

    // set up scales
    const { scalePropsX, scalePropsY } = getScaleProps(processedData, scaleX, scaleY)
    const scales = createAxisScales({ ...dimsProps, scaleX: scalePropsX, scaleY: scalePropsY })
    scales.color = createColorScale(scaleColor)

    // compute coordinates
    const preparedData = processedData.map(seriesData =>
        prepareData(seriesData, scales.x as ContinuousAxisScale, scales.y as ContinuousAxisScale)
    )
    console.log(disabledKeys)

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <ProcessedDataProvider
                    data={processedData}
                    seriesIndexes={seriesIndexes}
                    keys={seriesIds}
                >
                    <ScalesProvider scales={scales}>
                        <ScatterPreparedDataProvider
                            data={preparedData}
                            seriesIndexes={seriesIndexes}
                            keys={seriesIds}
                        >
                            <g role="view-scatter" transform={translate}>
                                {children}
                            </g>
                        </ScatterPreparedDataProvider>
                    </ScalesProvider>
                </ProcessedDataProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import { HeatMapDataItem, HeatMapProcessedDataItem, HeatMapProps } from './types'
import {
    AccessorFunction,
    DimensionsProvider,
    getAccessor,
    createAxisScales,
    createColorScale,
    OriginalDataProvider,
    ProcessedDataProvider,
    ScalesProvider,
    useView,
    getIndexes,
    BandScaleSpec,
    BandScaleProps,
    SequentialScaleSpec,
    getMinMax,
    DivergingScaleSpec,
    ColorScaleProps,
} from '@chask/core'

// turn raw dataGroups into a minimal array-based format
const processData = (
    seriesData: HeatMapDataItem,
    index: number,
    accessors: Array<AccessorFunction<unknown>>
): HeatMapProcessedDataItem => {
    return {
        id: seriesData.id,
        index,
        value: accessors.map(f => Number(f(seriesData))),
    }
}

const getScaleProps = (
    ids: string[],
    keys: string[],
    scaleSpecX: BandScaleSpec,
    scaleSpecY: BandScaleSpec
) => {
    const result = { scalePropsX: cloneDeep(scaleSpecX), scalePropsY: cloneDeep(scaleSpecY) }
    result.scalePropsX.domain = keys
    result.scalePropsY.domain = ids
    return result as { scalePropsX: BandScaleProps; scalePropsY: BandScaleProps }
}

const getColorScaleProps = (
    data: HeatMapProcessedDataItem[],
    scaleSpec: SequentialScaleSpec | DivergingScaleSpec
): ColorScaleProps => {
    const result = cloneDeep(scaleSpec)
    const minmax = getMinMax(data.map(item => item.value).flat())
    if (result.domain === 'auto' || result.domain === undefined) {
        result.domain = result.variant === 'diverging' ? [minmax[0], 0, minmax[1]] : minmax
    } else {
        if (result.domain[0] === 'auto') {
            result.domain[0] = minmax[0]
        }
        const lastIndex = result.domain.length - 1
        if (result.domain[lastIndex] === 'auto') {
            result.domain[lastIndex] = minmax[1]
        }
    }
    return result as ColorScaleProps
}

const defaultHeatMapScaleSpec: BandScaleSpec = {
    variant: 'band',
    padding: 0,
}
const defaultHeatMapColorScaleSpec: SequentialScaleSpec = {
    variant: 'sequential',
    colors: 'Blues',
    domain: [0, 'auto'],
}

export const isHeatMapProcessedData = (
    data: Array<unknown>
): data is Array<HeatMapProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'value' in item
    })
    return result.reduce((acc: boolean, v: boolean) => acc && v, true)
}

export const HeatMap = ({
    // layout
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    keys,
    scaleX = defaultHeatMapScaleSpec,
    scaleY = defaultHeatMapScaleSpec,
    scaleColor = defaultHeatMapColorScaleSpec,
    //
    children,
}: HeatMapProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () =>
            data.map((seriesData, seriesIndex) =>
                processData(seriesData, seriesIndex, keyAccessors)
            ),
        [data, keyAccessors]
    )

    const { scalePropsX, scalePropsY } = getScaleProps(seriesIds, keys, scaleX, scaleY)
    const scales = createAxisScales({ ...dimsProps, scaleX: scalePropsX, scaleY: scalePropsY })
    scales.color = createColorScale(getColorScaleProps(processedData, scaleColor))

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <ProcessedDataProvider
                    data={processedData}
                    seriesIndexes={seriesIndexes}
                    keys={keys}
                >
                    <ScalesProvider scales={scales}>
                        <g role="view-heatmap" transform={translate}>
                            {children}
                        </g>
                    </ScalesProvider>
                </ProcessedDataProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

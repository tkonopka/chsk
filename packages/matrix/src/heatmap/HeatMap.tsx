import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import { HeatMapDataItem, HeatMapProcessedDataItem, HeatMapProps } from './types'
import {
    AccessorFunction,
    DimensionsProvider,
    getAccessor,
    createScales,
    OriginalDataProvider,
    ScalesProvider,
    useView,
    getIdIndexes,
    BandScaleSpec,
    BandScaleProps,
} from '@chask/core'
import { ProcessedHeatMapDataProvider } from './contexts'

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

const defaultHeatMapScaleSpec: BandScaleSpec = {
    variant: 'band',
    padding: 0,
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
    //
    children,
}: HeatMapProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const seriesIndexes = useMemo(() => getIdIndexes(data), [data])
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
    const scales = createScales({ ...dimsProps, scaleX: scalePropsX, scaleY: scalePropsY })

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <ProcessedHeatMapDataProvider
                    data={processedData}
                    seriesIndexes={seriesIndexes}
                    keys={keys}
                >
                    <ScalesProvider scales={scales}>
                        <g role="view-heatmap" transform={translate}>
                            {children}
                        </g>
                    </ScalesProvider>
                </ProcessedHeatMapDataProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

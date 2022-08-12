import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import {
    createScales,
    AccessorFunction,
    BandAxisScale,
    DimensionsProvider,
    getAccessor,
    LinearAxisScale,
    OriginalDataProvider,
    ScalesProvider,
    SizeSpec,
    useView,
    getIdIndexes,
    isScaleWithDomain,
    getMinMax,
    BandScaleSpec,
    LinearScaleSpec,
    createContinuousScaleProps,
    BandScaleProps,
    LinearScaleProps,
    NumericPositionSpec,
} from '@chask/core'
import { BarDataItem, BarPreparedDataItem, BarProcessedDataItem, BarProps } from './types'
import { BarPreparedDataProvider, BarProcessedDataProvider } from './contexts'

// turn raw dataGroups into a minimal array-based format
const processData = (
    seriesData: BarDataItem,
    index: number,
    accessors: Array<AccessorFunction<unknown>>
): BarProcessedDataItem => {
    return {
        id: seriesData.id,
        index,
        value: accessors.map(f => Number(f(seriesData))),
    }
}

// turn processed dataGroups into view-specific coordinates
const prepareData = (
    seriesData: BarProcessedDataItem,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    stacked: boolean,
    barWidthGap: [number, number]
): BarPreparedDataItem => {
    const [barWidth, barGap] = barWidthGap
    const values = seriesData.value.map(v => valueScale(v))
    const bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
    const zero = valueScale(0)

    const position: Array<NumericPositionSpec> = []
    const size: Array<SizeSpec> = []
    if (horizontal) {
        values.forEach(v => {
            size.push([v, barWidth])
        })
    } else {
        values.forEach(v => {
            size.push([barWidth, zero - v])
        })
    }
    if (stacked) {
        if (horizontal) {
            let left = zero
            values.forEach(v => {
                position.push([left, bandStart])
                left += v
            })
        } else {
            let offset = 0
            values.forEach(v => {
                position.push([bandStart, v - offset])
                offset += zero - v
            })
        }
    } else {
        // not stacked
        if (horizontal) {
            let top = bandStart
            values.forEach(() => {
                position.push([zero, top])
                top += barWidth + barGap
            })
        } else {
            let left = bandStart
            values.forEach(v => {
                position.push([left, v])
                left += barWidth + barGap
            })
        }
    }

    return {
        id: seriesData.id,
        index: seriesData.index,
        position,
        size,
    }
}

const getScaleProps = (
    data: Array<BarProcessedDataItem>,
    scaleSpecIndex: BandScaleSpec,
    scaleSpecValue: LinearScaleSpec,
    stacked: boolean
) => {
    const result = {
        scalePropsIndex: cloneDeep(scaleSpecIndex),
        scalePropsValue: cloneDeep(scaleSpecValue),
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.scalePropsIndex.domain = data.map(d => d.id)
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const values = data.map(seriesData => seriesData.value)
        const domain = stacked
            ? getMinMax(values.map(series => series.reduce((acc, v) => v + acc, 0)))
            : getMinMax(values.flat())
        domain[0] = Math.min(0, domain[0])
        domain[1] = Math.max(0, domain[1])
        result.scalePropsValue = createContinuousScaleProps(
            scaleSpecValue,
            domain
        ) as LinearScaleProps
    }
    return result as { scalePropsIndex: BandScaleProps; scalePropsValue: LinearScaleProps }
}

export const Bar = ({
    // layout
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    keys,
    horizontal = false,
    stacked = false,
    barPadding = 0,
    scaleIndex,
    scaleValue,
    //
    children,
}: BarProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const seriesIndexes: Record<string, number> = useMemo(() => getIdIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () =>
            data.map((seriesData, seriesIndex) =>
                processData(seriesData, seriesIndex, keyAccessors)
            ),
        [data, keyAccessors]
    )

    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData,
        scaleIndex,
        scaleValue,
        stacked
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scales = createScales({ ...dimsProps, scaleX, scaleY })

    const indexScale = horizontal
        ? (scales.scaleY as BandAxisScale)
        : (scales.scaleX as BandAxisScale)
    const valueScale = horizontal
        ? (scales.scaleX as LinearAxisScale)
        : (scales.scaleY as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const barStep = nKeys === 1 ? bandwidth : bandwidth / (nKeys - Math.min(1, barPadding))
    const barWidth = nKeys === 1 || stacked ? bandwidth : barStep * (1 - barPadding)
    const barGap = barStep * barPadding
    const preparedData = useMemo(
        () =>
            processedData.map(seriesData =>
                prepareData(seriesData, indexScale, valueScale, horizontal, stacked, [
                    barWidth,
                    barGap,
                ])
            ),
        [processedData, horizontal, stacked, indexScale, valueScale, barWidth, barGap]
    )

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <BarProcessedDataProvider data={processedData} seriesIndexes={seriesIndexes}>
                    <ScalesProvider scales={scales}>
                        <BarPreparedDataProvider data={preparedData} seriesIndexes={seriesIndexes}>
                            <g role="view-bar" transform={translate}>
                                {children}
                            </g>
                        </BarPreparedDataProvider>
                    </ScalesProvider>
                </BarProcessedDataProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

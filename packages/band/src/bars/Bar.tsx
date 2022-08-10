import { useMemo } from 'react'
import {
    AccessorFunction,
    BandAxisScale,
    DimensionsProvider,
    getAccessor,
    getScales,
    LinearAxisScale,
    OriginalDataProvider,
    PositionSpec,
    ScalesProvider,
    SizeSpec,
    useView,
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

    const position: Array<PositionSpec> = []
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

export const Bar = ({
    // layout
    position = [0, 0],
    positionRelative = false,
    anchor = [0, 0],
    size,
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
    const { dimsProps, translate } = useView({ position, positionRelative, size, padding, anchor })
    const scaleX = horizontal ? scaleValue : scaleIndex
    const scaleY = horizontal ? scaleIndex : scaleValue
    const scales = getScales({ ...dimsProps, scaleX, scaleY })
    const indexScale = horizontal
        ? (scales.scaleY as BandAxisScale)
        : (scales.scaleX as BandAxisScale)
    const valueScale = horizontal
        ? (scales.scaleX as LinearAxisScale)
        : (scales.scaleY as LinearAxisScale)

    // assemble information about series
    const seriesIndexes: Record<string, number> = {}
    data.forEach((seriesData, seriesIndex) => {
        seriesIndexes[seriesData.id] = seriesIndex
    })

    //console.log('Bar')
    //console.log('horizontal: ' + horizontal + ' stacked ' + stacked)
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () =>
            data.map((seriesData, seriesIndex) =>
                processData(seriesData, seriesIndex, keyAccessors)
            ),
        [data, keyAccessors]
    )
    //console.log('processed: ' + JSON.stringify(processedData))

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
    //console.log('prepared: ' + JSON.stringify(preparedData))

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

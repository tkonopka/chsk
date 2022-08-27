import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { cloneDeep } from 'lodash'
import {
    createAxisScales,
    createColorScale,
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    SizeSpec,
    useView,
    getIndexes,
    isScaleWithDomain,
    getMinMax,
    BandScaleSpec,
    LinearScaleSpec,
    createContinuousScaleProps,
    BandScaleProps,
    LinearScaleProps,
    NumericPositionSpec,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
} from '@chask/core'
import { BarDataItem, BarPreparedDataItem, BarProcessedDataItem, BarProps } from './types'
import { BarPreparedDataProvider } from './context'

// turn raw data into a minimal array-based format
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

// turn processed data into view-specific coordinates
const prepareData = (
    seriesData: BarProcessedDataItem,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    stacked: boolean,
    barWidthGap: [number, number],
    disabled: boolean[]
): BarPreparedDataItem => {
    const [barWidth, barGap] = barWidthGap
    const zero = valueScale(0)
    let coords = seriesData.value.map((v, i) => {
        return disabled[i] ? zero : valueScale(v)
    })
    const bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
    const position: Array<NumericPositionSpec> = []
    const size: Array<SizeSpec> = []
    if (horizontal) {
        coords.forEach(v => {
            size.push([v, barWidth])
        })
    } else {
        coords.forEach(v => {
            size.push([barWidth, zero - v])
        })
    }
    coords = coords.map(v => v ?? zero)
    if (stacked) {
        if (horizontal) {
            let left = zero
            coords.forEach(v => {
                position.push([left, bandStart])
                left += v
            })
        } else {
            let offset = 0
            coords.forEach(v => {
                position.push([bandStart, v - offset])
                offset += zero - v
            })
        }
    } else {
        // not stacked
        if (horizontal) {
            let top = bandStart
            coords.forEach(() => {
                position.push([zero, top])
                top += barWidth + barGap
            })
        } else {
            let left = bandStart
            coords.forEach(v => {
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
    stacked: boolean,
    disabled: boolean[]
) => {
    const result = {
        scalePropsIndex: cloneDeep(scaleSpecIndex),
        scalePropsValue: cloneDeep(scaleSpecValue),
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.scalePropsIndex.domain = data.map(d => d.id)
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const filterDisabled = (v: number, i: number) => !disabled[i]
        const values = data.map(seriesData => seriesData.value.filter(filterDisabled))
        const sumValues = (values: number[]) =>
            values.reduce((acc, v) => (isFinite(v) ? acc + v : acc), 0)
        const domain = stacked ? getMinMax(values.map(sumValues)) : getMinMax(values.flat())
        domain[0] = Math.min(0, domain[0])
        domain[1] = Math.max(0, domain[1])
        result.scalePropsValue = createContinuousScaleProps(
            scaleSpecValue,
            domain
        ) as LinearScaleProps
    }
    return result as { scalePropsIndex: BandScaleProps; scalePropsValue: LinearScaleProps }
}

export const isBarProcessedData = (data: Array<unknown>): data is Array<BarProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'value' in item
    })
    return result.reduce((acc: boolean, v: boolean) => acc && v, true)
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
    autoRescale = true,
    barPadding = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    //
    children,
}: BarProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const { disabledKeys } = useDisabledKeys()
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () =>
            data.map((seriesData, seriesIndex) =>
                processData(seriesData, seriesIndex, keyAccessors)
            ),
        [data, keyAccessors]
    )

    const disabledKeysBools = useMemo(
        () => keys.map(k => disabledKeys.has(k)),
        [keys, Array.from(disabledKeys)]
    )
    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData,
        scaleIndex,
        scaleValue,
        stacked,
        autoRescale ? disabledKeysBools : Array(keys.length).fill(false)
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical)
    scales.color = createColorScale(scaleColorProps)

    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const barStep = nKeys === 1 ? bandwidth : bandwidth / (nKeys - Math.min(1, barPadding))
    const barWidth = nKeys === 1 || stacked ? bandwidth : barStep * (1 - barPadding)
    const barGap = barStep * barPadding
    const preparedData = useMemo(
        () =>
            processedData.map(seriesData =>
                prepareData(
                    seriesData,
                    indexScale,
                    valueScale,
                    horizontal,
                    stacked,
                    [barWidth, barGap],
                    disabledKeysBools
                )
            ),
        [
            processedData,
            horizontal,
            stacked,
            indexScale,
            valueScale,
            barWidth,
            barGap,
            disabledKeysBools,
        ]
    )

    return (
        <BaseView
            role={'view-bar'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
        >
            <BarPreparedDataProvider data={preparedData} seriesIndexes={seriesIndexes} keys={keys}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </BarPreparedDataProvider>
        </BaseView>
    )
}

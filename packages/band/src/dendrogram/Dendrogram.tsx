import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BandAxisScale,
    LinearAxisScale,
    useContainer,
    getIndexes,
    defaultBandScaleSpec,
    BaseView,
    defaultContainerProps,
    useCreateScales,
    interval as getInterval,
    defaultLinearScaleSpec,
} from '@chsk/core'
import {
    DendrogramDataItem,
    DendrogramPreparedDataItem,
    DendrogramProcessedDataItem,
    DendrogramProps,
} from './types'
import { DendrogramPreparedDataProvider } from './context'
import { getScaleProps } from '../bars/utils'

const processData = (
    data: DendrogramDataItem[],
    hang: number
): Array<DendrogramProcessedDataItem> => {
    return data.map((item, index) => {
        const minmax = getInterval(item.height)
        return {
            id: item.id,
            index,
            domain: hang < 0 ? [0, minmax[1]] : [minmax[0] - hang, minmax[1]],
        }
    })
}

const abs = Math.abs

const prepareData = (
    data: Array<DendrogramDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    hang: number
): Array<DendrogramPreparedDataItem> => {
    const indexDomain = indexScale.domain()
    return data.map((item, index) => {
        const nNodes = item.merge.length
        const position: number[] = Array(nNodes).fill(0)
        const height: number[] = Array(nNodes).fill(0)
        const leafPosition: number[] = indexDomain.map(indexScale)
        const leafHeight: number[] = Array(item.ids.length).fill(valueScale(0))
        const interval: [number, number][] = []
        item.merge.map((pair, i) => {
            const h = item.height[i]
            const extremities: number[] = [0, 0]
            const [a, b] = pair
            extremities[0] = a < 0 ? leafPosition[abs(a) - 1] : position[a - 1]
            extremities[1] = b < 0 ? leafPosition[abs(b) - 1] : position[b - 1]
            if (a < 0 && hang >= 0) {
                leafHeight[abs(a) - 1] = valueScale(h - hang)
            }
            if (b < 0 && hang >= 0) {
                leafHeight[abs(b) - 1] = valueScale(h - hang)
            }
            position[i] = 0.5 * (extremities[0] + extremities[1])
            height[i] = valueScale(h)
            // infer min and max
            extremities.push(a < 0 ? extremities[0] : interval[a - 1][0])
            extremities.push(b < 0 ? extremities[1] : interval[b - 1][1])
            interval[i] = getInterval(extremities)
        })
        return {
            id: item.id,
            index,
            merge: item.merge,
            position,
            height,
            leafPosition,
            leafHeight,
            interval,
        }
    })
}

export const Dendrogram = ({
    container = defaultContainerProps,
    variant = 'bottom',
    data,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleSpec,
    hang = -1,
    children,
    ...props
}: DendrogramProps) => {
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])
    const horizontal = variant === 'right' || variant === 'left'

    const processedData = useMemo(() => processData(data, hang), [data, hang])
    console.log('processedData ' + JSON.stringify(processedData))
    const ids = data[0].ids
    const keys = Object.keys(seriesIndexes)
    const { index: indexProps, value: valueProps } = useMemo(
        () =>
            getScaleProps(
                ids,
                data.map(d => d.ids.map(() => processedData[0].domain)),
                scaleIndex,
                scaleValue,
                innerSize,
                horizontal,
                Array(ids.length).fill(false),
                false
            ),
        [processedData, scaleIndex, scaleValue, innerSize, horizontal]
    )
    const xProps = horizontal ? valueProps : indexProps
    const yProps = horizontal ? indexProps : valueProps
    if (variant === 'top') {
        valueProps.reverse = true
    }
    if (variant === 'right') {
        valueProps.reverse = true
    }
    console.log('yProps ' + JSON.stringify(valueProps))
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const preparedData = useMemo(
        () => prepareData(data, indexScale, valueScale, hang),
        [processedData, indexScale, valueScale, hang]
    )
    console.log('preparedData ' + JSON.stringify(preparedData))

    return (
        <BaseView
            variant={'dendrogram'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <DendrogramPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </DendrogramPreparedDataProvider>
        </BaseView>
    )
}

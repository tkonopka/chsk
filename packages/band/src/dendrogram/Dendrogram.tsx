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

const prepareData = (
    data: Array<DendrogramDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    hang: number
): Array<DendrogramPreparedDataItem> => {
    const abs = Math.abs
    return data.map((item, index) => {
        const nNodes = item.merge.length
        const position: number[] = Array(nNodes).fill(0)
        const height: number[] = Array(nNodes).fill(0)
        const leafPosition: number[] = item.keys.map(indexScale)
        const leafHeight: number[] = Array(item.keys.length).fill(valueScale(0))
        const positionInterval: [number, number][] = []
        const heightInterval: [number, number][] = []
        item.merge.map((pair, i) => {
            const h = item.height[i]
            height[i] = valueScale(h)
            const positionExtremities: number[] = [0, 0]
            const heightExtremities: number[] = [0, 0]
            const [a, b] = pair
            if (a < 0 && hang >= 0) {
                leafHeight[abs(a) - 1] = valueScale(h - hang)
            }
            if (b < 0 && hang >= 0) {
                leafHeight[abs(b) - 1] = valueScale(h - hang)
            }
            heightExtremities[0] = a < 0 ? leafHeight[abs(a) - 1] : heightInterval[a - 1][0]
            heightExtremities[1] = b < 0 ? leafHeight[abs(b) - 1] : heightInterval[b - 1][1]
            positionExtremities[0] = a < 0 ? leafPosition[abs(a) - 1] : position[a - 1]
            positionExtremities[1] = b < 0 ? leafPosition[abs(b) - 1] : position[b - 1]
            position[i] = 0.5 * (positionExtremities[0] + positionExtremities[1])
            // infer min and max positions along the index scale axis
            positionExtremities.push(a < 0 ? positionExtremities[0] : positionInterval[a - 1][0])
            positionExtremities.push(b < 0 ? positionExtremities[1] : positionInterval[b - 1][1])
            heightExtremities.push(height[i])
            positionInterval[i] = getInterval(positionExtremities)
            heightInterval[i] = getInterval(heightExtremities)
        })
        return {
            id: item.id,
            index,
            merge: item.merge,
            position,
            height,
            leafPosition,
            leafHeight,
            positionInterval,
            heightInterval,
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
    const keys = data[0].keys
    const { index: indexProps, value: valueProps } = useMemo(
        () =>
            getScaleProps(
                keys,
                data.map(d => d.keys.map(() => processedData[0].domain)),
                scaleIndex,
                scaleValue,
                innerSize,
                horizontal,
                Array(keys.length).fill(false),
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
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const preparedData = useMemo(
        () => prepareData(data, indexScale, valueScale, hang),
        [processedData, indexScale, valueScale, hang]
    )

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

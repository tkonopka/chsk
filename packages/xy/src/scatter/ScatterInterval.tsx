import {
    AccessorFunction,
    addColor,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    RawDataContextProps,
    getAccessor,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    useRawData,
    useScales,
    OpacityMotion,
    useDisabledKeys,
    DataComponent,
    Path,
    NumericPositionSpec,
    X,
    Y,
} from '@chsk/core'
import { ScatterIntervalProps, ScatterPreparedDataItem, SignalProcessingProps } from './types'
import { useScatterPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { curvePoints } from './signals'

const getScatterIntervalD = ({
    seriesIndex,
    rawData,
    preparedData,
    yScale,
    lower,
    upper,
    curve,
    convolutionMask,
    convolutionOffset,
    downsampleFactor,
    downsampleIndex,
}: {
    seriesIndex: number
    rawData: RawDataContextProps
    preparedData: ScatterPreparedDataItem[]
    yScale: ContinuousAxisScale
    lower: string | AccessorFunction<number>
    upper: string | AccessorFunction<number>
    curve: CurveSpec
} & SignalProcessingProps) => {
    const getLower = getAccessor<number>(lower)
    const getUpper = getAccessor<number>(upper)
    const originalSeriesData = rawData.data[seriesIndex].data as Array<Record<string, unknown>>
    const lowerValues = originalSeriesData.map(item => yScale(getLower(item)))
    const upperValues = originalSeriesData.map(item => yScale(getUpper(item)))
    const x = preparedData[seriesIndex].x
    const signalProps = { convolutionMask, convolutionOffset, downsampleFactor, downsampleIndex }
    const lowerPoints = curvePoints({ x, y: lowerValues, ...signalProps })
    const upperPoints = curvePoints({ x, y: upperValues, ...signalProps })
    const pointIntervals: Array<NumericPositionIntervalSpec> = lowerPoints.map(
        (p: NumericPositionSpec, i: number) => [p[X], p[Y], upperPoints[i][Y]]
    )
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterInterval = ({
    ids,
    lower,
    upper,
    // signal processing
    convolutionMask,
    convolutionOffset,
    downsampleFactor,
    downsampleIndex,
    // curves
    curve = 'Linear',
    style,
    className,
    setRole = true,
    dataComponent = DataComponent,
    ...pathProps
}: ScatterIntervalProps) => {
    const preparedData = useScatterPreparedData()
    const rawData = useRawData()
    const { scales } = useScales()
    const yScale = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()

    if (!isContinuousAxisScale(yScale)) return null
    const signalProps = { convolutionMask, convolutionOffset, downsampleFactor, downsampleIndex }

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        const d = useMemo(
            () =>
                getScatterIntervalD({
                    seriesIndex,
                    rawData,
                    preparedData: preparedData.data,
                    yScale,
                    lower,
                    upper,
                    curve,
                    ...signalProps,
                }),
            [seriesIndex, rawData, preparedData, yScale, lower, upper, curve]
        )
        const element = createElement(dataComponent, {
            data: { id },
            component: Path,
            props: {
                variant: 'scatter-interval',
                d,
                setRole,
                style: seriesStyle,
                className,
            },
            ...pathProps,
        })
        return (
            <OpacityMotion
                role={setRole ? 'scatter-interval-presence' : undefined}
                key={'interval-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}

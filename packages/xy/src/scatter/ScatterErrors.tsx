import {
    AccessorFunction,
    addColor,
    ContinuousAxisScale,
    RawDataContextProps,
    getAccessor,
    isContinuousAxisScale,
    useRawData,
    useScales,
    OpacityMotion,
    useDisabledKeys,
    NumericPositionSpec,
    SimpleDataComponent,
    getClassName,
} from '@chsk/core'
import { ScatterDataContextProps, ScatterErrorsProps } from './types'
import { useScatterPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { ScatterErrorBar } from './ScatterErrorBar'

const getErrorPoints = ({
    variant,
    seriesIndex,
    rawData,
    preparedData,
    scale,
    lower,
    upper,
}: {
    variant: 'x' | 'y'
    seriesIndex: number
    rawData: RawDataContextProps
    preparedData: ScatterDataContextProps
    scale: ContinuousAxisScale
    lower: string | AccessorFunction<number>
    upper: string | AccessorFunction<number>
}) => {
    const getLower = getAccessor<number>(lower)
    const getUpper = getAccessor<number>(upper)
    const originalSeriesData = rawData.data[seriesIndex].data as Array<Record<string, unknown>>
    const lowerValues = originalSeriesData.map(item => scale(getLower(item)))
    const upperValues = originalSeriesData.map(item => scale(getUpper(item)))
    const seriesData = preparedData.data[seriesIndex]
    const otherValues = variant === 'y' ? seriesData.x : seriesData.y
    const transform: (x: NumericPositionSpec) => NumericPositionSpec =
        variant === 'y'
            ? (x: NumericPositionSpec) => x
            : (x: NumericPositionSpec) => x.reverse() as NumericPositionSpec
    return lowerValues.map((v, i) => ({
        lower: transform([otherValues[i], v]),
        upper: transform([otherValues[i], upperValues[i]]),
    }))
}

export const ScatterErrors = ({
    variant = 'y',
    ids,
    lower,
    upper,
    capWidth,
    style,
    className,
    setRole = true,
    component = ScatterErrorBar,
    dataComponent = SimpleDataComponent,
    ...props
}: ScatterErrorsProps) => {
    const preparedData = useScatterPreparedData()
    const rawData = useRawData()
    const { x: scaleX, y: scaleY, color: scaleColor } = useScales()
    const { disabledKeys, firstRender } = useDisabledKeys()

    if (!isContinuousAxisScale(scaleX) || !isContinuousAxisScale(scaleY)) return null
    const compositeClassName = getClassName('scatter-errors', className)

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, scaleColor(seriesIndex))
        const seriesData = useMemo(
            () =>
                getErrorPoints({
                    variant,
                    seriesIndex,
                    rawData,
                    preparedData,
                    scale: variant === 'y' ? scaleY : scaleX,
                    lower,
                    upper,
                }),
            [variant, seriesIndex, rawData, preparedData, scaleX, scaleY, lower, upper]
        )
        const elements = seriesData.map((points, index) => {
            return createElement(dataComponent, {
                key: 'error-' + variant + '-' + id + '-' + index,
                data: { id, index },
                component,
                props: {
                    variant,
                    lower: points.lower,
                    upper: points.upper,
                    capWidth,
                    setRole,
                    style: seriesStyle,
                    className: compositeClassName,
                },
                ...props,
            })
        })
        return (
            <OpacityMotion
                role={setRole ? 'scatter-errors' : undefined}
                key={'scatter-errors-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {elements}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}

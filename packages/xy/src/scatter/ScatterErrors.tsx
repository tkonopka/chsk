import {
    isArray,
    AccessorFunction,
    addColor,
    ContinuousAxisScale,
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
import { ScatterDataItemData, ScatterErrorsProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { ScatterErrorBar } from './ScatterErrorBar'
import { isScatterData, isScatterPreparedData } from './predicates'

// construct svg-coordinates for lower and upper edges of error bars
const getErrorPoints = ({
    variant,
    rawData,
    seriesData,
    scale,
    lower,
    upper,
}: {
    variant: 'x' | 'y'
    rawData: ScatterDataItemData
    seriesData: ScatterPreparedDataItem
    scale: ContinuousAxisScale
    lower: string | AccessorFunction<number>
    upper: string | AccessorFunction<number>
}) => {
    let lowerValues: number[]
    let upperValues: number[]
    if (isArray(rawData)) {
        const getLower = getAccessor<number>(lower)
        const getUpper = getAccessor<number>(upper)
        lowerValues = rawData.map(item => scale(getLower(item)))
        upperValues = rawData.map(item => scale(getUpper(item)))
    } else {
        const getLower = getAccessor<number[]>(String(lower))
        const getUpper = getAccessor<number[]>(String(upper))
        lowerValues = getLower(rawData).map(v => scale(v))
        upperValues = getUpper(rawData).map(v => scale(v))
    }
    const otherValues = variant === 'y' ? seriesData.x : seriesData.y
    const transform: (x: NumericPositionSpec) => NumericPositionSpec =
        variant === 'y' ? x => x : x => [x[1], x[0]]
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
    componentProps,
    dataComponent = SimpleDataComponent,
    ...props
}: ScatterErrorsProps) => {
    const preparedData = useScatterPreparedData()
    const data = preparedData.data
    const rawData = useRawData().data
    const { x: scaleX, y: scaleY, color: scaleColor } = useScales().scales
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (
        !isContinuousAxisScale(scaleX) ||
        !isContinuousAxisScale(scaleY) ||
        !isScatterPreparedData(data) ||
        !isScatterData(rawData)
    )
        return null

    const errorsData = useMemo(
        () =>
            data.map((seriesData, index) =>
                getErrorPoints({
                    variant,
                    rawData: rawData[index].data,
                    seriesData,
                    scale: variant === 'y' ? scaleY : scaleX,
                    lower,
                    upper,
                })
            ),
        [variant, data, rawData, scaleX, scaleY, lower, upper]
    )

    const compositeClassName = getClassName('scatter-errors', className)
    const commonProps = {
        variant,
        setRole: false,
        ...componentProps,
        className: compositeClassName,
        capWidth,
    }
    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, scaleColor(seriesIndex))
        const elements = errorsData[seriesIndex].map((points, index) => {
            return createElement(dataComponent, {
                key: 'e-' + id + '-' + index,
                data: { id, index },
                component,
                props: {
                    ...commonProps,
                    lower: points.lower,
                    upper: points.upper,
                    style: seriesStyle,
                },
                ...props,
            })
        })
        return (
            <OpacityMotion
                role={setRole ? 'scatter-errors' : undefined}
                key={'e-' + id}
                visible={visible}
                firstRender={firstRender}
            >
                {elements}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}

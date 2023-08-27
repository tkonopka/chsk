import { createElement, useMemo } from 'react'
import {
    addColor,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    Path,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    DataComponent,
    NumericPositionSpec,
} from '@chsk/core'
import { ScatterAreaProps } from './types'
import { useScatterPreparedData } from './context'
import { curvePoints } from './signals'

export const getAreaD = ({
    points,
    scaleY,
    baseline,
    curve,
}: {
    points: NumericPositionSpec[]
    scaleY: ContinuousAxisScale
    baseline?: number
    curve: CurveSpec
}) => {
    const base = scaleY(baseline ?? Number(scaleY.domain()[0]))
    const pointIntervals: Array<NumericPositionIntervalSpec> = points.map(d => [d[0], d[1], base])
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterArea = ({
    ids,
    baseline,
    curve = 'Linear',
    // signal processing
    convolutionMask,
    convolutionOffset,
    downsampleFactor,
    downsampleIndex,
    // other props
    style,
    className,
    setRole = true,
    dataComponent = DataComponent,
    ...pathProps
}: ScatterAreaProps) => {
    const preparedData = useScatterPreparedData()
    const { scales } = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isContinuousAxisScale(scaleY)) return null

    const areas: Record<string, string> = {}
    preparedData.keys.forEach(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return
        const seriesData = preparedData.data[seriesIndex]
        areas[id] = useMemo(
            () =>
                getAreaD({
                    points: curvePoints({
                        x: seriesData?.x ?? [],
                        y: seriesData?.y ?? [],
                        convolutionMask,
                        convolutionOffset,
                        downsampleFactor,
                        downsampleIndex,
                    }),
                    curve,
                    scaleY,
                    baseline,
                }),
            [
                seriesIndex,
                preparedData,
                curve,
                scaleY,
                baseline,
                convolutionMask,
                convolutionOffset,
                downsampleFactor,
                downsampleIndex,
            ]
        )
    })

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        const element = createElement(dataComponent, {
            data: { id },
            component: Path,
            props: {
                variant: 'scatter-area',
                d: areas[id],
                setRole,
                style: seriesStyle,
                className,
            },
            ...pathProps,
        })

        return (
            <OpacityMotion
                role={setRole ? 'scatter-area-presence' : undefined}
                key={'area-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}

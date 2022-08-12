import {
    AccessorFunction,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    DataContextProps,
    getAccessor,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    useOriginalData,
    useScales,
} from '@chask/core'
import { ScatterDataContextProps, ScatterIntervalProps } from './types'
import { usePreparedScatterData } from './contexts'
import { useMemo } from 'react'

const getScatterIntervalD = ({
    seriesIndex,
    originalData,
    preparedData,
    scaleY,
    lower,
    upper,
    curve,
}: {
    seriesIndex: number
    originalData: DataContextProps
    preparedData: ScatterDataContextProps
    scaleY: ContinuousAxisScale
    lower: string | AccessorFunction<number>
    upper: string | AccessorFunction<number>
    curve: CurveSpec
}) => {
    const getLower = getAccessor<number>(lower)
    const getUpper = getAccessor<number>(upper)
    const originalSeriesData = originalData.data[seriesIndex].data as Array<Record<string, unknown>>
    const lowerValues = originalSeriesData.map(item => scaleY(getLower(item)))
    const upperValues = originalSeriesData.map(item => scaleY(getUpper(item)))
    const x = preparedData.data[seriesIndex].x
    const pointIntervals: Array<NumericPositionIntervalSpec> = x.map((v: number, i: number) => [
        v,
        lowerValues[i],
        upperValues[i],
    ])
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterInterval = ({
    series,
    lower,
    upper,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterIntervalProps) => {
    const preparedData = usePreparedScatterData()
    const originalData = useOriginalData()
    const scaleY = useScales().scaleY
    const seriesIndex = preparedData.seriesIndexes[series]
    if (seriesIndex === undefined) return null
    if (!isContinuousAxisScale(scaleY)) return null

    const d = useMemo(
        () =>
            getScatterIntervalD({
                seriesIndex,
                originalData,
                preparedData,
                scaleY,
                lower,
                upper,
                curve,
            }),
        [seriesIndex, originalData, preparedData, scaleY, lower, upper, curve]
    )

    return (
        <g role={'scatter-interval'} key={'scatter-interval-' + seriesIndex}>
            <path d={d} role={setRole ? variant : undefined} style={style} className={className} />
        </g>
    )
}

import {
    getAccessor,
    getLineGenerator,
    isContinuousAxisScale,
    PositionSpec,
    useOriginalData,
    useScales,
} from '@chask/core'
import { ScatterIntervalProps } from './types'
import { usePreparedScatterData } from './contexts'
import { useMemo } from 'react'

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
    const originalData = useOriginalData().data
    const scaleY = useScales().scaleY

    const seriesIndex = preparedData.seriesIndexes[series]
    if (seriesIndex === undefined) return null
    if (!isContinuousAxisScale(scaleY)) return null

    const getLower = useMemo(() => getAccessor<number>(lower), [lower])
    const getUpper = useMemo(() => getAccessor<number>(upper), [upper])
    const originalSeriesData = originalData[seriesIndex].data as Array<Record<string, unknown>>
    const lowerValues = originalSeriesData.map(item => scaleY(getLower(item)))
    const upperValues = originalSeriesData.map(item => scaleY(getUpper(item)))

    const x = preparedData.data[seriesIndex].x
    const pointsLower: Array<PositionSpec> = x.map((v: number, i: number) => [v, lowerValues[i]])
    const pointsUpper: Array<PositionSpec> = x.map((v: number, i: number) => [v, upperValues[i]])
    pointsUpper.reverse()
    const generator = useMemo(() => getLineGenerator(curve), [curve])
    const dLower = generator(pointsLower) ?? ''
    const dUpperM = generator(pointsUpper) ?? ''
    const dUpperL = 'L' + dUpperM.substring(1)

    return (
        <g role={'scatter-interval'} key={'scatter-interval-' + 0}>
            <path
                d={dLower + dUpperL}
                role={setRole ? variant : undefined}
                style={style}
                className={className}
            />
        </g>
    )
}

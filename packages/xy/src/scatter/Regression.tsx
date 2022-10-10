import { createElement, useMemo } from 'react'
import {
    addColor,
    getMinMax,
    OpacityMotion,
    Line,
    useDisabledKeys,
    useScales,
    X,
    Y,
    DataComponent,
} from '@chsk/core'
import { RegressionProps } from './types'
import { useScatterPreparedData } from './context'

// compute regression y=m*x*b and return coefficients [b, m]
const regression = (x: number[], y: number[]): [number, number] => {
    const N = x.length
    let A = 0,
        B = 0,
        C = 0,
        D = 0
    x.forEach((v, i) => {
        A += v
        B += y[i]
        C += v * y[i]
        D += v * v
    })
    const denominator = A * A - N * D
    return [(C * A - B * D) / denominator, (B * A - C * N) / denominator]
}

// get two points that define a regression line
const getRegressionLineCoordinates = (domain: [number, number], coefficients: [number, number]) => {
    return [
        [domain[0], coefficients[0] + domain[0] * coefficients[1]],
        [domain[1], coefficients[0] + domain[1] * coefficients[1]],
    ]
}

const PooledRegression = ({
    ids,
    style,
    className,
    setRole,
    dataComponent = DataComponent,
    ...props
}: RegressionProps) => {
    const preparedData = useScatterPreparedData()
    const { disabledKeys, firstRender } = useDisabledKeys()
    const pooledIds = ids ?? preparedData.keys

    const points = useMemo(() => {
        // prepare a pooled dataset
        let x: number[] = []
        let y: number[] = []
        pooledIds.forEach((id: string) => {
            const seriesIndex = preparedData.seriesIndexes[id]
            if (seriesIndex === undefined) return
            if (disabledKeys.has(id)) return
            x = x.concat(preparedData.data[seriesIndex].x)
            y = y.concat(preparedData.data[seriesIndex].y)
        })
        if (x.length === 0) return null
        const coefficients = regression(x, y)
        return getRegressionLineCoordinates(getMinMax(x), coefficients)
    }, [preparedData, ids])

    if (points === null) return null
    const element = createElement(dataComponent, {
        data: { ids: pooledIds, variant: 'pooled' },
        component: Line,
        props: {
            x1: points[0][X],
            x2: points[1][X],
            y1: points[0][Y],
            y2: points[1][Y],
            variant: 'regression',
            className,
            style,
            setRole,
        },
        ...props,
    })
    return (
        <OpacityMotion role={'regression'} firstRender={firstRender}>
            {element}
        </OpacityMotion>
    )
}

const IndividualRegression = ({
    ids,
    style,
    className,
    setRole,
    dataComponent = DataComponent,
    ...props
}: RegressionProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const coefficients: Record<string, [number, number]> = useMemo(() => {
        const result: Record<string, [number, number]> = {}
        preparedData.keys.map((id, i) => {
            result[id] = regression(preparedData.data[i].x, preparedData.data[i].y)
        })
        return result
    }, [preparedData])

    const regressions = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        const points = getRegressionLineCoordinates(
            getMinMax(preparedData.data[seriesIndex].x),
            coefficients[id]
        )
        const element = createElement(dataComponent, {
            data: { ids: [id], variant: 'series' },
            component: Line,
            props: {
                x1: points[0][X],
                x2: points[1][X],
                y1: points[0][Y],
                y2: points[1][Y],
                variant: 'regression',
                className,
                style: seriesStyle,
                setRole,
            },
            ...props,
        })
        return (
            <OpacityMotion
                role={'regression'}
                key={'regression-' + seriesIndex}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{regressions.filter(Boolean)}</>
}

export const Regression = ({
    variant = 'series',
    ids,
    style,
    className,
    setRole,
    dataComponent = DataComponent,
    ...props
}: RegressionProps) => {
    const renderFunction = variant === 'series' ? IndividualRegression : PooledRegression
    return renderFunction({ ids, style, className, setRole, dataComponent, ...props })
}

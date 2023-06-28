import { useMemo } from 'react'
import { curveBundle, line } from 'd3-shape'
import { Path, X, Y, NumericPositionSpec, getClassName } from '@chsk/core'
import { ConnectorProps } from './types'

// compute a position of a segment elbow using absolute or relative approach
const elbowCoordinate = (start: number, end: number, elbow: number, relative: boolean): number => {
    if (relative) {
        return start + elbow * (end - start)
    }
    const minmax = end > start ? Math.min : Math.max
    return minmax(end, start + Math.sign(end - start) * elbow)
}

export const Connector = ({
    variant = 'line',
    // line
    x1,
    y1,
    x2,
    y2,
    // settings
    beta,
    elbow = 0.5,
    elbowUnit = 'relative',
    // svg
    className,
    ...props
}: ConnectorProps) => {
    // d3 generator for smoothed curves
    const generator = useMemo(() => {
        return (
            line()
                //.defined((d: NumericPositionSpec) => d[0] !== null && d[1] !== null)
                .curve(curveBundle.beta(beta ?? 0))
        )
    }, [beta])

    // elbow/ankle connectors
    const relative = elbowUnit === 'relative'
    let elbowPosition: NumericPositionSpec = [x1, y1]
    if (variant === 'hl') {
        elbowPosition = [elbowCoordinate(x1, x2, elbow, relative), y1]
    } else if (variant === 'lh') {
        elbowPosition = [elbowCoordinate(x2, x1, elbow, relative), y2]
    } else if (variant === 'vl') {
        elbowPosition = [x1, elbowCoordinate(y1, y2, elbow, relative)]
    } else if (variant === 'lv') {
        elbowPosition = [x2, elbowCoordinate(y2, y1, elbow, relative)]
    }

    const d =
        beta === undefined
            ? ['M', x1, y1, 'L', elbowPosition[X], elbowPosition[Y], 'L', x2, y2].join(' ')
            : generator([[x1, y1], elbowPosition, [x2, y2]]) ?? ''

    const compositeClassName = getClassName('connector', className)
    return <Path d={d} {...props} className={compositeClassName} />
}

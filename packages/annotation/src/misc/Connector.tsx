import { Line, Path, squaredDistance, X, Y, NumericPositionSpec } from '@chsk/core'
import { ConnectorProps } from './types'

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
    // arc
    rx,
    ry,
    angle,
    // elbow
    elbow = 0.5,
    elbowUnit = 'relative',
    // svg
    ...props
}: ConnectorProps) => {
    if (variant.startsWith('arc-')) {
        rx = rx ?? ry
        ry = ry ?? rx
        if (rx === undefined) {
            rx = Math.sqrt(squaredDistance([x1, y1], [x2, y2]))
            ry = rx
        }
        angle = angle ?? 0
        const sweep = variant === 'arc-left' ? 0 : 1
        const d = ['M', x1, y1, 'A', rx, ry, angle, '0', sweep, x2, y2].join(' ')
        return <Path d={d} {...props} />
    }

    // elbow/ankle connectors
    const relative = elbowUnit === 'relative'
    let elbowPosition: NumericPositionSpec = [x1, y1]
    if (variant === 'h-start') {
        elbowPosition = [elbowCoordinate(x1, x2, elbow, relative), y1]
    } else if (variant === 'h-end') {
        elbowPosition = [elbowCoordinate(x2, x1, elbow, relative), y2]
    } else if (variant === 'v-start') {
        elbowPosition = [x1, elbowCoordinate(y1, y2, elbow, relative)]
    } else if (variant === 'v-end') {
        elbowPosition = [x2, elbowCoordinate(y2, y1, elbow, relative)]
    }
    if (variant.startsWith('h-') || variant.startsWith('v-')) {
        const d = ['M', x1, y1, 'L', elbowPosition[X], elbowPosition[Y], 'L', x2, y2].join(' ')
        return <Path d={d} {...props} />
    }

    // variant 'line' or anything else
    return <Line x1={x1} y1={y1} x2={x2} y2={y2} {...props} />
}

import { getAbsolutePosition, NumericPositionSpec, Scales, SizeSpec } from '@chsk/core'
import { LineLabelProps } from './types'

export const getLineAbsolutePositions = ({
    start,
    end,
    units = 'view',
    expansion = [0, 0],
    scales,
    size,
}: Pick<LineLabelProps, 'start' | 'end' | 'units' | 'expansion'> & {
    scales: Scales
    size: SizeSpec
}) => {
    const xExpansion = scales.x.bandwidth() * expansion[0]
    const yExpansion = scales.y.bandwidth() * expansion[1]
    let lineStart: NumericPositionSpec = getAbsolutePosition(start, units, size, scales)
    let lineEnd: NumericPositionSpec = getAbsolutePosition(end, units, size, scales)
    lineStart = [lineStart[0] - xExpansion, lineStart[1] - yExpansion]
    lineEnd = [lineEnd[0] + xExpansion, lineEnd[1] + yExpansion]
    return { lineStart, lineEnd }
}

export const getStartToEndAxis = (start: NumericPositionSpec, end: NumericPositionSpec) => {
    const deltaX = end[0] - start[0]
    const deltaY = end[1] - start[1]
    // angle of line along start-to-end axis
    const theta = Math.atan(-deltaY / deltaX)
    // angle of a right-hand turn from direction along start-to-end axis
    const beta = Math.PI / 2 - theta
    const adjustment = deltaX < 0 ? Math.PI : 0
    const cosBeta = Math.cos(beta + adjustment)
    const sinBeta = Math.sin(beta + adjustment)
    return { deltaX, deltaY, cosBeta, sinBeta }
}

// helper for getBracketPositions and getBracePositions
const getTickPositions = (
    start: NumericPositionSpec,
    end: NumericPositionSpec,
    size: number,
    cosBeta: number,
    sinBeta: number
) => {
    const tickStart: NumericPositionSpec = [start[0] + size * cosBeta, start[1] + size * sinBeta]
    const tickEnd: NumericPositionSpec = [end[0] + size * cosBeta, end[1] + size * sinBeta]
    return { tickStart, tickEnd }
}

// compute a pair of positions that represent the ends of ticks for a line segment
export const getBracketPositions = ({
    start,
    end,
    size,
}: {
    start: NumericPositionSpec
    end: NumericPositionSpec
    size: number
}) => {
    const { cosBeta, sinBeta } = getStartToEndAxis(start, end)
    const { tickStart, tickEnd } = getTickPositions(start, end, size, cosBeta, sinBeta)
    return { tickStart, lineStart: start, lineEnd: end, tickEnd }
}

export const getBracePositions = ({
    start,
    end,
    pinch,
    size,
    r,
}: {
    start: NumericPositionSpec
    end: NumericPositionSpec
    pinch: number
    size: number
    r: number
}) => {
    const { deltaX, deltaY, cosBeta, sinBeta } = getStartToEndAxis(start, end)
    const { tickStart, tickEnd } = getTickPositions(start, end, size, cosBeta, sinBeta)
    const braceStart: NumericPositionSpec = [start[0] + r * sinBeta, start[1] - r * cosBeta]
    const braceEnd: NumericPositionSpec = [end[0] - r * sinBeta, end[1] + r * cosBeta]
    pinch = Math.max(0, Math.min(1, pinch))
    const lineMiddle: NumericPositionSpec = [start[0] + pinch * deltaX, start[1] + pinch * deltaY]
    const pinchMiddle: NumericPositionSpec = [
        lineMiddle[0] - size * cosBeta,
        lineMiddle[1] - size * sinBeta,
    ]
    const pinchEnd: NumericPositionSpec = [lineMiddle[0] + r * sinBeta, lineMiddle[1] - r * cosBeta]
    const pinchStart: NumericPositionSpec = [
        lineMiddle[0] - r * sinBeta,
        lineMiddle[1] + r * cosBeta,
    ]
    return {
        tickStart,
        braceStart,
        pinchStart,
        lineMiddle,
        pinchMiddle,
        pinchEnd,
        braceEnd,
        tickEnd,
    }
}

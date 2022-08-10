import { BOTTOM, DimensionsContextProps, LEFT, RIGHT, TOP } from '../general'
import {
    AxisScale,
    ScaleProps,
    ScalesContextProps,
    ScaleSpec,
    ContinuousAxisScale,
    BandAxisScale,
    LinearAxisScale,
    LogAxisScale,
} from './types'
import { createBandScale } from './band'
import { createContinuousScale } from './continuous'

export const createScale = ({
    axis = 'x',
    size = 100,
    scaleSpec,
}: ScaleProps & {
    scaleSpec: ScaleSpec
}) => {
    if (scaleSpec.variant === 'band') return createBandScale({ size, ...scaleSpec })
    return createContinuousScale({ axis, size, ...scaleSpec })
}

export const isBandAxisScale = (scale: AxisScale): scale is BandAxisScale => {
    return scale.variant === 'band'
}
export const isContinuousAxisScale = (scale: AxisScale): scale is ContinuousAxisScale => {
    return scale.variant === 'linear' || scale.variant === 'log'
}
export const isLinearAxisScale = (scale: AxisScale): scale is LinearAxisScale => {
    return scale.variant === 'linear'
}
export const isLogAxisScale = (scale: AxisScale): scale is LogAxisScale => {
    return scale.variant === 'log'
}

/** get an array of ticks in the scale domain */
export const getTicks = (scale: AxisScale, ticks: number | undefined) => {
    if (isContinuousAxisScale(scale)) {
        if (ticks === undefined) return scale.ticks(4) as Array<number>
        return scale.ticks(ticks) as Array<number>
    }
    return scale.domain()
}

/** get an array of ticks in the scale range */
export const getTickCoordinates = (
    scale: AxisScale,
    values: undefined | number | number[] | string[]
) => {
    const tickValues = Array.isArray(values) ? values : getTicks(scale, values)
    if (isContinuousAxisScale(scale)) {
        return tickValues.map(v => scale(Number(v)))
    }
    return tickValues.map(v => scale(String(v)))
}

export const getScales = ({
    size,
    padding,
    scaleX,
    scaleY,
}: Pick<DimensionsContextProps, 'size' | 'padding'> & {
    scaleX: ScaleSpec
    scaleY: ScaleSpec
}): ScalesContextProps => {
    const [width, height] = size
    const innerWidth = width - padding[LEFT] - padding[RIGHT]
    const innerHeight = height - padding[TOP] - padding[BOTTOM]
    const horizontal = scaleY.variant === 'band' && scaleX.variant !== 'band'
    return {
        scaleX: createScale({ axis: 'x', size: innerWidth, scaleSpec: scaleX }),
        scaleY: createScale({ axis: 'y', size: innerHeight, scaleSpec: scaleY }),
        horizontal,
    }
}

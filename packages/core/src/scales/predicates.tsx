import {
    AxisScale,
    BandAxisScale,
    ContinuousAxisScale,
    LinearAxisScale,
    LogAxisScale,
    NumericAxisScale,
    Scale,
    SqrtAxisScale,
    TimeAxisScale,
} from './types'

export const isAxisScale = (scale: Scale): scale is AxisScale => {
    return (
        scale.variant === 'band' ||
        scale.variant === 'linear' ||
        scale.variant === 'log' ||
        scale.variant === 'sqrt'
    )
}

export const isBandAxisScale = (scale: Scale): scale is BandAxisScale => {
    return scale.variant === 'band'
}

export const isLinearAxisScale = (scale: Scale): scale is LinearAxisScale => {
    return scale.variant === 'linear'
}

export const isLogAxisScale = (scale: Scale): scale is LogAxisScale => {
    return scale.variant === 'log'
}

export const isSqrtAxisScale = (scale: Scale): scale is SqrtAxisScale => {
    return scale.variant === 'sqrt'
}

export const isTimeAxisScale = (scale: Scale): scale is TimeAxisScale => {
    return scale.variant === 'time'
}

export const isNumericAxisScale = (scale: Scale): scale is NumericAxisScale => {
    const v = scale.variant
    return v === 'linear' || v === 'sqrt' || v === 'log'
}

export const isContinuousAxisScale = (scale: Scale): scale is ContinuousAxisScale => {
    return isTimeAxisScale(scale) || isNumericAxisScale(scale)
}

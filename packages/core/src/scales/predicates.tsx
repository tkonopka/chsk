import {
    AxisScale,
    BandAxisScale,
    BandScaleProps,
    ContinuousAxisScale,
    ContinuousScaleProps,
    LinearAxisScale,
    LogAxisScale,
    NumericAxisScale,
    Scale,
    ScaleSpec,
    SqrtAxisScale,
    TimeAxisScale,
} from './types'

export const isAxisScale = (scale: Scale): scale is AxisScale => {
    return (
        scale.variant === 'band' ||
        scale.variant === 'linear' ||
        scale.variant === 'log' ||
        scale.variant === 'sqrt' ||
        scale.variant === 'time'
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

export const isScaleWithDomain = (
    scaleSpec: ScaleSpec
): scaleSpec is ContinuousScaleProps | BandScaleProps => {
    const domain = scaleSpec.domain
    if (domain === undefined || typeof domain === 'string') return false
    if (scaleSpec.variant === 'band') return true
    return domain.length === 2 && domain[0] !== 'auto' && domain[1] !== 'auto'
}

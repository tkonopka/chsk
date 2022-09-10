import { cloneDeep } from 'lodash'
import {
    Scale,
    ScalesContextProps,
    ScaleSpec,
    ContinuousAxisScale,
    BandAxisScale,
    LinearAxisScale,
    LogAxisScale,
    ContinuousScaleSpec,
    ContinuousScaleProps,
    BandScaleProps,
    AxisScale,
} from './types'
import { createBandScale } from './band'
import { createContinuousScale } from './continuous'
import { defaultCategoricalScale, defaultSizeScale } from './defaults'

export const isScaleWithDomain = (
    scaleSpec: ScaleSpec
): scaleSpec is ContinuousScaleProps | BandScaleProps => {
    const domain = scaleSpec.domain
    if (domain === undefined || typeof domain === 'string') return false
    if (scaleSpec.variant === 'band') return true
    return domain.map(v => Number(typeof v === 'number')).reduce((acc, v) => acc + v, 0) === 2
}

// complete domain information in a scale spec to create a scale props
export const createContinuousScaleProps = (
    scaleSpec: ContinuousScaleSpec,
    domain: [number, number],
    size?: number
): ContinuousScaleProps => {
    const result = cloneDeep(scaleSpec) as ContinuousScaleProps
    if (scaleSpec.domain === undefined || typeof scaleSpec.domain === 'string') {
        result.domain = domain
    } else {
        result.domain = cloneDeep(scaleSpec.domain) as [number, number]
        if (typeof scaleSpec.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof scaleSpec.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    result.size = size ?? 100
    return result
}

export const isAxisScale = (scale: Scale): scale is AxisScale => {
    return scale.variant === 'band' || scale.variant === 'linear' || scale.variant === 'log'
}

export const isBandAxisScale = (scale: Scale): scale is BandAxisScale => {
    return scale.variant === 'band'
}

export const isContinuousAxisScale = (scale: Scale): scale is ContinuousAxisScale => {
    return scale.variant === 'linear' || scale.variant === 'log'
}

export const isLinearAxisScale = (scale: Scale): scale is LinearAxisScale => {
    return scale.variant === 'linear'
}

export const isLogAxisScale = (scale: Scale): scale is LogAxisScale => {
    return scale.variant === 'log'
}

export const createAxisScale = ({
    axis = 'x',
    scaleProps,
}: {
    /** axis for scale */
    axis?: 'x' | 'y'
    /** complete specification, including domain, for a scale */
    scaleProps: ContinuousScaleProps | BandScaleProps
}) => {
    if (scaleProps.variant === 'band') {
        return createBandScale(scaleProps)
    }
    return createContinuousScale({ axis, ...scaleProps })
}

export const createAxisScales = (
    scaleX: ContinuousScaleProps | BandScaleProps,
    scaleY: ContinuousScaleProps | BandScaleProps
): ScalesContextProps => {
    return {
        x: createAxisScale({ axis: 'x', scaleProps: scaleX }),
        y: createAxisScale({ axis: 'y', scaleProps: scaleY }),
        size: defaultSizeScale,
        color: defaultCategoricalScale,
    }
}

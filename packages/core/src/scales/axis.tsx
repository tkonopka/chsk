import { cloneDeep } from 'lodash'
import { BOTTOM, DimensionsContextProps, LEFT, RIGHT, TOP } from '../general'
import {
    AxisScale,
    ScalesContextProps,
    ScaleSpec,
    ContinuousAxisScale,
    BandAxisScale,
    LinearAxisScale,
    LogAxisScale,
    ContinuousScaleSpec,
    ContinuousScaleProps,
    BandScaleProps,
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
    domain: [number, number]
): ContinuousScaleProps => {
    const result = cloneDeep(scaleSpec)
    if (scaleSpec.domain === undefined || typeof scaleSpec.domain === 'string') {
        result.domain = domain
    } else {
        result.domain = cloneDeep(scaleSpec.domain)
        if (typeof scaleSpec.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof scaleSpec.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    return result as ContinuousScaleProps
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

export const createAxisScale = ({
    axis = 'x',
    size = 100,
    scaleProps,
}: {
    /** axis for scale */
    axis?: 'x' | 'y'
    /** size of output */
    size: number
    /** complete specification, including domain, for a scale */
    scaleProps: ContinuousScaleProps | BandScaleProps
}) => {
    if (scaleProps.variant === 'band') {
        return createBandScale({ size, ...scaleProps })
    }
    return createContinuousScale({ axis, size, ...scaleProps })
}

export const createAxisScales = ({
    size,
    padding,
    scaleX,
    scaleY,
}: Pick<DimensionsContextProps, 'size' | 'padding'> & {
    scaleX: ContinuousScaleProps | BandScaleProps
    scaleY: ContinuousScaleProps | BandScaleProps
}): ScalesContextProps => {
    const [width, height] = size
    const innerWidth = width - padding[LEFT] - padding[RIGHT]
    const innerHeight = height - padding[TOP] - padding[BOTTOM]
    return {
        x: createAxisScale({ axis: 'x', size: innerWidth, scaleProps: scaleX }),
        y: createAxisScale({ axis: 'y', size: innerHeight, scaleProps: scaleY }),
        size: defaultSizeScale,
        color: defaultCategoricalScale,
    }
}

import { cloneDeep } from 'lodash'
import { createCategoricalScale } from './categorical'
import { createDivergingScale } from './diverging'
import { createSequentialScale } from './sequential'
import { Scale, ColorScale, ColorScaleProps, ColorScaleSpec, ContinuousColorScale } from './types'

export const isColorScale = (scale: Scale): scale is ColorScale => {
    return (
        scale.variant === 'sequential' ||
        scale.variant === 'diverging' ||
        scale.variant === 'categorical'
    )
}

export const isContinuousColorScale = (scale: Scale): scale is ContinuousColorScale => {
    return scale.variant === 'sequential' || scale.variant === 'diverging'
}

export const createColorScale = (props: ColorScaleProps) => {
    if (props.variant === 'diverging') return createDivergingScale(props)
    if (props.variant === 'sequential') return createSequentialScale(props)
    return createCategoricalScale(props)
}

// complete domain information in a scale spec to create a scale props
export const createColorScaleProps = (
    scaleSpec: ColorScaleSpec,
    domain?: [number, number]
): ColorScaleProps => {
    const result = cloneDeep(scaleSpec)
    if (result.variant === 'categorical') {
        return result as ColorScaleProps
    }
    if (!domain) domain = [0, 100]
    if (result.domain === undefined || typeof result.domain === 'string') {
        result.domain = domain
    } else {
        result.domain = cloneDeep(result.domain)
        if (typeof result.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof result.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    return result as ColorScaleProps
}

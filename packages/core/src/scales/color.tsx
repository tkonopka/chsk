import { cloneDeep } from 'lodash'
import { createCategoricalScale } from './categorical'
import { createDivergingScale } from './diverging'
import { createSequentialScale } from './sequential'
import {
    Scale,
    ColorScale,
    ColorScaleProps,
    ColorScaleSpec,
    ContinuousColorScale,
    CategoricalScaleProps,
    SequentialScaleProps,
    DivergingScaleProps,
    CategoricalColorScale,
} from './types'

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

export const isCategoricalColorScale = (scale: Scale): scale is CategoricalColorScale => {
    return scale.variant === 'categorical'
}

export const createColorScale = (props: ColorScaleProps) => {
    if (props.variant === 'diverging') return createDivergingScale(props)
    if (props.variant === 'sequential') return createSequentialScale(props)
    return createCategoricalScale(props)
}

// fill missing domain information in a scale spec to create a scale props
export const createColorScaleProps = (
    scaleSpec: ColorScaleSpec,
    domain?: [number, number] | [number, number, number] | string[]
): ColorScaleProps => {
    const result = cloneDeep(scaleSpec)
    if (result.variant === 'categorical') {
        result.domain = domain ? domain.map(v => String(v)) : []
        return result as CategoricalScaleProps
    }
    const scaleDomain = (cloneDeep(domain ?? ([] as number[])) as number[]).concat([0, 0, 0])
    if (result.variant === 'sequential') {
        const defaultDomain: [number, number] = [0, 100]
        result.domain = domain ? (scaleDomain.slice(0, 2) as [number, number]) : defaultDomain
        return result as SequentialScaleProps
    }
    if (result.variant === 'diverging') {
        const defaultDomain: [number, number, number] = [-100, 0, 100]
        result.domain = domain
            ? (scaleDomain.slice(0, 3) as [number, number, number])
            : defaultDomain
        return result as DivergingScaleProps
    }
    return result as CategoricalScaleProps
}

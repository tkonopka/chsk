import { cloneProps, isArray } from '../general'
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
    ThresholdColorScale,
    ThresholdScaleProps,
} from './types'
import {
    createCategoricalScale,
    createDivergingScale,
    createSequentialScale,
    createThresholdScale,
} from './colors.helpers'

export const isColorScale = (scale: Scale): scale is ColorScale => {
    return (
        scale.variant === 'sequential' ||
        scale.variant === 'diverging' ||
        scale.variant === 'categorical' ||
        scale.variant === 'threshold'
    )
}

export const isContinuousColorScale = (scale: Scale): scale is ContinuousColorScale => {
    return (
        scale.variant === 'sequential' ||
        scale.variant === 'diverging' ||
        scale.variant === 'threshold'
    )
}

export const isCategoricalColorScale = (scale: Scale): scale is CategoricalColorScale => {
    return scale.variant === 'categorical'
}

export const isThresholdColorScale = (scale: Scale): scale is ThresholdColorScale => {
    return scale.variant === 'threshold'
}

export const createColorScale = (props: ColorScaleProps) => {
    if (props.variant === 'diverging') return createDivergingScale(props)
    if (props.variant === 'sequential') return createSequentialScale(props)
    if (props.variant === 'threshold') return createThresholdScale(props)
    return createCategoricalScale(props)
}

// fill missing domain information in a scale spec to create a scale props
export const createColorScaleProps = (
    scaleSpec: ColorScaleSpec,
    domain: [number, number] | [number, number, number] | string[]
): ColorScaleProps => {
    const result = cloneProps(scaleSpec)

    // helper to pick numbers among several choices
    const getTwoNumbers = (
        firstChoice: string | unknown[],
        secondChoice: unknown[],
        fallBack: unknown[]
    ): [number, number] => {
        return [0, 1]
            .map(i => {
                if (isFinite(Number(firstChoice[i]))) return firstChoice[i]
                if (isFinite(Number(secondChoice[i]))) return secondChoice[i]
                return fallBack[i]
            })
            .map(Number) as [number, number]
    }

    if (result.variant === 'sequential') {
        result.domain = getTwoNumbers(result.domain, domain, [0, 100])
        return result as SequentialScaleProps
    }

    if (result.variant === 'diverging') {
        const minmaxDomain = getTwoNumbers(
            [result.domain[0], result.domain[result.domain.length - 1]],
            [domain[0], domain[domain.length - 1]],
            [-100, 100]
        )
        const threePointDomain = [
            minmaxDomain[0],
            (minmaxDomain[0] + minmaxDomain[1]) / 2,
            minmaxDomain[1],
        ]
        if (domain.length === 3 && isFinite(Number(domain[1]))) {
            threePointDomain[1] = Number(domain[1])
        }
        if (result.domain.length === 3 && isFinite(Number(result.domain[1]))) {
            threePointDomain[1] = Number(result.domain[1])
        }
        result.domain = threePointDomain as [number, number, number]
        return result as DivergingScaleProps
    }

    if (result.variant === 'threshold') {
        return result as ThresholdScaleProps
    }

    // must be a categorical scale
    result.variant = 'categorical'
    if (!isArray(result.domain)) {
        result.domain = domain ? domain.map(String) : []
    }
    return result as CategoricalScaleProps
}

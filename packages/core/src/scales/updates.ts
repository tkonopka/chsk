import { AxisScale, AxisScaleProps, NumericScaleProps } from './types'
import { cloneProps, interval } from '../general'
import { createContinuousScale } from './axes'

/** create scale props with a size key */
export const fillSize = (props: Omit<AxisScaleProps, 'size'>, size: number) => {
    const result = cloneProps(props) as AxisScaleProps
    result.size = size
    return result
}

/** create scale props with an adjusted domain */
export const zoomDomain = (
    props: AxisScaleProps,
    scale: AxisScale,
    zoomFactor: number,
    center?: number
) => {
    const result = cloneProps(props)
    const range = scale.range()
    const rangeSize = range[1] - range[0]
    const margin = (rangeSize * 0.5) / zoomFactor
    const middle = center ? center : (range[0] + range[1]) * 0.5
    result.viewDomain = [scale.invert(middle - margin), scale.invert(middle + margin)]
    return result
}

/** create scale props with a shifted domain */
export const shiftDomain = (props: AxisScaleProps, scale: AxisScale, shift: number) => {
    const result = cloneProps(props)
    const range = scale.range()
    result.viewDomain = [scale.invert(range[0] - shift), scale.invert(range[1] - shift)]
    return result
}

/** create scale props with a changed domain (target are coordinates to be converted into a new domain) */
export const changeDomain = (props: AxisScaleProps, scale: AxisScale, target: [number, number]) => {
    const result = cloneProps(props)
    result.viewDomain = interval([scale.invert(target[0]), scale.invert(target[1])])
    return result
}

/** change domains for x and y scale props to achieve a square (1-1) aspect ratio */
export const expandToSquare = (x: NumericScaleProps, y: NumericScaleProps) => {
    const domainRatio = (scaleProps: NumericScaleProps) => {
        const domain = scaleProps.viewDomain ?? createContinuousScale(scaleProps).viewDomain()
        return (domain[1] - domain[0]) / scaleProps.size
    }
    const adjustDomain = (domain: [number, number], ratio: number) => {
        if (ratio > 1) return
        const domainSize = domain[1] - domain[0]
        const extension = domainSize / ratio - domainSize
        domain[0] -= extension / 2
        domain[1] += extension / 2
    }
    const xRatio = domainRatio(x)
    const yRatio = domainRatio(y)
    adjustDomain(x.domain, xRatio / yRatio)
    adjustDomain(y.domain, yRatio / xRatio)
    x.nice = false
    y.nice = false
    return { x, y }
}

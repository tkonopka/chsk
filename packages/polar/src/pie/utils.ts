import {
    ContinuousScaleProps,
    createContinuousScaleProps,
    isScaleWithDomain,
    LinearScaleSpec,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

export const getPieXYScaleProps = (scaleSpecR: LinearScaleSpec, size: SizeSpec) => {
    const result = {
        scalePropsX: cloneDeep(scaleSpecR) as ContinuousScaleProps,
        scalePropsY: cloneDeep(scaleSpecR) as ContinuousScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecR)) {
        result.scalePropsX = createContinuousScaleProps(scaleSpecR, [-1, 1])
        result.scalePropsY = createContinuousScaleProps(scaleSpecR, [-1, 1])
    }

    // extend domains to force a 1:1 aspect ratio
    const getDomainRatio = (scaleProps: ContinuousScaleProps) =>
        (Number(scaleProps.domain[1]) - Number(scaleProps.domain[0])) / scaleProps.size
    const adjustDomain = (domain: [number, number], ratio: number) => {
        if (ratio > 1) return
        const domainSize = domain[1] - domain[0]
        const extension = domainSize / ratio - domainSize
        domain[0] -= extension / 2
        domain[1] += extension / 2
    }
    result.scalePropsX.size = size[X]
    result.scalePropsY.size = size[Y]
    result.scalePropsX.nice = false
    result.scalePropsY.nice = false
    const xRatio = getDomainRatio(result.scalePropsX)
    const yRatio = getDomainRatio(result.scalePropsY)
    adjustDomain(result.scalePropsX.domain as [number, number], xRatio / yRatio)
    adjustDomain(result.scalePropsY.domain as [number, number], yRatio / xRatio)
    return result
}

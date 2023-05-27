import { cloneProps } from '../general/utils'
import { SizeScaleProps, SizeScaleSpec } from './types'

// fill missing domain information in a scale spec to create a scale props
export const createSizeScaleProps = (
    scaleSpec: SizeScaleSpec,
    max: number,
    size: number
): SizeScaleProps => {
    const result = cloneProps(scaleSpec)

    if (result.domain === 'auto' || result.domain === undefined) {
        result.domain = [0, max]
    } else {
        if (result.domain[0] === 'auto') {
            result.domain = [0, result.domain[1]]
        }
        if (result.domain[1] === 'auto') {
            result.domain = [result.domain[0], max]
        }
    }
    if (result.size === 'auto') {
        result.size = size
    }

    return result as SizeScaleProps
}

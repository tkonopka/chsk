import { NumericPositionSpec } from '@chsk/core'
import { SignalProcessingProps } from './types'

/** create an array with values that sum to unity */
const normalizeSum = (v: number[]) => {
    const denominator = v.reduce((total, x) => total + x, 0)
    return v.map(x => x / denominator)
}

/**
 * perform a convolution of a data array with a mask
 * the calculation mimics behavior of numpy convolution
 * */
export const convolution = (data: number[], mask: number[], normalizeMask = true): number[] => {
    const m = normalizeMask ? normalizeSum(mask) : [...mask]
    const mLength = m.length
    const n = data.length + m.length - 1
    const result = Array(n).fill(0)
    for (let i = 0; i < n; i += 1) {
        let iResult = 0
        for (let j = 0; j < mLength; j++) {
            iResult += (data[i - j] ?? 0) * Number(m[j])
        }
        result[i] = iResult
    }
    return result
}

/** pick a subset of data values at regular intervals */
export const downsample = (data: number[], alpha: number, offset = 0): number[] => {
    const n = data.length
    const thresholds = data.map((_, i) => Math.floor(i * alpha))
    const indexes = thresholds
        .map((t, i) => (i + offset < n && (i === 0 || t != thresholds[i - 1]) ? i : undefined))
        .filter(v => v !== undefined) as number[]
    return indexes.map(i => data[i + offset] as number)
}

/** create an array of points suitable for creating paths */
export const curvePoints = ({
    x,
    y,
    convolutionMask: mask,
    convolutionOffset: offset = 0,
    downsampleFactor = 1,
    downsampleIndex = 0,
}: SignalProcessingProps & {
    x: number[]
    y: number[]
}): Array<NumericPositionSpec> => {
    // convolution
    const n = mask ? mask.length - 1 : 0
    const x0 = x.slice(n + offset, x.length + offset)
    const y0 = (mask ? convolution(y, mask) : y).slice(n, x.length)
    // down-sample
    const noDownsample = downsampleFactor === 1
    const x1 = noDownsample ? x0 : downsample(x0, downsampleFactor, downsampleIndex)
    const y1 = noDownsample ? y0 : downsample(y0, downsampleFactor, downsampleIndex)
    // format into array of [x, y] points
    return x1.map((v: number, i: number) => [v, Number(y1[i])])
}

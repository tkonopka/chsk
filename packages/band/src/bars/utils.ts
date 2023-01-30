import {
    BandAxisScale,
    BandScaleProps,
    BandScaleSpec,
    ContinuousScaleSpec,
    createContinuousScaleProps,
    getMinMax,
    isScaleWithDomain,
    LinearScaleProps,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import { BarProps } from './types'
import { cloneDeep } from 'lodash'

export const getScaleProps = (
    ids: string[],
    data: Array<[number, number][]>, // for each id, key, array with [min, max] values
    scaleSpecIndex: BandScaleSpec,
    scaleSpecValue: ContinuousScaleSpec,
    size: SizeSpec, // inner size of the view
    horizontal: boolean, // inner size of the view
    disabled: boolean[],
    stacked = false
) => {
    const result = {
        scalePropsIndex: cloneDeep(scaleSpecIndex) as BandScaleProps,
        scalePropsValue: cloneDeep(scaleSpecValue) as LinearScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.scalePropsIndex.domain = ids
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const filterDisabled = (v: unknown, i: number) => !disabled[i]
        const values = data.map(d => d.filter(filterDisabled).flat().filter(isFinite))
        const sumValues = (values: number[]) => {
            const positive = values.reduce((acc, v) => (isFinite(v) && v > 0 ? acc + v : acc), 0)
            const negative = values.reduce((acc, v) => (isFinite(v) && v < 0 ? acc + v : acc), 0)
            return [negative, positive]
        }
        const domain = stacked ? getMinMax(values.map(sumValues).flat()) : getMinMax(values.flat())
        result.scalePropsValue = createContinuousScaleProps(
            scaleSpecValue,
            domain
        ) as LinearScaleProps
    }
    result.scalePropsIndex.size = horizontal ? size[Y] : size[X]
    result.scalePropsValue.size = horizontal ? size[X] : size[Y]
    return result
}

// compute [width of individual bar/box, gap to next bar/box]
// for grouped variants: with of individual bar can be smaller than bandwidth
// for stacked and layered variants: gap is negative
export const getInternalWidthAndGap = (
    indexScale: BandAxisScale,
    keys: string[],
    paddingInternal: number | null,
    variant: BarProps['variant']
): [number, number] => {
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const padInternal = paddingInternal ? paddingInternal : 0
    const noGap = nKeys === 1 || variant !== 'grouped' || paddingInternal === null
    const width = noGap ? bandwidth : bandwidth / (nKeys - Math.min(1, padInternal))
    if (noGap) {
        return [width, -width]
    }
    return [width * (1 - padInternal), width * padInternal]
}

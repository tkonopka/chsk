import {
    cloneProps,
    indexes,
    BandAxisScale,
    BandScaleProps,
    ContinuousScaleProps,
    ContinuousScaleSpec,
    createContinuousScaleProps,
    interval,
    isScaleWithDomain,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import { BarProps } from './types'
import { ScaleWithBandwidthSpec } from '../bands'

export const getScaleProps = (
    ids: string[],
    data: Array<Array<undefined | [number, number]>>, // for each id, key, array with [min, max] values
    scaleSpecIndex: ScaleWithBandwidthSpec,
    scaleSpecValue: ContinuousScaleSpec,
    size: SizeSpec, // inner size of the view
    horizontal: boolean,
    disabled: boolean[],
    stacked = false
) => {
    const result = {
        index: cloneProps(scaleSpecIndex) as BandScaleProps,
        value: cloneProps(scaleSpecValue) as ContinuousScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.index.domain = ids
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const active = indexes(disabled).filter(i => !disabled[i])
        const isValue = (v: unknown) => v !== undefined && isFinite(Number(v))
        const values = data.map(
            d =>
                active
                    .map(i => d[i])
                    .flat()
                    .filter(isValue) as number[]
        )
        const sumValues = (values: number[]) => {
            const positive = values.reduce((acc, v) => (isFinite(v) && v > 0 ? acc + v : acc), 0)
            const negative = values.reduce((acc, v) => (isFinite(v) && v < 0 ? acc + v : acc), 0)
            return [negative, positive]
        }
        const domain = stacked ? interval(values.map(sumValues).flat()) : interval(values.flat())
        result.value = createContinuousScaleProps(scaleSpecValue, domain) as ContinuousScaleProps
    }
    result.index.size = horizontal ? size[Y] : size[X]
    result.value.size = horizontal ? size[X] : size[Y]
    return result
}

// compute [width of individual bar/box, gap to next bar/box]
// for grouped variants: with of individual bar can be smaller than bandwidth
// for stacked and layered variants: gap is negative
// returns: [bandwidth, offset, gap]
export const getInternalWidthAndGap = (
    indexScale: BandAxisScale,
    keys: string[],
    paddingInternal: number,
    variant: BarProps['variant']
): [number, number, number] => {
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const padInternal = paddingInternal ? paddingInternal : 0
    const width = variant === 'grouped' ? bandwidth / nKeys : bandwidth
    const advance = width * padInternal
    if (variant === 'grouped') {
        return [width * (1 - padInternal), advance / 2, advance]
    }
    return [width * (1 - padInternal), advance / 2, -width * (1 - padInternal)]
}

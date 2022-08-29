import {
    BandAxisScale,
    BandScaleProps,
    BandScaleSpec,
    createContinuousScaleProps,
    getMinMax,
    isScaleWithDomain,
    LinearScaleProps,
    LinearScaleSpec,
} from '@chask/core'
import { BarProcessedDataItem } from './types'
import { cloneDeep } from 'lodash'

export const getScaleProps = (
    data: Array<BarProcessedDataItem>,
    scaleSpecIndex: BandScaleSpec,
    scaleSpecValue: LinearScaleSpec,
    stacked: boolean,
    disabled: boolean[]
) => {
    const result = {
        scalePropsIndex: cloneDeep(scaleSpecIndex),
        scalePropsValue: cloneDeep(scaleSpecValue),
    }
    if (!isScaleWithDomain(scaleSpecIndex)) {
        result.scalePropsIndex.domain = data.map(d => d.id)
    }
    if (!isScaleWithDomain(scaleSpecValue)) {
        const filterDisabled = (v: number, i: number) => !disabled[i]
        const values = data.map(seriesData => seriesData.values.filter(filterDisabled))
        const sumValues = (values: number[]) =>
            values.reduce((acc, v) => (isFinite(v) ? acc + v : acc), 0)
        const domain = stacked ? getMinMax(values.map(sumValues)) : getMinMax(values.flat())
        domain[0] = Math.min(0, domain[0])
        domain[1] = Math.max(0, domain[1])
        result.scalePropsValue = createContinuousScaleProps(
            scaleSpecValue,
            domain
        ) as LinearScaleProps
    }
    return result as { scalePropsIndex: BandScaleProps; scalePropsValue: LinearScaleProps }
}

// for grouped bars/boxplots, compute width of individual bar/box and gap to next bar/box
export const getInternalWidthAndGap = (
    indexScale: BandAxisScale,
    keys: string[],
    paddingInternal: number
): [number, number] => {
    const bandwidth = indexScale.bandwidth()
    const nKeys = keys.length
    const barStep = nKeys === 1 ? bandwidth : bandwidth / (nKeys - Math.min(1, paddingInternal))
    const width = nKeys === 1 ? barStep : barStep * (1 - paddingInternal)
    const gap = barStep * paddingInternal
    return [width, gap]
}

import { BarProps, BarDataItem, QuantileProps, StripProps } from '../src'
import { createBandScale, createContinuousScale } from '@chask/core'

export const dummyBandScale = createBandScale({ domain: ['a'], size: 100 })
export const dummyLinearScale = createContinuousScale({
    domain: [0, 10],
    size: 100,
    variant: 'linear',
    axis: 'y',
})

export const getNumber = (s: string | undefined | null) => {
    if (!s) return s
    return Number(s.replace('px', ''))
}

const dataGroups: Array<BarDataItem> = [
    {
        id: 'alpha',
        label: 'alpha',
        x: 55,
        y: 35,
        z: 10,
    },
    {
        id: 'beta',
        label: 'beta',
        x: 35,
        y: 25,
        z: 15,
    },
]

export const barProps: BarProps = {
    data: dataGroups,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}

const dataRawValues: Array<BarDataItem> = [
    {
        id: 'alpha',
        label: 'alpha',
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].reverse(),
    },
    {
        id: 'beta',
        label: 'beta',
        x: [0, 2, 4, 6, 8, 10],
        y: [10, 12, 14, 16, 18, 20],
    },
]
export const dataMissingKeys = [
    {
        id: 'alpha',
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
        id: 'beta',
        x: 'not an array',
        y: [10, 12, 14, 16, 18, 20],
    },
]

export const quantileProps: QuantileProps = {
    data: dataRawValues,
    keys: ['x', 'y'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}

// props for strip charts are almost the same as for quantile plots
// but create separate object for easier reading
export const stripProps: StripProps = {
    data: dataRawValues,
    keys: ['x', 'y'],
    r: 2,
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}

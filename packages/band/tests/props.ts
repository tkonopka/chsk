import {
    createBandScale,
    createContinuousScale,
    defaultSequentialScale,
    defaultSizeScale,
    ProcessedDataContextProps,
    Scales,
} from '@chsk/core'
import {
    BarProps,
    BarDataItem,
    DistributionProps,
    StripProps,
    ViolinProps,
    ScheduleProps,
    DistributionDataItem,
} from '../src'

const mockXBandScale = createBandScale({
    variant: 'band',
    domain: ['a'],
    size: 100,
})
const mockYLinearScale = createContinuousScale({
    variant: 'linear',
    domain: [0, 10],
    size: 100,
    reverseRange: true,
})

export const mockScales: Scales = {
    x: mockXBandScale,
    y: mockYLinearScale,
    size: defaultSizeScale,
    color: defaultSequentialScale,
}

export const mockProcessedData: ProcessedDataContextProps = {
    data: [],
    seriesIndexes: {},
    keys: [],
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

const q5: [number, number, number, number, number] = [0.05, 0.25, 0.5, 0.75, 0.95]
export const dataPrecomputedQuantilesValues: Array<DistributionDataItem> = [
    {
        id: 'alpha',
        label: 'alpha',
        x: {
            n: 20,
            values: [0, 1, 2, 3, 4],
            quantiles: q5,
            extrema: [0, 5],
        },
        y: {
            n: 20,
            values: [1, 2, 3, 4, 5],
            quantiles: q5,
            extrema: [0, 5],
        },
    },
    {
        id: 'beta',
        label: 'beta',
        x: {
            n: 20,
            values: [10, 11, 12, 13, 14],
            quantiles: q5,
            extrema: [10, 15],
        },
        y: {
            n: 20,
            values: [21, 22, 23, 24, 25],
            quantiles: q5,
            extrema: [20, 25],
        },
    },
]

export const quantileProps: DistributionProps = {
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
    valueSize: 2,
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
export const violinProps: ViolinProps = {
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

export const dataSchedule = [
    {
        id: 'alpha',
        data: [
            { key: 'a', start: 1, end: 2 },
            { key: 'b', start: 3, end: 4 },
        ],
    },
    {
        id: 'beta',
        data: [{ key: 'a', start: 3, end: 4 }],
    },
]

// props for schedule charts
export const scheduleProps: ScheduleProps = {
    data: dataSchedule,
    keys: ['a', 'b'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 10] as [number, number],
    },
}

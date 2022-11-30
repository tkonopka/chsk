/** heatmap charts */

const data4x3 = [
    {
        id: 'alpha',
        x: 10,
        y: 20,
        z: 30,
    },
    {
        id: 'beta',
        x: 0,
        y: 0,
        z: 0,
    },
    {
        id: 'gamma',
        x: 30,
        y: 20,
        z: 10,
    },
    {
        id: 'delta',
        x: 15,
        y: 15,
        z: 15,
    },
]

export const heatmapProps = {
    data: data4x3,
    scaleX: {
        variant: 'band' as const,
    },
    scaleY: {
        variant: 'band' as const,
    },
}

const dataCategorical = [
    {
        id: 'alpha',
        x: 'a',
        y: 'b',
    },
    {
        id: 'beta',
        x: 'c',
        y: 'd',
    },
]

export const heatmapCategoricalProps = {
    data: dataCategorical,
    scaleX: {
        variant: 'band' as const,
    },
    scaleY: {
        variant: 'band' as const,
    },
    scaleColor: {
        variant: 'categorical' as const,
        colors: 'Blues' as const,
    },
}

export const genericViewProps = {
    data: [],
    scaleX: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
        size: 100,
    },
    scaleY: {
        variant: 'band' as const,
        domain: ['a', 'b', 'c'],
    },
}

/** upset charts */

const dataSets = [
    {
        id: 'alpha',
        data: ['a', 'b', 'c', 'd'],
    },
    {
        id: 'beta',
        data: ['c', 'd', 'e', 'f'],
    },
    {
        id: 'gamma',
        data: ['c', 'd', 'e', 'f'],
    },
    {
        id: 'delta',
        data: ['g', 'h', 'i', 'j'],
    },
]

export const upSetProps = {
    data: dataSets,
    scaleX: {
        variant: 'band' as const,
    },
    scaleY: {
        variant: 'band' as const,
    },
}

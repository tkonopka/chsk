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

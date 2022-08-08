import dataBigO from '../stories/dataBigO.json'

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [40, 40, 40, 40] as [number, number, number, number],
}

export const scatterProps = {
    data: dataBigO,
    x: 'x',
    y: 'y',
    r: 5,
    scaleX: {
        variant: 'linear' as const,
        min: 0,
        max: 8,
    },
    scaleY: {
        variant: 'linear' as const,
        min: 0,
        max: 64,
    },
}

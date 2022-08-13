import data from '../stories/dataPolynomials.json'

export const scatterProps = {
    data: data,
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

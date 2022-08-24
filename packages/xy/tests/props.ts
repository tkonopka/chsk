import dataPolynomials from './dataPolynomials.json'

export const scatterProps = {
    data: dataPolynomials,
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

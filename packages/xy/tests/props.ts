import dataPolynomials from './dataPolynomials.json'
import dataDistributions from './dataDistributions.json'

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

export const histogramProps = {
    data: dataDistributions,
    breaks: 4,
    scaleX: {
        variant: 'linear' as const,
    },
    scaleY: {
        variant: 'linear' as const,
    },
}

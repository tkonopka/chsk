import dataDistributions from './dataDistributions.json'

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

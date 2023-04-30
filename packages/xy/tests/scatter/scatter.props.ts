import { ScatterProps } from '../../src/scatter'
import dataPolynomials from './dataPolynomials.json'

export const scatterProps: ScatterProps = {
    data: dataPolynomials,
    x: 'x',
    y: 'y',
    valueSize: 5,
    scaleX: {
        variant: 'linear',
        domain: [0, 8],
    },
    scaleY: {
        variant: 'linear',
        domain: [0, 64],
    },
}

export const timeScatterProps = {
    data: [
        {
            id: 'time-series',
            data: [
                { x: new Date(Date.parse('2000-01-01')), y: 1 },
                { x: new Date(Date.parse('2000-01-02')), y: 2 },
                { x: new Date(Date.parse('2000-01-03')), y: 3 },
                { x: new Date(Date.parse('2000-01-04')), y: 4 },
            ],
        },
    ],
    x: 'x',
    y: 'y',
    r: 5,
    scaleX: {
        variant: 'time' as const,
    },
    scaleY: {
        variant: 'linear' as const,
        min: 0,
        max: 64,
    },
}

import { NumericPositionSpec, X, Y } from '@chsk/core'
import { DensityProps } from '../../src'

const pointsAlpha: NumericPositionSpec[] = [
    [1, 1],
    [1, 1],
    [1, 3],
    [2, 3],
]
const pointsBeta: NumericPositionSpec[] = [
    [2, 2],
    [2, 3],
]

const densityData = [
    {
        id: 'alpha',
        data: {
            x: pointsAlpha.map(point => point[X]),
            y: pointsAlpha.map(point => point[Y]),
            c: pointsAlpha.map(() => 1),
        },
    },
    {
        id: 'beta',
        data: {
            x: pointsBeta.map(point => point[X]),
            y: pointsBeta.map(point => point[Y]),
            c: pointsAlpha.map(() => 2),
        },
    },
]

export const densityRowData = [
    {
        id: 'alpha',
        data: pointsAlpha.map(point => ({ x: point[X], y: point[Y], c: 1 })),
    },
    {
        id: 'beta',
        data: pointsBeta.map(point => ({ x: point[X], y: point[Y], c: 2 })),
    },
]

export const densityProps: Pick<DensityProps, 'data' | 'x' | 'y' | 'binSize'> = {
    data: densityData,
    x: 'x',
    y: 'y',
    binSize: 5,
}

import {
    createLineGenerator,
    createAreaGenerator,
    NumericPositionSpec,
    NumericPositionIntervalSpec,
} from '../../src'

describe('createLineGenerator', () => {
    it('creates a line generator', () => {
        const generator = createLineGenerator('Linear')
        const points: NumericPositionSpec[] = [
            [0, 0],
            [1, 1],
            [2, 2],
        ]
        const result = generator(points) as string
        expect(result.startsWith('M')).toBeTruthy()
        expect(result.endsWith('Z')).toBeFalsy()
    })
})

describe('createAreaGenerator', () => {
    it('creates an area generator', () => {
        const generator = createAreaGenerator('Linear')
        const points: NumericPositionIntervalSpec[] = [
            [0, 1, 0],
            [1, 2, 0],
            [2, 3, 1],
        ]
        const result = generator(points) as string
        expect(result.startsWith('M')).toBeTruthy()
        expect(result.endsWith('Z')).toBeTruthy()
    })
})

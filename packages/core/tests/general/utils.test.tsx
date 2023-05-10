import {
    roundDecimalPlaces,
    rad2deg,
    getMoments,
    getCenter,
    deg2rad,
    relu,
    squaredDistance,
    angleTheta,
    clip,
    norm,
    range,
} from '../../src/general/utils'
import { sortedIndex } from 'lodash'

describe('roundDecimalPlaces', () => {
    it('rounds to 1 decimal place', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 1))).toBe('0.3')
        expect(String(roundDecimalPlaces(10.0 / 3, 1))).toBe('3.3')
    })

    it('rounds to 3 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 3))).toBe('0.333')
        expect(String(roundDecimalPlaces(100 / 3, 3))).toBe('33.333')
    })

    it('rounds to 0 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 0))).toBe('0')
        expect(String(roundDecimalPlaces(100 / 3, 0))).toBe('33')
    })

    it('rounds to 5 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 5))).toBe('0.33333')
        expect(String(roundDecimalPlaces(100 / 3, 5))).toBe('33.33333')
    })
})

describe('radians and degrees', () => {
    it('simple conversion to degrees', () => {
        expect(Math.round(rad2deg(Math.PI))).toEqual(180)
        expect(Math.round(rad2deg(Math.PI / 2))).toEqual(90)
    })

    it('simple conversion to radians', () => {
        expect(roundDecimalPlaces(deg2rad(180), 3)).toEqual(roundDecimalPlaces(Math.PI, 3))
        expect(roundDecimalPlaces(deg2rad(90), 3)).toEqual(roundDecimalPlaces(Math.PI / 2, 3))
    })
})

// this tests a function from lodash -
// this is not strictly necessary but just checks the function satisfies local requirements
describe('sortedIndex', () => {
    it('search in empty array', () => {
        expect(sortedIndex([], 10)).toEqual(0)
    })

    it('search in one-item array', () => {
        expect(sortedIndex([10], 5)).toEqual(0)
        expect(sortedIndex([10], 15)).toEqual(1)
        expect(sortedIndex([10], 10)).toEqual(0)
    })

    it('search in array with unique items', () => {
        const array = [10, 20, 30]
        expect(sortedIndex(array, 5)).toEqual(0)
        expect(sortedIndex(array, 15)).toEqual(1)
        expect(sortedIndex(array, 25)).toEqual(2)
        expect(sortedIndex(array, 50)).toEqual(3)
    })

    it('search in array with repeated items', () => {
        const array = [10, 15, 20, 20, 20, 20, 20, 30]
        expect(sortedIndex(array, 20)).toEqual(2)
    })
})

describe('getMoments', () => {
    it('computes means and standard deviation', () => {
        const result = getMoments([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(result[0]).toEqual(5.5)
        expect(Math.round(1000 * Number(result[1])) / 1000).toEqual(9.167)
    })

    it('handles empty array', () => {
        const result = getMoments([])
        expect(result).toEqual([NaN, NaN])
    })

    it('handles single value', () => {
        const result = getMoments([5])
        expect(result).toEqual([5, NaN])
    })
})

describe('getCenter', () => {
    it('computes center of an anchored box', () => {
        expect(getCenter([0, 0], [10, 10], [0.5, 1], [0, 0])).toEqual([0, -5])
    })
})

describe('relu', () => {
    it('relu transformation', () => {
        expect(relu(-1)).toEqual(0)
        expect(relu(1)).toEqual(1)
    })
})

describe('squaredDistance', () => {
    it('between a point and itself', () => {
        expect(squaredDistance([0, 0], [0, 0])).toBe(0)
        expect(squaredDistance([1.0, 2.0], [1.0, 2.0])).toBe(0)
    })

    it('between a two non-equivalent points', () => {
        expect(squaredDistance([0, 0], [1, 0])).toBe(1.0)
        expect(squaredDistance([2.0, 1.0], [1.0, 2.0])).toBe(2.0)
    })
})

describe('angleTheta', () => {
    it('between a point and itself', () => {
        expect(angleTheta([0, 0], [0, 0])).toBe(0)
    })

    it('between horizontal points', () => {
        expect(angleTheta([0, 0], [1, 0])).toBe(0)
        expect(angleTheta([0.0, 0.0], [-2.0, 0.0])).toBe(Math.PI)
    })

    it('between vertical points', () => {
        expect(angleTheta([0, 0], [0, 1])).toBe(Math.PI / 2)
        expect(angleTheta([0.0, 0.0], [0, -1])).toBe(-Math.PI / 2)
    })

    it('angles are positive in (svg) bottom-right quadrant', () => {
        const result = angleTheta([0, 0], [10, 10])
        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThan(Math.PI / 2)
    })

    it('angles are positive in (svg) bottom-left quadrant', () => {
        const result = angleTheta([0, 0], [-10, 10])
        expect(result).toBeGreaterThan(Math.PI / 2)
        expect(result).toBeLessThan(Math.PI)
    })

    it('angles are negative in (svg) top-right quadrant', () => {
        const result = angleTheta([0, 0], [10, -10])
        expect(result).toBeLessThan(0)
        expect(result).toBeGreaterThan(-Math.PI / 2)
    })

    it('angles are negative in (svg) top-left quadrant', () => {
        const result = angleTheta([0, 0], [-10, -10])
        expect(result).toBeLessThan(-Math.PI / 2)
        expect(result).toBeGreaterThan(-Math.PI)
    })
})

describe('norm', () => {
    it('norm of zero position', () => {
        expect(norm([0, 0])).toBe(0)
    })

    it('norm of non-zero position', () => {
        expect(norm([1, 2])).toBe(Math.sqrt(1 + 4))
    })
})

describe('clip', () => {
    it('clip to unit interval', () => {
        expect(clip(0, 0, 1)).toBe(0)
        expect(clip(0.5, 0, 1)).toBe(0.5)
        expect(clip(-0.5, 0, 1)).toBe(0)
        expect(clip(23, 0, 1)).toBe(1)
    })

    it('clip to arbitrary interval', () => {
        expect(clip(0, -1, 2)).toBe(0)
        expect(clip(-0.5, -1, 2)).toBe(-0.5)
        expect(clip(1.5, -1, 2)).toBe(1.5)
        expect(clip(2.5, -1, 2)).toBe(2.0)
    })
})

describe('range', () => {
    it('creates array of set length', () => {
        expect(range(0)).toEqual([])
        expect(range(1)).toEqual([0])
        expect(range(2)).toEqual([0, 1])
    })

    it('creates array with min max values (positive step)', () => {
        expect(range(0, 4)).toEqual([0, 1, 2, 3])
        expect(range(1, 4)).toEqual([1, 2, 3])
        expect(range(-2, 2)).toEqual([-2, -1, 0, 1])
    })

    it('creates array with min max values (negative step)', () => {
        expect(range(3, 0)).toEqual([3, 2, 1])
        expect(range(2, -2)).toEqual([2, 1, 0, -1])
        expect(range(-2, -4)).toEqual([-2, -3])
    })
})

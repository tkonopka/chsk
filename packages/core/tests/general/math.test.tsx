import {
    roundDecimalPlaces,
    rad2deg,
    moments,
    deg2rad,
    angleTheta,
    clip,
    norm,
    range,
    relu,
    squaredDistance,
    max,
    interval,
} from '../../src/general/math'

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

describe('interval', () => {
    it('finds min and max values from non-empty array', () => {
        const result = interval([3, 6, 4, 9, 0, -1])
        expect(result[0]).toEqual(-1)
        expect(result[1]).toEqual(9)
    })

    it('returns default min and max values for empty array', () => {
        const result = interval([])
        expect(result[0]).toEqual(1)
        expect(result[1]).toEqual(1)
    })
})

describe('max', () => {
    it('finds max value from non-empty array', () => {
        const result = max([3, 6, 4, 9, 0, -1])
        expect(result).toEqual(9)
    })

    it('returns default value for empty array', () => {
        const result = max([], 0)
        expect(result).toEqual(0)
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

describe('moments', () => {
    it('computes means and standard deviation', () => {
        const result = moments([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(result[0]).toEqual(5.5)
        expect(Math.round(1000 * Number(result[1])) / 1000).toEqual(9.167)
    })

    it('handles empty array', () => {
        const result = moments([])
        expect(result).toEqual([NaN, NaN])
    })

    it('handles single value', () => {
        const result = moments([5])
        expect(result).toEqual([5, NaN])
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

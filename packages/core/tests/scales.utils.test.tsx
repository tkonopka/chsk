import {
    createBandScale,
    createBandDetectorIntervals,
    findZone,
    DetectorIntervals,
    inZone,
    getMinMax,
    getMax,
} from '../src/scales'

describe('getMinMax', () => {
    it('finds min and max values from non-empty array', () => {
        const result = getMinMax([3, 6, 4, 9, 0, -1])
        expect(result[0]).toEqual(-1)
        expect(result[1]).toEqual(9)
    })

    it('returns default min and max values for empty array', () => {
        const result = getMinMax([])
        expect(result[0]).toEqual(1)
        expect(result[1]).toEqual(1)
    })
})

describe('getMax', () => {
    it('finds max value from non-empty array', () => {
        const result = getMax([3, 6, 4, 9, 0, -1])
        expect(result).toEqual(9)
    })

    it('returns default value for empty array', () => {
        const result = getMax([], 0)
        expect(result).toEqual(0)
    })
})

describe('zones', () => {
    it('creates intervals', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 100,
        })
        const result = createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c']))
        // there are three bands, and each band will give two values
        expect(result).toHaveLength(6)
    })

    it('maps positions to zones', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            [0, 100],
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
        ] as DetectorIntervals
        // points within bounds
        expect(findZone([30, 10], intervals)).toBeTruthy()
        expect(findZone([80, 240], intervals)).toBeTruthy()
        // points outside bounds
        expect(findZone([1000, 10], intervals)).toBeNull()
        expect(findZone([80, 1000], intervals)).toBeNull()
    })

    it('determines a position is already in a zone (Y)', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            [0, 100],
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
        ] as DetectorIntervals
        const zone = findZone([30, 10], intervals)
        // points nearby should be in the same zone
        expect(inZone([20, 15], zone)).toBeTruthy()
        expect(inZone([50, 15], zone)).toBeTruthy()
        // points far away are not in the same zone
        expect(inZone([30, 50], null)).toBeFalsy()
        expect(inZone([30, 150], zone)).toBeFalsy()
        expect(inZone([50, 250], zone)).toBeFalsy()
    })

    it('determines a position is already in a zone (X)', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
            [0, 100],
        ] as DetectorIntervals
        const zone = findZone([30, 10], intervals)
        // points nearby should be in the same zone
        expect(inZone([20, 15], zone)).toBeTruthy()
        expect(inZone([50, 15], zone)).toBeTruthy()
        // points far away are not in the same zone
        expect(inZone([130, 50], null)).toBeFalsy()
        expect(inZone([130, 50], zone)).toBeFalsy()
        expect(inZone([250, 50], zone)).toBeFalsy()
    })

    it('handles extra padding on band scales', () => {
        // scale with extra padding in the middle betwen 'a' and 'b'
        const scale = createBandScale({
            domain: ['a', 'b'],
            padding: 0,
            size: 200,
            extraPadding: { b: 1 }, // padding in units of bandwidth
        })
        const intervals = [
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b'])),
            [0, 100],
        ] as DetectorIntervals
        // points at edges of band scale should give zone hits
        expect(findZone([30, 10], intervals)).toBeTruthy()
        // points in the middle should not give zone hits
        expect(findZone([95, 10], intervals)).toBeNull()
        expect(findZone([115, 60], intervals)).toBeNull()
    })
})

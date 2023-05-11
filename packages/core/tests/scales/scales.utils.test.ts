import {
    createBandScale,
    createBandDetectorIntervals,
    findZone,
    DetectorZone,
    DetectorIntervals,
    inZone,
    getZoneSize,
} from '../../src/scales'

describe('zones', () => {
    it('creates intervals', () => {
        const scale = createBandScale({
            variant: 'band',
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
            variant: 'band',
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            [0, 100],
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
        ] as DetectorIntervals
        // points within bounds
        expect(findZone([30, 10], intervals).zone).toBeTruthy()
        expect(findZone([80, 240], intervals).zone).toBeTruthy()
        // points outside bounds
        expect(findZone([1000, 10], intervals).zone).toBeNull()
        expect(findZone([80, 1000], intervals).zone).toBeNull()
    })

    it('determines a position is already in a zone (Y)', () => {
        const scale = createBandScale({
            variant: 'band',
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            [0, 100],
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
        ] as DetectorIntervals
        const zone = findZone([30, 10], intervals).zone
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
            variant: 'band',
            domain: ['a', 'b', 'c'],
            padding: 0,
            size: 300,
        })
        const intervals = [
            createBandDetectorIntervals(scale, new Set<string>(['a', 'b', 'c'])),
            [0, 100],
        ] as DetectorIntervals
        const zone = findZone([30, 10], intervals).zone
        // points nearby should be in the same zone
        expect(inZone([20, 15], zone)).toBeTruthy()
        expect(inZone([50, 15], zone)).toBeTruthy()
        // points far away are not in the same zone
        expect(inZone([130, 50], null)).toBeFalsy()
        expect(inZone([130, 50], zone)).toBeFalsy()
        expect(inZone([250, 50], zone)).toBeFalsy()
    })

    it('handles extra padding on band scales', () => {
        // scale with extra padding in the middle between 'a' and 'b'
        const scale = createBandScale({
            variant: 'band',
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
        expect(findZone([30, 10], intervals).zone).toBeTruthy()
        // points in the middle should not give zone hits
        expect(findZone([95, 10], intervals).zone).toBeNull()
        expect(findZone([115, 60], intervals).zone).toBeNull()
    })

    it('computes zone size', () => {
        const zone: DetectorZone = [
            [10, 20],
            [100, 200],
        ]
        expect(getZoneSize(zone)).toEqual([10, 100])
    })
})

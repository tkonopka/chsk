import { getBlockArrowPoints, getTangent } from '../../src/flowchart/arrows'
import { roundDecimalPlaces } from '@chsk/core'

describe('getBlockArrowPoints', () => {
    it('creates points for a single arrow', () => {
        // arrow pointing up
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -100],
            heads: [false, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(2 + 5)
        // first few points represent base of arrow pointing upward
        expect(result[0]).toEqual([5, 0])
        expect(result[1]).toEqual([-5, 0])
        // a point in the middle represent the tip of the arrow
        expect(result[4]).toEqual([0, -100])
    })

    it('creates points for a short arrow', () => {
        // arrow pointing up
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -15],
            heads: [false, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(2 + 5)
        // first few points represent base of arrow pointing upward
        expect(result[0]).toEqual([5, 0])
        expect(result[1]).toEqual([-5, 0])
        // a point in the middle represent the tip of the arrow
        expect(result[4]).toEqual([0, -15])
    })

    it('creates points for a double arrow', () => {
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -100],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(5 + 5)
        // one of the points represents the tip of the arrow
        expect(result[2]).toEqual([0, 0])
        // another point represents other tip
        expect(result[7]).toEqual([0, -100])
    })

    it('creates rotated arrow', () => {
        // arrow at some angle
        const result = getBlockArrowPoints({
            start: [20, 40],
            end: [60, 80],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(5 + 5)
        // arrow tips should match the start/end positions
        expect(result[2].map(Math.round)).toEqual([20, 40])
        expect(result[7].map(Math.round)).toEqual([60, 80])
    })

    it('creates rotated arrow (different angle)', () => {
        // arrow at some angle
        const result = getBlockArrowPoints({
            start: [60, 40],
            end: [20, 80],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(5 + 5)
        // arrow tips should match the start/end positions
        expect(result[2].map(Math.round)).toEqual([60, 40])
        expect(result[7].map(Math.round)).toEqual([20, 80])
    })

    it('creates diagonal arrow', () => {
        // arrow at 45 degree angle, arrowhead sides should be vertical/horizontal
        const result = getBlockArrowPoints({
            start: [100, 200],
            end: [200, 100],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(5 + 5)
        // arrow tip should match the start/end positions
        expect(result[7].map(Math.round)).toEqual([200, 100])
        // arrow sides should be horizontal
        const x = Math.sqrt(100 + 100)
        expect(result[6].map(Math.round)).toEqual([200 - x, 100].map(Math.round))
        expect(result[8].map(Math.round)).toEqual([200, 100 + x].map(Math.round))
    })
})

describe('getTangent', () => {
    it('finds angles for a horizontal tangent line', () => {
        const result = getTangent([0, 0], [0, -10])
        // tangent is horizontal, so that is a rotation of pi/2
        expect(roundDecimalPlaces(Math.abs(result.cosAngle), 2)).toBe(0)
        expect(roundDecimalPlaces(result.sinAngle, 2)).toBe(-1)
        // nearby points should give similar angles
        const result2 = getTangent([0, 0], [-0.1, -10])
        const result3 = getTangent([0, 0], [0.1, -10])
        expect(Math.abs(result2.angle - result.angle)).toBeLessThan(Math.PI / 8)
        expect(Math.abs(result3.angle - result.angle)).toBeLessThan(Math.PI / 8)
    })

    it('finds angles for a horizontal tangent line (opposite side)', () => {
        const result = getTangent([0, 0], [0, 10])
        // tangent is horizontal, so that is a rotation of pi/2
        expect(roundDecimalPlaces(Math.abs(result.cosAngle), 2)).toBe(0)
        expect(roundDecimalPlaces(result.sinAngle, 2)).toBe(1)
        // nearby points should give similar angles
        const result2 = getTangent([0, 0], [-0.1, 10])
        const result3 = getTangent([0, 0], [0.1, 10])
        expect(Math.abs(result2.angle - result.angle)).toBeLessThan(Math.PI / 8)
        expect(Math.abs(result3.angle - result.angle)).toBeLessThan(Math.PI / 8)
    })

    it('finds angles for a vertical tangent line', () => {
        const result = getTangent([0, 0], [10, 0])
        // tangent is vertical, so that is a rotation of 0
        expect(roundDecimalPlaces(result.cosAngle, 2)).toBe(1)
        expect(roundDecimalPlaces(Math.abs(result.sinAngle), 2)).toBe(0)
        // similar configurations should give similar angles
        const result2 = getTangent([0, 0], [10, -0.1])
        const result3 = getTangent([0, 0], [10, 0.1])
        expect(Math.abs(result2.cosAngle - result.cosAngle)).toBeLessThan(0.1)
        expect(Math.abs(result3.cosAngle - result.cosAngle)).toBeLessThan(0.1)
    })

    it('finds angles for a vertical tangent line (opposite)', () => {
        const result = getTangent([0, 0], [-10, 0])
        // tangent is vertical, so that is a rotation of 0
        expect(roundDecimalPlaces(result.cosAngle, 2)).toBe(-1)
        expect(roundDecimalPlaces(Math.abs(result.sinAngle), 2)).toBe(0)
        // similar configurations should give similar angles
        const result2 = getTangent([0, 0], [-10, -0.1])
        const result3 = getTangent([0, 0], [-10, 0.1])
        expect(Math.abs(result2.cosAngle - result.cosAngle)).toBeLessThan(0.1)
        expect(Math.abs(result3.cosAngle - result.cosAngle)).toBeLessThan(0.1)
    })
})

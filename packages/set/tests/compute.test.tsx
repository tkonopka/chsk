import { computeVenn2 } from '../src/venn/compute'
import { X, Y } from '@chsk/core'

const PI = Math.PI

describe('computeVenn2', () => {
    it('disjoint sets', () => {
        // sets with area PI, i.e. radius rA = rB = 1
        const { positionA, positionB } = computeVenn2(PI, PI, 0, 1)
        expect(positionA).toEqual([-1.5, 0])
        expect(positionB).toEqual([1.5, 0])
    })

    it('sets entirely overlapping', () => {
        const { positionA, positionB } = computeVenn2(4 * PI, 4 * PI, 4 * PI)
        expect(positionA).toEqual([0, 0])
        expect(positionB).toEqual([0, 0])
    })

    it('setB entirely within setA', () => {
        const { positionA, positionB } = computeVenn2(4 * PI, PI, PI)
        const distance = Math.abs(positionA[X] - positionB[X])
        expect(positionA[Y] + positionB[Y]).toEqual(0)
        expect(distance).toEqual(1)
    })

    it('setA entirely within setB', () => {
        const { positionA, positionB } = computeVenn2(PI, 4 * PI, PI)
        const distance = Math.abs(positionA[X] - positionB[X])
        expect(positionA[Y] + positionB[Y]).toEqual(0)
        expect(distance).toEqual(1)
    })

    it('small overlap', () => {
        const { positionA, positionB } = computeVenn2(PI, 4 * PI, 0.1 * PI)
        const distance = Math.abs(positionA[X] - positionB[X])
        expect(positionA[Y] + positionB[Y]).toEqual(0)
        expect(distance).toBeLessThan(3)
        expect(distance).toBeGreaterThan(2)
    })

    it('large overlap', () => {
        const { positionA, positionB } = computeVenn2(PI, PI, 0.9 * PI)
        const distance = Math.abs(positionA[X] - positionB[X])
        expect(distance).toBeLessThan(1)
        expect(distance).toBeGreaterThan(0)
    })
})

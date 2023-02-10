import { computeVenn2 } from '../src/venn/compute2'
import { X, Y } from '@chsk/core'

const PI = Math.PI

describe('computeVenn2', () => {
    it('disjoint sets', () => {
        // sets with area PI, i.e. radius rA = rB = 1
        const { centerA, centerB } = computeVenn2(PI, PI, 0, 1)
        expect(centerA).toEqual([-1.5, 0])
        expect(centerB).toEqual([1.5, 0])
    })

    it('sets entirely overlapping', () => {
        const { centerA, centerB } = computeVenn2(4 * PI, 4 * PI, 4 * PI)
        expect(centerA).toEqual([0, 0])
        expect(centerB).toEqual([0, 0])
    })

    it('setB entirely within setA', () => {
        const { centerA, centerB } = computeVenn2(4 * PI, PI, PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(centerA[Y] + centerB[Y]).toEqual(0)
        expect(distance).toEqual(1)
    })

    it('setA entirely within setB', () => {
        const { centerA, centerB } = computeVenn2(PI, 4 * PI, PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(centerA[Y] + centerB[Y]).toEqual(0)
        expect(distance).toEqual(1)
    })

    it('small overlap, equal sizes', () => {
        const { centerA, centerB } = computeVenn2(4 * PI, 4 * PI, 0.1 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(centerA[Y] + centerB[Y]).toEqual(0)
        expect(distance).toBeLessThan(4)
        expect(distance).toBeGreaterThan(2)
    })

    it('small overlap', () => {
        const { centerA, centerB } = computeVenn2(PI, 4 * PI, 0.1 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(centerA[Y] + centerB[Y]).toEqual(0)
        expect(distance).toBeLessThan(3)
        expect(distance).toBeGreaterThan(2)
    })

    it('large overlap, equal sizes', () => {
        const { centerA, centerB } = computeVenn2(PI, PI, 0.9 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(distance).toBeLessThan(1)
        expect(distance).toBeGreaterThan(0)
    })

    it('large overlap, rA > rB', () => {
        const { centerA, centerB } = computeVenn2(4 * PI, 3 * PI, 2.5 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(distance).toBeLessThan(1)
        expect(distance).toBeGreaterThan(0)
    })

    it('large overlap, rB > rA', () => {
        const { centerA, centerB } = computeVenn2(3 * PI, 4 * PI, 2.5 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(distance).toBeLessThan(1)
        expect(distance).toBeGreaterThan(0)
    })

    it('large overlap, rA >> rB', () => {
        const { centerA, centerB } = computeVenn2(100 * PI, PI, 0.8 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(distance).toBeGreaterThan(1)
    })

    it('large overlap, rB >> rA', () => {
        const { centerA, centerB } = computeVenn2(PI, 100 * PI, 0.8 * PI)
        const distance = Math.abs(centerA[X] - centerB[X])
        expect(distance).toBeGreaterThan(1)
    })

    it('intermediate overlap, rA > rB', () => {
        const { centerA, centerB } = computeVenn2(100 * PI, 4 * PI, 2.5 * PI, 1)
        const distance = Math.abs(centerA[X] - centerB[X])
        // radii are 10 and 2
        expect(distance).toBeGreaterThan(8)
    })

    it('intermediate overlap, rB > rA', () => {
        const { centerA, centerB } = computeVenn2(4 * PI, 100 * PI, 2.5 * PI, 1)
        const distance = Math.abs(centerA[X] - centerB[X])
        // radii are 10 and 2
        expect(distance).toBeGreaterThan(8)
    })
})

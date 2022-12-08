import { X, Y } from '@chsk/core'
import { VennProcessedDataItem } from '../src/venn/types'
import { get1Positions, get2Positions, get3Positions } from '../src/venn/intersections'

describe('intersection labels for 1 set', () => {
    it('label for one set is at the center', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [0, 0],
            size: 10,
            common: 10,
            intersection: [10],
            r: 1,
        }
        const result = get1Positions([A])
        expect(result).toHaveLength(1)
        expect(result[0].value).toEqual(10)
        expect(result[0].position).toEqual([0, 0])
    })
})

describe('intersection labels for 2 sets', () => {
    it('labels for two sets with equal radius', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [-0.6, 0],
            size: 12,
            common: 5,
            intersection: [12, 5],
            r: 1,
        }
        const B: VennProcessedDataItem = {
            id: 'B',
            index: 0,
            position: [0.6, 0],
            size: 15,
            common: 5,
            intersection: [15, 5],
            r: 1,
        }
        const result = get2Positions([A, B])
        expect(result).toHaveLength(3)
        // first two elements are labels for elements exclusive to A and to B
        // distance between centers is 1.2,
        expect(result[0].value).toEqual(7)
        expect(result[0].position).toEqual([-1, 0])
        expect(result[1].value).toEqual(10)
        expect(result[1].position).toEqual([1, 0])
        // last label describes the intersection
        expect(result[2].value).toEqual(5)
        expect(result[2].position).toEqual([0, 0])
    })

    it('labels for two sets with unequal radius', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [-0.6, 0],
            size: 12,
            common: 5,
            intersection: [12, 5],
            r: 1,
        }
        const B: VennProcessedDataItem = {
            id: 'B',
            index: 0,
            position: [0.6, 0],
            size: 15,
            common: 5,
            intersection: [15, 5],
            r: 1.2, // radius larger than 1,
        }
        const result = get2Positions([A, B])
        expect(result).toHaveLength(3)
        // first label should be pushed to the left because the right set has larger radius
        expect(result[0].value).toEqual(7)
        expect(result[0].position[X]).toBeLessThan(-1)
    })

    it('intersection label for two sets is in the middle', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [0.4, 0], // shifted to the right
            size: 12,
            common: 5,
            intersection: [12, 5],
            r: 1,
        }
        const B: VennProcessedDataItem = {
            id: 'B',
            index: 0,
            position: [1.6, 0], // shifted to the right
            size: 15,
            common: 5,
            intersection: [15, 5],
            r: 1,
        }
        const result = get2Positions([A, B])
        expect(result).toHaveLength(3)
        // last label describes the intersection
        expect(result[2].value).toEqual(5)
        expect(result[2].position).toEqual([1, 0])
    })

    it('disjoint circles', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [-1.5, 0],
            size: 12,
            common: 0,
            intersection: [12, 0],
            r: 1,
        }
        const B: VennProcessedDataItem = {
            id: 'B',
            index: 0,
            position: [1.5, 0],
            size: 15,
            common: 0,
            intersection: [15, 0],
            r: 1,
        }
        const result = get2Positions([A, B])
        // only two labels - there is no intersection
        expect(result).toHaveLength(2)
        expect(result[0].value).toEqual(12)
        expect(result[0].position).toEqual([-1.5, 0])
        expect(result[1].value).toEqual(15)
        expect(result[1].position).toEqual([1.5, 0])
    })
})

describe('intersection labels for 3 sets', () => {
    it('labels for three sets ', () => {
        const A: VennProcessedDataItem = {
            id: 'A',
            index: 0,
            position: [-0.7, 0.404],
            size: 12,
            common: 2,
            intersection: [12, 5, 5],
            r: 1,
        }
        const B: VennProcessedDataItem = {
            id: 'B',
            index: 0,
            position: [0.7, 0.404],
            size: 15,
            common: 2,
            intersection: [5, 15, 5],
            r: 1,
        }
        const C: VennProcessedDataItem = {
            id: 'C',
            index: 0,
            position: [0, -0.808],
            size: 15,
            common: 2,
            intersection: [5, 5, 15],
            r: 1,
        }
        const result = get3Positions([A, B, C])
        expect(result).toHaveLength(7)
        // first three elements are labels for elements exclusive to A, B, C
        expect(result[0].value).toEqual(4)
        expect(result[1].value).toEqual(7)
        expect(result[2].value).toEqual(7)
        expect(result[0].position[X]).toBeLessThan(A.position[X])
        expect(result[0].position[Y]).toBeGreaterThan(A.position[Y])
        expect(result[1].position[X]).toBeGreaterThan(B.position[X])
        expect(result[1].position[Y]).toBeGreaterThan(B.position[Y])
        expect(result[2].position[X]).toEqual(0)
        expect(result[2].position[Y]).toBeLessThan(C.position[Y])
        // next three elements should be labels for intersections
        expect(result[3].position[X]).toEqual(0)
        expect(result[3].position[Y]).toBeGreaterThan(0)
        expect(result[4].position[X]).toBeGreaterThan(0)
        expect(result[5].position[X]).toBeLessThan(0)
        // last label describes the intersection
        expect(result[6].value).toEqual(2)
        expect(result[6].position).toEqual([0, 0])
    })
})

import {
    arrangeBlockObjects,
    blockObject,
    BlockObject,
    BlockProps,
} from '../../src/scatter/charges'
import { roundDecimalPlaces } from '@chsk/core'

const makeBlockObjects = (item: BlockProps): BlockObject => {
    return blockObject(item.position ?? [0, 0], item.size, item.r)
}

describe('getLabelPositions', () => {
    it('handles empty objects', () => {
        const result = arrangeBlockObjects({ obstacles: [], items: [] })
        expect(result).toHaveLength(0)
    })

    it('returns unchanged item position when no adjustment needed (using r)', () => {
        const obstacleProps: BlockProps[] = [
            { position: [0, 0], r: 1 },
            { position: [10, 10], r: 1 },
        ]
        const itemProps: BlockProps[] = [
            { position: [4, 4], r: 1 },
            { position: [12, 5], r: 1 },
        ]
        const obstacles = obstacleProps.map(makeBlockObjects)
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles, items })
        expect(result).toHaveLength(2)
        expect(result[0].position).toEqual([4, 4])
        expect(result[1].position).toEqual([12, 5])
    })

    it('returns unchanged item position when no adjustment needed (using sizes)', () => {
        const obstacleProps: BlockProps[] = [
            { position: [0, 0], size: [2, 2] },
            { position: [10, 10], size: [2, 2] },
        ]
        const itemProps: BlockProps[] = [
            { position: [4, 4], size: [6, 4] },
            { position: [12, 5], size: [2, 20] },
        ]
        const obstacles = obstacleProps.map(makeBlockObjects)
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles, items })
        expect(result).toHaveLength(2)
        expect(result[0].position).toEqual([4, 4])
        expect(result[1].position).toEqual([12, 5])
    })

    it('moves items away from each other (horizontal)', () => {
        const itemProps: BlockProps[] = [
            { position: [0.1, 4], size: [1, 1] },
            { position: [-0.1, 4], size: [1, 1] },
        ]
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles: [], items, clearance: 1 })
        expect(result).toHaveLength(2)
        // the y coordinate should be unchanged
        expect(result[0].position[1]).toBe(4)
        expect(result[1].position[1]).toBe(4)
        // the x coordinate should be amplified
        expect(result[0].position[0]).toBeGreaterThan(0.5)
        expect(result[1].position[0]).toBeLessThan(-0.5)
    })

    it('moves items away from each other (vertical)', () => {
        const itemProps: BlockProps[] = [
            { position: [4, 0.1], size: [1, 1] },
            { position: [4, -0.1], size: [1, 1] },
        ]
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles: [], items, clearance: 1 })
        expect(result).toHaveLength(2)
        // the y coordinate should be unchanged
        expect(result[0].position[0]).toBe(4)
        expect(result[1].position[0]).toBe(4)
        // the x coordinate should be amplified
        expect(result[0].position[1]).toBeGreaterThan(0.5)
        expect(result[1].position[1]).toBeLessThan(-0.5)
    })

    it('returns unchanged positions when no adjustment needed', () => {
        const obstacleProps: BlockProps[] = [
            { position: [0, 0], r: 0 },
            { position: [10, 10], r: 0 },
        ]
        const itemProps: BlockProps[] = [
            { position: [3, 4], size: [1, 1] },
            { position: [6, 6], size: [1, 1] },
        ]
        const obstacles = obstacleProps.map(makeBlockObjects)
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles, items })
        expect(result).toHaveLength(2)
        expect(result[0].position).toEqual([3, 4])
        expect(result[1].position).toEqual([6, 6])
    })

    it('moves an item away from an obstacle', () => {
        const obstacleProps: BlockProps[] = [{ position: [0, 0], size: [2, 2] }]
        const itemProps: BlockProps[] = [{ position: [0, 1], size: [2, 2] }]
        const obstacles = obstacleProps.map(makeBlockObjects)
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles, items, clearance: 1 })
        expect(result).toHaveLength(1)
        // x coordinate should be unchanged because initial displacement is only vertical
        expect(Math.abs(roundDecimalPlaces(result[0].position[0], 4))).toEqual(0.0)
        // y coordinate should be such to create exactly clearance of 1
        expect(result[0].position[1]).toBeGreaterThan(2.99)
        expect(result[0].position[1]).toBeLessThan(3.01)
    })

    it('does not push items too far unnecessarily', () => {
        // several obstacles that will attempt to push the item in the same direction
        const obstacleProps: BlockProps[] = [
            { position: [0, 0], r: 1 },
            { position: [0, 0], r: 1 },
            { position: [0, 0], r: 1 },
            { position: [0, 0], r: 1 },
        ]
        const itemProps: BlockProps[] = [{ position: [0, 0.01], size: [10, 10], r: 1 }]
        const obstacles = obstacleProps.map(makeBlockObjects)
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ obstacles, items, clearance: 1 })
        expect(result).toHaveLength(1)
        expect(Math.abs(roundDecimalPlaces(result[0].position[0], 4))).toEqual(0.0)
        expect(result[0].position[1]).toBeGreaterThan(6.5)
        expect(result[0].position[1]).toBeLessThan(7.5)
    })

    it('moves items in 2d', () => {
        // several obstacles that will attempt to push the item in the same direction
        const itemProps: BlockProps[] = [
            { position: [100, 20], size: [40, 20] },
            { position: [110, 10], size: [40, 20] },
        ]
        const items = itemProps.map(makeBlockObjects)
        const result = arrangeBlockObjects({ items, clearance: 10 })
        expect(result).toHaveLength(2)
        expect(result[0].position[0]).toBeLessThan(105)
        expect(result[1].position[0]).toBeGreaterThan(115)
    })
})

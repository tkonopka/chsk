import { render, screen } from '@testing-library/react'
import { Chart, View, getAnchoredOrigin, getIdIndexes } from '../src'
import { chartProps, viewProps } from './props'

describe('getAnchoredOrigin', () => {
    it('computes origin - top-left position with top-left anchor', () => {
        const result = getAnchoredOrigin({
            position: [0, 0],
            positionRelative: false,
            size: [10, 20],
            anchor: [0, 0],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(0)
    })

    it('computes origin - top-left position with top-middle anchor', () => {
        const result = getAnchoredOrigin({
            position: [0, 0],
            positionRelative: false,
            size: [10, 20],
            anchor: [0.5, 0],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(-5)
        expect(result[1]).toBe(0)
    })

    it('computes origin - top-center with top-middle anchor', () => {
        const result = getAnchoredOrigin({
            position: [0.5, 0],
            positionRelative: true,
            size: [10, 20],
            anchor: [0.5, 0],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(45)
        expect(result[1]).toBe(0)
    })

    it('computes origin - top-right with top-right anchor', () => {
        const result = getAnchoredOrigin({
            position: [1, 0],
            positionRelative: true,
            size: [10, 20],
            anchor: [1, 0],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(90)
        expect(result[1]).toBe(0)
    })

    it('computes origin - bottom-right with bottom-right anchor', () => {
        const result = getAnchoredOrigin({
            position: [1, 1],
            positionRelative: true,
            size: [10, 20],
            anchor: [1, 1],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(90)
        expect(result[1]).toBe(180)
    })

    it('computes origin - middle-right with middle-left anchor', () => {
        const result = getAnchoredOrigin({
            position: [1, 0.5],
            positionRelative: true,
            size: [10, 20],
            anchor: [0, 0.5],
            parentSize: [100, 200],
        })
        expect(result[0]).toBe(100)
        expect(result[1]).toBe(90)
    })
})

describe('View', () => {
    it('creates view', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}></View>
            </Chart>
        )
        const result = screen.getByRole('view')
        expect(result).toBeDefined()
    })
})

describe('getIdsMap', () => {
    it('get a map from string ids to integers', () => {
        const testdata = [
            { id: 'A', x: 0 },
            { id: 'Z', x: 100 },
        ]
        const result = getIdIndexes(testdata)
        expect(result['A']).toBe(0)
        expect(result['Z']).toBe(1)
    })
})

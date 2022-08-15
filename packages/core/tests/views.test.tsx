import { render, screen } from '@testing-library/react'
import {
    Chart,
    View,
    getAnchoredOrigin,
    getIdIndexes,
    NumericPositionSpec,
    SizeSpec,
    AnchorSpec,
} from '../src'
import { chartProps, viewProps } from './props'

describe('getAnchoredOrigin', () => {
    it('computes origin - top-left position with top-left anchor', () => {
        const inputs = {
            position: [0, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([0, 0])
    })

    it('computes origin - top-left position with top-middle anchor', () => {
        const inputs = {
            position: [0, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0.5, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([-5, 0])
    })

    it('computes origin - top-center with top-middle anchor', () => {
        const inputs = {
            position: [50, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0.5, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([45, 0])
    })

    it('computes origin - top-right with top-right anchor', () => {
        const inputs = {
            position: [100, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [1, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([90, 0])
    })

    it('computes origin - bottom-right with bottom-right anchor', () => {
        const inputs = {
            position: [100, 200] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [1, 1] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([90, 180])
    })

    it('computes origin - middle-right with middle-left anchor', () => {
        const inputs = {
            position: [100, 100] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0, 0.5] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([100, 90])
    })
})

describe('View', () => {
    it('creates view with default props', () => {
        render(
            <Chart {...chartProps}>
                <View />
            </Chart>
        )
        const result = screen.getByRole('view')
        expect(result).toBeDefined()
    })

    it('creates view with complete props', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}></View>
            </Chart>
        )
        const result = screen.getByRole('view')
        expect(result).toBeDefined()
    })
})

describe('getIdsIndexes', () => {
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

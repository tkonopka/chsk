import { render, screen } from '@testing-library/react'
import {
    Chart,
    View,
    getAnchoredOrigin,
    getIndexes,
    getIdKeySets,
    NumericPositionSpec,
    SizeSpec,
    AnchorSpec,
    ProcessedDataContextProps,
    useProcessedData,
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

    it('creates view with prepared keys and seriesIndexes', () => {
        const customData = {
            keys: ['a', 'b', 'c'],
            seriesIndexes: { X: 0, Y: 1 },
        }

        let processed: ProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            processed = useProcessedData()
            return null
        }

        render(
            <Chart>
                <View data={customData}>
                    <GetProcessedData />
                </View>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.keys).toEqual(['a', 'b', 'c'])
    })
})

describe('getIndexes', () => {
    it('get a map from string ids to integers', () => {
        const testdata = [
            { id: 'A', x: 0 },
            { id: 'Z', x: 100 },
        ]
        const result = getIndexes(testdata)
        expect(result['A']).toBe(0)
        expect(result['Z']).toBe(1)
    })
})

describe('getIdKeySets', () => {
    const tempSeriesIndexes = { A: 0, B: 1, C: 2 }
    const tempKeys = ['x', 'y', 'z']
    const tempProcessedDataProps: ProcessedDataContextProps = {
        data: [],
        seriesIndexes: tempSeriesIndexes,
        keys: tempKeys,
    }

    it('gets all available ids and keys', () => {
        const result = getIdKeySets(undefined, undefined, tempProcessedDataProps)
        expect(Array.from(result.idSet).sort()).toEqual(['A', 'B', 'C'])
        expect(Array.from(result.keySet).sort()).toEqual(['x', 'y', 'z'])
    })

    it('gets a subset of ids and keys', () => {
        const result = getIdKeySets(['B'], ['z', 'y'], tempProcessedDataProps)
        expect(Array.from(result.idSet).sort()).toEqual(['B'])
        expect(Array.from(result.keySet).sort()).toEqual(['y', 'z'])
    })
})

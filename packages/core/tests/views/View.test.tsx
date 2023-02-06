import { render, screen } from '@testing-library/react'
import { Chart, View, ProcessedDataContextProps, useProcessedData } from '../../src'
import { chartProps, viewProps } from '../props'

describe('View', () => {
    it('creates view with default props', () => {
        render(
            <Chart {...chartProps}>
                <View />
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result).toBeDefined()
    })

    it('creates view with complete props', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}></View>
            </Chart>
        )
        const result = screen.getByRole('view-content')
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

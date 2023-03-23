import { render, screen } from '@testing-library/react'
import { Chart, View, ProcessedDataContextProps, useProcessedData } from '../../src'
import { chartProps, viewProps } from '../props'
import { getNumberAttr } from '../utils'

describe('View', () => {
    it('creates view with default props', () => {
        render(
            <Chart {...chartProps}>
                <View />
            </Chart>
        )
        expect(screen.getByRole('view-content')).toBeDefined()
        const result = screen.getByRole('view-default').querySelector('rect')
        expect(getNumberAttr(result, 'width')).toEqual(360)
        expect(getNumberAttr(result, 'height')).toEqual(260)
    })

    it('creates view with shifted position', () => {
        render(
            <Chart {...chartProps}>
                <View container={{ position: [10, 0], positionUnits: 'absolute' }} {...viewProps} />
            </Chart>
        )
        const result = screen.getByRole('view-default')
        expect(result.getAttribute('transform')).toEqual('translate(10,0)')
    })

    it('creates view with padding', () => {
        render(
            <Chart {...chartProps}>
                <View container={{ padding: [10, 10, 10, 10] }} {...viewProps} />
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.getAttribute('transform')).toEqual('translate(10,10)')
        const viewRect = screen.getByRole('view-default').querySelector('rect')
        expect(getNumberAttr(viewRect, 'width')).toEqual(340)
        expect(getNumberAttr(viewRect, 'height')).toEqual(240)
    })

    it('creates view with complete props', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps} />
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

import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import {
    Chart,
    View,
    RecordWithId,
    ProcessedDataContextProps,
    useProcessedData,
    useRawData,
    Scales,
    ContinuousScaleProps,
} from '../../src'
import { chartProps, viewProps } from '../props'
import { getNumberAttr } from '../utils'
import { GetScales } from './context'

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

    it('creates view with custom scales', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps} />
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result).toBeDefined()
    })

    it('creates view with raw data context', () => {
        const data = [
            { id: 'A', value: 0 },
            { id: 'B', value: 2 },
        ]
        let result: RecordWithId[] = []
        const GetRawData = () => {
            result = useRawData().data
            return null
        }

        render(
            <Chart {...chartProps}>
                <View {...viewProps} data={data}>
                    <GetRawData />
                </View>
            </Chart>
        )
        expect(result).toHaveLength(2)
    })

    it('creates view with prepared keys and seriesIndexes', () => {
        const customData = {
            keys: ['a', 'b', 'c'],
            seriesIndexes: { X: 0, Y: 1 },
        }

        let result: ProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            result = useProcessedData()
            return null
        }

        render(
            <Chart>
                <View data={customData}>
                    <GetProcessedData />
                </View>
            </Chart>
        )
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.keys).toEqual(['a', 'b', 'c'])
    })

    it('changes scales after change in props', async () => {
        const scales = {} as Scales
        const narrow: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const wide: ContinuousScaleProps = { variant: 'linear', domain: [0, 100], size: 100 }
        // custom chart that will update props to view upon a click interaction
        const ScaleUpdateChart = () => {
            const [zoom, setZoom] = useState(0)
            const updateState = () => setZoom(zoom => (zoom + 1) % 2)
            return (
                <div>
                    <div role={'button'} onClick={updateState} />
                    <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                        <View scaleX={zoom === 0 ? narrow : wide}>
                            <GetScales key={1} value={scales} />
                        </View>
                    </Chart>
                </div>
            )
        }
        render(<ScaleUpdateChart />)
        // clicking should toggle between narrow and wide x domain
        expect(scales.x.domain()).toEqual([0, 1])
        fireEvent.click(screen.getByRole('button'))
        expect(scales.x.domain()).toEqual([0, 100])
        fireEvent.click(screen.getByRole('button'))
        expect(scales.x.domain()).toEqual([0, 1])
    })
})

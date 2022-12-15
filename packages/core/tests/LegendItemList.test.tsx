import { render, screen } from '@testing-library/react'
import { Chart, Legend, View, LegendItemList, ColorScaleProps } from '../src'
import { chartProps } from './props'

describe('LegendItemList', () => {
    it('creates a legend list with categorical colors', () => {
        const keys = ['alpha', 'beta', 'gamma']
        render(
            <Chart {...chartProps}>
                <View
                    data={{
                        seriesIndexes: { X: 0, Y: 1 },
                        keys,
                    }}
                    scaleColor={
                        {
                            variant: 'categorical',
                            colors: ['#ff0000', '#0000ff', '#888888'],
                            domain: [],
                        } as ColorScaleProps
                    }
                >
                    <Legend>
                        <LegendItemList
                            position={[0, 0]}
                            variant={'right'}
                            items={keys}
                            labels={keys}
                        />
                    </Legend>
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        const labels = legend.querySelectorAll('text')
        expect(labels).toHaveLength(3)
    })

    it('tracks item-color matches', () => {
        const keys = ['alpha', 'beta', 'gamma']
        render(
            <Chart {...chartProps}>
                <View
                    data={{
                        seriesIndexes: { X: 0, Y: 1 },
                        keys,
                    }}
                    scaleColor={
                        {
                            variant: 'categorical',
                            colors: ['#ff0000', '#0000ff', '#888888'],
                            domain: [],
                        } as ColorScaleProps
                    }
                >
                    <Legend>
                        <LegendItemList
                            position={[0, 0]}
                            variant={'right'}
                            items={[keys[2]]}
                            labels={[keys[2]]}
                        />
                    </Legend>
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(1)
        const labels = legend.querySelectorAll('text')
        expect(labels).toHaveLength(1)
        // the color should be associated with keys[2], i.e. gamma, i.e. gray
        const rect = items[0].querySelectorAll('rect')[1]
        expect(rect.getAttribute('style')).toContain('#888888')
    })
})

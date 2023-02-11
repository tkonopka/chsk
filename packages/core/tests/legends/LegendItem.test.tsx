import { Chart, Circle, Legend, LegendItem, LegendItemProps, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { getNumberAttr } from '../utils'
import { scaleCategorical, viewSeriesIndexesKeys } from './Legend.test'

describe('LegendItem', () => {
    const legendItemProps: Pick<LegendItemProps, 'position' | 'item' | 'label' | 'symbol'> = {
        position: [0, 0],
        item: 'alpha',
        label: 'alpha',
        symbol: Circle,
    }

    it('creates a legend item (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'right'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toBeLessThan(getNumberAttr(label, 'x'))
    })

    it('creates a legend item (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'left'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toBeGreaterThan(getNumberAttr(label, 'x'))
    })

    it('creates a legend item (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'top'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeGreaterThan(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getNumberAttr(label, 'x'))
    })

    it('creates a legend item (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'bottom'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeLessThan(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getNumberAttr(label, 'x'))
    })
})

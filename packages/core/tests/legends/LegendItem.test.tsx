import { Chart, Circle, Legend, LegendItem, LegendItemProps, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { getTranslate, getNumberAttr } from '../utils'
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
        const label = item.querySelector('text')?.closest('g')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toBeLessThan(getTranslate(label, 'X'))
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
        const label = item.querySelector('text')?.closest('g')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toBeGreaterThan(getTranslate(label, 'X'))
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
        const label = item.querySelector('text')?.closest('g')
        expect(getNumberAttr(symbol, 'cy')).toBeGreaterThan(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getTranslate(label, 'X'))
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
        const label = item.querySelector('text')?.closest('g')
        expect(getNumberAttr(symbol, 'cy')).toBeLessThan(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getTranslate(label, 'X'))
    })
})

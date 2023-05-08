import { Chart, Circle, Legend, LegendItem, LegendItemProps, useChartData, View } from '../../src'
import { fireEvent, render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { getNumberAttr } from '../utils'
import { scaleCategorical, viewSeriesIndexesKeys } from './Legend.test'

describe('LegendItem', () => {
    const legendItemProps: Pick<
        LegendItemProps,
        'position' | 'item' | 'label' | 'symbol' | 'disabledStyle'
    > = {
        position: [0, 0],
        item: 'alpha',
        label: 'alpha',
        symbol: Circle,
        disabledStyle: { opacity: 0.25 },
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

    it('toggles opacity and disabled state upon click', async () => {
        const ShowDisabled = () => {
            const { data } = useChartData()
            const disabledKeys = Array.from(data.disabledKeys ?? []).join('')
            if (!data.disabledKeys) return null
            return <text role={'show-disabled'}>{disabledKeys}</text>
        }
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'} key={1}>
                        <LegendItem variant={'bottom'} {...legendItemProps} />
                    </Legend>
                    <ShowDisabled key={2} />
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        expect(item.getAttribute('style') ?? '').not.toContain('opacity')
        // toggle to disabled state
        fireEvent.click(item)
        const item2 = await screen.findByRole('legend-item')
        expect(item2.getAttribute('style') ?? '').toContain('opacity: 0.25')
        const show = await screen.findByRole('show-disabled')
        expect(show.textContent).toContain('alpha')
        // toggle back to active state
        fireEvent.click(item)
        const item3 = await screen.findByRole('legend-item')
        expect(item3.getAttribute('style') ?? '').not.toContain('opacity')
        // toggle again to disabled state
        fireEvent.click(item)
        const item4 = await screen.findByRole('legend-item')
        expect(item4.getAttribute('style') ?? '').toContain('opacity: 0.25')
    })

    it('does not toggle when interactivity is turned off', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'bottom'} {...legendItemProps} interactive={false} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        expect(item.getAttribute('style') ?? '').not.toContain('opacity')
        fireEvent.click(item)
        const item2 = await screen.findByRole('legend-item')
        expect(item2.getAttribute('style') ?? '').not.toContain('opacity')
    })
})

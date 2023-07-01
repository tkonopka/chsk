import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Circle, Legend, LegendItem, LegendItemProps, useChartData, View } from '../../src'
import { chartProps } from '../props'
import { getNumberAttr } from '../utils'
import { scaleCategorical, viewSeriesIndexesKeys } from './legends.props'

describe('LegendItem', () => {
    const alphaItemProps: Pick<
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
                        <LegendItem variant={'right'} {...alphaItemProps} />
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
                        <LegendItem variant={'left'} {...alphaItemProps} />
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
                        <LegendItem variant={'top'} {...alphaItemProps} />
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
                        <LegendItem variant={'bottom'} {...alphaItemProps} />
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
            const disabledKeys = Array.from(data.disabledKeys ?? []).join(' ')
            return <text role={'disabled-keys'}>{disabledKeys}</text>
        }
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'} key={1}>
                        <LegendItem variant={'bottom'} {...alphaItemProps} />
                    </Legend>
                    <ShowDisabled key={2} />
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        expect(item.getAttribute('style') ?? '').not.toContain('opacity')
        // toggle to disabled state
        fireEvent.click(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).toContain('opacity: 0.25')
            expect(screen.getByRole('disabled-keys').textContent).toContain('alpha')
        })
        // toggle back to active state
        fireEvent.click(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).not.toContain('opacity')
        })
        // toggle again to disabled state
        fireEvent.click(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).toContain('opacity')
        })
    })

    it('toggles opacity and disabled state upon double click, allowing all disabled', async () => {
        const ShowDisabled = () => {
            const { data } = useChartData()
            const disabledKeys = Array.from(data.disabledKeys ?? []).join(' ')
            return <text role={'disabled-keys'}>{disabledKeys}</text>
        }
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'} key={1}>
                        <LegendItem
                            variant={'bottom'}
                            {...alphaItemProps}
                            style={{ cursor: 'pointer' }}
                            allowDisableAll={true}
                        />
                    </Legend>
                    <ShowDisabled key={2} />
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        expect(item.getAttribute('style') ?? '').not.toContain('opacity')
        // double click turns off all keys except item
        fireEvent.dblClick(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).not.toContain('opacity')
            const result = screen.getByRole('disabled-keys')
            expect(result.textContent).not.toContain('alpha')
            expect(result.textContent).toContain('beta')
            expect(result.textContent).toContain('gamma')
        })
        // click turns off all keys
        fireEvent.click(item)
        await waitFor(() => {
            const result = screen.getByRole('disabled-keys')
            expect(result.textContent).toContain('alpha')
            expect(result.textContent).toContain('beta')
            expect(result.textContent).toContain('gamma')
        })
        // double click returns chart state to original - all keys visible
        fireEvent.dblClick(item)
        await waitFor(() => {
            const result = screen.getByRole('disabled-keys')
            expect(result.textContent).not.toContain('alpha')
            expect(result.textContent).not.toContain('beta')
            expect(result.textContent).not.toContain('gamma')
        })
    })

    it('toggles disabled state while preserving at least one active key', async () => {
        const ShowDisabled = () => {
            const { data } = useChartData()
            const disabledKeys = Array.from(data.disabledKeys ?? []).join(' ')
            return <text role={'disabled-keys'}>{disabledKeys}</text>
        }
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'} key={1}>
                        <LegendItem
                            variant={'bottom'}
                            {...alphaItemProps}
                            style={{ cursor: 'pointer' }}
                        />
                    </Legend>
                    <ShowDisabled key={2} />
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        // double click turns off all keys except item
        fireEvent.dblClick(item)
        await waitFor(() => {
            expect(screen.getByRole('disabled-keys').textContent).not.toContain('alpha')
        })
        // attempt to turns off all keys, but it should not be possible to toggle the last key
        fireEvent.click(item)
        await waitFor(() => {
            expect(screen.getByRole('disabled-keys').textContent).not.toContain('alpha')
        })
    })

    it('does not toggle when interactivity is turned off', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem
                            variant={'bottom'}
                            {...alphaItemProps}
                            interactive={false}
                            style={{ cursor: 'pointer' }}
                        />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        expect(item.getAttribute('style')).not.toContain('opacity')
        fireEvent.click(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).not.toContain('opacity')
        })
        fireEvent.dblClick(item)
        await waitFor(() => {
            expect(screen.getByRole('legend-item').getAttribute('style')).not.toContain('opacity')
        })
    })
})

import { Chart, Circle, Tooltip, TooltipItem, TooltipItemProps, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { getTranslate, getNumberAttr } from '../utils'
import { MockTooltipSetter, scaleCategorical, viewSeriesIndexesKeys } from './Tooltip.test'

describe('TooltipItem', () => {
    const tooltipItemProps: Pick<TooltipItemProps, 'position' | 'item' | 'label' | 'symbol'> = {
        position: [0, 0],
        item: 'alpha',
        label: 'alpha',
        symbol: Circle,
    }

    it('creates a tooltip item (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10} data={[]}>
                        <Tooltip>
                            <TooltipItem variant={'right'} {...tooltipItemProps} />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const item = screen.getByRole('tooltip-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toBeLessThan(getNumberAttr(label, 'x'))
    })

    it('creates a tooltip item (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10} data={[]}>
                        <Tooltip>
                            <TooltipItem variant={'left'} {...tooltipItemProps} />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const item = screen.getByRole('tooltip-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toBeGreaterThan(getNumberAttr(label, 'x'))
    })

    it('creates a tooltip item (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10} data={[]}>
                        <Tooltip>
                            <TooltipItem variant={'top'} {...tooltipItemProps} />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const item = screen.getByRole('tooltip-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeGreaterThan(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getNumberAttr(label, 'x'))
    })

    it('creates a tooltip item (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10} data={[]}>
                        <Tooltip>
                            <TooltipItem variant={'bottom'} {...tooltipItemProps} />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const item = screen.getByRole('tooltip-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeLessThan(getNumberAttr(label, 'y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getNumberAttr(label, 'x'))
    })
})

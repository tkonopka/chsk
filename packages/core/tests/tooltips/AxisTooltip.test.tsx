import { render, screen, waitFor } from '@testing-library/react'
import { Chart, View, AxisTooltip, TooltipDataItem } from '../../src'
import { chartProps } from '../props'
import { MockTooltipSetter, scaleCategorical, viewSeriesIndexesKeys } from './Tooltip.test'
import { getTransform } from '../utils'

describe('AxisTooltip', () => {
    const tooltipData: TooltipDataItem[] = [{ id: 'X', key: 'alpha', label: 'label' }]

    it('creates an axis tooltip (top)', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={50} y={50} data={tooltipData}>
                        <AxisTooltip variant={'top'} size={[20, 20]} padding={[0, 0, 0, 0]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toBeDefined()
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('class')).toContain('tooltip surface')
        await waitFor(() => {
            // box of size [20, 20] should be on top of view, anchored at [50, 0]
            expect(getTransform(tooltip, 'X')).toEqual(40)
            expect(getTransform(tooltip, 'Y')).toEqual(-20)
        })
        const item = screen.getByRole('tooltip-item')
        expect(item.querySelector('text')?.getAttribute('class')).toContain('top')
    })

    it('creates an axis tooltip (right)', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={50} y={50} data={tooltipData}>
                        <AxisTooltip variant={'right'} size={[20, 20]} padding={[0, 0, 0, 0]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toBeDefined()
        await waitFor(() => {
            expect(getTransform(tooltip, 'Y')).toEqual(40)
        })
        const item = screen.getByRole('tooltip-item')
        expect(item.querySelector('text')?.getAttribute('class')).toContain('right')
    })

    it('creates an axis tooltip (bottom)', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={50} y={50} data={tooltipData}>
                        <AxisTooltip variant={'bottom'} size={[20, 20]} padding={[0, 0, 0, 0]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toBeDefined()
        await waitFor(() => {
            expect(getTransform(tooltip, 'X')).toEqual(40)
        })
        const item = screen.getByRole('tooltip-item')
        expect(item.querySelector('text')?.getAttribute('class')).toContain('bottom')
    })

    it('creates an axis tooltip (left)', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={50} y={50} data={tooltipData}>
                        <AxisTooltip variant={'left'} size={[20, 20]} padding={[0, 0, 0, 0]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toBeDefined()
        await waitFor(() => {
            expect(getTransform(tooltip, 'X')).toEqual(-20)
            expect(getTransform(tooltip, 'Y')).toEqual(40)
        })
        const item = screen.getByRole('tooltip-item')
        expect(item.querySelector('text')?.getAttribute('class')).toContain('left')
    })

    it('creates a tooltip only with a title, without items', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={50} y={50} data={tooltipData}>
                        <AxisTooltip
                            variant={'bottom'}
                            size={[80, 20]}
                            title={'abc'}
                            labelFormat={null}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.queryByRole('tooltip-title')).not.toBeNull()
        expect(screen.getByRole('tooltip-surface').getAttribute('height')).toEqual('20')
        expect(screen.queryAllByRole('tooltip-item')).toHaveLength(0)
    })
})

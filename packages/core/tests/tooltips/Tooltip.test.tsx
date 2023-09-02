import { ReactNode } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Chart, View, ColorScaleProps, TooltipProvider, TooltipDataItem, Tooltip } from '../../src'
import { chartProps } from '../props'
import { schemeCategory10 } from 'd3-scale-chromatic'
import { getTransform } from '../utils'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const scaleCategorical: ColorScaleProps = {
    variant: 'categorical',
    colors: schemeCategory10,
    domain: ['alpha', 'beta', 'gamma'],
}

export const MockTooltipSetter = ({
    x,
    y,
    title,
    data = [],
    children,
}: {
    x: number
    y: number
    title?: string
    data?: TooltipDataItem[]
    children: ReactNode
}) => {
    return <TooltipProvider data={{ x, y, title, data }}>{children}</TooltipProvider>
}

describe('Tooltip', () => {
    const tooltipData: TooltipDataItem[] = [{ id: 'X', key: 'alpha', label: 'label' }]

    it('creates a tooltip with a single item', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toBeDefined()
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('class')).toContain('tooltip surface')
        const items = screen.getAllByRole('tooltip-item')
        expect(items).toHaveLength(1)
        const label = tooltip.querySelector('text')
        expect(label?.textContent).toEqual('label')
        const symbol = items[0]?.querySelector('rect')
        expect(symbol?.getAttribute('class')).toContain('tooltip')
        expect(symbol?.getAttribute('class')).not.toContain('surface')
    })

    it('creates tooltip items without role', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip setRole={false} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('tooltip-item')).toHaveLength(0)
    })

    it('creates tooltip at position', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip
                            anchor={[1, 1]}
                            size={[40, 40]}
                            offset={[0, 0]}
                            maxOverhang={[100, 100, 100, 100]}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        await waitFor(() => {
            // tooltip position is [10, 10], anchored at bottom-right corner, so corner at negative coordinates
            expect(getTransform(tooltip, 'X')).toEqual(-30)
            expect(getTransform(tooltip, 'Y')).toEqual(-30)
        })
    })

    it('creates flipped tooltip', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip
                            anchor={[1, 1]}
                            size={[40, 40]}
                            offset={[0, 0]}
                            maxOverhang={[0, 0, 0, 0]}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        await waitFor(() => {
            expect(getTransform(tooltip, 'X')).toEqual(10)
            expect(getTransform(tooltip, 'Y')).toEqual(10)
        })
    })

    it('creates shifted tooltip', async () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip
                            anchor={[0.5, 1]}
                            size={[40, 40]}
                            offset={[0, 0]}
                            maxOverhang={[0, 0, 0, 0]}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        await waitFor(() => {
            // for centered tooltips, flipping an anchor is not sufficient to avoid overhang, so a shift is needed
            expect(getTransform(tooltip, 'X')).toEqual(0)
        })
    })

    it('creates tooltip with multiple items ', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter
                        x={10}
                        y={10}
                        data={[
                            { id: 'X', key: 'alpha', label: 'label' },
                            { id: 'X', key: 'beta', label: 'label' },
                        ]}
                    >
                        <Tooltip setRole={true} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('tooltip-item')).toHaveLength(2)
    })

    it('shifts tooltip content when a title is present', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip
                            padding={[0, 0, 0, 0]}
                            itemSize={[80, 20]}
                            title={'custom title'}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        // tooltip should contain a title
        const title = screen.getByRole('tooltip-title')
        expect(title).toBeDefined()
        expect(title.textContent).toEqual('custom title')
        // the bounding surface should enclose one item and one title
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('height')).toEqual('40')
        // the non-title item should be shifted down
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0]?.getAttribute('transform')).toContain('translate(0,20)')
    })

    it('uses a title from the TooltipContext', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip padding={[0, 0, 0, 0]} itemSize={[80, 30]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.getByRole('tooltip-title')
        expect(title).toBeDefined()
        expect(title.textContent).toEqual('context title')
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('height')).toEqual('60')
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0]?.getAttribute('transform')).toContain('translate(0,30)')
    })

    it('omits title line when title is explicitly empty', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip title={''} padding={[0, 0, 0, 0]} itemSize={[80, 30]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.queryByRole('tooltip-title')
        expect(title).toBeNull()
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('height')).toEqual('30')
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0]?.getAttribute('transform')).toBeNull()
    })

    it('omits items when labelFormat is null', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip
                            title={'abc'}
                            padding={[0, 0, 0, 0]}
                            itemSize={[80, 30]}
                            labelFormat={null}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.queryByRole('tooltip-title')).not.toBeNull()
        expect(screen.getByRole('tooltip-surface').getAttribute('height')).toEqual('30')
        expect(screen.queryAllByRole('tooltip-item')).toHaveLength(0)
    })

    it('uses padding', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip padding={[10, 0, 10, 0]} itemSize={[100, 30]} title={''} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('height')).toEqual('50')
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0]?.getAttribute('transform')).toContain('translate(0,10)')
    })

    it('sets custom title', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip titleFormat={() => 'custom title'} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.getByRole('tooltip-title').textContent).toEqual('custom title')
    })

    it('sets custom item labels', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip labelFormat={() => 'custom label'} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.getByRole('tooltip-item').textContent).toEqual('custom label')
    })

    it('sets custom title and item labels using JSX', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip
                            titleFormat={() => <tspan>custom title</tspan>}
                            labelFormat={() => <tspan>custom label</tspan>}
                        />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        expect(screen.getByRole('tooltip-item').textContent).toEqual('custom label')
        expect(screen.getByRole('tooltip-item').textContent).toEqual('custom label')
    })

    it('accepts symbols of size zero', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} data={tooltipData}>
                        <Tooltip symbol={() => null} labelFormat={() => 'custom label'} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const item = screen.getByRole('tooltip-item')
        expect(item.textContent).toEqual('custom label')
        // the default symbol is a rect, so setting symbol=null should avoid creating that rect
        expect(item.querySelectorAll('rect')).toHaveLength(0)
    })
})

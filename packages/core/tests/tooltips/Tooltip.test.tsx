import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { Chart, View, ColorScaleProps, TooltipProvider, TooltipDataItem, Tooltip } from '../../src'
import { chartProps } from '../props'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const scaleCategorical: ColorScaleProps = {
    variant: 'categorical',
    colors: 'Category10',
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
        const symbol = items[0].querySelector('rect')
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
                        <Tooltip itemSize={[80, 20]} title={'custom title'} />
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
        expect(items[0].getAttribute('transform')).toContain('translate(0,20)')
    })

    it('uses a title from the TooltipContext', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip itemSize={[80, 30]} />
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
        expect(items[0].getAttribute('transform')).toContain('translate(0,30)')
    })

    it('omits title line when title is explicitly empty', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <MockTooltipSetter x={10} y={10} title={'context title'} data={tooltipData}>
                        <Tooltip title={''} itemSize={[80, 30]} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.queryByRole('tooltip-title')
        expect(title).toBeNull()
        const surface = screen.getByRole('tooltip-surface')
        expect(surface.getAttribute('height')).toEqual('30')
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0].getAttribute('transform')).toBeNull()
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
        expect(items[0].getAttribute('transform')).toContain('translate(0,10)')
    })
})

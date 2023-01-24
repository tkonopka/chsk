import { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { Chart, View, ColorScaleProps, TooltipProvider, TooltipDataItem, Tooltip } from '../src'
import { chartProps } from './props'

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
    data = [],
    children,
}: {
    x: number
    y: number
    data?: TooltipDataItem[]
    children: ReactNode
}) => {
    return <TooltipProvider tooltip={{ x, y, data }}>{children}</TooltipProvider>
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
        const items = screen.getAllByRole('tooltip-item')
        expect(items).toHaveLength(1)
        const label = tooltip.querySelector('text')
        expect(label?.textContent).toEqual('label')
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
                        <Tooltip horizontal={false} itemSize={[80, 20]} title={'custom title'} />
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('tooltip-item')
        expect(items[0].getAttribute('transform')).toContain('translate(0,20)')
    })
})

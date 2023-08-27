import { render, screen } from '@testing-library/react'
import { Chart, Tooltip, View, TooltipItemList, ColorScaleProps } from '../../src'
import { chartProps } from '../props'
import { MockTooltipSetter } from './Tooltip.test'

describe('TooltipItemList', () => {
    it('creates a tooltip list with categorical colors', () => {
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
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipItemList
                                position={[0, 0]}
                                variant={'right'}
                                keys={keys}
                                labels={keys}
                            />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        const items = screen.getAllByRole('tooltip-item')
        expect(items).toHaveLength(3)
        const labels = tooltip.querySelectorAll('text')
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
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipItemList
                                position={[0, 0]}
                                variant={'right'}
                                keys={[String(keys[2])]}
                                labels={[keys[2]]}
                            />
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltip = screen.getByRole('tooltip')
        const items = screen.getAllByRole('tooltip-item')
        expect(items).toHaveLength(1)
        const labels = tooltip.querySelectorAll('text')
        expect(labels).toHaveLength(1)
        // the color should be associated with keys[2], i.e. gamma, i.e. gray
        const rect = items[0]?.querySelector('rect')
        expect(rect?.getAttribute('style')).toContain('#888888')
    })
})

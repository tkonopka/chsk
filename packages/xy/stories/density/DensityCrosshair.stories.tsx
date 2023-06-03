import { Square } from '@chsk/core'
import { DensityCrosshair } from '../../src'
import { ChartForCrosshairDecorator, ChartForCrosshairTooltipDecorator } from './decorators'

export default {
    title: 'Addons/XY/Density/DensityCrosshair',
    component: DensityCrosshair,
}

export const Default = {
    name: 'default',
    args: {
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForCrosshairDecorator],
}

export const CustomSymbol = {
    name: 'custom symbol',
    args: {
        symbol: Square,
        symbolStyle: {
            strokeWidth: 1.5,
            stroke: '#222222',
        },
        symbolR: 20,
    },
    decorators: [ChartForCrosshairDecorator],
}

export const Tooltip = {
    name: 'tooltip',
    decorators: [ChartForCrosshairTooltipDecorator],
}

import { Square } from '@chsk/core'
import { UpSetMemberships } from '../../src'
import { ChartUpSetDecorator, ChartUpSetGridDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/UpSets/UpSetMemberships',
    component: UpSetMemberships,
}

export const Default = {
    name: 'default',
    args: {},
    decorators: [ChartUpSetDecorator],
}

export const WithGrid = {
    name: 'with grid',
    args: {},
    decorators: [ChartUpSetGridDecorator],
}

export const CustomSymbol = {
    name: 'custom symbol',
    args: {
        symbol: Square,
        symbolStyle: {
            strokeWidth: 5,
        },
    },
    decorators: [ChartUpSetGridDecorator],
}

export const CustomStyles = {
    name: 'custom styles',
    args: {
        lineStyle: {
            stroke: '#b33',
            strokeWidth: 5,
        },
        symbolStyle: {
            fill: '#b33',
        },
    },
    decorators: [ChartUpSetGridDecorator],
}

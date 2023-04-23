import { Square } from '@chsk/core'
import { UpSetGrid } from '../../src'
import { ChartUpSetDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/UpSets/UpSetGrid',
    component: UpSetGrid,
}

export const Default = {
    name: 'default',
    args: {},
    decorators: [ChartUpSetDecorator],
}

export const CustomSymbol = {
    name: 'custom symbol',
    args: {
        symbol: Square,
        symbolStyle: {
            strokeWidth: 5,
        },
    },
    decorators: [ChartUpSetDecorator],
}

export const CustomStyles = {
    name: 'custom styles',
    args: {
        symbolStyle: {
            fill: '#ddd',
            stroke: '#aaa',
            strokeWidth: 1,
        },
    },
    decorators: [ChartUpSetDecorator],
}

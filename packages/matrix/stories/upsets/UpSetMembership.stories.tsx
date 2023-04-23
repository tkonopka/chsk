import { UpSetMembership } from '../../src'
import { ChartUpSetDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/UpSets/UpSetMembership',
    component: UpSetMembership,
}

export const OnePosition = {
    name: 'one position',
    args: {
        positions: [[60, 60]],
        r: 20,
        lineStyle: {
            strokeWidth: 4,
        },
    },
    decorators: [ChartUpSetDecorator],
}

export const MultiplePositions = {
    name: 'multiple positions',
    args: {
        positions: [
            [50, 50],
            [100, 100],
            [150, 150],
        ],
        r: 10,
        lineStyle: {
            strokeWidth: 4,
        },
    },
    decorators: [ChartUpSetDecorator],
}

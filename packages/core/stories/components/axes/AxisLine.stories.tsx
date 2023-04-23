import { AxisLine } from '../../../src'
import { ChartBottomAxisDecorator } from './decorators'

export default {
    title: 'Core/Components/Axes/AxisLine',
    component: AxisLine,
}

export const Visibility = {
    name: 'visibility',
    args: {
        variant: 'bottom',
        style: {
            strokeWidth: 2,
        },
    },
    decorators: [ChartBottomAxisDecorator],
}

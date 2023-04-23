import { LegendTitle } from '../../../src'
import { ChartWithRightLegendDecorator } from './decorators'

export default {
    title: 'Core/Components/Legends/LegendTitle',
    component: LegendTitle,
}

export const Title = {
    name: 'legend title',
    args: {
        position: [0, 0],
        size: [60, 20],
        padding: [6, 6, 6, 6],
        children: 'Legend title',
    },
    decorators: [ChartWithRightLegendDecorator],
}

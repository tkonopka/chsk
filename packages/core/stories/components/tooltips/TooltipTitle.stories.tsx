import { TooltipTitle } from '../../../src'
import { ChartWithDetectorWithTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Tooltips/TooltipTitle',
    component: TooltipTitle,
}

export const Title = {
    name: 'tooltip title',
    args: {
        position: [0, 12],
        size: [100, 28],
        children: 'Tooltip title',
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}

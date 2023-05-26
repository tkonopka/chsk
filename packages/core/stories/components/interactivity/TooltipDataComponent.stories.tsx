import { Circle, TooltipDataComponent } from '../../../src'
import { ChartViewWithTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Interactivity/TooltipDataComponent',
    component: TooltipDataComponent,
}

export const Example = {
    name: 'example',
    args: {
        component: Circle,
        data: {
            id: 'identifier',
            value: 'value',
            label: 'custom label',
        },
        props: {
            cx: 50,
            cy: 50,
            r: 30,
            style: {
                fill: '#999999',
            },
        },
    },
    decorators: [ChartViewWithTooltipDecorator],
}

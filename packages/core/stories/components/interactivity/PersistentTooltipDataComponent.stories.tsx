import { Circle, PersistentTooltipDataComponent } from '../../../src'
import { ChartViewWithTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Interactivity/PersistentTooltipDataComponent',
    component: PersistentTooltipDataComponent,
}

export const Example = {
    name: 'example',
    args: {
        component: Circle,
        data: {
            id: 'identifier',
            value: 'value',
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

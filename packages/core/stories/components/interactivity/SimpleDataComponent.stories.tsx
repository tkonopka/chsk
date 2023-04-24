import { Circle, SimpleDataComponent } from '../../../src'
import { ChartViewDecorator } from '../decorators'

export default {
    title: 'Core/Components/Interactivity/SimpleDataComponent',
    component: SimpleDataComponent,
}

export const Element = {
    name: 'circle',
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
    decorators: [ChartViewDecorator],
}

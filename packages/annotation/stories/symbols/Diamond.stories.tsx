import { Diamond } from '../../src'
import { ChartSymbolDecorator } from './decorators'

export default {
    title: 'Addons/Annotation/Symbols/Diamond',
    component: Diamond,
}

export const Styled = {
    name: 'styled',
    args: {
        style: {
            fill: '#dd9999',
            stroke: '#993333',
            strokeWidth: '1px',
        },
        cx: 80,
        cy: 50,
        r: 20,
    },
    decorators: [ChartSymbolDecorator],
}

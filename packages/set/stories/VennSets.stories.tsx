import { VennSets } from '../src'
import { ChartVenn2Decorator, ChartVenn3Decorator } from './decorators'

export default {
    title: 'Addons/Set/VennSets',
    component: VennSets,
}

export const StyledTwoSets = {
    name: 'styled, two sets',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222',
            fillOpacity: 0.7,
        },
    },
    decorators: [ChartVenn2Decorator],
}

export const StyledThreeSets = {
    name: 'styled, three sets',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222',
            fillOpacity: 0.7,
        },
    },
    decorators: [ChartVenn3Decorator],
}

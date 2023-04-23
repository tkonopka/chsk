import { AxisLabel } from '../../../src'
import { ChartBottomAxisDecorator, ChartLeftAxisDecorator } from './decorators'

export default {
    title: 'Core/Components/Axes/AxisLabel',
    component: AxisLabel,
}

export const BottomAxis = {
    name: 'bottom axis',
    args: {
        variant: 'bottom',
        children: 'axis label',
    },
    decorators: [ChartBottomAxisDecorator],
}

export const LeftAxis = {
    name: 'left axis',
    args: {
        variant: 'left',
        children: 'axis label',
    },
    decorators: [ChartLeftAxisDecorator],
}

export const TopLabelOnBottomAxis = {
    name: 'top label on bottom axis',
    args: {
        variant: 'top',
        children: 'axis label',
    },
    decorators: [ChartBottomAxisDecorator],
}

export const NegativeDistance = {
    name: 'negative distance',
    args: {
        variant: 'bottom',
        children: 'axis label',
        distance: -10,
    },
    decorators: [ChartBottomAxisDecorator],
}

export const Alignment = {
    name: 'alignment',
    args: {
        variant: 'bottom',
        children: 'axis label',
        align: 1,
        style: {
            textAnchor: 'end',
        },
    },
    decorators: [ChartBottomAxisDecorator],
}

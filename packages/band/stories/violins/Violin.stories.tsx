import { Violin, Violins } from '../../src/violins'
import { ChartDecorator } from '../decorators'
import { commonViolinProps } from './decorators'

export default {
    title: 'Addons/Band/Violins/Violin',
    component: Violin,
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonViolinProps,
        breaks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        horizontal: false,
        children: <Violins />,
    },
    decorators: [ChartDecorator],
}

export const Horizontal = {
    name: 'horizontal',
    args: {
        ...commonViolinProps,
        breaks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        horizontal: true,
        children: <Violins />,
    },
    decorators: [ChartDecorator],
}

export const BreaksNumber = {
    name: 'breaks, number',
    args: {
        ...commonViolinProps,
        breaks: 20,
        horizontal: false,
        children: <Violins />,
    },
    decorators: [ChartDecorator],
}

export const BreaksArray = {
    name: 'breaks, array',
    args: {
        ...commonViolinProps,
        breaks: [0, 4, 8, 12, 16, 20, 24],
        horizontal: false,
        children: <Violins />,
    },
    decorators: [ChartDecorator],
}

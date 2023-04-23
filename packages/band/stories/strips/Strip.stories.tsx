import { Strip, Strips } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonStripProps } from './decorators'

export default {
    title: 'Addons/Band/Strips/Strip',
    component: Strip,
}

export const None = {
    name: 'none',
    args: {
        ...commonStripProps,
        jitter: 'none',
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Random = {
    name: 'random',
    args: {
        ...commonStripProps,
        jitter: 'random',
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Ascending = {
    name: 'ascending',
    args: {
        ...commonStripProps,
        jitter: 'ascending',
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Descending = {
    name: 'descending',
    args: {
        ...commonStripProps,
        jitter: 'descending',
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Middle = {
    name: 'middle',
    args: {
        ...commonStripProps,
        jitter: 'middle',
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonStripProps,
        horizontal: false,
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

export const Horizontal = {
    name: 'horizontal',
    args: {
        ...commonStripProps,
        horizontal: true,
        children: <Strips />,
    },
    decorators: [ChartDecorator],
}

import { Dendrogram, DendrogramTree } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonDendrogramProps } from './decorators'

export default {
    title: 'Addons/Band/Dendrogram/Dendrogram',
    component: Dendrogram,
}

export const Top = {
    name: 'top',
    args: {
        ...commonDendrogramProps,
        variant: 'top',
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

export const Right = {
    name: 'right',
    args: {
        ...commonDendrogramProps,
        variant: 'right',
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        ...commonDendrogramProps,
        variant: 'bottom',
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

export const Left = {
    name: 'left',
    args: {
        ...commonDendrogramProps,
        variant: 'left',
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

export const HangBottom = {
    name: 'hang, bottom',
    args: {
        ...commonDendrogramProps,
        variant: 'bottom',
        hang: 0.1,
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

export const HangRight = {
    name: 'hang, right',
    args: {
        ...commonDendrogramProps,
        variant: 'right',
        hang: 0.1,
        children: <DendrogramTree />,
    },
    decorators: [ChartDecorator],
}

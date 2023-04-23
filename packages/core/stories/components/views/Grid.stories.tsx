import { Grid } from '../../../src'
import { GridFiller3x3 } from './decorators'
import { ChartPlainDecorator } from '../decorators'

export default {
    title: 'Core/Components/Views/Grid',
    component: Grid,
}

export const GridSize = {
    name: 'grid size',
    args: {
        grid: [3, 3],
        children: <GridFiller3x3 />,
    },
    decorators: [ChartPlainDecorator],
}

export const Vertical = {
    name: 'vertical',
    args: {
        grid: [3, 3],
        variant: 'vertical',
        children: <GridFiller3x3 />,
    },
    decorators: [ChartPlainDecorator],
}

export const Spacing = {
    name: 'spacing',
    args: {
        grid: [3, 3],
        spacing: [10, 20],
        children: <GridFiller3x3 />,
    },
    decorators: [ChartPlainDecorator],
}

export const CustomWidths = {
    name: 'custom widths',
    args: {
        grid: [3, 3],
        widths: [3, 2, 1],
        spacing: [0, 0],
        children: <GridFiller3x3 />,
    },
    decorators: [ChartPlainDecorator],
}

export const CustomHeights = {
    name: 'custom heights',
    args: {
        grid: [3, 3],
        heights: [3, 2, 1],
        spacing: [8, 8],
        children: <GridFiller3x3 />,
    },
    decorators: [ChartPlainDecorator],
}

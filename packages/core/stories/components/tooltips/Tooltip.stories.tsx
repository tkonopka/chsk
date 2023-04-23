import { Tooltip, Surface, Circle } from '../../../src'
import { ChartForDetectorTooltipDecorator, ChartForShapesTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Tooltips/Tooltip',
    component: Tooltip,
}

export const Position = {
    name: 'position',
    args: {
        offset: [0, -10],
        size: [80, 40],
        anchor: [0.5, 1],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const AnchoredMiddleLeft = {
    name: 'anchored middle-left',
    args: {
        offset: [0, 0],
        size: [80, 40],
        anchor: [0, 0.5],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const AnchoredTopRight = {
    name: 'anchored top-right',
    args: {
        offset: [0, 0],
        size: [80, 120],
        anchor: [1, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const LargeOverhang = {
    name: 'large overhang',
    args: {
        offset: [0, 0],
        size: [80, 80],
        anchor: [0, 1],
        maxOverhang: [100, 100, 100, 100],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const SmallOverhang = {
    name: 'small overhang',
    args: {
        offset: [0, 0],
        size: [80, 80],
        anchor: [0, 1],
        maxOverhang: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const SmallItemPadding = {
    name: 'small item padding',
    args: {
        offset: [10, 0],
        anchor: [0, 0.5],
        itemSize: [100, 20],
        itemPadding: [2, 2, 2, 2],
    },
    decorators: [ChartForShapesTooltipDecorator],
}

export const LargeItemPadding = {
    name: 'large item padding',
    args: {
        offset: [10, 0],
        anchor: [0, 0.5],
        itemSize: [100, 28],
        itemPadding: [6, 6, 6, 6],
    },
    decorators: [ChartForShapesTooltipDecorator],
}

export const Title = {
    name: 'title',
    args: {
        offset: [10, 0],
        anchor: [0, 0.5],
        itemPadding: [4, 6, 4, 6],
        title: 'Tooltip title',
    },
    decorators: [ChartForShapesTooltipDecorator],
}

export const OnlyTitle = {
    name: 'only title',
    args: {
        offset: [10, 0],
        anchor: [0, 0.5],
        itemSize: [100, 20],
        itemPadding: [2, 0, 0, 6],
        title: 'Tooltip title',
        labelFormat: null,
    },
    decorators: [ChartForShapesTooltipDecorator],
}

export const CustomStyle = {
    name: 'custom style',
    args: {
        offset: [10, 0],
        anchor: [0, 0.5],
        itemSize: [100, 28],
        itemPadding: [6, 6, 6, 6],
        symbol: Circle,
        rx: 5,
        ry: 5,
        style: {
            fill: '#fff8f8',
            strokeWidth: 1,
            stroke: '#000000',
            filter: 'drop-shadow(3px 5px 5px #22222299)',
        },
    },
    decorators: [ChartForShapesTooltipDecorator],
}

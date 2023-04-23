import { Legend, Surface } from '../../../src'
import {
    ChartForLegendDecorator,
    ChartForLegend2Decorator,
    ChartForColorLegendDecorator,
} from './decorators'

export default {
    title: 'Core/Components/Legends/Legend',
    component: Legend,
}

export const RightAnchoredMiddleLeft = {
    name: 'right, anchored middle-left',
    args: {
        position: [240, 70],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [0, 0.5],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForLegendDecorator],
}

export const BottomRightAnchoredBottomLeft = {
    name: 'bottom-right, anchored bottom-left',
    args: {
        position: [240, 140],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [0, 1],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForLegendDecorator],
}

export const BottomRightAnchoredBottomRight = {
    name: 'bottom-right, anchored bottom-right',
    args: {
        position: [240, 140],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [1, 1],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForLegendDecorator],
}

export const BottomAnchoredTop = {
    name: 'bottom, anchored top',
    args: {
        position: [120, 140],
        positionUnits: 'absolute',
        size: [140, 60],
        sizeUnits: 'absolute',
        anchor: [0.5, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForLegendDecorator],
}

export const RightWithPadding = {
    name: 'right, with padding',
    args: {
        position: [240, 70],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [0, 0.5],
        offset: [10, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForLegendDecorator],
}

export const ListVertical = {
    name: 'list, vertical',
    args: {
        position: [240, 0],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        padding: [0, 8, 0, 8],
        itemSize: [80, 24],
        itemPadding: [2, 2, 2, 2],
        title: 'Legend title',
    },
    decorators: [ChartForLegend2Decorator],
}

export const ListHorizontal1 = {
    name: 'list, horizontal 1',
    args: {
        position: [0, 0],
        positionUnits: 'absolute',
        size: [240, 70],
        sizeUnits: 'absolute',
        anchor: [0, 1],
        padding: [6, 0, 6, 0],
        itemSize: [80, 24],
        firstOffset: [-80, 24],
        itemPadding: [2, 2, 2, 2],
        horizontal: true,
        title: 'Legend title',
    },
    decorators: [ChartForLegend2Decorator],
}

export const ListHorizontal2 = {
    name: 'list, horizontal 2',
    args: {
        position: [0, 140],
        positionUnits: 'absolute',
        size: [240, 60],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        padding: [16, 0, 0, 0],
        itemSize: [70, 20],
        itemPadding: [2, 2, 2, 2],
        firstOffset: [0, 0],
        horizontal: true,
        title: 'Legend: ',
    },
    decorators: [ChartForLegend2Decorator],
}

export const ColorsVertical = {
    name: 'colors, vertical',
    args: {
        variant: 'color',
        position: [240, 0],
        positionUnits: 'absolute',
        size: [60, 100],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        padding: [0, 8, 0, 8],
        itemSize: [80, 24],
        itemPadding: [2, 2, 2, 2],
        title: 'Legend title',
        scaleSize: [12, 80],
        firstOffset: [0, 10],
    },
    decorators: [ChartForColorLegendDecorator],
}

export const ColorsHorizontal = {
    name: 'colors, horizontal',
    args: {
        variant: 'color',
        horizontal: true,
        position: [120, 180],
        positionUnits: 'absolute',
        padding: [10, 0, 10, 0],
        size: [120, 60],
        sizeUnits: 'absolute',
        anchor: [0.5, 0],
        itemSize: [90, 24],
        itemPadding: [2, 2, 2, 2],
        title: 'Legend title',
        scaleSize: [120, 12],
        firstOffset: [-90, 20],
    },
    decorators: [ChartForColorLegendDecorator],
}

export const SizesVertical = {
    name: 'sizes, vertical',
    args: {
        variant: 'size',
        position: [220, 0],
        positionUnits: 'absolute',
        size: [60, 100],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        padding: [0, 8, 0, 8],
        itemSize: [80, 20],
        itemPadding: [2, 2, 2, 2],
        title: 'Legend title',
        firstOffset: [0, 10],
        symbolStyle: {
            stroke: '#222222',
            strokeWidth: 1,
        },

        sizeTicks: 4,
    },
    decorators: [ChartForColorLegendDecorator],
}

export const SizesHorizontal = {
    name: 'sizes, horizontal',
    args: {
        variant: 'size',
        horizontal: true,
        position: [0, 140],
        positionUnits: 'absolute',
        padding: [10, 0, 10, 0],
        size: [120, 60],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        itemSize: [26, 80],
        itemPadding: [4, 4, 4, 4],
        title: 'Legend title',
        firstOffset: [-26, 18],
        symbolStyle: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        labelStyle: {
            textAnchor: 'middle',
            alignmentBaseline: 'hanging',
        },

        sizeTicks: [10, 20, 40, 80],
    },
    decorators: [ChartForColorLegendDecorator],
}

export const NonInteractive = {
    name: 'non-interactive',
    args: {
        position: [240, 0],
        positionUnits: 'absolute',
        size: [60, 80],
        sizeUnits: 'absolute',
        anchor: [0, 0],
        padding: [0, 8, 0, 8],
        itemSize: [80, 24],
        itemPadding: [2, 2, 2, 2],
        title: 'Legend title',
        interactive: false,
    },
    decorators: [ChartForLegend2Decorator],
}

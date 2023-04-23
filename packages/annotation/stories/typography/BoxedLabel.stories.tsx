import { BoxedLabel } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/BoxedLabel',
    component: BoxedLabel,
}

export const AbsolutePosition = {
    name: 'absolute position',
    args: {
        position: [50, 30],
        size: [40, 26],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },

        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const RelativePosition = {
    name: 'relative position',
    args: {
        position: [0.5, 0.5],
        positionUnits: 'relative',
        size: [120, 26],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },

        children: 'Relative position',
    },
    decorators: [ChartDecorator],
}

export const AnchorTopLeftCorner = {
    name: 'anchor top-left corner',
    args: {
        position: [0, 0],
        positionUnits: 'relative',
        anchor: [0, 0],
        size: [180, 26],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Anchor in top-left corner',
    },
    decorators: [ChartDecorator],
}

export const AnchorTopRightCorner = {
    name: 'anchor top-right corner',
    args: {
        position: [1, 0],
        positionUnits: 'relative',
        anchor: [1, 0],
        size: [180, 26],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Anchor in top-right corner',
    },
    decorators: [ChartDecorator],
}

export const OffsetAboveCenter = {
    name: 'offset above center',
    args: {
        position: [0.5, 0.5],
        positionUnits: 'relative',
        offset: [0, -40],
        size: [120, 26],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'above-center',
    },
    decorators: [ChartDecorator],
}

export const OffsetAwayFromCorner = {
    name: 'offset away from corner',
    args: {
        position: [0, 0],
        offset: [-10, -10],
        anchor: [1, 1],
        size: [22, 22],
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'A',
    },
    decorators: [ChartDecorator],
}

export const Rotation = {
    name: 'rotation',
    args: {
        position: [0.5, 0.5],
        positionUnits: 'relative',
        size: [80, 26],
        angle: 15,
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'rotated',
    },
    decorators: [ChartDecorator],
}

export const Styling = {
    name: 'styling',
    args: {
        position: [1, 0],
        positionUnits: 'relative',
        anchor: [1, 0],
        offset: [-10, 10],
        size: [22, 22],
        boxStyle: {
            fill: '#994444',
            strokeWidth: '0px',
        },
        textStyle: {
            fill: '#ffffff',
            fontWeight: 600,
        },
        children: '1',
    },
    decorators: [ChartDecorator],
}

import { Viewfinder } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Misc/Viewfinder',
    component: Viewfinder,
}

export const Corners = {
    name: 'corners',
    args: {
        variant: 'corners',
        x: 10,
        y: 10,
        width: 300,
        height: 200,
        style: {
            stroke: '#444444',
            strokeWidth: 4,
        },
    },
    decorators: [ChartDecorator],
}

export const TopLeftBottomRight = {
    name: 'top left and bottom right',
    args: {
        variant: 'top-left-bottom-right',
        x: 10,
        y: 10,
        width: 300,
        height: 200,
        style: { stroke: '#444444', strokeWidth: 2 },
    },
    decorators: [ChartDecorator],
}

export const TopRightBottomLeft = {
    name: 'top right and bottom left',
    args: {
        variant: 'top-right-bottom-left',
        x: 10,
        y: 10,
        width: 300,
        height: 200,
        style: { stroke: '#444444', strokeWidth: 2 },
    },
    decorators: [ChartDecorator],
}

export const AbsLengths = {
    name: 'absolute lengths',
    args: {
        variant: 'corners',
        x: 10,
        y: 10,
        width: 300,
        height: 200,
        lengths: [60, 60],
        lengthsUnits: 'absolute',
        style: { stroke: '#000000', strokeWidth: 2 },
    },
    decorators: [ChartDecorator],
}

export const RelLengths = {
    name: 'relative lengths',
    args: {
        variant: 'corners',
        x: 10,
        y: 10,
        width: 300,
        height: 200,
        lengths: [0.1, 0.1],
        lengthsUnits: 'relative',
        style: { stroke: '#000000', strokeWidth: 2 },
    },
    decorators: [ChartDecorator],
}

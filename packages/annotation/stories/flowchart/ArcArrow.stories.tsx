import { ArcArrow } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Flowchart/ArcArrow',
    component: ArcArrow,
}

export const Narrow = {
    name: 'narrow',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        stemWidth: 10,
        headWidth: 30,
        headLength: 40,
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const Wide = {
    name: 'wide',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        stemWidth: 40,
        headWidth: 60,
        headLength: 20,
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const Left = {
    name: 'left',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        variant: 'left',
        r: 400,
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const Right = {
    name: 'right',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        variant: 'right',
        r: 400,
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const DoubleSided = {
    name: 'double sided',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        heads: [true, true],
        variant: 'left',
        r: 400,
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const CustomStyle = {
    name: 'custom style',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        variant: 'left',
        r: 400,
        style: {
            strokeWidth: 2,
            stroke: '#dd0000',
            fill: '#dd7777',
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

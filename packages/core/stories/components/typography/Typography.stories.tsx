import { Typography } from '../../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Core/Components/Text/Typography',
    component: Typography,
}

export const Title = {
    name: 'title',

    args: {
        variant: 'title',
        position: [0, -15],
        children: 'Primary heading',
    },
    decorators: [ChartDecorator],
}

export const Subtitle = {
    name: 'subtitle',

    args: {
        variant: 'subtitle',
        position: [0, -15],
        children: 'Secondary heading',
    },

    decorators: [ChartDecorator],
}

export const AxisLabel = {
    name: 'axisLabel',

    args: {
        variant: 'axisLabel',
        position: [160, 235],
        children: 'axis label',
    },

    decorators: [ChartDecorator],
}

export const TickLabel = {
    name: 'tickLabel',

    args: {
        variant: 'tickLabel',
        position: [0, 235],
        children: 'tick label',
    },

    decorators: [ChartDecorator],
}

export const Rotation = {
    name: 'rotation',

    args: {
        variant: 'default',
        position: [120, 40],
        children: 'rotated text',

        style: {
            textAnchor: 'middle',
            dominantBaseline: 'middle',
        },

        angle: -10,
    },

    decorators: [ChartDecorator],
}

export const Color = {
    name: 'color',

    args: {
        variant: 'title',
        position: [0, -20],
        children: 'Title in color',

        style: {
            fill: '#dd4444',
            dominantBaseline: 'middle',
        },
    },

    decorators: [ChartDecorator],
}

export const LetterSpacing = {
    name: 'letter spacing',

    args: {
        variant: 'default',
        position: [0, -20],
        children: 'Text with custom style',

        style: {
            textAnchor: 'start',
            fill: '#222222',
            fontFamily: 'serif',
            letterSpacing: 3,
            fontSize: '20px',
            dominantBaseline: 'middle',
        },
    },

    decorators: [ChartDecorator],
}

export const Tspan = {
    name: 'tspan',

    args: {
        variant: 'default',
        position: [40, 40],

        style: {
            textAnchor: 'start',
        },

        children: (
            <tspan>
                This is{' '}
                <tspan
                    style={{
                        fontWeight: 600,
                    }}
                >
                    bold
                </tspan>
            </tspan>
        ),
    },

    decorators: [ChartDecorator],
}

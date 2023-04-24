import { Chart, Surface } from '@chsk/core'
import { BoxedTitle, Triangle } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/BoxedTitle',
    component: BoxedTitle,
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const Distance = {
    name: 'distance from axis',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        distance: 10,
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const SmallExpansion = {
    name: 'small expansion',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '2px',
        },
        expansion: [0, -2, 0, -2],
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const LargeExpansion = {
    name: 'large expansion',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '2px',
        },
        expansion: [0, 30, 0, 30],
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const RoundedCorners = {
    name: 'rounded corners',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: '1px',
        },
        rx: 6,
        ry: 6,
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

export const CustomContent = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[60, 60, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <BoxedTitle
                variant={'top'}
                boxStyle={{
                    fill: '#ffffff',
                    stroke: '#222222',
                    strokeWidth: '1px',
                }}
            >
                <Triangle
                    cy={2}
                    r={8}
                    style={{
                        fill: '#dd4444',
                    }}
                />
            </BoxedTitle>
        </Chart>
    ),

    name: 'custom content',
}

export const Styling = {
    name: 'styling',
    args: {
        variant: 'top',
        boxStyle: {
            fill: '#994444',
            strokeWidth: '0px',
        },
        textStyle: {
            fill: '#ffffff',
        },
        children: 'Title',
    },
    decorators: [ChartDecorator],
}

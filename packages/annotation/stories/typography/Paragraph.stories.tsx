import { Chart, Surface } from '@chsk/core'
import { Paragraph, BoxedLabel } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/Paragraph',
    component: Paragraph,
}

export const TopAlignment = {
    name: 'top alignment',
    args: {
        position: [0, 0],
        size: [100, 26],
        align: 0,
        style: {
            textAnchor: 'start',
        },
        children: 'Long text should wrap.',
    },
    decorators: [ChartDecorator],
}

export const MiddleAlignment = {
    name: 'middle alignment',
    args: {
        position: [0, 0],
        size: [100, 26],
        align: 0.5,
        style: {
            textAnchor: 'start',
        },
        children: 'Long text should wrap.',
    },
    decorators: [ChartDecorator],
}

export const Rotation = {
    name: 'rotation',
    args: {
        position: [60, 80],
        size: [100, 26],
        angle: -30,
        style: {
            textAnchor: 'start',
        },
        children: 'Long text should wrap.',
    },
    decorators: [ChartDecorator],
}

export const WrappingWide = {
    name: 'wrapping, wide',
    args: {
        position: [0, 0],
        size: [180, 22],
        align: 0,
        style: {
            textAnchor: 'start',
        },
        children: 'Long text should wrap into several lines.',
    },
    decorators: [ChartDecorator],
}

export const WrappingNarrow = {
    name: 'wrapping, narrow',
    args: {
        position: [0, 0],
        size: [80, 32],
        align: 0,
        style: {
            textAnchor: 'start',
        },
        children: 'Long text should wrap into several lines.',
    },
    decorators: [ChartDecorator],
}

export const WrappingDelimiter = {
    name: 'wrapping, delimiter',
    args: {
        position: [0, 0],
        size: [180, 22],
        align: 0,
        separator: '\n',
        style: {
            textAnchor: 'start',
        },
        children: 'Long\ntext should wrap into several lines.',
    },
    decorators: [ChartDecorator],
}

export const Centered = {
    name: 'centered',
    args: {
        position: [120, 60],
        size: [180, 22],
        align: 0,
        children: 'Long text should wrap into several lines.',
        style: {
            fontWeight: 600,
            textAnchor: 'middle',
        },
    },
    decorators: [ChartDecorator],
}

export const InBoxedLabel = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <BoxedLabel
                position={[0.5, 0.5]}
                positionUnits={'relative'}
                size={[200, 100]}
                sizeUnits={'absolute'}
                boxStyle={{
                    fill: '#ffffff',
                    stroke: '#222222',
                    strokeWidth: 1,
                }}
                rx={8}
                ry={8}
            >
                <Paragraph
                    position={[-85, 0]}
                    size={[190, 22]}
                    align={0.5}
                    style={{
                        textAnchor: 'start',
                        dominantBaseline: 'middle',
                    }}
                >
                    Long text should wrap into several lines. Long text should wrap.
                </Paragraph>
            </BoxedLabel>
        </Chart>
    ),

    name: 'boxed label',
}

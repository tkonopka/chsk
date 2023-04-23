import { Chart, Surface, View, Axis, GridLines } from '@chsk/core'
import { LineLabel, ArrowMarker } from '../../src'
import { ChartBandViewAxisDecorator, ChartLinearViewAxisDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/LineLabel',
    component: LineLabel,
}

export const BandCenters = {
    name: 'band centers',
    args: {
        start: ['A', 104],
        end: ['D', 104],
        angle: 0,
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'A - D',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const BandEdges = {
    name: 'band edges',
    args: {
        start: ['A', 104],
        end: ['D', 104],
        expansion: [0.5, 0.5],
        angle: 0,
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'A - D (extended)',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const LeftAligned = {
    name: 'left aligned',
    args: {
        start: ['B', 104],
        end: ['E', 104],
        align: 0,
        expansion: [0.5, 0.5],
        textStyle: {
            textAnchor: 'start',
        },
        children: 'left aligned',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const BelowLine = {
    name: 'below line',
    args: {
        start: ['D', -16],
        end: ['F', -16],
        offset: [0, 18],
        align: 0.5,
        expansion: [0.5, 0.5],
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'below line',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const VerticalLineHorizontalLabel = {
    name: 'vertical line, horizontal label',
    args: {
        start: [104, 100],
        end: [104, 60],
        align: 0.5,
        offset: [10, 0],
        textStyle: {
            textAnchor: 'start',
        },
        children: 'label',
    },
    decorators: [ChartLinearViewAxisDecorator],
}

export const VerticalLabel = {
    name: 'vertical label',
    args: {
        start: [104, 100],
        end: [104, 60],
        offset: [10, 0],
        angle: 90,
        align: 0.5,
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'rotated',
    },
    decorators: [ChartLinearViewAxisDecorator],
}

export const Styling = {
    name: 'styling',
    args: {
        start: ['D', 104],
        end: ['F', 104],
        align: 0.5,
        offset: [0, -9],
        textStyle: {
            textAnchor: 'middle',
            fontWeight: 600,
            fill: '#dd2222',
            fontSize: 11,
        },
        lineStyle: {
            stroke: '#dd2222',
            strokeWidth: 2,
        },
        children: '★★★',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const Arrow = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <View
                scaleX={{
                    variant: 'band',
                    domain: ['A', 'B', 'C', 'D', 'E', 'F'],
                    padding: 0.2,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 100],
                }}
            >
                <ArrowMarker
                    id="arrow"
                    variant="Chevron"
                    style={{
                        stroke: '#222222',
                    }}
                />
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} />
                <Axis variant={'left'} />
                <LineLabel
                    start={['D', 104]}
                    end={['F', 104]}
                    offset={[0, -10]}
                    textStyle={{
                        textAnchor: 'middle',
                        fontWeight: 600,
                    }}
                    lineStyle={{
                        strokeWidth: 2,
                    }}
                    markerEnd={'arrow'}
                >
                    label
                </LineLabel>
            </View>
        </Chart>
    ),

    name: 'arrow',
}

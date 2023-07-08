import { Chart, Surface, LinearGradient } from '@chsk/core'
import { BlockArrow, InsetShadowFilter } from '../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Flowchart/BlockArrow',
    component: BlockArrow,
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

export const DoubleSided = {
    name: 'double sided',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        heads: [true, true],
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const Caret = {
    name: 'caret',
    args: {
        variant: 'caret',
        start: [120, 110],
        end: [160, 110],
        stemWidth: 60,
        headWidth: 60,
        headLength: 20,
        units: 'absolute',
        style: {
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const CssStyle = {
    name: 'css style',
    args: {
        start: [50, 160],
        end: [200, 60],
        units: 'absolute',
        stemWidth: 12,
        style: {
            strokeWidth: 2,
            stroke: '#dd0000',
            fill: '#dd7777',
            fillOpacity: 1,
        },
    },
    decorators: [ChartDecorator],
}

export const Gradient = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{
                display: 'inline-block',
            }}
        >
            <defs>
                <LinearGradient
                    id="arrow-gradient"
                    start={[0, 1]}
                    end={[1, 0.333]}
                    stops={['#dd000000', '#dd0000ff']}
                    offsets={[0.05, 0.4]}
                />
            </defs>
            <Surface variant={'inner'} />
            <BlockArrow
                stemWidth={12}
                start={[50, 160]}
                end={[200, 60]}
                units={'absolute'}
                style={{
                    fill: 'url(#arrow-gradient)',
                    strokeWidth: 0,
                    fillOpacity: 1,
                }}
            />
        </Chart>
    ),

    name: 'gradient',
}

export const Filter = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{
                display: 'inline-block',
            }}
        >
            <InsetShadowFilter id={'arrow-shadow'} blurStdDeviation={6} floodOpacity={0.95} />
            <Surface variant={'inner'} />
            <BlockArrow
                stemWidth={32}
                headWidth={16}
                start={[50, 160]}
                end={[200, 60]}
                units={'absolute'}
                style={{
                    fill: '#dd0000',
                    fillOpacity: 1,
                    filter: 'url(#arrow-shadow)',
                    strokeWidth: 0,
                }}
            />
        </Chart>
    ),

    name: 'filter',
}

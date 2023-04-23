import { Chart, Axis, GridLines } from '@chsk/core'
import { Scatter, ScatterArea, ScatterCurve } from '../../src'
import { ChartScatterDecorator } from './decorators'
import { generateScatterSeriesWithInterval } from './generators'

const dataWithInterval = [
    generateScatterSeriesWithInterval(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => i),
        x => 1 + 0.3 * x + Math.random() * 1.5,
        [-0.8, 1.0]
    ),
]

export default {
    title: 'Addons/XY/Scatter/ScatterArea',
    component: ScatterArea,
}

export const DefaultBaseline = {
    name: 'default baseline',
    args: {
        ids: ['quadratic'],
        curve: 'Linear',
        style: {
            strokeWidth: 0,
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartScatterDecorator],
}

export const CustomBaseline = {
    name: 'custom baseline',
    args: {
        ids: ['quadratic'],
        curve: 'Linear',
        baseline: 30,
        style: {
            strokeWidth: 0,
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartScatterDecorator],
}

export const Composite = {
    render: () => (
        <Chart
            size={[500, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Scatter
                data={dataWithInterval}
                x={'x'}
                y={'y'}
                valueSize={6}
                scaleX={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
            >
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'y (a.u.)'} />
                <GridLines variant={'y'} />
                <ScatterArea
                    ids={['A']}
                    baseline={0}
                    curve="Natural"
                    style={{
                        fillOpacity: 0.1,
                        strokeWidth: 0,
                    }}
                />
                <ScatterCurve
                    ids={['A']}
                    curve="Natural"
                    style={{
                        strokeWidth: 3,
                    }}
                />
            </Scatter>
        </Chart>
    ),
    name: 'composite',
}

export const CssEffects = {
    render: () => (
        <Chart
            size={[500, 300]}
            padding={[40, 40, 60, 60]}
            style={{ display: 'inline-block' }}
            theme={{
                path: {
                    area: {
                        fillOpacity: 0.1,
                        strokeWidth: 0,
                    },

                    'area:hover': {
                        fillOpacity: 0.3,
                    },
                },
            }}
        >
            <Scatter
                data={dataWithInterval}
                x={'x'}
                y={'y'}
                valueSize={6}
                scaleX={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
            >
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'y (a.u.)'} />
                <GridLines variant={'y'} />
                <ScatterArea ids={['A']} baseline={0} curve="Natural" className="area" />
                <ScatterCurve
                    ids={['A']}
                    curve="Natural"
                    style={{
                        strokeWidth: 3,
                    }}
                />
            </Scatter>
        </Chart>
    ),
    name: 'css effects',
}

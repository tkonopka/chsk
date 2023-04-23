import { Chart, Axis, GridLines } from '@chsk/core'
import { Scatter, ScatterSeries } from '../../src'
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
    generateScatterSeriesWithInterval(
        'B',
        Array(16)
            .fill(0)
            .map((v, i) => i),
        x => 8 - 0.3 * x + Math.random() * 1.5,
        [-0.8, 1.0]
    ),
]

export default {
    title: 'Addons/XY/Scatter/ScatterSeries',
    component: ScatterSeries,
}

export const CurveAndPoints = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Scatter
                data={dataWithInterval}
                x={'x'}
                y={'y'}
                valueSize={4}
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
                <ScatterSeries
                    ids={['A']}
                    layers={['curve', 'points']}
                    curveStyle={{
                        stroke: '#dd3333',
                    }}
                    symbolStyle={{
                        fill: '#dd3333',
                    }}
                />
            </Scatter>
        </Chart>
    ),

    name: 'curve and points',
}

export const AreaCurveAndPoints = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Scatter
                data={dataWithInterval}
                x={'x'}
                y={'y'}
                valueSize={4}
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
                <ScatterSeries
                    ids={['A']}
                    layers={['area', 'curve', 'points']}
                    areaStyle={{
                        fill: '#dd3333',
                        fillOpacity: 0.1,
                        strokeWidth: 0,
                    }}
                    curveStyle={{
                        stroke: '#dd3333',
                    }}
                    symbolStyle={{
                        fill: '#dd3333',
                    }}
                />
            </Scatter>
        </Chart>
    ),

    name: 'area, curve, and points',
}

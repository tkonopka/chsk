import { ReactNode } from 'react'
import { Axis, Chart, Legend, Circle } from '@chask/core'
import { Scatter, ScatterCurve, ScatterPoints } from '../../src'
import data from './dataPolynomials.json'
import { generateScatterSeries } from './generators'

export const ChartScatterDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={data}
            x={'x'}
            y={'y'}
            r={5}
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
            {Story()}
        </Scatter>
    </Chart>
)

export const ChartScatterQuadraticDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={data}
            x={'x'}
            y={'y'}
            r={5}
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
            <ScatterCurve ids={['quadratic']} />
            {Story()}
        </Scatter>
    </Chart>
)

export const ChartWithLegendSpaceDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const dataRegression = [
    generateScatterSeries(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => i / 2 + Math.random()),
        x => 5 + 1.1 * x + Math.random() * 5
    ),
    generateScatterSeries(
        'B',
        Array(16)
            .fill(0)
            .map((v, i) => i / 2 + Math.random()),
        x => 3 + 0.3 * x + Math.random() * 4
    ),
]

export const ChartForRegressionDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataRegression}
            x={'x'}
            y={'y'}
            r={4}
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
            <ScatterPoints />
            <Legend position={[220, 160]} anchor={[0, 0.5]} units={'absolute'} symbol={Circle} />
            {Story()}
        </Scatter>
    </Chart>
)

import { ReactNode } from 'react'
import { Axis, Chart, Legend, Circle, SymbolProps, Square, Tooltip, GridLines } from '@chsk/core'
import {
    Scatter,
    ScatterCurve,
    ScatterPoints,
    ScatterInteractiveDataItem,
    ScatterCrosshair,
} from '../../src'
import dataPolynomials from './dataPolynomials.json'
import dataNoisy from './dataNoisy.json'
import { generateScatterSeries, generateScatterSeriesWithInterval } from './generators'

export const ChartScatterDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataPolynomials}
            x={'x'}
            y={'y'}
            valueSize={5}
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
            data={dataPolynomials}
            x={'x'}
            y={'y'}
            valueSize={5}
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

const round3dp = (x: number) => Math.round(x * 1000) / 1000

export const dataRegression = [
    generateScatterSeries(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => round3dp(i / 2 + Math.random())),
        x => round3dp(5 + 1.1 * x + Math.random() * 5)
    ),
    generateScatterSeries(
        'B',
        Array(16)
            .fill(0)
            .map((v, i) => round3dp(i / 2 + Math.random())),
        x => round3dp(3 + 0.3 * x + Math.random() * 4)
    ),
]

export const ChartForRegressionDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataRegression}
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
            <ScatterPoints />
            {Story()}
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <Legend
                position={[220, 160]}
                anchor={[0, 0.5]}
                positionUnits={'absolute'}
                symbol={Circle}
            />
        </Scatter>
    </Chart>
)

const generateBubbles = (n: number, xyInterval = [0.5, 10], vInterval = [1, 12]) => {
    const xySize = xyInterval[1] - xyInterval[0]
    const vSize = vInterval[1] - vInterval[0]
    return Array(n)
        .fill(0)
        .map(() => ({
            x: xyInterval[0] + xySize * Math.random(),
            y: xyInterval[0] + xySize * Math.random(),
            value: vInterval[0] + vSize * Math.random(),
        }))
}
export const dataBubbles = [
    { id: 'A', data: generateBubbles(8) },
    { id: 'B', data: generateBubbles(8) },
]

export const onScatterClick = (data: ScatterInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

export const DoubleSquare = (props: SymbolProps) => {
    return (
        <>
            <Square {...props} r={(props.r ?? 1) * 4} />
            <Square {...props} r={(props.r ?? 1) * 1.5} style={{ ...props.style, fill: '#fff' }} />
        </>
    )
}

export const ChartWithTooltipDecorator = () => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataRegression}
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
            <ScatterPoints />
            <ScatterCrosshair style={{ stroke: '#444', strokeWidth: 1, strokeDasharray: 6 }} />
            <Tooltip
                offset={[0, -10]}
                anchor={[0.5, 1]}
                itemSize={[160, 32]}
                itemPadding={[8, 8, 8, 8]}
                style={{ stroke: '#222222', strokeWidth: 1 }}
            />
            <Legend
                position={[220, 160]}
                positionUnits={'absolute'}
                anchor={[0, 0.5]}
                symbol={Circle}
            />
        </Scatter>
    </Chart>
)

export const ChartWithNoisyPointsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataNoisy}
            x={'x'}
            y={'y'}
            valueSize={3}
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
            {Story()}
        </Scatter>
    </Chart>
)

export const dataWithInterval = [
    generateScatterSeriesWithInterval(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => i),
        x => 1 + 0.3 * x + Math.random() * 1.5,
        [-0.8, 1.0]
    ),
]

export const ChartForIntervalDecorator = (Story: () => ReactNode) => (
    <Chart size={[500, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
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
                nice: true,
            }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} ticks={5} />
            <GridLines variant={'y'} values={5} />
            {Story()}
        </Scatter>
    </Chart>
)

/** error bars */

export const dataWithErrors = [
    generateScatterSeries(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => i + 1),
        x => 1 + 0.3 * x + Math.random() * 1.5
    ),
]
dataWithErrors[0].data = dataWithErrors[0].data.map(item => ({
    ...item,
    ylo: item.y - 0.5,
    yhi: item.y + 0.5,
    xlo: item.x - 0.5,
    xhi: item.x + 0.5,
}))

export const ChartForErrorsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataWithErrors}
            x={'x'}
            y={'y'}
            valueSize={3}
            scaleX={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 'auto'],
                nice: true,
            }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} ticks={5} />
            {Story()}
            <ScatterPoints />
        </Scatter>
    </Chart>
)

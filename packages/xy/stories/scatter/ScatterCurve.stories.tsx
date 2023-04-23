import { Chart, Axis } from '@chsk/core'
import { Scatter, ScatterCurve } from '../../src'
import { ChartScatterDecorator, ChartWithNoisyPointsDecorator } from './decorators'
import data from './dataPolynomials.json'

export default {
    title: 'Addons/XY/Scatter/ScatterCurve',
    component: ScatterCurve,
}

export const LinearCurve = {
    name: 'linear curve',
    args: {
        ids: ['quadratic'],
        curve: 'Linear',
    },
    decorators: [ChartScatterDecorator],
}

export const StepCurve = {
    name: 'step curve',
    args: {
        ids: ['quadratic'],
        curve: 'Step',
    },
    decorators: [ChartScatterDecorator],
}

export const MultipleSeries = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Scatter
                data={data}
                x={'x'}
                y={'y'}
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
                <ScatterCurve
                    ids={['linear']}
                    curve="Step"
                    style={{
                        strokeWidth: 3,
                    }}
                />
                <ScatterCurve
                    ids={['quadratic']}
                    curve="Linear"
                    style={{
                        strokeDasharray: '6 6',
                        strokeWidth: 3,
                    }}
                />
            </Scatter>
        </Chart>
    ),

    name: 'multiple series',
}

export const DownsampleIndex0 = {
    name: 'downsample, index 0',
    args: {
        ids: ['A'],
        curve: 'Natural',
        downsampleFactor: 0.5,
        downsampleIndex: 0,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

export const DownsampleIndex1 = {
    name: 'downsample, index 1',
    args: {
        ids: ['A'],
        curve: 'Natural',
        downsampleFactor: 0.5,
        downsampleIndex: 1,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

export const HistoricAverage = {
    name: 'historic average',
    args: {
        ids: ['A'],
        curve: 'Natural',
        convolutionMask: [1, 1, 1],
        convolutionOffset: 0,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

export const SymmetricAverage = {
    name: 'symmetric average',
    args: {
        ids: ['A'],
        curve: 'Natural',
        convolutionMask: [1, 1, 1],
        convolutionOffset: -1,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

export const AveragedDownsampledIndex0 = {
    name: 'averaged, downsampled, index 0',
    args: {
        ids: ['A'],
        curve: 'Natural',
        convolutionMask: [1, 1, 1],
        convolutionOffset: -1,
        downsampleFactor: 0.5,
        downsampleIndex: 0,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

export const AveragedDownsampledIndex1 = {
    name: 'averaged, downsampled, index 1',
    args: {
        ids: ['A'],
        curve: 'Natural',
        convolutionMask: [1, 1, 1],
        convolutionOffset: -1,
        downsampleFactor: 0.5,
        downsampleIndex: 1,
    },
    decorators: [ChartWithNoisyPointsDecorator],
}

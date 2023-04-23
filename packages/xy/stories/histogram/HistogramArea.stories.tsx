import { Chart, Axis } from '@chsk/core'
import { Histogram, HistogramArea } from '../../src'
import { ChartHistogramDecorator, sampleData } from './decorators'

export default {
    title: 'Addons/XY/Histograms/HistogramArea',
    component: HistogramArea,
}

export const LinearCurve = {
    name: 'linear curve',
    args: {
        curve: 'MonotoneX',
    },
    decorators: [ChartHistogramDecorator],
}

export const StepCurve = {
    name: 'step curve',
    args: {
        curve: 'Step',
    },
    decorators: [ChartHistogramDecorator],
}

export const MultipleSeries = {
    render: () => (
        <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
            <Histogram
                data={sampleData}
                breaks={[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
            >
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'counts'} />
                <HistogramArea
                    ids={['A']}
                    curve="Step"
                    style={{
                        opacity: 0.8,
                    }}
                />
                <HistogramArea
                    ids={['B']}
                    curve="MonotoneX"
                    style={{
                        opacity: 0.2,
                    }}
                />
            </Histogram>
        </Chart>
    ),
    name: 'multiple series',
}

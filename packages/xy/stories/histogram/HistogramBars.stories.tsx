import { Chart, Axis } from '@chsk/core'
import { Histogram, HistogramBars, HistogramCurve } from '../../src'
import { ChartHistogramDecorator, sampleData } from './decorators'

export default {
    title: 'Addons/XY/Histograms/HistogramBars',
    component: HistogramBars,
}

export const Default = {
    name: 'default',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#ffffff',
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartHistogramDecorator],
}

export const CssEffects = {
    render: () => (
        <Chart
            id={'csseffects'}
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
            theme={{
                rect: {
                    histogramBar: {
                        fillOpacity: 0.2,
                    },

                    'histogramBar:hover': {
                        fillOpacity: 0.4,
                    },
                },
            }}
        >
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
                <HistogramBars />
                <HistogramCurve curve={'Step'} style={{ pointerEvents: 'none' }} />
                <HistogramCurve curve={'MonotoneX'} style={{ pointerEvents: 'none' }} />
            </Histogram>
        </Chart>
    ),
    name: 'css effects',
}

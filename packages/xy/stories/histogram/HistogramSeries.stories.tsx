import { Chart, Axis, GridLines } from '@chsk/core'
import { Histogram, HistogramSeries } from '../../src'
import { sampleData } from './decorators'

export default {
    title: 'Addons/XY/Histograms/HistogramSeries',
    component: HistogramSeries,
}

export const AreaAndCurve = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Histogram variant={'density'} data={sampleData} breaks={12}>
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'density'} />
                <GridLines variant={'y'} />
                <HistogramSeries
                    layers={['area', 'curve']}
                    curveStyle={{
                        strokeWidth: 2,
                    }}
                    areaStyle={{
                        opacity: 0.2,
                    }}
                />
            </Histogram>
        </Chart>
    ),

    name: 'area and curve',
}

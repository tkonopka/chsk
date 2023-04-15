import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
} from '@chsk/core'
import { Histogram, HistogramArea, HistogramCurve, isHistogramData } from '@chsk/xy'
import { LineLabel } from '@chsk/annotation'
import { generateMixedPopulation, stepSequence } from '../utils'
import { MilestoneStory } from '../types'

export const generateLineHistogramData = () => [
    {
        id: 'custom',
        data: generateMixedPopulation([500, 50, 40], [0, 0, 4.5], [1, 2, 0.5]),
    },
]

const customHistogramTheme: ThemeSpec = {
    line: {
        intervalLabel: {
            stroke: '#222255',
        },
    },
    path: {
        default: {
            fillOpacity: 0,
        },
        histogramCurve: {
            strokeWidth: 2,
        },
        histogramArea: {
            fillOpacity: 0.2,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        lineLabel: {
            textAnchor: 'middle',
            fontWeight: 400,
            fill: '#222255',
        },
    },
}

const customHistogramProps = {
    breaks: stepSequence([-3, 7], 0.2),
    scaleX: {
        variant: 'linear' as const,
        domain: [-3, 7] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 'auto'] as [number, 'auto'],
    },
}

export const LineHistogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHistogramData(rawData)) return null
    return (
        <Chart
            id="lineHistogram"
            fref={fref}
            data={chartData}
            size={[600, 320]}
            padding={[60, 40, 60, 60]}
            theme={customHistogramTheme}
        >
            <Histogram {...customHistogramProps} data={rawData}>
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} />
                    <Axis variant={'left'} label={'counts'} />
                    <Axis variant={'bottom'}>
                        <AxisLine
                            variant={'bottom'}
                            style={{ strokeWidth: 1, visibility: 'visible' }}
                        />
                        <AxisTicks variant={'bottom'} ticks={8} />
                        <AxisLabel variant={'bottom'}>values (a.u.)</AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <HistogramArea ids={['custom']} curve={'Step'} />
                    <HistogramCurve ids={['custom']} curve={'Step'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'primary-label'}>
                    <LineLabel
                        start={[-2, -0.05]}
                        end={[2, -0.05]}
                        units={['view', 'relative']}
                        align={0.5}
                    >
                        Primary population
                    </LineLabel>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'secondary-label'}>
                    <LineLabel start={[3.4, 15]} end={[5.6, 15]} units={'view'}>
                        Secondary population
                    </LineLabel>
                </MilestoneMotion>
            </Histogram>
        </Chart>
    )
}

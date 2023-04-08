import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    MilestoneMotion,
    ThemeSpec,
    Legend,
    Typography,
    mergeTheme,
    Tooltip,
    TooltipDataComponent,
    TooltipDataItem,
} from '@chsk/core'
import { Histogram, HistogramCurve, HistogramProcessedDataItem, isHistogramData } from '@chsk/xy'
import { Segment } from '@chsk/annotation'
import {
    alphabetGreek,
    generateMixedPopulation,
    generateUniformPopulation,
    round2dp,
    stepSequence,
} from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { buttonTheme } from '@chsk/themes'

const ids = alphabetGreek.slice(0, 4)
export const generateManyLinesHistogramData = () => {
    const means = generateUniformPopulation(4, 5, 9).sort((a, b) => a - b)
    const sds = generateUniformPopulation(4, 0.5, 2.5).sort((a, b) => b - a)
    const positive = (v: number) => v > 0
    return ids.map((id, index) => ({
        id,
        data: generateMixedPopulation([1000], [means[index]], [sds[index]]).filter(positive),
    }))
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        axis: {
            strokeWidth: 1,
        },
        legendSymbol: {
            strokeWidth: 3,
        },
    },
    path: {
        histogramCurve: {
            strokeWidth: 3,
            pointerEvents: 'stroke',
        },
        default: {
            fillOpacity: 0,
        },
    },
    rect: {
        'tooltip.surface': {
            strokeWidth: 1,
            stroke: '#555555',
        },
    },
})

const histogramProps = {
    breaks: stepSequence([0, 12], 0.4),
    scaleX: {
        variant: 'linear' as const,
        domain: [0, 12] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 'auto'] as [number, 'auto'],
    },
}

const customTooltipLabel = (x: TooltipDataItem): string => {
    const xh = x as HistogramProcessedDataItem
    return (
        x.id + ', ' + round2dp(xh.mean ?? 0) + ' ± ' + round2dp(xh.sd ?? 0) + ' (n = ' + xh.n + ')'
    )
}

export const ManyLinesHistogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHistogramData(rawData)) return null
    return (
        <Chart
            id="many-histograms"
            fref={fref}
            data={chartData}
            size={[480, 380]}
            padding={[80, 40, 60, 70]}
            theme={customTheme}
        >
            <Histogram {...histogramProps} data={rawData} density={true}>
                <Typography variant={'title'} position={[-55, -50]}>
                    Many distributions
                </Typography>
                <Typography variant={'subtitle'} position={[-55, -30]}>
                    Distributions where variance decreases with mean
                </Typography>
                <DownloadButtons position={[310, -50]} data image />
                <MilestoneMotion initialOn={'axes'}>
                    <Axis variant={'left'} label={'density'} />
                    <Axis variant={'bottom'}>
                        <AxisLine
                            variant={'bottom'}
                            style={{ strokeWidth: 1, visibility: 'visible' }}
                        />
                        <AxisTicks variant={'bottom'} ticks={8} />
                        <AxisLabel variant={'bottom'}>values (a.u.)</AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'legend'}>
                    <Legend
                        offset={[8, 0]}
                        position={[0, 0]}
                        positionUnits={'relative'}
                        horizontal={false}
                        r={8}
                        itemSize={[100, 20]}
                        itemPadding={[2, 2, 2, 2]}
                        firstOffset={[-85, 24]}
                        symbol={Segment}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'}>
                    <HistogramCurve curve={'Step'} dataComponent={TooltipDataComponent} />
                    <Tooltip itemSize={[200, 24]} labelFormat={customTooltipLabel} />
                </MilestoneMotion>
            </Histogram>
        </Chart>
    )
}

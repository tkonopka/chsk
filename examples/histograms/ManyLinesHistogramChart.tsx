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
} from '@chsk/core'
import { Histogram, HistogramCurve, isHistogramData } from '@chsk/xy'
import { Segment } from '@chsk/annotation'
import {
    alphabetGreek,
    generateMixedPopulation,
    generateUniformPopulation,
    stepSequence,
} from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { downloadTheme } from '@chsk/themes'

const ids = alphabetGreek.slice(0, 4)
export const generateManyLinesHistogramData = () => {
    const means = generateUniformPopulation(4, 5, 9).sort((a, b) => a - b)
    const sds = generateUniformPopulation(4, 0.5, 2.5).sort((a, b) => b - a)
    //    const sds = means.map((x, i) => 1.0 * Math.sqrt(5 / means[i]))
    const positive = (v: number) => v > 0
    return ids.map((id, index) => ({
        id,
        data: generateMixedPopulation([800], [means[index]], [sds[index]]).filter(positive),
    }))
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
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
            strokeWidth: 2.5,
        },
        default: {
            fillOpacity: 0,
        },
    },
})

const histogramProps = {
    breaks: stepSequence([0, 12], 0.25),
    scaleX: {
        variant: 'linear' as const,
        domain: [0, 12] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 'auto'] as [number, 'auto'],
    },
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
                <MilestoneMotion initialOn={'axes'} initial={'invisible'}>
                    <Axis variant={'left'} label={'density'} />
                    <Axis variant={'bottom'}>
                        <AxisLine
                            variant={'bottom'}
                            style={{ strokeWidth: 1, visibility: 'visible' }}
                        />
                        <AxisTicks variant={'bottom'} ticks={8} />
                        <AxisLabel variant={'bottom'} anchor={0.5}>
                            values (a.u.)
                        </AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'} initial={'invisible'}>
                    <HistogramCurve curve={'Step'} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'legend'} initial={'invisible'}>
                    <Legend
                        translate={[8, 0]}
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
            </Histogram>
        </Chart>
    )
}

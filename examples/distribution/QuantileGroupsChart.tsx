import {
    Axis,
    Chart,
    GridLines,
    Legend,
    mergeThemes,
    ThemeSpec,
    TooltipDataItem,
    Typography,
    ViewClip,
    ViewController,
} from '@chsk/core'
import {
    BandHighlight,
    Distribution,
    DistributionProps,
    Distributions,
    DistributionTooltip,
} from '@chsk/band'
import { buttonTheme, tooltipItemLabelValueTheme } from '@chsk/themes'
import { alphabetGreek, randomNormalValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons, IconButton } from '../navigation'

export const generateQuantileGroupsData = () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]
    const generateDistributionSummary = (mean: number, sd: number) => {
        const values = Array(9)
            .fill(0)
            .map(() => randomNormalValue(mean, sd))
            .sort((a, b) => a - b)
        return {
            n: Math.round(randomNormalValue(100, 15)),
            moments: [(values[3] + values[5]) / 2, NaN],
            values: [values[0], values[2], values[4], values[6], values[8]],
            quantiles: q5,
            extrema: [values[0] - 0.5, values[8] + 0.5],
        }
    }
    return alphabetGreek.map(id => ({
        id,
        before: generateDistributionSummary(0, 1),
        after: generateDistributionSummary(0.5, 1),
    }))
}

const customTheme: ThemeSpec = mergeThemes([
    buttonTheme,
    tooltipItemLabelValueTheme,
    {
        line: {
            axis: {
                visibility: 'visible',
            },
            median: {
                stroke: '#161616',
                strokeWidth: 3,
            },
            whisker: {
                stroke: '#161616',
                strokeWidth: 1.5,
            },
        },
        rect: {
            box: {
                fillOpacity: 0.5,
                strokeWidth: 1.5,
            },
        },
        text: {
            axisLabel: {
                textAnchor: 'middle',
                dominantBaseline: 'auto',
            },
            intervalLabel: {
                textAnchor: 'middle',
                fontWeight: 400,
                fill: '#222255',
            },
        },
        AxisLabel: {
            bottom: {
                distance: 60,
            },
        },
        AxisTicks: {
            bottom: {
                labelAngle: -45,
                labelDistance: 10,
                labelStyle: {
                    textAnchor: 'end',
                    dominantBaseline: 'middle',
                },
            },
        },
    },
])

const quantileProps: Omit<DistributionProps, 'data'> = {
    keys: ['before', 'after'],
    paddingInternal: 0,
    scaleIndex: {
        variant: 'band' as const,
        domain: 'auto',
        paddingInner: 0.25,
        paddingOuter: 0.25,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: 'auto' as const,
    },
    scaleColor: {
        variant: 'categorical',
        colors: ['#f2f0f7', '#54278f'],
    },
}

export const QuantileGroupsChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            id="quantileGroups"
            fref={fref}
            data={chartData}
            size={[800, 340]}
            padding={[60, 100, 80, 60]}
            theme={customTheme}
        >
            <Distribution {...quantileProps} data={rawData} autoRescale={false}>
                <GridLines variant={'y'} values={6} />
                <GridLines variant={'x'} />
                <Axis variant={'left'} label={'score (a.u.)'} ticks={6} />
                <Axis variant={'bottom'} label={'Samples'} />
                <ViewClip id={'quantile-groups'}>
                    <Distributions
                        boxStyle={{ stroke: '#222222' }}
                        whiskerStyle={{ stroke: '#161616' }}
                        middleStyle={{ stroke: '#161616' }}
                        whiskerCapWidth={0.75}
                    />
                    <BandHighlight style={{ fill: '#222222', opacity: 0.3 }} />
                </ViewClip>
                <ViewController
                    variant={'x'}
                    container={{ position: [1, 0], positionUnits: 'relative', offset: [12, 0] }}
                    component={IconButton}
                />
                <Legend
                    position={[650, 260]}
                    positionUnits={'absolute'}
                    size={[100, 100]}
                    sizeUnits={'absolute'}
                    horizontal={false}
                    anchor={[0, 1]}
                    padding={[0, 0, 0, 0]}
                    r={9}
                    itemSize={[100, 20]}
                    itemPadding={[2, 2, 2, 2]}
                />
                <Typography variant={'title'} position={[0, -35]}>
                    Many distributions
                </Typography>
                <Typography variant={'subtitle'} position={[0, -16]}>
                    Boxes and whiskers drawn from pre-computed quantile data
                </Typography>
                <DownloadButtons position={[620, 270]} data image />
                <DistributionTooltip
                    anchor={[0, 0.5]}
                    offset={[24, 0]}
                    maxOverhang={[40, 40, 40, 40]}
                    padding={[8, 8, 8, 8]}
                    itemSize={[160, 26]}
                    cellSize={[40, 20]}
                    cellPadding={20}
                    labelFormat={(x: TooltipDataItem) => x.key ?? ''}
                    valueFormat={round2dp}
                    title={''}
                    style={{ strokeWidth: 1, stroke: '#000000' }}
                    labelStyle={{ fontWeight: 600 }}
                />
            </Distribution>
        </Chart>
    )
}

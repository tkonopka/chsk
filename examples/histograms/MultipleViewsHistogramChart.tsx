import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    MilestoneMotion,
    Surface,
    ThemeSpec,
    Typography,
    Grid,
    GridItem,
} from '@chsk/core'
import { BoxedLabel } from '@chsk/annotation'
import { Histogram, HistogramCurve, HistogramProps, isHistogramData } from '@chsk/xy'
import { generateMixedPopulation, stepSequence } from '../utils'
import { MilestoneStory } from '../types'

export const generateMultipleViewsHistogramData = () => [
    {
        id: 'small',
        data: generateMixedPopulation([60, 40], [0, 1.2], [0.8, 1]),
    },
    {
        id: 'medium',
        data: generateMixedPopulation([360, 240], [0, 1.2], [0.8, 1]),
    },
    {
        id: 'large',
        data: generateMixedPopulation([2160, 1440], [0, 1.2], [0.8, 1]),
    },
]

const multiviewTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
    },
    path: {
        default: {
            fillOpacity: 0,
        },
        histogramCurve: {
            strokeWidth: 3,
        },
    },
    rect: {
        inner: {
            fill: '#ffffff00',
            stroke: '#222222',
            strokeWidth: 1,
        },
        boxedLabel: {
            fill: '#f6f6f6',
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        title: {
            fontWeight: 400,
        },
    },
}

// props for Histograms
const multiviewHistogramProps: Pick<HistogramProps, 'variant' | 'breaks' | 'scaleX' | 'scaleY'> = {
    variant: 'density',
    breaks: stepSequence([-3, 4], 0.4),
    scaleX: { variant: 'linear', domain: [-3, 4] },
    scaleY: { variant: 'linear', domain: [0, 0.55] },
}

// an animated label that first appears large, then positions itself in a corner
const AppearingLabel = ({ enterOn, n }: { enterOn: string; n: number }) => {
    const enter = { opacity: 1, scale: 1.5 }
    const transition = { type: 'spring' as const, delay: 0.5, duration: 1.0 }
    return (
        <MilestoneMotion enter={enter} enterOn={enterOn} enterTransition={transition}>
            <BoxedLabel
                position={[1, 0]}
                positionUnits={'relative'}
                size={[60, 24]}
                sizeUnits={'absolute'}
                anchor={[1, 0]}
            >
                {'n = ' + n}
            </BoxedLabel>
        </MilestoneMotion>
    )
}

export const MultipleViewsHistogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHistogramData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="multiview"
            size={[600, 340]}
            padding={[60, 40, 40, 60]}
            theme={multiviewTheme}
        >
            <Grid grid={[3, 1]} spacing={[6, 0]}>
                <GridItem index={0}>
                    <MilestoneMotion enterOn={'small'}>
                        <Histogram {...multiviewHistogramProps} data={rawData}>
                            <GridLines variant={'y'} />
                            <Surface />
                            <Axis variant={'bottom'} />
                            <HistogramCurve ids={['small']} />
                            <Axis variant={'left'}>
                                <AxisTicks tickSize={0} />
                                <AxisLabel>probability density</AxisLabel>
                            </Axis>
                            <AppearingLabel enterOn={'small'} n={rawData[0].data.length} />
                        </Histogram>
                    </MilestoneMotion>
                </GridItem>
                <GridItem index={1}>
                    <MilestoneMotion enterOn={'medium'}>
                        <Histogram {...multiviewHistogramProps} data={rawData}>
                            <GridLines variant={'y'} />
                            <Surface />
                            <Axis variant={'bottom'} label={'values (a.u.)'} />
                            <HistogramCurve ids={['medium']} />
                            <AppearingLabel enterOn={'medium'} n={rawData[1].data.length} />
                        </Histogram>
                    </MilestoneMotion>
                </GridItem>
                <GridItem index={2}>
                    <MilestoneMotion enterOn={'large'}>
                        <Histogram {...multiviewHistogramProps} data={rawData}>
                            <GridLines variant={'y'} />
                            <Surface />
                            <Axis variant={'bottom'} />
                            <HistogramCurve ids={['large']} />
                            <AppearingLabel enterOn={'large'} n={rawData[2].data.length} />
                        </Histogram>
                    </MilestoneMotion>
                </GridItem>
            </Grid>
            <Typography variant={'title'} position={[0, -40]}>
                Three measurements of the same distribution
            </Typography>
            <MilestoneMotion enterOn={'subtitle'}>
                <Typography variant={'subtitle'} position={[0, -20]}>
                    Measurements involve sampling n points from a distribution
                </Typography>
            </MilestoneMotion>
        </Chart>
    )
}

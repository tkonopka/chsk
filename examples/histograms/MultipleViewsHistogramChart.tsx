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
    ContainerProps,
} from '@chsk/core'
import { BoxedLabel } from '@chsk/annotation'
import { Histogram, HistogramCurve, isHistogramData } from '@chsk/xy'
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
const multiviewHistogramProps = {
    units: 'relative' as const,
    breaks: stepSequence([-3, 4], 0.4),
    density: true,
    scaleX: {
        variant: 'linear' as const,
        domain: [-3, 4] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 0.55] as [number, number],
    },
}

// animation settings for boxed label
const boxedLabelInitial = {
    opacity: 1,
    scale: 1.5,
}
const boxedLabelTransition = {
    type: 'spring' as const,
    delay: 0.5,
    duration: 1.0,
}

export const MultipleViewsHistogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHistogramData(rawData)) return null
    const containerA: ContainerProps = { size: [0.333, 1], position: [0, 0] }
    const containerB: ContainerProps = { size: [0.333, 1], position: [0.35, 0] }
    const containerC: ContainerProps = { size: [0.333, 1], position: [0.7, 0] }
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="multiview"
            size={[600, 340]}
            padding={[60, 40, 40, 60]}
            theme={multiviewTheme}
        >
            <MilestoneMotion initialOn={'small'}>
                <Histogram container={containerA} {...multiviewHistogramProps} data={rawData}>
                    <GridLines variant={'y'} shift={[-0.6]} />
                    <Surface />
                    <Axis variant={'bottom'} />
                    <HistogramCurve ids={['small']} />
                    <Axis variant={'left'}>
                        <AxisTicks variant={'left'} tickSize={0} />
                        <AxisLabel variant={'left'}>probability density</AxisLabel>
                    </Axis>
                    <MilestoneMotion
                        initial={boxedLabelInitial}
                        initialOn={'small'}
                        exit={null}
                        transition={boxedLabelTransition}
                    >
                        <BoxedLabel
                            position={[1, 0]}
                            positionUnits={'relative'}
                            size={[60, 24]}
                            sizeUnits={'absolute'}
                            translate={[-30, 12]}
                        >
                            {'n = ' + rawData[0].data.length}
                        </BoxedLabel>
                    </MilestoneMotion>
                </Histogram>
            </MilestoneMotion>
            <MilestoneMotion initialOn={'medium'}>
                <Histogram container={containerB} {...multiviewHistogramProps} data={rawData}>
                    <GridLines variant={'y'} shift={[-0.6]} />
                    <Surface />
                    <Axis variant={'bottom'} label={'values (a.u.)'} />
                    <HistogramCurve ids={['medium']} />
                    <Axis variant={'left'}>
                        <AxisTicks variant={'left'} tickSize={0} ticks={[]} />
                    </Axis>
                    <MilestoneMotion
                        initial={boxedLabelInitial}
                        initialOn={'small'}
                        exit={null}
                        transition={boxedLabelTransition}
                    >
                        <BoxedLabel
                            position={[1, 0]}
                            positionUnits={'relative'}
                            size={[60, 24]}
                            sizeUnits={'absolute'}
                            translate={[-30, 12]}
                        >
                            {'n = ' + rawData[1].data.length}
                        </BoxedLabel>
                    </MilestoneMotion>
                </Histogram>
            </MilestoneMotion>
            <MilestoneMotion initialOn={'large'}>
                <Histogram container={containerC} {...multiviewHistogramProps} data={rawData}>
                    <GridLines variant={'y'} shift={[-0.6]} />
                    <Surface />
                    <Axis variant={'bottom'} />
                    <HistogramCurve ids={['large']} />
                    <Axis variant={'left'}>
                        <AxisTicks variant={'left'} tickSize={0} ticks={[]} />
                    </Axis>
                    <MilestoneMotion
                        initial={boxedLabelInitial}
                        initialOn={'small'}
                        exit={null}
                        transition={boxedLabelTransition}
                    >
                        <BoxedLabel
                            position={[1, 0]}
                            positionUnits={'relative'}
                            size={[60, 24]}
                            sizeUnits={'absolute'}
                            translate={[-30, 12]}
                        >
                            {'n = ' + rawData[2].data.length}
                        </BoxedLabel>
                    </MilestoneMotion>
                </Histogram>
            </MilestoneMotion>
            <Typography variant={'title'} position={[0, -40]}>
                Three measurements of the same distribution
            </Typography>
            <MilestoneMotion initialOn={'subtitle'}>
                <Typography variant={'subtitle'} position={[0, -20]}>
                    Measurements involve sampling n points from a distribution
                </Typography>
            </MilestoneMotion>
        </Chart>
    )
}

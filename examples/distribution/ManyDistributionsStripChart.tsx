import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    Surface,
    ThemeSpec,
    Typography,
    TooltipDataItem,
    mergeTheme,
} from '@chsk/core'
import {
    BandHighlight,
    Distribution,
    Distributions,
    DistributionTooltip,
    Strip,
    Strips,
} from '@chsk/band'
import { tooltipItemLabelValueTheme } from '@chsk/themes'
import { generateMixedPopulation, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { alphabetGreek, randomNormalValue } from '../utils'

export const generateManyDistributionsData = () => {
    return alphabetGreek.map((id, i) => ({
        id,
        data: generateMixedPopulation(
            [randomNormalValue(25, 4)],
            [0.8 + i * 0.2],
            [0.5 + i * 0.05]
        ),
    }))
}

export const customTheme: ThemeSpec = mergeTheme(tooltipItemLabelValueTheme, {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
        grid: {
            strokeDasharray: '5 5',
            stroke: '#999999',
        },
        median: {
            stroke: '#dd0000',
            strokeWidth: 3,
            strokeLinecap: 'round',
        },
    },
    rect: {
        inner: {
            stroke: '#222222',
            strokeWidth: 1,
            fill: '#ffffff',
        },
    },
})

const customProps = {
    keys: ['data'],
    scaleIndex: {
        variant: 'band' as const,
        paddingOuter: 0.1,
        paddingInner: 0.2,
    },
    scaleValue: {
        variant: 'linear' as const,
    },
}

export const ManyDistributionsStripChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="manyDistributions"
            size={[800, 340]}
            padding={[60, 40, 60, 60]}
            theme={customTheme}
        >
            <Typography variant={'title'} position={[0, -40]}>
                Many distributions
            </Typography>
            <Typography variant={'subtitle'} position={[0, -18]}>
                Letters arranged in alphabetical order, values in ascending order
            </Typography>
            <Strip {...customProps} data={rawData} jitter={'ascending'}>
                <Surface />
                <GridLines variant={'y'} />
                <Axis variant={'bottom'}>
                    <AxisTicks
                        variant={'bottom'}
                        tickSize={5}
                        labelRotate={-90}
                        labelOffset={9}
                        labelStyle={{ textAnchor: 'end', dominantBaseline: 'middle' }}
                    />
                </Axis>
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} tickSize={5} />
                    <AxisLabel variant={'left'}>Measurements (a.u.)</AxisLabel>
                </Axis>
                <Axis variant={'right'}>
                    <AxisTicks variant={'right'} tickSize={5} />
                </Axis>
                <Strips />
            </Strip>
            <Distribution
                {...customProps}
                data={rawData}
                scaleIndex={{ variant: 'band', paddingOuter: 0.15, paddingInner: 0.3 }}
            >
                <Distributions
                    boxStyle={{ visibility: 'hidden' }}
                    whiskerStyle={{ visibility: 'hidden' }}
                    middleStyle={{ stroke: '#dd0000' }}
                />
                <BandHighlight style={{ fill: '#cccccc', opacity: 0.3 }} />
                <DistributionTooltip
                    anchor={[0, 0.5]}
                    translate={[20, 0]}
                    maxOverhang={[40, 40, 40, 40]}
                    padding={[8, 8, 8, 8]}
                    itemSize={[160, 26]}
                    cellSize={[40, 20]}
                    cellPadding={20}
                    labelFormat={(x: TooltipDataItem) => x.id ?? ''}
                    valueFormat={round2dp}
                    title={''}
                    style={{ strokeWidth: 1, stroke: '#000000' }}
                    labelStyle={{ fontWeight: 600 }}
                />
            </Distribution>
        </Chart>
    )
}

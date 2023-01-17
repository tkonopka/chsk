import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    Surface,
    ThemeSpec,
    Typography,
} from '@chsk/core'
import { BandHighlight, Quantile, Quantiles, Strip, Strips } from '@chsk/band'
import { generateMixedPopulation } from '../utils'
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

export const customTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
        grid: {
            strokeDasharray: '5 5',
            stroke: '#999999',
        },
    },
    rect: {
        inner: {
            stroke: '#222222',
            strokeWidth: 1,
            fill: '#ffffff',
        },
    },
}

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
            <Strip {...customProps} data={rawData} variant={'ascending'}>
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
            <Quantile
                {...customProps}
                data={rawData}
                scaleIndex={{ variant: 'band', paddingOuter: 0.15, paddingInner: 0.3 }}
            >
                <Quantiles
                    boxStyle={{ visibility: 'hidden' }}
                    whiskerStyle={{ visibility: 'hidden' }}
                    medianStyle={{ stroke: '#dd0000', strokeWidth: 3, strokeLinecap: 'round' }}
                />
                <BandHighlight style={{ fill: '#cccccc', opacity: 0.3 }} />
            </Quantile>
            <Typography variant={'title'} position={[0, -40]}>
                Many distributions
            </Typography>
            <Typography variant={'subtitle'} position={[0, -18]}>
                Letters arranged in alphabetical order, values in ascending order
            </Typography>
        </Chart>
    )
}

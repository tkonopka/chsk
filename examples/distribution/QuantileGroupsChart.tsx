import { Axis, Chart, GridLines, Legend, mergeTheme, ThemeSpec, Typography } from '@chsk/core'
import { BandHighlight, Quantile, QuantileProps, Quantiles } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { alphabetGreek, randomNormalValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateQuantileGroupsData = () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]
    const generateQuantileSummary = (mean: number, sd: number) => {
        const values = Array(9)
            .fill(0)
            .map(() => randomNormalValue(mean, sd))
            .sort((a, b) => a - b)
        return {
            values: [values[0], values[2], values[4], values[6], values[8]],
            quantiles: q5,
            extrema: [values[0] - 0.5, values[8] + 0.5],
        }
    }
    return alphabetGreek.map(id => ({
        id,
        before: generateQuantileSummary(0, 1),
        after: generateQuantileSummary(0.5, 1),
    }))
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    line: {
        axis: {
            visibility: 'visible',
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
            offset: 60,
        },
    },
    AxisTicks: {
        bottom: {
            labelRotate: -45,
            labelOffset: 10,
            labelStyle: {
                textAnchor: 'end',
                alignmentBaseline: 'middle',
            },
        },
    },
})

const quantileProps: Omit<QuantileProps, 'data'> = {
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
            <Quantile {...quantileProps} data={rawData} autoRescale={false}>
                <GridLines variant={'y'} values={6} />
                <GridLines variant={'x'} />
                <Axis variant={'left'} label={'score (a.u.)'} ticks={6} />
                <Axis variant={'bottom'} label={'Samples'} />
                <Quantiles
                    boxStyle={{ fillOpacity: 0.5, stroke: '#222222', strokeWidth: 1.5 }}
                    whiskerStyle={{ stroke: '#161616', strokeWidth: 1.5 }}
                    medianStyle={{ stroke: '#161616', strokeWidth: 3 }}
                    whiskerCapWidth={0.75}
                />
                <BandHighlight style={{ fill: '#222222', opacity: 0.3 }} />
                <Legend
                    position={[650, 260]}
                    size={[100, 100]}
                    units={'absolute'}
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
            </Quantile>
        </Chart>
    )
}

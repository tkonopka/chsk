import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    Legend,
    AxisLine,
    Tooltip,
    TooltipDataItem,
    TooltipData,
} from '@chsk/core'
import { Quantile, QuantileProps, Quantiles, Strip, StripProps, Strips } from '@chsk/band'
import { generateMixedPopulation, round2dp } from '../utils'
import { MilestoneStory } from '../types'

const stripAndBoxKeys = ['x', 'y', 'z']

export const generateStripAndBoxData = () => [
    {
        id: 'controls',
        x: generateMixedPopulation([50, 2], [20, 20], [5, 8]).filter(v => v >= 0),
    },
    {
        id: 'A',
        y: generateMixedPopulation([50, 2], [20, 25], [6, 10]).filter(v => v >= 0),
    },
    {
        id: 'B',
        z: generateMixedPopulation([50, 2], [30, 40], [6, 8]).filter(v => v >= 0),
    },
]

const customTheme: ThemeSpec = {
    line: {
        intervalLabel: {
            strokeWidth: 1,
            stroke: '#222255',
        },
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
}

const stripProps: Omit<StripProps, 'data'> = {
    keys: stripAndBoxKeys,
    paddingInternal: null,
    scaleIndex: {
        variant: 'band' as const,
        domain: 'auto' as const,
        paddingInner: 0.4,
        paddingOuter: 0.3,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 'auto' as const],
    },
}
const quantileProps: Omit<QuantileProps, 'data'> = {
    keys: stripAndBoxKeys,
    paddingInternal: null,
    scaleIndex: {
        variant: 'band' as const,
        domain: 'auto',
        paddingInner: 0.2,
        paddingOuter: 0.2,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 'auto' as const],
    },
}

const customTooltipTitle = (x: TooltipData) => {
    const x0 = x.data?.[0]
    if (!x0) return undefined
    return x0?.key
}
const customTooltipLabel = (x: TooltipDataItem) => {
    const values = 'values' in x ? (x['values'] as number[]) : ([] as number[])
    const roundedValues = values.map(v => round2dp(v))
    const q1q3 = '[' + roundedValues[1] + ', ' + roundedValues[3] + ']'
    return roundedValues[2] + ' ' + q1q3
}

export const StripAndBoxChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            id="stripAndBox"
            fref={fref}
            data={chartData}
            size={[320, 400]}
            padding={[60, 40, 60, 60]}
            theme={customTheme}
        >
            <Strip {...stripProps} data={rawData}>
                <MilestoneMotion initialOn={'axes'} initial={'invisible'}>
                    <GridLines variant={'y'} />
                    <Axis variant={'left'} label={'counts'} ticks={6} />
                    <Axis variant={'bottom'} label={'counts'}>
                        <AxisLine variant={'bottom'} />
                    </Axis>
                    <Legend
                        position={[5, 360]}
                        positionUnits={'absolute'}
                        size={[300, 80]}
                        sizeUnits={'absolute'}
                        horizontal={true}
                        anchor={[0, 1]}
                        padding={[20, 0, 20, 0]}
                        r={10.5}
                        itemSize={[85, 20]}
                        itemPadding={[2, 2, 2, 2]}
                        firstOffset={[-85, 24]}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'strips'} initial={'invisible'}>
                    <Strips />
                </MilestoneMotion>
            </Strip>
            <Quantile {...quantileProps} data={rawData}>
                <MilestoneMotion initialOn={'quantiles'} initial={'invisible'}>
                    <Quantiles
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 1.5 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 1.5 }}
                        medianStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.3}
                    />
                    <Tooltip
                        padding={[4, 0, 4, 0]}
                        itemSize={[160, 26]}
                        itemPadding={[4, 8, 4, 8]}
                        titleFormat={customTooltipTitle}
                        labelFormat={customTooltipLabel}
                    />
                </MilestoneMotion>
            </Quantile>
        </Chart>
    )
}

import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    Legend,
    AxisLine,
    TooltipDataItem,
} from '@chsk/core'
import { Quantile, Quantiles, QuantileTooltip, Strip, StripProps, Strips } from '@chsk/band'
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
        'tooltipItem.label': { textAnchor: 'start' },
        'tooltipItem.value': {
            textAnchor: 'start',
            fontWeight: 600,
            dominantBaseline: 'central',
        },
    },
}

const stripProps: Omit<StripProps, 'data'> = {
    keys: stripAndBoxKeys,
    variant: 'layered',
    scaleIndex: {
        variant: 'band' as const,
        domain: 'auto' as const,
        paddingInner: 0.2,
        paddingOuter: 0.2,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 'auto' as const],
    },
}

export const StripAndBoxChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            id="stripAndBox"
            fref={fref}
            data={chartData}
            size={[360, 400]}
            padding={[40, 60, 60, 80]}
            theme={customTheme}
        >
            <Strip {...stripProps} data={rawData} paddingInternal={0.4}>
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} values={6} />
                    <Axis variant={'left'} label={'counts'} ticks={6} />
                    <Axis variant={'bottom'} label={'counts'}>
                        <AxisLine variant={'bottom'} />
                    </Axis>
                    <Legend
                        position={[0, 1]}
                        positionUnits={'relative'}
                        anchor={[0, 0]}
                        offset={[5, 5]}
                        horizontal={true}
                        padding={[10, 0, 10, 0]}
                        r={10}
                        itemSize={[85, 20]}
                        itemPadding={[2, 2, 2, 2]}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'strips'}>
                    <Strips />
                </MilestoneMotion>
            </Strip>
            <Quantile {...stripProps} data={rawData} paddingInternal={0}>
                <MilestoneMotion enterOn={'quantiles'}>
                    <Quantiles
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 1.5 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 1.5 }}
                        middleStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.3}
                    />
                    <QuantileTooltip
                        maxOverhang={[40, 40, 40, 40]}
                        size={[200, 140]}
                        cellSize={[40, 20]}
                        cellPadding={20}
                        padding={[8, 8, 8, 8]}
                        itemSize={[160, 26]}
                        labelFormat={(x: TooltipDataItem) => x.key ?? ''}
                        valueFormat={round2dp}
                        title={''}
                    />
                </MilestoneMotion>
            </Quantile>
        </Chart>
    )
}

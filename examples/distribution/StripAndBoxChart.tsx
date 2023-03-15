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
import {
    Distribution,
    Distributions,
    DistributionTooltip,
    Strip,
    StripProps,
    Strips,
} from '@chsk/band'
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
            padding={[60, 60, 60, 80]}
            theme={customTheme}
        >
            <Strip {...stripProps} data={rawData} paddingInternal={0.4}>
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
            <Distribution {...stripProps} data={rawData} paddingInternal={0}>
                <MilestoneMotion initialOn={'quantiles'} initial={'invisible'}>
                    <Distributions
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 1.5 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 1.5 }}
                        middleStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.3}
                    />
                    <DistributionTooltip
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
            </Distribution>
        </Chart>
    )
}

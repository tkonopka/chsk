import { Chart, Axis, GridLines, MilestoneMotion, ThemeSpec, Legend, AxisLine } from '@chsk/core'
import { Quantile, QuantileProps, Quantiles, Strip, StripProps, Strips } from '@chsk/band'
import { generateMixedPopulation } from '../utils'
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
                        size={[300, 80]}
                        units={'absolute'}
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
                </MilestoneMotion>
            </Quantile>
        </Chart>
    )
}

import {
    Chart,
    Axis,
    ThemeSpec,
    TooltipDataItem,
    Legend,
    MilestoneMotion,
    mergeThemes,
} from '@chsk/core'
import { tooltipItemLabelValueTheme, buttonTheme } from '@chsk/themes'
import {
    BarAndWhisker,
    isStripData,
    Distribution,
    Distributions,
    DistributionTooltip,
    Strip,
    StripProps,
    Strips,
} from '@chsk/band'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { generateMixedPopulation, generateUniformPopulation, round2dp } from '../utils'

export const generateBarStripData = () => {
    const means = generateUniformPopulation(6, 10, 80)
    const ids = ['alpha', 'beta', 'gamma']
    const positive = (v: number) => v >= 0
    return ids.map((id, index) => ({
        id,
        x: generateMixedPopulation([6], [means[2 * index]], [10]).filter(positive),
        y: generateMixedPopulation([6], [means[2 * index + 1]], [10]).filter(positive),
    }))
}

export const customTheme: ThemeSpec = mergeThemes([
    buttonTheme,
    tooltipItemLabelValueTheme,
    {
        line: {
            axis: {
                stroke: '#222222',
                strokeWidth: 2,
            },
            tick: {
                strokeWidth: 1,
            },
        },
        text: {
            tickLabel: {
                fontSize: '12px',
            },
        },
    },
])

const stripProps: Omit<StripProps, 'data'> = {
    keys: ['x', 'y'],
    paddingInternal: 0.3,
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

export const BarStripChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isStripData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="bar-and-whisker"
            size={[360, 400]}
            padding={[40, 140, 70, 70]}
            theme={customTheme}
        >
            <Distribution {...stripProps} data={rawData} paddingInternal={0}>
                <Axis variant={'bottom'} label={''} />
                <Axis variant={'left'} label={'Measurements (a.u.)'} />
                <DownloadButtons position={[160, 350]} data image />
                <Legend
                    offset={[20, 0]}
                    position={[1, 1]}
                    positionUnits={'relative'}
                    anchor={[0, 1]}
                    title={'Conditions'}
                    itemSize={[100, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    r={9}
                />
                <MilestoneMotion initialOn={'boxes'} exitOn={'bars'}>
                    <Distributions
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 2 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 2 }}
                        middleStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.5}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'bars'}>
                    <Distributions
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 2 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 2 }}
                        middleStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.5}
                        component={BarAndWhisker}
                    />
                </MilestoneMotion>
                <Strip
                    {...stripProps}
                    data={rawData}
                    valueSize={4}
                    style={{ pointerEvents: 'none' }}
                >
                    <MilestoneMotion initialOn={'points'} exitOn={'barsonly'}>
                        <Strips symbolStyle={{ strokeWidth: 1, stroke: '#161616' }} />
                    </MilestoneMotion>
                </Strip>
                <DistributionTooltip
                    maxOverhang={[40, 40, 40, 40]}
                    size={[200, 140]}
                    anchor={[0.5, 0]}
                    offset={[0, 15]}
                    cellSize={[40, 20]}
                    cellPadding={20}
                    padding={[8, 8, 8, 8]}
                    itemSize={[160, 26]}
                    labelFormat={(x: TooltipDataItem) => x.id + ' - ' + x.key}
                    valueFormat={round2dp}
                    title={''}
                />
            </Distribution>
        </Chart>
    )
}

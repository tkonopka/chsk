import {
    Chart,
    Axis,
    AxisTicks,
    AxisLabel,
    GridLines,
    Legend,
    ThemeSpec,
    mergeTheme,
} from '@chask/core'
import { Bar, Bars } from '@chask/band'
import { downloadThemePiece } from '@chask/themes'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const groupedIds = ['alpha', 'beta', 'gamma']
const groupedKeys = ['before', 'after']

export const generateGroupedData = () =>
    generateBarData({
        ids: groupedIds,
        keys: groupedKeys,
        interval: [15, 95],
    })

export const generateDivergingGroupedData = () =>
    generateBarData({
        ids: groupedIds,
        keys: groupedKeys,
        interval: [-95, 95],
    })

const groupedTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    text: {
        title: {
            fontSize: '16px',
            fontWeight: 600,
        },
        legendTitle: {
            fontSize: '16px',
            fontWeight: 600,
        },
    },
    Colors: {
        categorical: {
            variant: 'categorical' as const,
            colors: 'Paired' as const,
        },
    },
})

export const GroupedVerticalBandChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-vertical"
            size={[320, 360]}
            padding={[30, 40, 60, 75]}
            theme={groupedTheme}
        >
            <Bar
                data={rawData}
                keys={groupedKeys}
                scaleIndex={{
                    variant: 'band',
                    domain: groupedIds,
                    padding: 0.2,
                }}
            >
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} />
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'} offset={55} anchor={0.5}>
                        Measurements
                    </AxisLabel>
                    <AxisTicks variant={'left'} labelFormat={v => v + '%'} />
                </Axis>
                <Bars />
                <Legend
                    position={[95, 310]}
                    size={[160, 30]}
                    units={'absolute'}
                    anchor={[0.5, 0]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[90, 30]}
                    itemPadding={[2, 2, 2, 2]}
                    horizontal={true}
                />
            </Bar>
        </Chart>
    )
}

export const GroupedHorizontalBandChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-horizontal"
            size={[480, 280]}
            padding={[80, 40, 30, 80]}
            theme={groupedTheme}
        >
            <Bar
                data={rawData}
                keys={groupedKeys}
                scaleIndex={{
                    variant: 'band',
                    domain: groupedIds,
                    padding: 0.2,
                }}
                horizontal={true}
            >
                <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'top'} />
                <Axis variant={'left'}>
                    <AxisTicks
                        variant={'left'}
                        labelOffset={60}
                        labelStyle={{ textAnchor: 'start' }}
                    />
                </Axis>
                <Bars />
                <Legend
                    position={[-60, -22]}
                    size={[300, 80]}
                    units={'absolute'}
                    horizontal={true}
                    anchor={[0, 1]}
                    padding={[20, 0, 20, 0]}
                    r={10.5}
                    itemSize={[85, 20]}
                    itemPadding={[2, 0, 2, 0]}
                    firstOffset={[-85, 24]}
                    title={'Measurements (arbitrary values)'}
                />
            </Bar>
        </Chart>
    )
}

export const GroupedHorizontalAutoBandChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-autoscale"
            size={[480, 280]}
            padding={[80, 40, 30, 80]}
            theme={groupedTheme}
        >
            <Bar
                data={rawData}
                keys={groupedKeys}
                scaleIndex={{
                    variant: 'band',
                    domain: groupedIds,
                    padding: 0.2,
                }}
                scaleValue={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                horizontal={true}
            >
                <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'top'} />
                <Axis variant={'left'}>
                    <AxisTicks
                        variant={'left'}
                        labelOffset={60}
                        labelStyle={{ textAnchor: 'start' }}
                    />
                </Axis>
                <Bars />
                <Legend
                    position={[-60, -22]}
                    size={[300, 80]}
                    units={'absolute'}
                    horizontal={true}
                    anchor={[0, 1]}
                    padding={[20, 0, 20, 0]}
                    r={10.5}
                    itemSize={[85, 20]}
                    itemPadding={[2, 0, 2, 0]}
                    firstOffset={[-85, 24]}
                    title={'Measurements (arbitrary values)'}
                />
                <DownloadButtons position={[300, 190]} data image />
            </Bar>
        </Chart>
    )
}

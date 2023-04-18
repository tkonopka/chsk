import { MilestoneStory } from '../types'
import { Axis, AxisTicks, Chart, GridLines, Legend, Tooltip } from '@chsk/core'
import { BandSurface, Bar, Bars } from '@chsk/band'
import { DownloadButtons } from '../navigation'
import { generateBarData } from './generators'
import { groupedKeys, groupedIds, groupedTheme } from './GroupedVerticalBarChart'

export const generateDivergingBarData = () =>
    generateBarData({
        ids: groupedIds,
        keys: groupedKeys,
        interval: [-95, 95],
    })

export const DivergingBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-diverging"
            size={[480, 300]}
            padding={[90, 40, 40, 80]}
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
                    nice: 3,
                }}
                horizontal={true}
            >
                <BandSurface interactive={true} tooltip={true} style={{ fill: '#f0f0f0' }} />
                <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'top'} />
                <Axis variant={'left'}>
                    <AxisTicks labelDistance={60} labelStyle={{ textAnchor: 'start' }} />
                </Axis>
                <Bars />
                <GridLines
                    variant={'x'}
                    values={[0]}
                    style={{ stroke: '#222222', strokeWidth: 3 }}
                    expansion={[5, 0]}
                />
                <Tooltip />
                <Legend
                    position={[-60, -80]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    r={10.5}
                    itemSize={[85, 25]}
                    itemPadding={[2, 0, 2, 0]}
                    firstOffset={[-85, 24]}
                    title={'Measurements (arbitrary values)'}
                />
                <DownloadButtons position={[300, 190]} data image />
            </Bar>
        </Chart>
    )
}

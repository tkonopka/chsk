import { MilestoneStory } from '../types'
import {
    Axis,
    AxisTicks,
    Chart,
    GridLines,
    Legend,
    Tooltip,
    TooltipDataComponent,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
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
                <Bars dataComponent={TooltipDataComponent} />
                <Tooltip position={[0, -10]} anchor={[0.5, 1]} />
                <Legend
                    position={[-60, -45]}
                    positionUnits={'absolute'}
                    size={[300, 80]}
                    sizeUnits={'absolute'}
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

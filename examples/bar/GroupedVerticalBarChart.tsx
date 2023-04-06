import {
    Chart,
    Axis,
    AxisTicks,
    AxisLabel,
    GridLines,
    Legend,
    ThemeSpec,
    mergeTheme,
    Tooltip,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { schemePaired } from 'd3-scale-chromatic'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'

export const groupedIds = ['alpha', 'beta', 'gamma']
export const groupedKeys = ['before', 'after']

export const generateGroupedData = () =>
    generateBarData({
        ids: groupedIds,
        keys: groupedKeys,
        interval: [15, 95],
    })

export const groupedTheme: ThemeSpec = mergeTheme(buttonTheme, {
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
            colors: schemePaired,
        },
    },
})

export const GroupedVerticalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
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
                <Tooltip />
                <Legend
                    position={[95, 310]}
                    positionUnits={'absolute'}
                    size={[160, 30]}
                    sizeUnits={'absolute'}
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

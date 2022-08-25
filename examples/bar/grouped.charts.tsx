import { Chart, Axis, AxisTicks, AxisLabel, GridLines, Legend, ThemeSpec } from '@chask/core'
import { Bar, Bars } from '@chask/band'
import { generateBarData } from './generators'

const groupedIds = ['alpha', 'beta', 'gamma']
const groupedKeys = ['before', 'after']
const groupedData = generateBarData({
    ids: groupedIds,
    keys: groupedKeys,
    interval: [15, 95],
})

const groupedTheme: ThemeSpec = {
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
}

export const GroupedVerticalBandChart = () => {
    return (
        <Chart
            id="grouped-vertical"
            size={[320, 360]}
            padding={[30, 40, 60, 75]}
            theme={groupedTheme}
        >
            <Bar
                data={groupedData}
                keys={groupedKeys}
                scaleIndex={{
                    variant: 'band',
                    domain: groupedIds,
                    padding: 0.2,
                }}
            >
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
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

export const GroupedHorizontalBandChart = () => {
    return (
        <Chart
            id="grouped-horizontal"
            size={[480, 280]}
            padding={[80, 40, 30, 80]}
            theme={groupedTheme}
        >
            <Bar
                data={groupedData}
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

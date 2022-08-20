import { Chart, Axis, GridLines, Legend } from '@chask/core'
import { Bar, Bars } from '@chask/band'
import { generateBarData } from './generators'

export const stackedIds = ['A', 'B', 'C', 'D', 'E', 'F']
export const stackedKeys = ['alpha', 'beta', 'gamma', 'delta', 'epsilon']
export const stackedData = generateBarData({
    ids: stackedIds,
    keys: stackedKeys,
    interval: [5, 25],
})

export const StackedVerticalBandChart = () => {
    return (
        <Chart
            id="stacked-vertical"
            size={[600, 400]}
            padding={[40, 120, 60, 60]}
            style={{ display: 'inline-block' }}
        >
            <Bar
                data={stackedData}
                keys={stackedKeys}
                stacked={true}
                scaleIndex={{
                    variant: 'band',
                    domain: stackedIds,
                    padding: 0.2,
                }}
            >
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'bottom'} />
                <Axis variant={'left'} />
                <Bars />
                <Legend
                    position={[440, 300]}
                    size={[80, 120]}
                    units={'absolute'}
                    anchor={[0, 1]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Legend Title'}
                />
            </Bar>
        </Chart>
    )
}

export const StackedHorizontalBandChart = () => {
    return (
        <Chart
            id="stacked-vertical"
            size={[600, 400]}
            padding={[90, 40, 30, 60]}
            style={{ display: 'inline-block' }}
        >
            <Bar
                data={stackedData}
                keys={stackedKeys}
                stacked={true}
                scaleIndex={{
                    variant: 'band',
                    domain: stackedIds,
                    padding: 0.2,
                }}
                horizontal={true}
            >
                <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Axis variant={'top'} />
                <Axis variant={'left'} />
                <Bars />
                <Legend
                    position={[0, -30]}
                    size={[300, 80]}
                    units={'absolute'}
                    horizontal={true}
                    anchor={[0, 1]}
                    padding={[20, 0, 20, 0]}
                    r={10.5}
                    itemSize={[85, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    firstOffset={[-85, 24]}
                    title={'Legend Title'}
                />
            </Bar>
        </Chart>
    )
}

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

export const StackedVerticalBandChart = () => (
    <Chart id="stacked-vertical" size={[480, 400]} padding={[40, 120, 60, 60]}>
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
            <Axis variant={'bottom'} label={'Samples'} />
            <Axis variant={'left'} label={'Measurements (a.u.)'} />
            <Bars />
            <Legend
                position={[310, 300]}
                size={[80, 120]}
                units={'absolute'}
                anchor={[0, 1]}
                padding={[0, 12, 0, 12]}
                r={10.5}
                itemSize={[80, 20]}
                itemPadding={[2, 2, 2, 2]}
                title={'Groups'}
            />
        </Bar>
    </Chart>
)

export const StackedHorizontalBandChart = () => (
    <Chart id="stacked-horizontal" size={[600, 320]} padding={[90, 40, 30, 60]}>
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
            <Axis variant={'left'} label={'Samples'} />
            <Bars />
            <Legend
                position={[0, -20]}
                size={[300, 80]}
                units={'absolute'}
                horizontal={true}
                anchor={[0, 1]}
                padding={[20, 0, 20, 0]}
                r={10.5}
                itemSize={[85, 20]}
                itemPadding={[2, 2, 2, 2]}
                firstOffset={[-85, 24]}
                title={'Measurements (a.u.)'}
            />
        </Bar>
    </Chart>
)

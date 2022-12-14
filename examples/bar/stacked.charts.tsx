import { Chart, Axis, GridLines, Legend } from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const stackedIds = ['A', 'B', 'C', 'D', 'E', 'F']
export const stackedKeys = ['alpha', 'beta', 'gamma', 'delta', 'epsilon']
export const generateStackedData = () =>
    generateBarData({
        ids: stackedIds,
        keys: stackedKeys,
        interval: [5, 25],
    })

export const StackedVerticalBandChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="stacked-vertical"
            size={[480, 400]}
            padding={[40, 120, 60, 60]}
            theme={downloadThemePiece}
        >
            <Bar
                data={rawData}
                keys={stackedKeys}
                variant={'stacked'}
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
                    position={[310, 280]}
                    positionUnits={'absolute'}
                    size={[80, 120]}
                    sizeUnits={'absolute'}
                    anchor={[0, 1]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Groups'}
                />
                <DownloadButtons position={[320, 350]} data image />
            </Bar>
        </Chart>
    )
}

export const StackedHorizontalBandChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="stacked-horizontal"
            size={[600, 320]}
            padding={[90, 40, 40, 60]}
            theme={downloadThemePiece}
        >
            <Bar
                data={rawData}
                keys={stackedKeys}
                variant={'stacked'}
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
                    title={'Measurements (a.u.)'}
                />
                <DownloadButtons position={[440, 210]} data image />
            </Bar>
        </Chart>
    )
}

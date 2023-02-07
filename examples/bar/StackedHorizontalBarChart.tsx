import { Chart, Axis, GridLines, Legend, Tooltip, TooltipProvider } from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { stackedIds, stackedKeys } from './StackedVerticalBarChart'

export const StackedHorizontalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
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
                <TooltipProvider>
                    <Bars />
                    <Tooltip />
                </TooltipProvider>
                <Legend
                    position={[-2, -45]}
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

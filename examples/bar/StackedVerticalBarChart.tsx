import { Chart, Axis, GridLines, Legend, TooltipDataComponent, Tooltip } from '@chsk/core'
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

export const StackedVerticalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
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
                <Bars dataComponent={TooltipDataComponent} />
                <Tooltip position={[0, -10]} rx={2} ry={2} anchor={[0.5, 1]} />
                <Legend
                    position={[310, 280]}
                    positionUnits={'absolute'}
                    size={[80, 120]}
                    sizeUnits={'absolute'}
                    anchor={[0, 1]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 23]}
                    itemPadding={[1, 2, 2, 1]}
                    title={'Groups'}
                />
                <DownloadButtons position={[320, 350]} data image />
            </Bar>
        </Chart>
    )
}

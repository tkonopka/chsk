import { Chart, Axis, GridLines, Legend, Tooltip, TooltipProvider } from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { InsetColorFilter } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
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
            theme={buttonTheme}
        >
            <InsetColorFilter id={'darker'} floodColor={'#000000'} erodeR={0} floodOpacity={0.2} />
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
                    <Bars
                        modifiers={{ onMouseEnter: { filter: 'url(#darker)' }, onMouseLeave: {} }}
                    />
                    <Tooltip />
                </TooltipProvider>
                <Legend
                    position={[-2, -80]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    r={10.5}
                    itemSize={[85, 25]}
                    itemPadding={[2, 2, 2, 2]}
                    firstOffset={[-85, 24]}
                    title={'Measurements (a.u.)'}
                />
                <DownloadButtons position={[440, 210]} data image />
            </Bar>
        </Chart>
    )
}

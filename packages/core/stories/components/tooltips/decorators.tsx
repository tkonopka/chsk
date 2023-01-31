import { ReactNode } from 'react'
import { Chart, Surface, Tooltip, TooltipProvider, View } from '../../../src'
import { viewSeriesIndexesKeys } from '../decorators'
import { DetectorWithTooltip, ShapesWithTooltip } from './tooltips'

export const ChartForDetectorTooltipDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface key={'surface'} variant={'inner'} />
            <TooltipProvider key={'provider'}>
                <DetectorWithTooltip key={'detector'} />
                {Story()}
            </TooltipProvider>
        </View>
    </Chart>
)

export const ChartForShapesTooltipDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface key={'surface'} variant={'inner'} />
            <TooltipProvider key={'provider'}>
                <ShapesWithTooltip key={'shapes'} />
                {Story()}
            </TooltipProvider>
        </View>
    </Chart>
)

export const ChartWithDetectorWithTooltipDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface key={'surface'} variant={'inner'} />
            <TooltipProvider key={'provider'}>
                <DetectorWithTooltip key={'detector'} />
                <Tooltip
                    size={[100, 48]}
                    style={{ strokeWidth: 1, stroke: '#222222', fill: '#f0f85d' }}
                >
                    <rect x={0} y={0} width={100} height={48} className={'tooltip surface'} />
                    {Story()}
                </Tooltip>
            </TooltipProvider>
        </View>
    </Chart>
)

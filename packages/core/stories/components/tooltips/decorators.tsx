import { ReactNode } from 'react'
import { Chart, Surface, Tooltip, View } from '../../../src'
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
            <DetectorWithTooltip key={'detector'}>{Story()}</DetectorWithTooltip>
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
            <ShapesWithTooltip key={'shapes'}>{Story()}</ShapesWithTooltip>
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
            <DetectorWithTooltip key={'detector'}>
                <Tooltip>{Story()}</Tooltip>
            </DetectorWithTooltip>
        </View>
    </Chart>
)

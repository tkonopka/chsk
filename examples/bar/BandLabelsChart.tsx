import { Chart, Axis, GridLines, LabelProps } from '@chask/core'
import { Bar, Bars, BandLabels } from '@chask/band'
import { BoxedLabel } from '@chask/annotation'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'

const stackedIds = ['A', 'B', 'C', 'D', 'E', 'F']
const stackedKeys = ['alpha', 'beta', 'gamma']

export const generateBandLabelsData = () =>
    generateBarData({
        ids: stackedIds,
        keys: stackedKeys,
        interval: [5, 25],
    })

const StyledBoxedLabel = (props: LabelProps) => {
    return (
        <BoxedLabel
            {...props}
            position={props.position ?? [0, 0]}
            size={props.size ?? [0, 0]}
            textStyle={{ fill: '#ffffff' }}
            boxStyle={{ fill: '#62a2e4' }}
            rx={2}
            ry={2}
        />
    )
}

export const BandLabelsChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        fref={fref}
        data={chartData}
        id="band-labels"
        size={[600, 320]}
        padding={[60, 120, 60, 60]}
    >
        <Bar
            data={rawData}
            keys={['alpha', 'beta']}
            horizontal={true}
            variant={'stacked'}
            scaleIndex={{
                variant: 'band',
                domain: stackedIds,
                padding: 0.2,
            }}
        >
            <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
            <Axis variant={'bottom'} label={'Value (a.u.)'} />
            <Axis variant={'left'} />
            <Bars />
            <BandLabels
                translate={[40, 0]}
                size={[0.95, 0.95]}
                component={StyledBoxedLabel}
                format={v => String(v.gamma)}
            />
            <StyledBoxedLabel position={[460, -14]} size={[80, 26]} children={'3rd variable'} />
        </Bar>
    </Chart>
)

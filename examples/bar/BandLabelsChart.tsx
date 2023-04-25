import { Chart, Axis, GridLines, LabelProps, Tooltip, Legend, mergeTheme } from '@chsk/core'
import { Bar, Bars, BandLabels } from '@chsk/band'
import { BoxedLabel } from '@chsk/annotation'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { buttonTheme } from '@chsk/themes'

const stackedIds = ['A', 'B', 'C', 'D', 'E', 'F']
const stackedKeys = ['alpha', 'beta', 'gamma', 'delta']

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
            boxStyle={{ fill: '#777788' }}
            rx={2}
            ry={2}
        />
    )
}

const customTheme = mergeTheme(buttonTheme, {
    text: {
        legendTitle: {
            fontSize: '18px',
            fontWeight: 600,
        },
    },
})

export const BandLabelsChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        fref={fref}
        data={chartData}
        id="band-labels"
        size={[600, 320]}
        padding={[80, 120, 60, 60]}
        theme={customTheme}
    >
        <Bar
            data={rawData}
            keys={['alpha', 'beta', 'gamma']}
            horizontal={true}
            variant={'stacked'}
            scaleIndex={{
                variant: 'band',
                domain: stackedIds,
                padding: 0.2,
            }}
            scaleColor={{
                variant: 'categorical',
                colors: ['#3182bd', '#6baed6', '#bdd7e7'],
            }}
        >
            <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
            <Axis variant={'bottom'} label={'Value (a.u.)'} />
            <Axis variant={'left'} />
            <Bars />
            <BandLabels
                offset={[40, 0]}
                size={[0.95, 0.95]}
                component={StyledBoxedLabel}
                format={v => String(v.delta)}
            />
            <StyledBoxedLabel position={[460, -18]} size={[55, 26]}>
                delta
            </StyledBoxedLabel>
            <Legend
                position={[-2, -60]}
                positionUnits={'absolute'}
                horizontal={true}
                r={10}
                itemSize={[85, 26]}
                itemPadding={[2, 2, 2, 2]}
                firstOffset={[-85, 26]}
                title={'Measurements'}
            />
            <DownloadButtons position={[440, 225]} data image />
            <Tooltip />
        </Bar>
    </Chart>
)

import {
    Chart,
    Axis,
    GridLines,
    Surface,
    Typography,
    Tooltip,
    TooltipDataItem,
    NumericPositionSpec,
    ViewClip,
    ViewController,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve, ScatterCrosshair } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { IconButton } from '../navigation'
import { round2dp } from '../utils'
import { generateRandomWalk } from './generators'

export const generateRandomWalksData = () => [
    {
        id: 'alpha',
        data: generateRandomWalk(300),
    },
    {
        id: 'beta',
        data: generateRandomWalk(300),
    },
]

const customLabelFormat = (x: TooltipDataItem) => {
    const p: NumericPositionSpec = 'point' in x ? (x['point'] as NumericPositionSpec) : [0, 0]
    return x.id + ' ' + '(' + round2dp(p[0]) + ', ' + round2dp(p[1]) + ')'
}

export const RandomWalksChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="random-walks"
            size={[640, 400]}
            padding={[80, 80, 70, 80]}
            theme={buttonTheme}
        >
            <Surface variant={'outer'} style={{ fill: '#f6f6f6' }} />
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
            >
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb' }} />
                <GridLines
                    variant={'y'}
                    values={[0]}
                    style={{ stroke: '#111111', strokeWidth: 2 }}
                />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <ViewClip id={'two-walks'}>
                    <ScatterCurve
                        ids={['alpha']}
                        curve={'Natural'}
                        style={{ stroke: '#ffffff', strokeWidth: 7, fillOpacity: 0 }}
                    />
                    <ScatterCurve
                        ids={['alpha']}
                        curve={'Natural'}
                        style={{ strokeWidth: 4, fillOpacity: 0 }}
                    />
                    <ScatterCurve
                        ids={['beta']}
                        curve={'Natural'}
                        style={{ stroke: '#ffffff', strokeWidth: 7, fillOpacity: 0 }}
                    />
                    <ScatterCurve
                        ids={['beta']}
                        curve={'Natural'}
                        style={{ strokeWidth: 4, fillOpacity: 0 }}
                    />
                </ViewClip>
                <ScatterCrosshair
                    variant={'vertical'}
                    style={{ strokeDasharray: 5, stroke: '#000000', strokeWidth: 0.5 }}
                    symbolStyle={{ stroke: '#222222', strokeWidth: 3 }}
                />
                <ViewController
                    container={{ position: [1, 0], offset: [20, 0] }}
                    component={IconButton}
                />
                <Typography variant={'title'} position={[0, -40]}>
                    Two random walks
                </Typography>
                <Tooltip
                    offset={[20, 0]}
                    itemSize={[140, 24]}
                    anchor={[0, 0.5]}
                    labelFormat={customLabelFormat}
                    title={''}
                />
            </Scatter>
        </Chart>
    )
}

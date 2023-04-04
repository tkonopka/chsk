import {
    Chart,
    Axis,
    GridLines,
    Typography,
    LinearGradient,
    ViewClip,
    ViewController,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterArea, ScatterCurve } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { IconButton } from '../navigation'

export const generateRandomWalkData = () => [
    {
        id: 'alpha',
        data: generateRandomWalk(200).map(d => ({ x: d.x, y: 100 + d.y })),
    },
]

export const RandomWalkAreaChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="random-walk-area"
            size={[600, 400]}
            padding={[60, 60, 60, 60]}
            theme={buttonTheme}
        >
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
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <GridLines
                    variant={'y'}
                    values={[0]}
                    style={{ stroke: '#111111', strokeWidth: 2 }}
                />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <LinearGradient
                    id={'area-grad'}
                    start={[0, 0]}
                    end={[0, 0.8]}
                    stops={['#3f9cde', '#ffffff']}
                />
                <ViewClip id={'area-curve'}>
                    <ScatterArea
                        ids={['alpha']}
                        curve={'Natural'}
                        style={{
                            strokeWidth: 0,
                            fill: 'url(#area-grad)',
                            opacity: 0.25,
                            fillOpacity: 1,
                        }}
                    />
                    <ScatterCurve
                        ids={['alpha']}
                        curve={'Natural'}
                        style={{ strokeWidth: 3, fillOpacity: 0 }}
                    />
                </ViewClip>
                <ViewController
                    container={{ position: [1, 0], offset: [10, 0] }}
                    component={IconButton}
                />
                <Typography variant={'title'} position={[0, -30]}>
                    Shifted random walk
                </Typography>
            </Scatter>
        </Chart>
    )
}

import { Chart, Axis, GridLines, Typography, LinearGradient } from '@chsk/core'
import { isScatterData, Scatter, ScatterArea, ScatterCurve } from '@chsk/xy'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'

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
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                r={3}
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
                <ScatterArea
                    ids={['alpha']}
                    curve={'Natural'}
                    style={{ strokeWidth: 0, fill: 'url(#area-grad)', opacity: 0.25 }}
                />
                <ScatterCurve ids={['alpha']} curve={'Natural'} style={{ strokeWidth: 3 }} />
                <Typography variant={'title'} position={[0, -30]}>
                    Shifted random walk
                </Typography>
            </Scatter>
        </Chart>
    )
}

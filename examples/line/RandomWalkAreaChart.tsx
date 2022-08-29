import { Chart, Axis, GridLines, Typography, LinearGradient } from '@chask/core'
import { Scatter, ScatterArea, ScatterCurve } from '@chask/xy'
import { generateRandomWalk } from './generators'

const walkData = [
    {
        id: 'alpha',
        data: generateRandomWalk(200).map(d => ({ x: d.x, y: 100 + d.y })),
    },
]

export const RandomWalkAreaChart = () => (
    <Chart id="random-walk-area" size={[600, 400]} padding={[60, 60, 60, 60]}>
        <Scatter
            data={walkData}
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
            <GridLines variant={'y'} values={[0]} style={{ stroke: '#111111', strokeWidth: 2 }} />
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
            <Typography variant={'title'} position={[0, -30]} children={'Shifted random walk'} />
        </Scatter>
    </Chart>
)

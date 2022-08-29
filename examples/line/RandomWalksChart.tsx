import { Chart, Axis, GridLines, Surface, Typography, Line } from '@chask/core'
import { Scatter, ScatterCurve } from '@chask/xy'
import { generateRandomWalk } from './generators'

const walksData = [
    {
        id: 'alpha',
        data: generateRandomWalk(300),
    },
    {
        id: 'beta',
        data: generateRandomWalk(300),
    },
]

export const RandomWalksChart = () => (
    <Chart id="random-walks" size={[600, 400]} padding={[60, 60, 60, 60]}>
        <Surface variant={'outer'} style={{ fill: '#f6f6f6' }} />
        <Scatter
            data={walksData}
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
            <GridLines variant={'y'} style={{ stroke: '#bbbbbb' }} />
            <GridLines variant={'y'} values={[0]} style={{ stroke: '#111111', strokeWidth: 2 }} />
            <Axis variant={'bottom'} label={'x values (a.u.)'} />
            <Axis variant={'left'} label={'y values (a.u.)'} />
            <ScatterCurve
                ids={['alpha']}
                curve={'Natural'}
                style={{ stroke: '#ffffff', strokeWidth: 7 }}
            />
            <ScatterCurve ids={['alpha']} curve={'Natural'} style={{ strokeWidth: 4 }} />
            <ScatterCurve
                ids={['beta']}
                curve={'Natural'}
                style={{ stroke: '#ffffff', strokeWidth: 7 }}
            />
            <ScatterCurve ids={['beta']} curve={'Natural'} style={{ strokeWidth: 4 }} />
            <Typography variant={'title'} position={[0, -30]} children={'Two random walks'} />
        </Scatter>
    </Chart>
)

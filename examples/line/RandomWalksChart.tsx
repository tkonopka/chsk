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

export const RandomWalksChart = () => {
    return (
        <Chart
            id="random-walks"
            size={[600, 400]}
            padding={[60, 60, 60, 60]}
            style={{ display: 'inline-block' }}
        >
            <Surface variant={'outer'} style={{ fill: '#f4f4f4' }} />
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
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <GridLines
                    variant={'y'}
                    values={[0]}
                    style={{ stroke: '#111111', strokeWidth: 2 }}
                />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <ScatterCurve
                    ids={['alpha']}
                    curve={'Natural'}
                    style={{ stroke: '#ffffff', strokeWidth: 6 }}
                />
                <ScatterCurve
                    ids={['alpha']}
                    curve={'Natural'}
                    style={{ stroke: '#ff0000', strokeWidth: 3 }}
                />
                <ScatterCurve
                    ids={['beta']}
                    curve={'Natural'}
                    style={{ stroke: '#ffffff', strokeWidth: 6 }}
                />
                <ScatterCurve
                    ids={['beta']}
                    curve={'Natural'}
                    style={{ stroke: '#0000ff', strokeWidth: 3 }}
                />
                <Typography variant={'title'} position={[0, -30]} children={'Random walks'} />
            </Scatter>
        </Chart>
    )
}

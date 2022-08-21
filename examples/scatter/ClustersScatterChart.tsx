import { Chart, Axis, GridLines, Legend, Surface } from '@chask/core'
import { Scatter, ScatterPoints } from '@chask/xy'
import { generateXYValues } from './generators'
import { randomNormalValue } from '../utils'

const clusterData = [
    {
        id: 'alpha',
        data: generateXYValues(
            80,
            () => randomNormalValue(0, 1),
            x => randomNormalValue(0, 1)
        ),
    },
    {
        id: 'beta',
        data: generateXYValues(
            80,
            () => randomNormalValue(3, 1),
            x => x + randomNormalValue(0, 3)
        ),
    },
    {
        id: 'gamma',
        data: generateXYValues(
            80,
            () => randomNormalValue(1, 1),
            x => 4 + x + randomNormalValue(0, 1)
        ),
    },
]

export const ClustersScatterChart = () => {
    return (
        <Chart id="uniform-scatter" size={[600, 400]} padding={[40, 120, 60, 60]}>
            <Scatter
                data={clusterData}
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
                <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                <Surface style={{ fill: '#ffffff', stroke: '#222222', strokeWidth: 1 }} />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <ScatterPoints />
                <Legend
                    position={[440, 80]}
                    size={[80, 80]}
                    units={'absolute'}
                    anchor={[0, 0.5]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Legend Title'}
                />
            </Scatter>
        </Chart>
    )
}

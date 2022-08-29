import {
    Chart,
    Axis,
    GridLines,
    Legend,
    Surface,
    SizeSpec,
    getMinMax,
    ThemeSpec,
} from '@chask/core'
import { Scatter, ScatterPoints } from '@chask/xy'
import { generateXYValues } from './generators'
import { randomNormalValue } from '../utils'
import { BoxedTitle } from '../../packages/annotation/src'

const multiviewData = [
    {
        id: 'alpha',
        data: generateXYValues(
            80,
            () => randomNormalValue(-0.2, 1),
            ['A', 'B', 'C'],
            [
                x => 0.5 * x + randomNormalValue(0, 1),
                x => 0.5 * x + randomNormalValue(0, 1.5),
                x => 0.5 * x + randomNormalValue(0, 2),
            ]
        ),
    },
    {
        id: 'beta',
        data: generateXYValues(
            80,
            () => randomNormalValue(0.2, 1),
            ['A', 'B', 'C'],
            [
                x => x + randomNormalValue(0, 1),
                x => x + randomNormalValue(0, 1.5),
                x => x + randomNormalValue(0, 2),
            ]
        ),
    },
]
type RecordABC = { x: number; A: number; B: number; C: number }
const multiviewRange = getMinMax(
    multiviewData
        .map(seriesData => {
            const data = seriesData.data as RecordABC[]
            return data.map(d => [d.A, d.B, d.C]).flat()
        })
        .flat()
)

const commonProps = {
    size: [0.3333, 1] as SizeSpec,
    units: 'relative' as const,
    data: multiviewData,
    x: 'x',
    y: 'A',
    r: 3,
    scaleX: {
        variant: 'linear' as const,
        domain: 'auto' as const,
        nice: true,
    },
    scaleY: {
        variant: 'linear' as const,
        domain: multiviewRange as [number, number],
        nice: true,
    },
}

const multiviewTheme: ThemeSpec = {
    line: {
        grid: {
            stroke: '#bbbbbb',
            strokeWidth: 1,
            strokeDasharray: '3 3',
        },
    },
    rect: {
        inner: {
            fill: '#ffffff00',
            stroke: '#222222',
            strokeWidth: 1,
        },
        boxedLabel: {
            fill: '#f2f2f2',
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
    },
}

export const MultipleViewsScatterChart = () => (
    <Chart
        id="multiple-views-scatter"
        size={[600, 280]}
        padding={[40, 120, 60, 60]}
        theme={multiviewTheme}
    >
        <Scatter position={[0, 0]} {...commonProps} y={'A'}>
            <GridLines variant={'y'} />
            <GridLines variant={'x'} />
            <Surface />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'y values (a.u.)'} />
            <ScatterPoints />
            <BoxedTitle variant={'top'} expansion={[0, 0, 0, 0]}>
                Device A
            </BoxedTitle>
            <Legend
                position={[440, 80]}
                size={[80, 80]}
                units={'absolute'}
                anchor={[0, 0.5]}
                padding={[0, 12, 0, 12]}
                r={10.5}
                itemSize={[80, 20]}
                itemPadding={[2, 2, 2, 2]}
                title={'Populations'}
            />
        </Scatter>
        <Scatter position={[0.35, 0]} {...commonProps} y={'B'}>
            <GridLines variant={'y'} />
            <GridLines variant={'x'} />
            <Surface />
            <Axis variant={'bottom'} label={'x values (a.u.)'} />
            <ScatterPoints />
            <BoxedTitle variant={'top'} expansion={[0, 0, 0, 0]}>
                Device B
            </BoxedTitle>
        </Scatter>
        <Scatter position={[0.7, 0]} {...commonProps} y={'C'}>
            <Surface />
            <GridLines variant={'y'} />
            <GridLines variant={'x'} />
            <Surface />
            <Axis variant={'bottom'} />
            <ScatterPoints />
            <BoxedTitle variant={'top'} expansion={[0, 0, 0, 0]}>
                Device C
            </BoxedTitle>
        </Scatter>
    </Chart>
)

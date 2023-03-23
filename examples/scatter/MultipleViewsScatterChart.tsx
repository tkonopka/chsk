import {
    Chart,
    Axis,
    GridLines,
    Legend,
    MilestoneMotion,
    Surface,
    getMinMax,
    ThemeSpec,
    ContainerProps,
} from '@chsk/core'
import { Scatter, ScatterPoints, isScatterData } from '@chsk/xy'
import { BoxedTitle } from '@chsk/annotation'
import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue } from '../utils'
import { MilestoneStory } from '../types'

export const generateMultiViewsScatterData = () => [
    {
        id: 'alpha',
        data: generateXYValues(
            generateMixedPopulation([80], [-0.2], [1]),
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
            generateMixedPopulation([80], [0.2], [1]),
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

const commonProps = {
    units: 'relative' as const,
    x: 'x',
    y: 'A',
    valueSize: 3,
    scaleX: {
        variant: 'linear' as const,
        domain: 'auto' as const,
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
        boxedTitle: {
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

const enterAnimation = {
    opacity: 0,
    y: -20,
}
const enterTransition = {
    duration: 0.8,
    stiffness: 50,
}

export const MultipleViewsScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    const yDomain = getMinMax(
        rawData
            .map(seriesData => {
                const data = seriesData.data as RecordABC[]
                return data.map(d => [d.A, d.B, d.C]).flat()
            })
            .flat()
    )
    const scaleY = {
        variant: 'linear' as const,
        domain: yDomain as [number, number],
        nice: true,
    }
    const containerA: ContainerProps = { size: [0.3333, 1], position: [0, 0] }
    const containerB: ContainerProps = { size: [0.3333, 1], position: [0.35, 0] }
    const containerC: ContainerProps = { size: [0.3333, 1], position: [0.7, 0] }
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="multiple-views-scatter"
            size={[600, 280]}
            padding={[40, 120, 60, 60]}
            theme={multiviewTheme}
        >
            <Scatter container={containerA} {...commonProps} y={'A'} data={rawData} scaleY={scaleY}>
                <MilestoneMotion
                    initial={enterAnimation}
                    initialOn={'A'}
                    transition={enterTransition}
                >
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} />
                    <Surface />
                    <Axis variant={'bottom'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                    <ScatterPoints />
                    <BoxedTitle variant={'top'} expansion={[0, 0, 0, 0]}>
                        Device A
                    </BoxedTitle>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'legend'}>
                    <Legend
                        position={[440, 80]}
                        positionUnits={'absolute'}
                        size={[80, 80]}
                        sizeUnits={'absolute'}
                        anchor={[0, 0.5]}
                        padding={[0, 12, 0, 12]}
                        r={10.5}
                        itemSize={[80, 20]}
                        itemPadding={[2, 2, 2, 2]}
                        title={'Populations'}
                    />
                </MilestoneMotion>
            </Scatter>
            <MilestoneMotion initial={enterAnimation} initialOn={'B'} transition={enterTransition}>
                <Scatter
                    container={containerB}
                    {...commonProps}
                    y={'B'}
                    data={rawData}
                    scaleY={scaleY}
                >
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} />
                    <Surface />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <ScatterPoints />
                    <BoxedTitle variant={'top'} expansion={[0, 0, 0, 0]}>
                        Device B
                    </BoxedTitle>
                </Scatter>
            </MilestoneMotion>
            <MilestoneMotion initial={enterAnimation} initialOn={'C'} transition={enterTransition}>
                <Scatter
                    container={containerC}
                    {...commonProps}
                    y={'C'}
                    data={rawData}
                    scaleY={scaleY}
                >
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
            </MilestoneMotion>
        </Chart>
    )
}

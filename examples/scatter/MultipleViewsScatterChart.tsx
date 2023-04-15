import {
    Chart,
    Axis,
    GridLines,
    Legend,
    MilestoneMotion,
    Surface,
    getMinMax,
    ThemeSpec,
    Grid,
    GridItem,
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
            fillOpacity: 0,
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
    type: 'spring' as const,
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
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="multiple-views-scatter"
            size={[600, 280]}
            padding={[40, 120, 60, 60]}
            theme={multiviewTheme}
        >
            <Grid grid={[3, 1]} spacing={[8, 0]}>
                <GridItem position={0}>
                    <Scatter {...commonProps} y={'A'} data={rawData} scaleY={scaleY}>
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
                            <BoxedTitle variant={'top'}>Device A</BoxedTitle>
                        </MilestoneMotion>
                        <MilestoneMotion initialOn={'legend'}>
                            <Legend
                                position={[440, 80]}
                                positionUnits={'absolute'}
                                size={[80, 80]}
                                sizeUnits={'absolute'}
                                anchor={[0, 0.5]}
                                padding={[0, 12, 0, 12]}
                                r={10}
                                itemSize={[80, 22]}
                                itemPadding={[2, 2, 2, 2]}
                                title={'Populations'}
                            />
                        </MilestoneMotion>
                    </Scatter>
                </GridItem>
                <GridItem position={1}>
                    <MilestoneMotion
                        initial={enterAnimation}
                        initialOn={'B'}
                        transition={enterTransition}
                    >
                        <Scatter {...commonProps} y={'B'} data={rawData} scaleY={scaleY}>
                            <GridLines variant={'y'} />
                            <GridLines variant={'x'} />
                            <Surface />
                            <Axis variant={'bottom'} label={'x values (a.u.)'} />
                            <ScatterPoints />
                            <BoxedTitle variant={'top'}>Device B</BoxedTitle>
                        </Scatter>
                    </MilestoneMotion>
                </GridItem>
                <GridItem position={2}>
                    <MilestoneMotion
                        initial={enterAnimation}
                        initialOn={'C'}
                        transition={enterTransition}
                    >
                        <Scatter {...commonProps} y={'C'} data={rawData} scaleY={scaleY}>
                            <GridLines variant={'y'} />
                            <GridLines variant={'x'} />
                            <Surface />
                            <Axis variant={'bottom'} />
                            <ScatterPoints />
                            <BoxedTitle variant={'top'}>Device C</BoxedTitle>
                        </Scatter>
                    </MilestoneMotion>
                </GridItem>
            </Grid>
        </Chart>
    )
}

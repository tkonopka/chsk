import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    MilestoneMotion,
    Typography,
    Legend,
    LegendItem,
    Segment,
    getMinMax,
    ThemeSpec,
    LegendTitle,
} from '@chask/core'
import { isScatterData, Scatter, ScatterPoints, Regression } from '@chask/xy'
import { generateRegressionData } from '../line/generators'
import { MilestoneStory } from '../types'
import { BlockArrow, BracketLabel } from '../../packages/annotation/src'

export const generateOutlierScatterData = () => [
    {
        id: 'points',
        data: generateRegressionData(60, [1, 4], [5, -1], 1).concat(
            generateRegressionData(20, [0.5, 4.5], [5, -1], 0.5)
        ),
    },
    {
        id: 'outliers',
        data: generateRegressionData(3, [4.8, 5.3], [14, 1], 1),
    },
]

const customTheme: ThemeSpec = {
    line: {
        regression: {
            strokeWidth: 4,
            strokeLinecap: 'round',
        },
        pooled: {
            stroke: '#aaaaaa',
        },
        points: {
            stroke: '#222222',
        },
    },
    path: {
        outliers: {
            stroke: '#777777',
        },
        blockArrow: {
            strokeWidth: 0,
            fill: '#dd0000',
        },
    },
    text: {
        bracketLabel: {
            textAnchor: 'end',
            alignmentBaseline: 'middle',
        },
    },
    circle: {
        default: {
            strokeWidth: 0.5,
            stroke: '#ffffff',
        },
    },
}

export const OutlierScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    const outlierX = getMinMax(rawData[1].data.map(point => Number(point.x)))
    const outlierY = getMinMax(rawData[1].data.map(point => Number(point.y)))
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="simpson"
            size={[600, 480]}
            padding={[60, 40, 60, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                r={5}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Category10',
                    domain: ['points', 'outliers'],
                    size: 1,
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
                    <Axis variant={'bottom'} label={'Covariate (a.u.)'} />
                    <Axis variant={'left'}>
                        <AxisLabel variant={'left'}>Measurement (a.u.)</AxisLabel>
                        <AxisTicks variant={'left'} />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'data'}>
                    <ScatterPoints
                        ids={['points', 'outliers']}
                        symbolStyle={{ strokeWidth: 1, stroke: '#ffffff' }}
                    />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'regression1'}>
                    <Regression
                        ids={['points', 'outliers']}
                        variant={'pooled'}
                        className={'pooled'}
                    />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'outliers'}>
                    <BracketLabel
                        variant={'right'}
                        start={[outlierX[0] - 0.2, outlierY[0] - 1]}
                        end={[outlierX[0] - 0.2, outlierY[1] + 1]}
                        units={'view'}
                        className={'outliers'}
                        translate={[-12, 24]}
                    >
                        Outliers
                    </BracketLabel>
                    <BracketLabel
                        variant={'left'}
                        start={[outlierX[1] + 0.2, outlierY[0] - 1]}
                        end={[outlierX[1] + 0.2, outlierY[1] + 1]}
                        units={'view'}
                        className={'outliers'}
                    />
                </MilestoneMotion>
                <MilestoneMotion
                    initial={'invisible'}
                    initialOn={'arrow'}
                    exit={'invisible'}
                    exitOn={'regression2'}
                >
                    <BlockArrow
                        start={[(outlierX[0] + outlierX[1]) / 2, outlierY[0] - 4.5]}
                        end={[(outlierX[0] + outlierX[1]) / 2, outlierY[0] - 2]}
                        stemWidth={10}
                        headWidth={24}
                        className={'outliers'}
                    />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'regression2'}>
                    <Regression
                        ids={['points']}
                        style={{ strokeWidth: 4, stroke: '#222222' }}
                        className={'points'}
                    />
                </MilestoneMotion>
                <Legend
                    position={[50, 20]}
                    size={[160, 60]}
                    units={'absolute'}
                    anchor={[0, 0]}
                    horizontal={false}
                >
                    <MilestoneMotion initial={'invisible'} initialOn={'regression1'}>
                        <LegendTitle variant={'right'} position={[0, 0]} size={[80, 24]}>
                            Regression
                        </LegendTitle>
                        <LegendItem
                            variant={'right'}
                            position={[0, 18]}
                            size={[100, 24]}
                            symbol={Segment}
                            item={'points'}
                            label={'Using entire dataset'}
                            symbolStyle={{
                                ...customTheme.line?.regression,
                                ...customTheme.line?.pooled,
                            }}
                            labelOffset={16}
                            interactive={false}
                        />
                    </MilestoneMotion>
                    <MilestoneMotion initial={'invisible'} initialOn={'regression2'}>
                        <LegendItem
                            variant={'right'}
                            position={[0, 42]}
                            size={[100, 24]}
                            symbol={Segment}
                            item={'pool'}
                            label={'Excluding outliers'}
                            labelOffset={16}
                            symbolStyle={{
                                ...customTheme.line?.regression,
                                ...customTheme.line?.points,
                            }}
                            interactive={false}
                        />
                    </MilestoneMotion>
                </Legend>
                <Typography variant={'title'} position={[-50, -40]}>
                    Effects of outliers
                </Typography>
                <Typography variant={'subtitle'} position={[-50, -20]}>
                    Regression coefficients can shift due to outliers
                </Typography>
            </Scatter>
        </Chart>
    )
}

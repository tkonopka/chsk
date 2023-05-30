import {
    isArray,
    Chart,
    Axis,
    MilestoneMotion,
    Typography,
    Legend,
    LegendItem,
    interval,
    ThemeSpec,
    LegendTitle,
    defaultCategoricalScaleSpec,
} from '@chsk/core'
import { BlockArrow, BracketLabel, Segment } from '@chsk/annotation'
import { isScatterData, Scatter, ScatterPoints, Regression } from '@chsk/xy'
import { generateRegressionData } from '../lines/generators'
import { MilestoneStory } from '../types'

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
            fillOpacity: 0,
        },
        blockArrow: {
            strokeWidth: 0,
            fill: '#dd0000',
        },
    },
    text: {
        bracketLabel: {
            textAnchor: 'end',
            dominantBaseline: 'middle',
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
    const d1 = rawData[1].data
    const outlierX = isArray(d1) ? interval(d1.map(point => Number(point.x))) : [0, 0]
    const outlierY = isArray(d1) ? interval(d1.map(point => Number(point.y))) : [0, 0]
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
                    ...defaultCategoricalScaleSpec,
                    domain: ['points', 'outliers'],
                    size: 1,
                }}
            >
                <MilestoneMotion enterOn={'axes'}>
                    <Axis variant={'bottom'} label={'Covariate (a.u.)'} />
                    <Axis variant={'left'} label={'Measurement (a.u.)'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <ScatterPoints
                        ids={['points', 'outliers']}
                        symbolStyle={{ strokeWidth: 1, stroke: '#ffffff' }}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'regression1'}>
                    <Regression
                        ids={['points', 'outliers']}
                        variant={'pooled'}
                        className={'pooled'}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'outliers'}>
                    <BracketLabel
                        variant={'right'}
                        start={[outlierX[0] - 0.2, outlierY[0] - 1]}
                        end={[outlierX[0] - 0.2, outlierY[1] + 1]}
                        units={'view'}
                        className={'outliers'}
                        offset={[-12, 24]}
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
                <MilestoneMotion enterOn={'arrow'} exitOn={'regression2'}>
                    <BlockArrow
                        start={[(outlierX[0] + outlierX[1]) / 2, outlierY[0] - 4.5]}
                        end={[(outlierX[0] + outlierX[1]) / 2, outlierY[0] - 2]}
                        stemWidth={10}
                        headWidth={24}
                        className={'outliers'}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'regression2'}>
                    <Regression
                        ids={['points']}
                        style={{ strokeWidth: 4, stroke: '#222222' }}
                        className={'points'}
                    />
                </MilestoneMotion>
                <Legend
                    position={[50, 20]}
                    positionUnits={'absolute'}
                    size={[160, 60]}
                    sizeUnits={'absolute'}
                    anchor={[0, 0]}
                    horizontal={false}
                >
                    <MilestoneMotion enterOn={'regression1'}>
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
                            labelDistance={16}
                            interactive={false}
                        />
                    </MilestoneMotion>
                    <MilestoneMotion enterOn={'regression2'}>
                        <LegendItem
                            variant={'right'}
                            position={[0, 42]}
                            size={[100, 24]}
                            symbol={Segment}
                            item={'pool'}
                            label={'Excluding outliers'}
                            labelDistance={16}
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

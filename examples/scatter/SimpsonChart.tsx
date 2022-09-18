import {
    Chart,
    CssProps,
    Circle,
    Axis,
    AxisLabel,
    AxisTicks,
    MilestoneMotion,
    Typography,
    Legend,
    LegendItem,
    Segment,
} from '@chask/core'
import { isScatterData, Scatter, ScatterPoints, Regression } from '@chask/xy'
import { generateRegressionData } from '../line/generators'
import { MilestoneStory } from '../types'

export const generateSimpsonData = () => [
    {
        id: 'A',
        data: generateRegressionData(50, [1, 4], [5, -1], 1).concat(
            generateRegressionData(20, [0.5, 4.5], [5, -1], 0.5)
        ),
    },
    {
        id: 'B',
        data: generateRegressionData(50, [2, 5], [9, -1], 1).concat(
            generateRegressionData(20, [1.5, 5.5], [9, -1], 0.5)
        ),
    },
    {
        id: 'C',
        data: generateRegressionData(50, [3, 6], [13, -1], 1).concat(
            generateRegressionData(20, [2.5, 6.5], [13, -1], 0.5)
        ),
    },
]

const customTheme = {
    line: {
        regression: {
            strokeWidth: 3,
        },
    },
}
const regressionStyle: CssProps = {
    strokeWidth: 4,
    stroke: '#444444',
    strokeDasharray: '9 11',
    strokeLinecap: 'round',
}

export const SimpsonChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="simpson"
            size={[600, 480]}
            padding={[100, 40, 60, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                r={3}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
                    <Axis variant={'bottom'} label={'Covariate (a.u.)'} />
                    <Axis variant={'left'}>
                        <AxisLabel variant={'left'}>Measurement (a.u.)</AxisLabel>
                        <AxisTicks variant={'left'} />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                    <ScatterPoints ids={['A']} />
                    <Regression ids={['A']} variant={'series'} />
                </MilestoneMotion>
                <MilestoneMotion
                    initial={'invisible'}
                    initialOn={'A'}
                    exit={'invisible'}
                    exitOn={'B'}
                >
                    <Regression ids={['A']} variant={'pooled'} style={regressionStyle} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'B'}>
                    <ScatterPoints ids={['B']} />
                    <Regression ids={['B']} variant={'series'} />
                </MilestoneMotion>
                <MilestoneMotion
                    initial={'invisible'}
                    initialOn={'B'}
                    exit={'invisible'}
                    exitOn={'C'}
                >
                    <Regression ids={['A', 'B']} variant={'pooled'} style={regressionStyle} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'C'}>
                    <ScatterPoints ids={['C']} />
                    <Regression ids={['C']} variant={'series'} />
                    <Regression ids={['A', 'B', 'C']} variant={'pooled'} style={regressionStyle} />
                </MilestoneMotion>
                <Typography variant={'title'} position={[-50, -80]}>
                    The Simpson Effect
                </Typography>
                <Typography variant={'subtitle'} position={[-50, -60]}>
                    Regression coefficients can be substantially different for a pool than for
                    subgroups
                </Typography>
                <Legend
                    position={[-50, -45]}
                    size={[400, 30]}
                    units={'absolute'}
                    anchor={[0, 0]}
                    padding={[0, 0, 0, 0]}
                    horizontal={true}
                >
                    <LegendItem
                        variant={'right'}
                        position={[0, 0]}
                        size={[100, 24]}
                        symbol={Circle}
                        item={'A'}
                        label={'Group A'}
                        labelOffset={12}
                    />
                    <LegendItem
                        variant={'right'}
                        position={[100, 0]}
                        size={[100, 24]}
                        symbol={Circle}
                        item={'B'}
                        label={'Group B'}
                        labelOffset={12}
                    />
                    <LegendItem
                        variant={'right'}
                        position={[200, 0]}
                        size={[100, 24]}
                        symbol={Circle}
                        item={'C'}
                        label={'Group C'}
                        labelOffset={12}
                    />
                    <LegendItem
                        variant={'right'}
                        position={[300, 0]}
                        size={[100, 24]}
                        symbol={Segment}
                        item={'pool'}
                        label={'Pool'}
                        labelOffset={14}
                        symbolStyle={{ ...regressionStyle, strokeDasharray: '5 7' }}
                        interactive={false}
                    />
                </Legend>
            </Scatter>
        </Chart>
    )
}

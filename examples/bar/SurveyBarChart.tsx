import {
    Chart,
    Axis,
    Legend,
    LegendItem,
    AxisTicks,
    GridLines,
    ThemeSpec,
    LinearScaleSpec,
    Typography,
} from '@chask/core'
import { Bar, Bars } from '@chask/band'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

const surveyIds = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']

type SurveyItem = {
    id: string
    SA: number // strongly agree
    A: number // agree
    NA: number // neutral on agree side
    ND: number // neutral on disagree side
    D: number // agree
    SD: number // strongly disagree
}

const generateQuestionData = (id: string) => {
    let done = false
    const result: SurveyItem = { id, SD: 0, D: 0, ND: 0, NA: 0, A: 0, SA: 0 }
    while (!done) {
        const values = Array(4)
            .fill(0)
            .map(() => randomUniformValue(5, 35))
        const sum = values[0] + values[1] + values[2] + values[3]
        const neutral = (100 - sum) / 2
        result.SD = -values[0]
        result.D = -values[1]
        result.ND = -neutral
        result.NA = neutral
        result.A = values[2]
        result.SA = values[3]
        done = neutral >= 5
    }
    return result
}

export const generateSurveyData = () => surveyIds.map(id => generateQuestionData(id))

const surveyTheme: ThemeSpec = {
    g: {
        'legendItem:hover': {
            cursor: 'auto',
        },
    },
    LegendItem: {
        default: {
            interactive: false,
        },
    },
}

const surveyProps = {
    variant: 'stacked' as const,
    horizontal: true,
    scaleIndex: {
        variant: 'band' as const,
        padding: 0.25,
    },
}

const surveyColors = {
    SD: '#762a83',
    D: '#9970ab',
    ND: '#dddddd',
    NA: '#dddddd',
    A: '#5aae61',
    SA: '#1b7837',
}

export const SurveyBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    // manually compute extent of value axis
    const surveyData = rawData as Array<SurveyItem>
    const max: number = surveyData
        .map(d => [Math.abs(d.NA + d.A + d.SA), Math.abs(d.ND + d.D + d.SD)])
        .flat()
        .reduce((acc, v) => Math.max(v, acc), 0)
    const valueScaleSpec: LinearScaleSpec = {
        variant: 'linear',
        domain: [-max, max],
    }

    return (
        <Chart
            fref={fref}
            data={chartData}
            id="survey"
            size={[600, 340]}
            padding={[90, 40, 40, 60]}
            theme={surveyTheme}
        >
            <Bar
                data={rawData}
                keys={['ND', 'D', 'SD']}
                {...surveyProps}
                scaleValue={valueScaleSpec}
                scaleColor={{
                    variant: 'categorical',
                    colors: [surveyColors['ND'], surveyColors['D'], surveyColors['SD']],
                }}
            >
                <Axis variant={'top'}>
                    <AxisTicks variant={'top'} ticks={5} labelFormat={s => s + '%'} />
                </Axis>
                <Bars />
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} tickSize={0} />
                </Axis>
                <Legend position={[-30, -60]} units={'absolute'} size={[400, 30]} horizontal={true}>
                    <LegendItem position={[0, 0]} item={'SD'} label={'Strongly disagree'} />
                    <LegendItem position={[140, 0]} item={'D'} label={'Disagree'} />
                    <LegendItem position={[230, 0]} item={'ND'} label={'Neutral'} />
                </Legend>
            </Bar>
            <Bar
                data={rawData}
                keys={['NA', 'A', 'SA']}
                {...surveyProps}
                scaleValue={valueScaleSpec}
                scaleColor={{
                    variant: 'categorical',
                    colors: [surveyColors['NA'], surveyColors['A'], surveyColors['SA']],
                }}
            >
                <Bars />
                <GridLines
                    variant={'x'}
                    values={[0]}
                    style={{ stroke: '#000000', strokeWidth: 2 }}
                />
                <Legend position={[-30, -60]} units={'absolute'} size={[400, 30]} horizontal={true}>
                    <LegendItem position={[320, 0]} item={'A'} label={'Agree'} />
                    <LegendItem position={[410, 0]} item={'SA'} label={'Strongly agree'} />
                </Legend>
            </Bar>
            <Typography variant={'title'} position={[-25, -70]}>
                Survey responses
            </Typography>
        </Chart>
    )
}

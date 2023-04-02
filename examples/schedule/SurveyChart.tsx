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
    mergeTheme,
    Tooltip,
    TooltipDataItem,
} from '@chsk/core'
import { isScheduleData, Schedule, Schedules } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { VerticalGoldenRectangle } from '@chsk/annotation'
import { MilestoneStory } from '../types'
import { randomUniformValue, round1dp } from '../utils'
import { DownloadButtons } from '../navigation'

const surveyIds = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']

const generateQuestionData = (id: string) => {
    let done = false
    const data = []
    while (!done) {
        const values = Array(4)
            .fill(0)
            .map(() => round1dp(randomUniformValue(5, 35)))
        const sum = values[0] + values[1] + values[2] + values[3]
        const neutral = 100 - sum
        done = neutral > 5
        if (done) {
            let start = -values[0] - values[1] - neutral / 2
            data.push({ key: 'SD', value: values[0], start, end: start + values[0] })
            start += values[0]
            data.push({ key: 'D', value: values[1], start, end: start + values[1] })
            start += values[1]
            data.push({ key: 'N', value: neutral, start, end: start + neutral })
            start += neutral
            data.push({ key: 'A', value: values[2], start, end: start + values[2] })
            start += values[2]
            data.push({ key: 'SA', value: values[3], start, end: start + values[3] })
        }
    }
    data.forEach(item => {
        item.value = round1dp(item.value)
        item.start = round1dp(item.start)
        item.end = round1dp(item.end)
    })
    return { id, data }
}
export const generateSurveyData = () => surveyIds.map(id => generateQuestionData(id))

const surveyTheme: ThemeSpec = mergeTheme(buttonTheme, {
    g: {
        'legendItem:hover': {
            cursor: 'auto',
        },
    },
    LegendItem: {
        default: {
            interactive: false,
            labelOffset: 10,
        },
    },
})

const surveyColors = ['#762a83', '#9970ab', '#dddddd', '#5aae61', '#1b7837']
const surveyKeys = ['SD', 'D', 'N', 'A', 'SA']

const customTooltipLabel = (x: TooltipDataItem) => {
    const start = 'start' in x ? Number(x['start']) : 0
    const end = 'end' in x ? Number(x['end']) : 0
    const value = round1dp(end - start)
    return x.key + ': ' + value + '%'
}

export const SurveyChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScheduleData(rawData)) return null

    // manually compute extent of value axis
    const allStartEnd = (data: Record<string, unknown>[]) => {
        return data.map(d => [Number(d['start']), Number(d['end'])]).flat()
    }
    const max: number = rawData
        .map(d => allStartEnd(d.data))
        .flat()
        .reduce((acc, v) => Math.max(Math.abs(v), acc), 0)
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
            padding={[90, 40, 30, 60]}
            theme={surveyTheme}
        >
            <Schedule
                data={rawData}
                keys={surveyKeys}
                horizontal={true}
                scaleIndex={{
                    variant: 'band' as const,
                    padding: 0.25,
                }}
                scaleValue={valueScaleSpec}
                scaleColor={{
                    variant: 'categorical',
                    colors: surveyColors,
                }}
            >
                <Axis variant={'top'}>
                    <AxisTicks variant={'top'} ticks={5} labelFormat={s => s + '%'} />
                </Axis>
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} tickSize={0} />
                </Axis>
                <GridLines variant={'x'} />
                <Schedules />
                <GridLines
                    variant={'x'}
                    values={[0]}
                    style={{ stroke: '#000000', strokeWidth: 2, pointerEvents: 'none' }}
                />
                <Legend
                    position={[-30, -60]}
                    positionUnits={'absolute'}
                    size={[400, 30]}
                    sizeUnits={'absolute'}
                    horizontal={true}
                >
                    <LegendItem
                        position={[0, 0]}
                        item={'SD'}
                        label={'Strongly disagree'}
                        symbol={VerticalGoldenRectangle}
                    />
                    <LegendItem
                        position={[140, 0]}
                        item={'D'}
                        label={'Disagree'}
                        symbol={VerticalGoldenRectangle}
                    />
                    <LegendItem
                        position={[230, 0]}
                        item={'N'}
                        label={'Neutral'}
                        symbol={VerticalGoldenRectangle}
                    />
                    <LegendItem
                        position={[320, 0]}
                        item={'A'}
                        label={'Agree'}
                        symbol={VerticalGoldenRectangle}
                    />
                    <LegendItem
                        position={[410, 0]}
                        item={'SA'}
                        label={'Strongly agree'}
                        symbol={VerticalGoldenRectangle}
                    />
                </Legend>
                <DownloadButtons position={[440, 240]} data image />
                <Tooltip labelFormat={customTooltipLabel} />
            </Schedule>
            <Typography variant={'title'} position={[-25, -70]}>
                Survey responses
            </Typography>
        </Chart>
    )
}

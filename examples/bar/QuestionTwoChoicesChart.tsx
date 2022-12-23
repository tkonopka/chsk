import {
    Chart,
    Axis,
    AxisTicks,
    ThemeSpec,
    Typography,
    mergeTheme,
    Counter,
    CounterProps,
} from '@chsk/core'
import { Bar, Bars, BarsLabels } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'
import { DownloadButtons } from '../navigation'

export const generateQuestionTwoChoicesData = () => {
    const values = [randomUniformValue(5, 50), randomUniformValue(5, 50)]
    const total = values[0] + values[1]
    return [
        {
            id: 'question',
            yes: Math.round((100 * values[0]) / total),
            no: Math.round((100 * values[1]) / total),
        },
    ]
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    AxisTicks: {
        top: {
            tickSize: 0,
            labelOffset: 4,
        },
    },
    text: {
        tickLabel: {
            fontSize: '14px',
        },
        barLabel: {
            fontWeight: 600,
            dominantBaseline: 'middle',
            fontSize: '13px',
        },
        'barLabel.yes': {
            textAnchor: 'start',
            fill: '#ffffff',
        },
        'barLabel.no': {
            textAnchor: 'end',
            fill: '#1b7837',
        },
    },
})

export const CustomCounter = (props: CounterProps) => {
    return <Counter {...props} format={v => String(v) + '%'} />
}

export const QuestionTwoChoicesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="question-binary"
            size={[420, 120]}
            padding={[60, 20, 35, 20]}
            theme={customTheme}
        >
            <Bar
                variant={'stacked'}
                data={rawData}
                keys={['yes', 'no']}
                horizontal={true}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#1b7837', '#ffffff'],
                }}
            >
                <Axis variant={'top'}>
                    <AxisTicks
                        variant={'top'}
                        ticks={[0]}
                        labelStyle={{ textAnchor: 'start' }}
                        labelFormat={() => 'Yes'}
                    />
                    <AxisTicks
                        variant={'top'}
                        ticks={[100]}
                        labelStyle={{ textAnchor: 'end' }}
                        labelFormat={() => 'No'}
                    />
                </Axis>
                <Bars style={{ strokeWidth: 2, stroke: '#1b7837' }} />
                <BarsLabels
                    keys={['yes']}
                    align={[0, 0.5]}
                    padding={[4, 6, 4, 6]}
                    className={'yes'}
                    component={CustomCounter}
                />
                <BarsLabels
                    keys={['no']}
                    align={[1, 0.5]}
                    padding={[4, 6, 4, 6]}
                    className={'no'}
                    component={CustomCounter}
                />
                <DownloadButtons position={[0, 50]} data image />
            </Bar>
            <Typography variant={'title'} position={[0, -30]}>
                Survey question
            </Typography>
        </Chart>
    )
}

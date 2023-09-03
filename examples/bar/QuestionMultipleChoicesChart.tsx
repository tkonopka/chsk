import {
    Chart,
    ThemeSpec,
    Typography,
    mergeTheme,
    indexes,
    BandAxisScale,
    ContinuousAxisScale,
    useScales,
    getTickCoordinates,
    AxisTicksProps,
    NumericPositionSpec,
    X,
    Y,
    Counter,
    CounterProps,
} from '@chsk/core'
import { BandLabels, Bar, Bars } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'
import { DownloadButtons } from '../navigation'

export const generateQuestionMultipleChoicesData = () => {
    const values = Array(5)
        .fill(0)
        .map(() => randomUniformValue(0, 50))
    const total = values.reduce((total, x) => (total += x), 0)
    return values.map((x, index) => ({
        id: 'response' + index,
        value: Math.round((100 * x) / total),
    }))
}

const customLabels: Record<string, string> = {
    response0: 'Alpha',
    response1: 'Beta',
    response2: 'Gamma',
    response3: 'Delta',
    response4: 'Epsilon',
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    text: {
        'tickLabel.left': {
            fontSize: '14px',
            textAnchor: 'start',
        },
        bandLabel: {
            fontSize: '14px',
            fontWeight: 600,
            textAnchor: 'end',
            fill: '#444',
        },
    },
})

const CustomTicks = ({
    labelStyle,
    labelFormat,
    translate = [0, 0],
}: Pick<AxisTicksProps, 'labelStyle' | 'labelFormat'> & { translate?: NumericPositionSpec }) => {
    const { scales } = useScales()
    const scaleX = scales.x as ContinuousAxisScale
    const scaleY = scales.y as BandAxisScale
    const tickValues: string[] = scaleY.domain()
    if (tickValues.length < 1) return null
    const yCoordinates: Array<number> = getTickCoordinates(scaleY, tickValues)
    const xCoordinate = scaleX(0)
    const tickFormat = labelFormat ?? ((v: unknown) => String(v))

    const result = indexes(tickValues).map(i => {
        return (
            <g key={'tick-' + i}>
                <Typography
                    position={[xCoordinate + translate[X], Number(yCoordinates[i]) + translate[Y]]}
                    style={labelStyle}
                    variant={'tick-label'}
                    className={'left'}
                >
                    {tickFormat(customLabels[tickValues[i] as string], i)}
                </Typography>
            </g>
        )
    })
    return <>{result}</>
}

export const CustomCounter = (props: CounterProps) => {
    return <Counter {...props} format={v => String(v) + '%'} />
}

export const QuestionMultipleChoicesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="question-multiple-choice"
            size={[420, 300]}
            padding={[60, 60, 40, 20]}
            theme={customTheme}
        >
            <Bar
                data={rawData}
                keys={['value']}
                horizontal={true}
                scaleIndex={{
                    variant: 'band',
                    padding: 0.65,
                }}
            >
                <Bars />
                <CustomTicks translate={[0, -15]} />
                <BandLabels
                    offset={[50, 0]}
                    size={[0.95, 0.95]}
                    component={CustomCounter}
                    format={item => String(item['value'])}
                />
                <DownloadButtons position={[0, 210]} data image />
            </Bar>
            <Typography variant={'title'} position={[0, -25]}>
                Survey question
            </Typography>
        </Chart>
    )
}

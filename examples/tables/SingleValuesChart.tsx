import {
    Chart,
    Rectangle,
    Counter,
    ThemeSpec,
    mergeTheme,
    NumericPositionSpec,
    Typography,
    View,
    X,
    Y,
    useScales,
    FourSideSizeSpec,
    BOTTOM,
    LEFT,
} from '@chsk/core'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

export const generateSingleValuesData = () => {
    const data = Array(5)
        .fill(0)
        .map(() => Math.round(randomUniformValue(0, 100)))
    return [{ id: 'data', data }]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    text: {
        default: {
            fill: undefined,
        },
        widgetLabel: {
            fontSize: '14px',
            textAnchor: 'start',
            dominantBaseline: 'hanging',
            fill: '#bbb',
        },
        counter: {
            fontSize: '36px',
            textAnchor: 'start',
            dominantBaseline: 'auto',
            fill: '#bbb',
        },
        percent: {
            dominantBaseline: 'auto',
            fill: '#bbb',
        },
        warning: {
            fill: '#555',
        },
        error: {
            fill: '#222',
        },
    },
    tspan: {
        percent: {
            dominantBaseline: 'auto',
            fontSize: '14px',
            fill: 'inherit',
        },
        warning: {
            fill: '#555',
        },
        error: {
            fill: '#222',
        },
    },
    rect: {
        widget: {
            stroke: '#000',
            strokeWidth: 0.5,
        },
    },
    Transition: {
        default: {
            type: 'spring',
            mass: 0.5,
            stiffness: 200,
            damping: 25,
        },
    },
})

export const counterValue = (value: number) => (
    <>
        {value}
        <tspan className={'percent'}> %</tspan>
    </>
)

// a widget to display a label and a percentage
const DashboardValue = ({
    position,
    size = [100, 60],
    padding = [6, 6, 6, 6],
    title,
    value,
    thresholds = [40, 20],
}: {
    position: NumericPositionSpec
    size?: [number, number]
    padding?: FourSideSizeSpec
    title: string
    value: number
    thresholds?: [number, number]
}) => {
    const { scales } = useScales()
    const color = scales.color(value)
    const activeClassName =
        value < thresholds[1] ? ' error' : value < thresholds[0] ? ' warning' : ''
    return (
        <>
            <Rectangle
                fill={color}
                x={position[X]}
                y={position[Y]}
                width={size[X]}
                height={size[Y]}
                className={'widget'}
            />
            <Typography
                position={[position[X] + padding[3], position[Y] + padding[0]]}
                className={'widgetLabel' + activeClassName}
            >
                {title}
            </Typography>
            <Counter
                setRole={false}
                position={[position[X] + padding[LEFT], position[Y] + size[Y] - padding[BOTTOM]]}
                align={[0.5, 0.5]}
                className={activeClassName.trim()}
                format={counterValue}
            >
                {value}
            </Counter>
        </>
    )
}

export const SingleValuesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const values = rawData[0]?.data as number[]
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="single-values"
            size={[600, 140]}
            padding={[40, 40, 40, 40]}
            theme={customTheme}
        >
            <View
                scaleColor={{
                    variant: 'diverging',
                    colors: ['#f5bb00', '#ffffff', '#ffffff'],
                    domain: [0, 40, 100],
                }}
            >
                <DashboardValue title={'Alpha'} position={[0, 0]} value={Number(values[0])} />
                <DashboardValue title={'Beta'} position={[100, 0]} value={Number(values[1])} />
                <DashboardValue title={'Gamma'} position={[200, 0]} value={Number(values[2])} />
                <DashboardValue title={'Delta'} position={[300, 0]} value={Number(values[3])} />
                <DashboardValue title={'Epsilon'} position={[400, 0]} value={Number(values[4])} />
            </View>
        </Chart>
    )
}

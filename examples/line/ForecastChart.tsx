import {
    Chart,
    Axis,
    AxisLine,
    AxisTicks,
    AxisTicksProps,
    GridLines,
    Typography,
    ThemeSpec,
    getMinMax,
    TimeAxisScale,
    useScales,
    useDimensions,
    X,
    Y,
    Rectangle,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve, ScatterInterval } from '@chsk/xy'
import { LineLabel } from '@chsk/annotation'
import { MilestoneStory } from '../types'
import { randomNormalValue, randomUniformValue } from '../utils'

const dayLength = 1000 * 60 * 60 * 24
const weekLength = 7 * dayLength
const yearLength = dayLength * 365.25

export const generateForecastData = () => {
    const phase = randomUniformValue(0, 2 * Math.PI)
    const pattern = Array(52)
        .fill(0)
        .map((v, i) => Math.sin(phase + (Math.PI * i) / 26))
    const slope = randomUniformValue(-0.03, 0.03)
    const years = 3.5
    const now = new Date(Date.now())
    const start = Number(now) - years * yearLength
    // generate data
    const noiseData = Array(5 * 52.2)
        .fill(0)
        .map(() => randomNormalValue(0, 0.65))
    const syntheticData = noiseData.map((x, i) => {
        const value = i * slope + pattern[i % 52]
        return {
            time: new Date(Number(start) + i * weekLength),
            value: x + value,
            forecast: value,
            lower: value - 1,
            upper: value + 1,
        }
    })
    const threshold = syntheticData.filter(item => item.time <= now).length
    const timeRange = getMinMax(syntheticData.map(item => Number(item.time)))
    const valueRange = getMinMax(syntheticData.map(item => [item.lower, item.upper]).flat())
    // arrange into series
    return [
        {
            id: 'data',
            data: syntheticData.slice(0, threshold),
        },
        {
            id: 'forecast',
            data: syntheticData
                .slice(threshold - 1, syntheticData.length)
                .map(item => ({ ...item, value: item.time === now ? item.value : item.forecast })),
        },
        {
            id: 'interval',
            data: [
                { time: new Date(timeRange[0]), value: valueRange[0] },
                { time: new Date(timeRange[1]), value: valueRange[1] },
            ],
        },
    ]
}

const getYear = (v: unknown) => {
    const date = new Date(Number(v))
    return String(date.getFullYear())
}

export const ForecastRectangle = () => {
    const now = new Date(Date.now())
    const { scales } = useScales()
    const { size } = useDimensions()
    const scaleX = scales.x as TimeAxisScale
    const xCoordinate = scaleX(Number(now))
    return (
        <>
            <LineLabel
                start={[xCoordinate, 0]}
                end={[size[X], 0]}
                units={['absolute', 'absolute']}
                className={'forecast'}
                lineStyle={{ visibility: 'hidden' }}
                textStyle={{ textAnchor: 'middle', fill: '#999' }}
            >
                FORECAST
            </LineLabel>
            <Rectangle
                x={xCoordinate}
                width={size[X] - xCoordinate}
                y={0}
                height={size[Y]}
                className={'forecast'}
            />
        </>
    )
}

export const YearAxisTicks = ({ variant }: Pick<AxisTicksProps, 'variant'>) => {
    const { scales } = useScales()
    const scaleX = scales.x as TimeAxisScale
    const timeDomain = scaleX.domain()
    const minYear = new Date(timeDomain[0]).getFullYear()
    const maxYear = new Date(timeDomain[1]).getFullYear()
    const yearBoundaries = []
    const yearMids = []
    for (let year = minYear; year <= maxYear; year++) {
        const yearStart = Number(new Date(year + '-01-01'))
        const yearMid = Number(new Date(year + '-07-01'))
        const yearQ1 = Number(new Date(year + '-04-01'))
        const yearQ3 = Number(new Date(year + '-010-01'))
        if (yearStart >= timeDomain[0]) {
            yearBoundaries.push(yearStart)
        }
        if (yearQ3 <= timeDomain[1] && yearQ1 > timeDomain[0]) {
            yearMids.push(yearMid)
        }
    }
    return (
        <>
            <AxisTicks
                variant={variant}
                ticks={yearBoundaries}
                labelFormat={() => ''}
                className={'boundaries'}
            />
            <AxisTicks
                variant={variant}
                ticks={yearMids}
                tickSize={0}
                labelOffset={10}
                labelFormat={v => getYear(v)}
            />
        </>
    )
}

export const customTheme: ThemeSpec = {
    AxisTicks: {
        bottom: {
            labelOffset: 8,
            tickSize: 8,
        },
        right: {
            labelOffset: 0,
            labelTranslate: [0, -8],
            tickSize: 0,
        },
    },
    path: {
        default: {
            fillOpacity: 0,
        },
        scatterCurve: {
            strokeWidth: 3,
        },
    },
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 2,
        },
        tick: {
            strokeWidth: 2,
        },
        grid: {
            strokeWidth: 1.5,
            stroke: '#cccccc',
        },
    },
    rect: {
        forecast: {
            fill: '#f4f4f4',
            strokeWidth: 0,
        },
    },
}

export const ForecastChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-forecast"
            size={[600, 400]}
            padding={[80, 40, 60, 20]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'time'}
                y={'value'}
                scaleX={{ variant: 'time', domain: 'auto', nice: false }}
                scaleY={{ variant: 'linear', domain: 'auto' }}
                scaleColor={{ variant: 'categorical', colors: ['#1f77b4', '#1f77b4'] }}
            >
                <ForecastRectangle />
                <GridLines variant={'y'} expansion={[0, 30]} />
                <Axis variant={'bottom'}>
                    <AxisLine variant={'bottom'} />
                    <YearAxisTicks variant={'bottom'} />
                </Axis>
                <Axis variant={'right'} offset={30}>
                    <AxisTicks
                        variant={'right'}
                        labelFormat={v => Number(v).toFixed(1)}
                        labelStyle={{ textAnchor: 'end' }}
                    />
                </Axis>
                <ScatterCurve ids={['data']} curve={'Linear'} />
                <ScatterInterval
                    ids={['forecast']}
                    curve={'Linear'}
                    lower={'lower'}
                    upper={'upper'}
                    style={{ strokeWidth: 0, fillOpacity: 0.25 }}
                />
                <ScatterCurve ids={['forecast']} curve={'Linear'} />
                <Typography variant={'title'} position={[0, -40]}>
                    Time series with a seasonal pattern (arbitrary units)
                </Typography>
            </Scatter>
        </Chart>
    )
}

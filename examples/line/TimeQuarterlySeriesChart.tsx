import { Chart, Axis, AxisLabel, AxisTicks, GridLines, Typography } from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve } from '@chsk/xy'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

const dayLength = 1000 * 60 * 60 * 24
const monthLength = (365.25 / 12) * dayLength
const yearLength = dayLength * 365.25

// generates monthly data with a yearly seasonal pattern
export const generateTimeQuarterlySeriesData = () => {
    const phase = randomUniformValue(0, 2 * Math.PI)
    const pattern = Array(12)
        .fill(0)
        .map((v, i) => Math.sin(phase + (Math.PI * i) / 6))
    const years = randomUniformValue(3.5, 7)
    const start = Date.now() - years * yearLength
    return [
        {
            id: 'series',
            data: generateRandomWalk(Math.floor(12 * years), 0, 0.25).map(
                (x: Record<string, unknown>, i) => ({
                    ...x,
                    y: Number(x['y']) + pattern[i % 12],
                    time: new Date(Number(start) + i * monthLength),
                })
            ),
        },
    ]
}

// create an array of Date objects for quarterly tick marks
const quarterlyTicks = (start: Date, end: Date) => {
    const startYear = start.getFullYear()
    const endYear = end.getFullYear()
    let nowYear = startYear
    const result: Date[] = []
    const quarters = ['-01-01', '-04-01', '-07-01', '-10-01']
    while (nowYear <= endYear) {
        quarters.forEach(suffix => {
            result.push(new Date(Date.parse(nowYear + suffix)))
        })
        nowYear += 1
    }
    return result.filter(x => x >= start && x <= end)
}

// create an array of Date objects for year tick marks
const yearlyTicks = (start: Date, end: Date) => {
    const startYear = start.getFullYear()
    const endYear = end.getFullYear()
    let nowYear = startYear
    const result: Date[] = []
    while (nowYear <= endYear) {
        result.push(new Date(Date.parse(nowYear + '-01-01')))
        nowYear += 1
    }
    return result.filter(x => x >= start && x <= end)
}

const yearToString = (d: Date) => {
    return String(d.getFullYear())
}

export const TimeQuarterlySeriesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    // manually extract start and end dates - used to compute tick locations
    const seriesData = rawData[0].data
    const start: Date = new Date(Number(seriesData[0].time))
    const end: Date = new Date(Number(seriesData[seriesData.length - 1].time))
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="long-time-series"
            size={[600, 400]}
            padding={[80, 40, 60, 60]}
        >
            <Scatter
                data={rawData}
                x={'time'}
                y={'y'}
                scaleX={{
                    variant: 'time',
                    domain: 'auto',
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
            >
                <GridLines variant={'y'} style={{ stroke: '#cccccc' }} />
                <Axis variant={'bottom'} label={'time'}>
                    <AxisTicks
                        variant={'bottom'}
                        ticks={quarterlyTicks(start, end).map(Number)}
                        tickSize={5}
                        tickStyle={{ stroke: '#666666', strokeWidth: 1 }}
                        labelFormat={() => ''}
                    />
                    <AxisTicks
                        variant={'bottom'}
                        ticks={yearlyTicks(start, end).map(Number)}
                        tickSize={7}
                        labelFormat={v => yearToString(new Date(Number(v)))}
                        labelOffset={12}
                    />
                </Axis>
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'}>Value (a.u.)</AxisLabel>
                    <AxisTicks variant={'left'} labelFormat={v => Number(v).toFixed(1)} />
                </Axis>
                <ScatterCurve curve={'Natural'} style={{ stroke: '#ff0000', strokeWidth: 2 }} />
                <Typography variant={'title'} position={[-50, -50]}>
                    Long time series
                </Typography>
                <Typography variant={'subtitle'} position={[-50, -28]}>
                    Custom ticks label years and quarters
                </Typography>
            </Scatter>
        </Chart>
    )
}

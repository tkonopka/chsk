import { Chart, Axis, AxisLabel, AxisTicks, GridLines, Typography } from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve } from '@chsk/xy'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'

const dayLength = 1000 * 60 * 60 * 24
const aYearAgo = new Date(Date.now() - 365 * dayLength)

export const generateTimeSeriesData = () => [
    {
        id: 'series',
        data: generateRandomWalk(365).map((x: Record<string, unknown>, i) => ({
            ...x,
            time: new Date(Number(aYearAgo) + i * dayLength),
        })),
    },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dateToString = (d: Date) => {
    const day = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const result = '' + (day <= 9 ? '0' + day : day) + '-' + month + '-' + year
    return result
}

export const TimeSeriesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-series"
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
                        labelFormat={v => dateToString(new Date(Number(v)))}
                    />
                </Axis>
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'}>Value (a.u.)</AxisLabel>
                    <AxisTicks variant={'left'} labelFormat={v => Number(v).toFixed(1)} />
                </Axis>
                <ScatterCurve curve={'Natural'} style={{ stroke: '#ff0000', strokeWidth: 2 }} />
                <Typography variant={'title'} position={[-50, -50]}>
                    Change over one year
                </Typography>
                <Typography variant={'subtitle'} position={[-50, -28]}>
                    Base values set to zero for {dateToString(aYearAgo)}
                </Typography>
            </Scatter>
        </Chart>
    )
}

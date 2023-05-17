import {
    Chart,
    Axis,
    AxisTicks,
    GridLines,
    ThemeSpec,
    Typography,
    mergeTheme,
    Tooltip,
    Legend,
    ViewClip,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { InsetColorFilter } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateTimeBarData = () => {
    const oneDay = 1000 * 60 * 60 * 24
    const n = 80
    const past = Number(new Date(Date.now() - n * oneDay))
    const result = []
    const round2dp = (x: number) => Math.round(x * 100) / 100
    let A = round2dp(randomUniformValue(0, 1))
    let B = round2dp(randomUniformValue(0, 1))
    const aIncrement = randomUniformValue(0, 1)
    const bIncrement = randomUniformValue(0, 1)
    while (result.length < n) {
        A = Math.max(0, round2dp(A))
        B = Math.max(0, round2dp(B))
        const today: Date = new Date(Number(past) + result.length * oneDay)
        const todayId: string =
            today.getFullYear() + '-' + (1 + today.getUTCMonth()) + '-' + today.getUTCDate()
        result.push({ id: todayId, A, B })
        A += randomUniformValue(-aIncrement * 0.75, aIncrement)
        B += randomUniformValue(-bIncrement * 0.75, bIncrement)
    }
    return result
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    AxisTicks: {
        right: {
            tickSize: 0,
            labelOffset: [0, -8],
        },
    },
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const customTimeFormat = (x: unknown) => {
    const d = new Date(Number(x))
    const day = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    return day + ' ' + month + ' ' + year
}

export const TimeBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const allIds = rawData.map(d => d.id)
    const oneDay = 24 * 3600 * 1000
    const idsDomain: [Date, Date] = [
        new Date(Number(new Date(allIds[0])) - oneDay),
        new Date(Number(new Date(allIds[allIds.length - 1])) + oneDay),
    ]
    const bandwidth: [Date, Date] = [new Date(0), new Date(0.8 * oneDay)]

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-bars"
            size={[600, 320]}
            padding={[100, 60, 40, 30]}
            theme={customTheme}
        >
            <InsetColorFilter
                id={'bar-darker'}
                floodColor={'#000000'}
                erodeR={0}
                floodOpacity={0.3}
            />
            <Bar
                data={rawData}
                horizontal={false}
                variant={'stacked'}
                keys={['A', 'B']}
                scaleValue={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                scaleIndex={{
                    variant: 'time',
                    domain: idsDomain,
                    bandwidth,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#3f9cde', '#cccccc'],
                }}
            >
                <Typography variant={'title'} position={[0, -72]}>
                    Daily data
                </Typography>
                <Typography variant={'subtitle'} position={[0, -50]}>
                    Synthetic data; arbitrary units
                </Typography>
                <Legend
                    position={[0, -38]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    itemSize={[50, 26]}
                    itemPadding={[2, 0, 2, 0]}
                    symbolStyle={{ stroke: '#777777', strokeWidth: 1 }}
                />
                <Axis variant={'bottom'}>
                    <AxisTicks labelFormat={customTimeFormat} />
                </Axis>
                <GridLines variant={'y'} expansion={[0, 26]} />
                <Axis variant={'right'} distance={4} />
                <ViewClip id={'time-bar-clip'}>
                    <Bars
                        modifiers={{
                            onMouseEnter: { filter: 'url(#bar-darker)' },
                            onMouseLeave: {},
                        }}
                    />
                </ViewClip>
                <GridLines
                    variant={'y'}
                    values={[0]}
                    expansion={[0, 26]}
                    style={{ strokeWidth: 2, stroke: '#000000' }}
                />
                <Tooltip
                    anchor={[0, 0.5]}
                    offset={[10, 0]}
                    itemSize={[80, 24]}
                    titleFormat={d => {
                        return d.data?.[0].id
                    }}
                />
                <DownloadButtons position={[446, -72]} data image />
            </Bar>
        </Chart>
    )
}

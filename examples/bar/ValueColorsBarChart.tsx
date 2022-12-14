import {
    Chart,
    Axis,
    AxisTicks,
    GridLines,
    ThemeSpec,
    Typography,
    mergeTheme,
    Rectangle,
    RectangleProps,
    useScales,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { cloneDeep } from 'lodash'

export const generateValueColorsBarData = () => {
    const now = new Date(Date.now())
    const past = new Date(Date.now() - 365 * 2.5 * 1000 * 60 * 60 * 24)
    let year = past.getFullYear()
    let month = past.getMonth()
    const result = []
    const round2dp = (x: number) => Math.round(x * 100) / 100
    let value = round2dp(randomUniformValue(-1, 1))
    while (year !== now.getFullYear() || month !== now.getMonth()) {
        value = round2dp(value)
        result.push({ id: year + '-' + (month + 1), value })
        if (month === 11) {
            month = 0
            year += 1
        } else {
            month += 1
        }
        value += randomUniformValue(-1, 1)
    }
    return result
}

const monthTickFormat = (v: unknown) => {
    const index = Number(String(v).split('-')[1])
    return ['', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]
}
const yearTickFormat = (v: unknown) => {
    const index = Number(String(v).split('-')[1])
    return index > 1 ? '' : String(v).split('-')[0]
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    AxisTicks: {
        bottom: { tickSize: 0 },
        right: { tickSize: 0 },
    },
    text: {
        tickLabel: {
            fill: '#444444',
        },
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        lineLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'hanging',
            fontWeight: 400,
            fill: '#444444',
        },
    },
})

const CustomRectangle = ({ width, height, style, ...props }: RectangleProps) => {
    const scales = useScales()
    const colorScale = scales.color
    const color = height > 0 ? colorScale(1) : colorScale(0)
    const adjustedStyle = cloneDeep(style) ?? {}
    adjustedStyle.fill = undefined
    adjustedStyle.stroke = undefined
    return (
        <Rectangle
            width={width}
            height={height}
            fill={color}
            stroke={color}
            style={adjustedStyle}
            {...props}
        />
    )
}

export const ValueColorsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="value-colors"
            size={[600, 320]}
            padding={[80, 60, 60, 30]}
            theme={customTheme}
        >
            <Bar
                data={rawData}
                horizontal={false}
                variant={'stacked'}
                keys={['value']}
                scaleValue={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#3f9cde', '#bbbbbb'],
                    domain: ['value', 'negative'],
                }}
            >
                <Typography variant={'title'} position={[0, -50]}>
                    Monthly data
                </Typography>
                <Typography variant={'subtitle'} position={[0, -30]}>
                    % change on previous month
                </Typography>
                <Axis variant={'bottom'}>
                    <AxisTicks variant={'bottom'} labelOffset={8} labelFormat={monthTickFormat} />
                    <AxisTicks
                        variant={'bottom'}
                        labelOffset={26}
                        labelFormat={yearTickFormat}
                        labelStyle={{ fill: '#222222', fontWeight: 600, textAnchor: 'start' }}
                    />
                </Axis>
                <GridLines variant={'y'} expansion={[0, 26]} />
                <Axis variant={'right'} offset={4}>
                    <AxisTicks
                        variant={'right'}
                        labelTranslate={[12, -7]}
                        labelStyle={{ textAnchor: 'end' }}
                    />
                </Axis>
                <Bars component={CustomRectangle} />
                <GridLines
                    variant={'y'}
                    values={[0]}
                    expansion={[0, 26]}
                    style={{ strokeWidth: 2, stroke: '#000000' }}
                />
                <DownloadButtons position={[450, -50]} data image />
            </Bar>
        </Chart>
    )
}

import {
    Chart,
    Axis,
    AxisTicks,
    GridLines,
    ThemeSpec,
    Typography,
    mergeTheme,
    Tooltip,
    RectangleProps,
    NumericPositionSpec,
    useScales,
} from '@chsk/core'
import { isScheduleData, Schedule, Schedules } from '@chsk/band'
import { BlockArrow } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { alphabetGreek, randomUniformValue, round2dp } from '../utils'
import { DownloadButtons } from '../navigation'
import { cloneDeep } from 'lodash'

const ids = alphabetGreek.slice(0, 8)
export const generateChangesData = () => {
    // generate base values in sorted order
    const baseValues = ids.map(() => round2dp(randomUniformValue(10, 90))).sort((a, b) => b - a)
    // create an array of objects, one for each id
    return ids.map((id, i) => {
        const start = baseValues[i]
        const change = randomUniformValue(-30, 30)
        let end = start + (Math.abs(change) > 1 ? change : 1)
        end = round2dp(Math.min(100, Math.max(0, end)))
        return { id, data: [{ key: 'performance', start, end }] }
    })
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    path: {
        default: {
            fillOpacity: 1,
            strokeWidth: 0,
        },
    },
    rect: {
        'tooltip.surface': {
            stroke: '#222222',
            fill: '#fafaf8',
            strokeWidth: 1,
        },
    },
})

const CustomChangeArrow = ({ x, y, width, height, style, ...props }: RectangleProps) => {
    const { scales } = useScales()
    let start: NumericPositionSpec = [x, y + height / 2]
    let end: NumericPositionSpec = [x + width, y + height / 2]
    const arrowStyle = cloneDeep(style) ?? {}
    arrowStyle.fill = undefined
    arrowStyle.stroke = undefined
    if (width < 0) {
        start = [x, y + height / 2]
        end = [x + width, y + height / 2]
    }
    let color = width < 0 ? scales.color(1) : scales.color(0)
    if (Math.abs(width) <= 20) {
        color = scales.color(2) // very small changes displayed in a neutral color
    }
    return (
        <BlockArrow
            start={start}
            end={end}
            units={'absolute'}
            headLength={Math.min(14, height)}
            fill={color}
            stroke={color}
            style={arrowStyle}
            heads={[false, Math.abs(width) > 20]}
            stemWidth={10}
            {...props}
        />
    )
}

const customLabelFormat = (x: Record<string, unknown>) => {
    return x.id + ': ' + x.start + '% → ' + x.end + '%'
}

export const ChangesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScheduleData(rawData)) return null
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="changes"
            size={[600, 340]}
            padding={[90, 50, 40, 70]}
            theme={customTheme}
        >
            <Schedule
                data={rawData}
                keys={['performance']}
                horizontal={true}
                scaleIndex={{
                    variant: 'band',
                    padding: 0.25,
                }}
                scaleValue={{
                    variant: 'linear',
                    nice: 6,
                    domain: [0, 100],
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#3f9cde', '#e05263', '#aaaaaa'],
                    size: 3,
                }}
            >
                <Axis variant={'top'}>
                    <AxisTicks ticks={5} labelFormat={s => s + '%'} />
                </Axis>
                <Axis variant={'left'}>
                    <AxisTicks tickSize={0} />
                </Axis>
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Schedules
                    component={CustomChangeArrow}
                    modifiers={{ onMouseEnter: { strokeWidth: 1 }, onMouseLeave: {} }}
                />
                <DownloadButtons position={[410, 240]} data image />
                <Tooltip
                    itemSize={[160, 24]}
                    labelFormat={customLabelFormat}
                    symbol={() => null}
                    labelDistance={-15}
                />
            </Schedule>
            <Typography variant={'title'} position={[-55, -70]}>
                Performance change over 12 months
            </Typography>
            <Typography variant={'subtitle'} position={[-55, -48]}>
                Source: synthetic data
            </Typography>
        </Chart>
    )
}

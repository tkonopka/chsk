import {
    Chart,
    Axis,
    Typography,
    GridLines,
    Legend,
    LegendTitle,
    LegendItem,
    ThemeSpec,
    mergeTheme,
    Tooltip,
    TooltipDataItem,
    TooltipData,
} from '@chsk/core'
import { isScheduleData, ScheduleDataItem, Schedule, Schedules } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'
import { DownloadButtons } from '../navigation'

export const generateScheduleWeekData = () => {
    const times: [number, number][] = []
    // weekday schedule with two items per day
    for (let j = 0; j < 5; j++) {
        times.push([
            Math.floor(randomUniformValue(7, 10)),
            Math.floor(randomUniformValue(14, 18.5)),
        ])
        times.push([
            Math.floor(randomUniformValue(17, 19)),
            Math.floor(randomUniformValue(19, 22.5)),
        ])
    }
    // weekday schedule with one item per day
    for (let j = 0; j < 2; j++) {
        times.push([Math.floor(randomUniformValue(9, 11)), Math.floor(randomUniformValue(17, 21))])
    }
    const ids = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const result: ScheduleDataItem[] = []
    ids.slice(0, 5).forEach((id, i) => {
        const item = {
            id: id,
            data: [
                { start: times[2 * i][0], end: times[2 * i][1], key: 'A' },
                { start: times[2 * i + 1][0], end: times[2 * i + 1][1], key: 'B' },
            ],
        }
        result.push(item)
    })
    ids.slice(5, 7).forEach((id, i) => {
        const item = {
            id: id,
            data: [{ start: times[10 + i][0], end: times[10 + i][1], key: 'C' }],
        }
        result.push(item)
    })
    return result
}

const weekTheme: ThemeSpec = mergeTheme(buttonTheme, {
    g: {
        'legendItem:hover': {
            cursor: 'pointer',
        },
    },
})

const keyLabels: Record<string, string> = {
    A: 'daytime',
    B: 'evening',
    C: 'weekend',
}
const customTooltipTitle = (x: TooltipData) => {
    const item = x.data?.[0]
    if (!item) return undefined
    return item.id + ' ' + keyLabels[item.key ?? '']
}
const customTooltipLabel = (x: TooltipDataItem): string => {
    const start = 'start' in x ? Number(x['start']) : 0
    const end = 'end' in x ? Number(x['end']) : 0
    const duration = end - start
    return String(start) + ' - ' + String(end) + ' (' + duration + ' hours)'
}

export const ScheduleWeekChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScheduleData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="project-week"
            size={[640, 440]}
            padding={[60, 120, 20, 60]}
            theme={weekTheme}
        >
            <Schedule
                data={rawData}
                keys={['A', 'B', 'C']}
                horizontal={false}
                scaleValue={{
                    variant: 'linear',
                    reverse: true,
                    domain: [6, 22],
                }}
                scaleIndex={{
                    variant: 'band',
                    padding: 0.3,
                }}
            >
                <Typography position={[-50, -70]} variant={'title'}>
                    The project plan consists of 4 stages
                </Typography>
                <Axis variant={'top'} label={'Full-Week schedule'} />
                <Axis variant={'left'} label={'Time'} ticks={16} />
                <GridLines variant={'y'} values={16} />
                <GridLines variant={'x'} shift={[-0.714, 0.714]} />
                <Schedules />
                <Legend
                    horizontal={false}
                    position={[470, 60]}
                    size={[80, 100]}
                    positionUnits={'absolute'}
                    sizeUnits={'absolute'}
                    anchor={[0, 0]}
                    padding={[0, 12, 0, 12]}
                    r={10.5}
                    itemSize={[80, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Activities'}
                >
                    <LegendTitle position={[0, 0]}>Activities</LegendTitle>
                    <LegendItem position={[0, 16]} item={'A'} label={keyLabels['A']} />
                    <LegendItem position={[0, 40]} item={'B'} label={keyLabels['B']} />
                    <LegendItem position={[0, 64]} item={'C'} label={keyLabels['C']} />
                </Legend>
                <Tooltip
                    padding={[4, 0, 2, 0]}
                    itemSize={[140, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    titleFormat={customTooltipTitle}
                    labelFormat={customTooltipLabel}
                />
                <DownloadButtons position={[480, -40]} data image />
            </Schedule>
        </Chart>
    )
}

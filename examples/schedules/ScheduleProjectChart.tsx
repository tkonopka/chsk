import {
    Chart,
    Axis,
    GridLines,
    Typography,
    MilestoneMotion,
    Tooltip,
    TooltipDataItem,
    TooltipData,
} from '@chsk/core'
import { Schedule, Schedules, isScheduleData } from '@chsk/band'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

export const generateScheduleProjectData = () => {
    const times: [number, number][] = []
    times.push([0, Math.floor(randomUniformValue(2, 9))])
    let maxTime = times[0]?.[1] as number
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    maxTime = times[1]?.[1] as number
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    maxTime = times[2]?.[1] as number
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    const ids = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4']
    const keys = ['A', 'B', 'C', 'D']
    return ids.map((id, i) => ({
        id: id,
        data: [{ start: times[i]?.[0], end: times[i]?.[1], key: keys[i] }],
    }))
}

const customTooltipTitle = (x: TooltipData) => {
    return x.data?.[0]?.id
}
const customTooltipLabel = (x: TooltipDataItem) => {
    const start = 'start' in x ? Number(x['start']) : 0
    const end = 'end' in x ? Number(x['end']) : 0
    const duration = end - start
    return String(start) + '-' + String(end) + ' (' + duration + ' days)'
}
const customSchedulesProps = {
    rx: 3,
    ry: 3,
    initial: { width: 0 },
}

export const ScheduleProjectChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScheduleData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="schedule-project"
            size={[600, 300]}
            padding={[90, 40, 20, 60]}
        >
            <Schedule data={rawData} keys={['A', 'B', 'C', 'D']} horizontal={true}>
                <Typography position={[-50, -70]} variant={'title'}>
                    The project plan consists of 4 stages
                </Typography>
                <MilestoneMotion enterOn={'axis'}>
                    <Axis variant={'top'} label={'days'} />
                    <GridLines variant={'x'} />
                    <GridLines variant={'y'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'A'}>
                    <Axis variant={'left'} ticks={['Phase 1']} />
                    <Schedules keys={['A']} componentProps={customSchedulesProps} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'B'}>
                    <Axis variant={'left'} ticks={['Phase 2']} />
                    <Schedules keys={['B']} componentProps={customSchedulesProps} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'C'}>
                    <Axis variant={'left'} ticks={['Phase 3']} />
                    <Schedules keys={['C']} componentProps={customSchedulesProps} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'D'}>
                    <Axis key={'D0'} variant={'left'} ticks={['Phase 4']} />
                    <Schedules key={'D1'} keys={['D']} componentProps={customSchedulesProps} />
                </MilestoneMotion>
                <Tooltip
                    padding={[4, 0, 2, 0]}
                    itemSize={[120, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    titleFormat={customTooltipTitle}
                    labelFormat={customTooltipLabel}
                />
            </Schedule>
        </Chart>
    )
}

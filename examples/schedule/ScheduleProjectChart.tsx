import { Chart, Axis, GridLines, Typography, MilestoneMotion } from '@chsk/core'
import { Schedule, Schedules, isScheduleData } from '@chsk/band'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

export const generateScheduleProjectData = () => {
    const times: [number, number][] = []
    times.push([0, Math.floor(randomUniformValue(2, 9))])
    let maxTime = times[0][1]
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    maxTime = times[1][1]
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    maxTime = times[2][1]
    times.push([
        maxTime + Math.floor(randomUniformValue(-2, 0.5)),
        maxTime + Math.floor(randomUniformValue(2, 9)),
    ])
    const ids = ['phase 1', 'phase 2', 'phase 3', 'phase 4']
    const keys = ['A', 'B', 'C', 'D']
    return ids.map((id, i) => ({
        id: id,
        data: [{ start: times[i][0], end: times[i][1], key: keys[i] }],
    }))
}

export const ScheduleProjectChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScheduleData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="schedule-project"
            size={[600, 340]}
            padding={[90, 40, 60, 60]}
        >
            <Schedule data={rawData} keys={['A', 'B', 'C', 'D']} horizontal={true}>
                <Typography position={[-50, -70]} variant={'title'}>
                    The project plan consists of 4 stages
                </Typography>
                <MilestoneMotion initial={'invisible'} initialOn={'axis'}>
                    <Axis variant={'top'} label={'days'} />
                    <GridLines variant={'x'} />
                    <GridLines variant={'y'} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                    <Axis variant={'left'} ticks={['phase 1']} />
                    <Schedules keys={['A']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'B'}>
                    <Axis variant={'left'} ticks={['phase 2']} />
                    <Schedules keys={['B']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'C'}>
                    <Axis variant={'left'} ticks={['phase 3']} />
                    <Schedules keys={['C']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'D'}>
                    <Axis variant={'left'} ticks={['phase 4']} />
                    <Schedules keys={['D']} />
                </MilestoneMotion>
            </Schedule>
        </Chart>
    )
}

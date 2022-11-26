import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    MilestoneMotion,
    Typography,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve, ScatterInterval, ScatterLabel } from '@chsk/xy'
import { generateSurvivalMatrix } from './generators'
import { MilestoneStory } from '../types'

export const generateSurvivalData = () => [
    {
        id: 'control',
        data: generateSurvivalMatrix(60, [3, 7], 0.5, 0.5),
    },
    {
        id: 'treated',
        data: generateSurvivalMatrix(60, [4, 8], 0.4, 0.5),
    },
]

export const SurvivalChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="survival"
            size={[600, 440]}
            padding={[80, 60, 60, 60]}
        >
            <Scatter
                data={rawData}
                x={'time'}
                y={'surv'}
                scaleX={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 1],
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'control'}>
                    <GridLines variant={'y'} style={{ stroke: '#cccccc' }} />
                    <Axis variant={'bottom'} label={'time (days)'} />
                    <Axis variant={'left'}>
                        <AxisLabel variant={'left'}>Survival (probability)</AxisLabel>
                        <AxisTicks variant={'left'} labelFormat={v => Number(v).toFixed(1)} />
                    </Axis>
                    <ScatterInterval
                        ids={['control']}
                        lower={'lower'}
                        upper={'upper'}
                        curve={'StepAfter'}
                        style={{ fillOpacity: 0.1, strokeWidth: 0 }}
                    />
                    <ScatterCurve
                        ids={['control']}
                        curve={'StepAfter'}
                        style={{ strokeWidth: 3 }}
                    />
                    <ScatterLabel
                        ids={['control']}
                        x={500}
                        translate={[10, 0]}
                        style={{ fontWeight: 600 }}
                    >
                        control
                    </ScatterLabel>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'treated'}>
                    <ScatterInterval
                        ids={['treated']}
                        lower={'lower'}
                        upper={'upper'}
                        curve={'StepAfter'}
                        style={{ fillOpacity: 0.1, strokeWidth: 0 }}
                    />
                    <ScatterCurve
                        ids={['treated']}
                        curve={'StepAfter'}
                        style={{ strokeWidth: 3 }}
                    />
                    <ScatterLabel
                        ids={['treated']}
                        x={500}
                        translate={[10, 0]}
                        style={{ fontWeight: 600 }}
                    >
                        treated
                    </ScatterLabel>
                </MilestoneMotion>
                <Typography variant={'title'} position={[-50, -50]}>
                    Impact of treatment on disease outcome
                </Typography>
            </Scatter>
        </Chart>
    )
}

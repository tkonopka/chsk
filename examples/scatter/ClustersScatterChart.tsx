import { useState } from 'react'
import { Chart, Axis, GridLines, Legend, MilestoneMotion, Surface, Typography } from '@chsk/core'
import { Scatter, ScatterPoints, ScatterCrosshair, isScatterData } from '@chsk/xy'
import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue } from '../utils'
import { MilestoneStory } from '../types'

export const generateClusterScatterData = () => [
    {
        id: 'alpha',
        data: generateXYValues(
            generateMixedPopulation([80], [0], [1]),
            ['y'],
            [x => 0 * x + randomNormalValue(0, 1)]
        ),
    },
    {
        id: 'beta',
        data: generateXYValues(
            generateMixedPopulation([80], [3], [1]),
            ['y'],
            [x => x + randomNormalValue(0, 3)]
        ),
    },
    {
        id: 'gamma',
        data: generateXYValues(
            generateMixedPopulation([80], [1], [1]),
            ['y'],
            [x => 4 + x + randomNormalValue(0, 1)]
        ),
    },
]

const customTheme = {
    circle: {
        'custom:hover': {
            cursor: 'pointer',
        },
    },
}

const scatterProps = {
    x: 'x',
    y: 'y',
    valueSize: 4,
    scaleX: {
        variant: 'linear' as const,
        domain: 'auto' as const,
        nice: true,
    },
    scaleY: {
        variant: 'linear' as const,
        domain: 'auto' as const,
        nice: true,
    },
}

export const ClustersScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    type ScatterItem = { id: string; index?: number }
    const [active, setActive] = useState<ScatterItem | null>(null)
    const customOnMouseEnter = (data: ScatterItem | undefined) => {
        setActive(data ?? null)
    }
    const customOnMouseLeave = () => {
        setActive(null)
    }

    return (
        <div>
            <Chart
                data={chartData}
                fref={fref}
                id="uniform-scatter"
                size={[600, 400]}
                padding={[40, 120, 60, 60]}
                theme={customTheme}
            >
                <Scatter data={rawData} {...scatterProps}>
                    <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
                        <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                        <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                        <Surface style={{ fill: '#ffffff', stroke: '#222222', strokeWidth: 1 }} />
                        <Axis variant={'bottom'} label={'x values (a.u.)'} />
                        <Axis variant={'left'} label={'y values (a.u.)'} />
                    </MilestoneMotion>
                    <MilestoneMotion initial={'invisible'} initialOn={'data'}>
                        <ScatterCrosshair />
                        <ScatterPoints
                            symbolClassName={'custom'}
                            onMouseEnter={customOnMouseEnter}
                            onMouseLeave={customOnMouseLeave}
                        />
                    </MilestoneMotion>
                    <MilestoneMotion initial={'invisible'} initialOn={'legend'}>
                        <Legend
                            position={[440, 80]}
                            positionUnits={'absolute'}
                            size={[80, 80]}
                            sizeUnits={'absolute'}
                            anchor={[0, 0.5]}
                            padding={[0, 12, 0, 12]}
                            r={10.5}
                            itemSize={[80, 20]}
                            itemPadding={[2, 2, 2, 2]}
                            title={'Populations'}
                        />
                    </MilestoneMotion>
                    <Typography position={[0, -20]} variant={'title'}>
                        Embedding
                    </Typography>
                </Scatter>
            </Chart>
            <div
                style={{
                    margin: '1em',
                    padding: '1em',
                    border: 'solid 1px #bbbbbb',
                    background: '#f8f8f8',
                    minHeight: '3rem',
                }}
            >
                <div style={{ fontWeight: 600, color: '#444444', marginBottom: '0.75rem' }}>
                    This is an html div element. It responds to mouse-enter and mouse-leave events.
                </div>
                {active ? (
                    <span>
                        Point: [series: {active.id}, index: {active.index}]
                    </span>
                ) : null}
            </div>
        </div>
    )
}

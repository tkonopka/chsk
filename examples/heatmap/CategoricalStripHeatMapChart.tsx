import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    MilestoneMotion,
    WithId,
    Tooltip,
    TooltipProps,
    useTooltip,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chsk/matrix'
import { generateHeatMapMatrixUniform, generateHeatMapRowCategorical } from './generators'
import { alphabetGreek, alphabetUppercase } from '../utils'
import { MilestoneStory } from '../types'

const ids = alphabetUppercase
const keys = alphabetGreek
const groups = ['A', 'B', 'C', 'D', 'E']
export const generateCategoricalStripHeatMapData = () => {
    const group: WithId & Record<string, string | number> = generateHeatMapRowCategorical(
        'group',
        keys,
        groups,
        true
    )
    return [group].concat(generateHeatMapMatrixUniform(ids, keys, 0, 10, 1))
}

const customTheme = {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    AxisLabel: {
        top: {
            offset: 60,
        },
        left: {
            offset: 40,
        },
    },
    AxisTicks: {
        top: {
            labelAngle: -45,
        },
    },
    g: {
        'legendItem:hover': {
            cursor: 'auto',
        },
    },
}

// only display a tooltip on the main part of the heatmap
const CustomTooltip = (props: TooltipProps) => {
    const { data: tooltip } = useTooltip()
    if (tooltip?.data?.[0].id === 'group') return null
    return <Tooltip {...props} />
}

export const CategoricalStripHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="categorical-strip"
            size={[640, 460]}
            padding={[80, 120, 40, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={keys}
                scaleColor={{
                    variant: 'sequential',
                    colors: 'YlGnBu',
                    domain: [0, 10],
                }}
                scaleY={{
                    variant: 'band',
                    padding: 0,
                    extraPadding: { A: 0.5 },
                }}
            >
                <MilestoneMotion initialOn={'measurements'} initial={'invisible'}>
                    <Axis variant={'left'} label={'Measurements'} ticks={alphabetUppercase} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'top'} initial={'invisible'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                        />
                        <AxisLabel variant={'top'}>Samples</AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'categorical'} initial={'invisible'}>
                    <Axis variant={'left'} label={''} ticks={['group']} />
                    <HeatMapCells
                        ids={['group']}
                        scaleColor={{
                            variant: 'categorical',
                            domain: groups,
                            colors: 'Set1',
                        }}
                    >
                        <Legend
                            variant={'list'}
                            horizontal={false}
                            position={[460, -4]}
                            size={[60, 180]}
                            positionUnits={'absolute'}
                            sizeUnits={'absolute'}
                            itemSize={[60, 18]}
                            itemPadding={[2, 4, 2, 4]}
                            anchor={[0, 0]}
                            title={'Groups'}
                            interactive={false}
                        />
                    </HeatMapCells>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'heatmap'} initial={'invisible'}>
                    <HeatMapCells ids={ids} />
                    <Legend
                        variant={'color'}
                        horizontal={false}
                        position={[460, 260]}
                        size={[60, 130]}
                        positionUnits={'absolute'}
                        sizeUnits={'absolute'}
                        anchor={[0, 1]}
                    >
                        <LegendTitle position={[0, 8]} size={[60, 24]}>
                            Scores
                        </LegendTitle>
                        <LegendColorScale
                            key={'legend-color-scale'}
                            variant={'right'}
                            size={[13, 100]}
                            position={[1, 30]}
                        />
                    </Legend>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                    <CustomTooltip
                        padding={[4, 0, 4, 0]}
                        itemSize={[120, 24]}
                        itemPadding={[2, 8, 2, 8]}
                    />
                </MilestoneMotion>
            </HeatMap>
        </Chart>
    )
}

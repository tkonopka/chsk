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
    mergeTheme,
    Tooltip,
    TooltipProps,
    useTooltip,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight, HeatMapSurface } from '@chsk/matrix'
import { downloadTheme } from '@chsk/themes'
import { merge } from 'lodash'
import { generateHeatMapMatrixNormal, generateHeatMapRowCategorical } from './generators'
import { alphabetGreek, alphabetUppercase } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek
const keys = alphabetUppercase
const flags = ['flag 1', 'flag 2', 'flag 3']
const allKeys = flags.concat(keys)

type IdRecord = WithId & Record<string, string | number>

export const generateFlagsHeatMapData = () => {
    const normalData = generateHeatMapMatrixNormal(ids, keys, 0, 1.2, 1)
    return ids.map((id, index) => {
        const item: IdRecord = generateHeatMapRowCategorical(id, flags, ['0', '1'], false)
        return merge(item, normalData[index])
    })
}

const customTheme = mergeTheme(downloadTheme, {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        heatmapSurface: {
            stroke: '#222222',
            strokeWidth: 1,
            fillOpacity: 0,
        },
    },
    AxisLabel: {
        top: {
            offset: 70,
        },
        left: {
            offset: 80,
        },
    },
    AxisTicks: {
        left: {
            labelOffset: 60,
        },
    },
})

// only display a tooltip on the main part of the heatmap
const CustomTooltip = (props: TooltipProps) => {
    const { data: tooltip } = useTooltip()
    if (tooltip?.data?.[0].key?.startsWith('flag')) return null
    return <Tooltip {...props} />
}

export const FlagsHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="flags"
            size={[640, 460]}
            padding={[60, 60, 60, 100]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={allKeys}
                scaleColor={{
                    variant: 'diverging',
                    colors: 'PuOr',
                    domain: [-2.2, 0, 2.2],
                }}
                scaleX={{
                    variant: 'band',
                    padding: 0,
                    extraPadding: { A: 0.75 },
                }}
            >
                <MilestoneMotion initialOn={'samples'}>
                    <Axis variant={'left'}>
                        <AxisLabel variant={'left'}>Samples</AxisLabel>
                        <AxisTicks
                            variant={'left'}
                            ticks={alphabetGreek}
                            tickSize={0}
                            labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'flags'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                            labelAngle={-60}
                            ticks={flags}
                        />
                    </Axis>
                    <HeatMapCells
                        keys={flags}
                        scaleColor={{
                            variant: 'categorical',
                            domain: ['0', '1'],
                            colors: ['#f2f2f2', '#bb4444'],
                        }}
                    >
                        <Legend
                            variant={'list'}
                            horizontal={true}
                            position={[0, 360]}
                            size={[180, 40]}
                            positionUnits={'absolute'}
                            sizeUnits={'absolute'}
                            itemSize={[40, 18]}
                            firstOffset={[10, 0]}
                            anchor={[0, 0]}
                            title={'Flags'}
                            symbolStyle={{ stroke: '#222222', strokeWidth: 1 }}
                        />
                    </HeatMapCells>
                    <HeatMapSurface
                        keys={flags}
                        expansion={[
                            [0.5, 0.5],
                            [0.5, 0.5],
                        ]}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'heatmap'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelStyle={{ textAnchor: 'middle' }}
                            ticks={keys}
                        />
                    </Axis>
                    <HeatMapCells keys={keys} />
                    <HeatMapSurface
                        keys={keys}
                        expansion={[
                            [0.5, 0.5],
                            [0.5, 0.5],
                        ]}
                    />
                    <Legend
                        variant={'color'}
                        horizontal={true}
                        position={[220, 360]}
                        size={[180, 24]}
                        positionUnits={'absolute'}
                        sizeUnits={'absolute'}
                        anchor={[0, 0]}
                        firstOffset={[0, 0]}
                    >
                        <LegendTitle position={[-55, 12]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                            Scores
                        </LegendTitle>
                        <LegendColorScale
                            key={'legend-color-scale'}
                            variant={'bottom'}
                            horizontal={true}
                            size={[160, 13]}
                            padding={[0, 8, 0, 8]}
                            position={[0, 5]}
                        />
                    </Legend>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                    <CustomTooltip
                        translate={[-15, 15]}
                        anchor={[1, 0]}
                        padding={[4, 0, 2, 0]}
                        itemSize={[120, 28]}
                        itemPadding={[4, 8, 4, 8]}
                        rx={6}
                        ry={6}
                    />
                </MilestoneMotion>
                <DownloadButtons position={[440, 390]} data image />
            </HeatMap>
        </Chart>
    )
}

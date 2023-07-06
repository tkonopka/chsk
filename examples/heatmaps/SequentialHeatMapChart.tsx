import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    Surface,
    Tooltip,
    ViewClip,
    ViewController,
    mergeTheme,
    defaultSequentialScaleSpec,
    Draggable,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapRectangle, HeatMapHighlight } from '@chsk/matrix'
import { buttonTheme } from '@chsk/themes'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek } from '../utils'
import { MilestoneStory } from '../types'
import { IconButton } from '../navigation'

const ids = alphabetGreek
const keys = alphabetGreek
export const generateSequentialHeatMapData = () => generateHeatMapMatrixUniform(ids, keys)

const customTheme = mergeTheme(buttonTheme, {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        zoomBox: {
            fill: '#777777',
            fillOpacity: 0.3,
            stroke: '#000000',
            strokeWidth: 2,
        },
    },
    AxisLabel: {
        top: {
            distance: 60,
        },
        left: {
            distance: 70,
        },
    },
    AxisTicks: {
        top: {
            labelAngle: -45,
        },
    },
})

export const SequentialHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="sequential-colors"
            size={[550, 470]}
            padding={[80, 120, 40, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={keys}
                scaleColor={{
                    ...defaultSequentialScaleSpec,
                    domain: [0, 100],
                }}
            >
                <ViewClip id={'seq-clip'}>
                    <HeatMapCells component={HeatMapRectangle} />
                </ViewClip>
                <Surface style={{ stroke: '#222222', strokeWidth: 1, fill: '#ffffff00' }} />
                <Axis variant={'left'} label={'Samples'} />
                <Axis variant={'top'}>
                    <AxisTicks
                        key={'ticks'}
                        labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                    />
                    <AxisLabel key={'label'}>Samples</AxisLabel>
                </Axis>
                <Draggable variant={'y'}>
                    <Legend
                        variant={'color'}
                        horizontal={false}
                        position={[360, 70]}
                        size={[60, 180]}
                        positionUnits={'absolute'}
                        sizeUnits={'absolute'}
                        anchor={[0, 0]}
                    >
                        <LegendTitle
                            key={'title'}
                            position={[0, 8]}
                            size={[60, 24]}
                            padding={[0, 0, 0, 0]}
                        >
                            scores
                        </LegendTitle>
                        <LegendColorScale
                            key={'legend-color-scale'}
                            variant={'right'}
                            size={[9, 120]}
                            position={[0, 30]}
                            gradientId={'grad-sequential'}
                        />
                    </Legend>
                </Draggable>
                <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                <ViewController
                    container={{
                        position: [1, 1],
                        positionUnits: 'relative',
                        anchor: [1, 0],
                        offset: [0, 6],
                    }}
                    horizontal={true}
                    component={IconButton}
                />
                <Tooltip
                    offset={[16, -16]}
                    padding={[0, 0, 6, 0]}
                    anchor={[0, 1]}
                    itemSize={[120, 26]}
                />
            </HeatMap>
        </Chart>
    )
}

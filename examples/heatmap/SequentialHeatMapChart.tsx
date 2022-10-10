import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    Surface,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chsk/matrix'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek } from '../utils'
import { MilestoneStory } from '../types'

const ids = alphabetGreek
const keys = alphabetGreek
export const generateSequentialHeatMapData = () => generateHeatMapMatrixUniform(ids, keys)

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
            offset: 70,
        },
    },
    AxisTicks: {
        top: {
            labelRotate: -45,
        },
    },
}

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
                    variant: 'sequential',
                    colors: 'Blues',
                    domain: [0, 100],
                }}
            >
                <HeatMapCells />
                <Surface style={{ stroke: '#222222', strokeWidth: 1, fill: '#ffffff00' }} />
                <Axis variant={'left'} label={'Samples'} />
                <Axis variant={'top'}>
                    <AxisTicks
                        variant={'top'}
                        labelStyle={{ textAnchor: 'start', alignmentBaseline: 'middle' }}
                    />
                    <AxisLabel variant={'top'}>Samples</AxisLabel>
                </Axis>
                <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[360, 70]}
                    size={[60, 180]}
                    anchor={[0, 0]}
                    units={'absolute'}
                >
                    <LegendTitle position={[0, 8]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                        scores
                    </LegendTitle>
                    <LegendColorScale
                        key={'legend-color-scale'}
                        variant={'right'}
                        size={[9, 120]}
                        padding={[0, 8, 0, 8]}
                        position={[0, 30]}
                        gradientId={'grad-sequential'}
                    />
                </Legend>
            </HeatMap>
        </Chart>
    )
}

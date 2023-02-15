import {
    Chart,
    Axis,
    AxisTicks,
    Legend,
    LegendColorScale,
    LegendTitle,
    Typography,
    Tooltip,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chsk/matrix'
import { generateHeatMapMatrixNormal } from './generators'
import { alphabetGreek } from '../utils'
import { MilestoneStory } from '../types'
import { TooltipProvider } from '../../packages/core/src'

const ids = ['A a', 'BB bb', 'CC cc', 'DDD ddd', 'EEE eee']
const keys = alphabetGreek

export const generateDivergingHeatMapData = () => generateHeatMapMatrixNormal(ids, keys)

export const DivergingHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="diverging-colors"
            size={[800, 240]}
            padding={[70, 140, 60, 60]}
        >
            <HeatMap
                data={rawData}
                keys={keys}
                scaleColor={{
                    variant: 'diverging',
                    colors: 'BrBG',
                    domain: [-2.6, 0, 2.6],
                }}
            >
                <HeatMapCells style={{ strokeWidth: 0.5, stroke: '#bbbbbb' }} />
                <Axis variant={'left'}>
                    <AxisTicks
                        variant={'left'}
                        tickSize={0}
                        labelOffset={55}
                        labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                    />
                </Axis>
                <Axis variant={'bottom'}>
                    <AxisTicks
                        variant={'bottom'}
                        tickSize={0}
                        labelRotate={-90}
                        labelStyle={{ textAnchor: 'end', dominantBaseline: 'middle' }}
                    />
                </Axis>
                <Typography variant={'title'} position={[-55, -45]}>
                    Horizontal heat map
                </Typography>
                <Typography variant={'subtitle'} position={[-55, -25]}>
                    Tick marks are left-aligned
                </Typography>
                <Legend
                    variant={'color'}
                    horizontal={true}
                    position={[420, -50]}
                    size={[160, 60]}
                    positionUnits={'absolute'}
                    sizeUnits={'absolute'}
                    anchor={[0, 0]}
                >
                    <LegendTitle position={[0, 0]} size={[60, 24]} padding={[0, 4, 0, 4]}>
                        z-scores
                    </LegendTitle>
                    <LegendColorScale
                        key={'legend-color-scale'}
                        variant={'bottom'}
                        horizontal={true}
                        size={[160, 9]}
                        padding={[0, 4, 0, 4]}
                        position={[0, 10]}
                        tickSize={3}
                        labelOffset={6}
                        gradientId={'grad-diverging'}
                    />
                </Legend>
                <TooltipProvider>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                    <Tooltip
                        translate={[-18, -18]}
                        anchor={[1, 1]}
                        padding={[0, 0, 6, 0]}
                        itemSize={[120, 28]}
                    />
                </TooltipProvider>
            </HeatMap>
        </Chart>
    )
}

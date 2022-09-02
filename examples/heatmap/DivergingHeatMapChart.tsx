import { Chart, Axis, AxisTicks, Legend, LegendColorScale, LegendTitle } from '@chask/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chask/matrix'
import { generateHeatMapMatrixNormal } from './generators'
import { alphabetUppercase } from '../utils'
import { MilestoneStory } from '../types'

const ids = [
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zero',
    'eta',
    'theta',
    'iota',
    'kappa',
    'lambda',
    'mu',
    'nu',
    'xi',
]
const keys = alphabetUppercase

export const generateDivergingHeatMapData = () => generateHeatMapMatrixNormal(ids, keys)

export const DivergingHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="diverging-colors"
            size={[600, 400]}
            padding={[40, 140, 60, 60]}
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
                    <AxisTicks variant={'left'} tickSize={0} />
                </Axis>
                <Axis variant={'bottom'}>
                    <AxisTicks
                        variant={'bottom'}
                        tickSize={0}
                        ticks={['A', 'F', 'K', 'P', 'U', 'Z']}
                    />
                </Axis>
                <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[420, 150]}
                    size={[60, 140]}
                    anchor={[0, 0]}
                    padding={[0, 8, 0, 0]}
                    units={'absolute'}
                >
                    <LegendTitle
                        position={[0, 8]}
                        size={[60, 24]}
                        padding={[0, 8, 0, 8]}
                        children={'z-scores'}
                    />
                    <LegendColorScale
                        key={'legend-color-scale'}
                        variant={'right'}
                        size={[10, 120]}
                        padding={[0, 8, 0, 8]}
                        position={[0, 30]}
                        gradientId={'grad-diverging'}
                    />
                </Legend>
            </HeatMap>
        </Chart>
    )
}

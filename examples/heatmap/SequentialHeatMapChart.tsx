import { Chart, Axis, Legend, LegendTitle, LegendColorScale } from '@chask/core'
import { HeatMap, HeatMapCells } from '@chask/matrix'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetUppercase } from '../utils'

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
const sequentialData = generateHeatMapMatrixUniform(ids, keys)

export const SequentialHeatMapChart = () => {
    return (
        <Chart id="sequential-colors" size={[600, 400]} padding={[40, 140, 60, 60]}>
            <HeatMap
                data={sequentialData}
                keys={keys}
                scaleColor={{
                    variant: 'sequential',
                    colors: 'Blues',
                    domain: [0, 100],
                }}
            >
                <HeatMapCells />
                <Axis variant={'left'} />
                <Axis
                    variant={'bottom'}
                    ticks={['A', 'C', 'E', 'G', 'I', 'K', 'M', 'O', 'Q', 'S', 'U', 'W', 'Z']}
                />
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[420, 70]}
                    size={[60, 180]}
                    anchor={[0, 0]}
                    units={'absolute'}
                >
                    <LegendTitle
                        position={[0, 8]}
                        size={[60, 24]}
                        padding={[0, 8, 0, 8]}
                        children={'scores'}
                    />
                    <LegendColorScale
                        key={'legend-color-scale'}
                        variant={'right'}
                        size={[10, 120]}
                        padding={[0, 8, 0, 8]}
                        position={[0, 30]}
                        gradientId={'grad-sequential'}
                    />
                </Legend>
            </HeatMap>
        </Chart>
    )
}

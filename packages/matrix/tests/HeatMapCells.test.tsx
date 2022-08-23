import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { HeatMap, HeatMapCells } from '../src'
import { heatmapProps } from './props'

describe('HeatMapCells', () => {
    it('draws cells', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('rect')).toHaveLength(12)
    })

    it('draws cells only for selected ids', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells ids={['alpha', 'beta']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // there should be cells for two rows with three keys each
        expect(result.querySelectorAll('rect')).toHaveLength(6)
    })

    it('draws cells only for selected keys', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells keys={['x', 'y']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and two columns (x, y)
        expect(result.querySelectorAll('rect')).toHaveLength(8)
    })
})
import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapColorCircle } from '../src'
import { heatmapProps } from './props'

describe('HeatMapColorCircle', () => {
    it('draws cells as circles', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells cell={HeatMapColorCircle} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('circle')).toHaveLength(12)
    })
})

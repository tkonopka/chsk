import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapRectangle } from '../../src'
import { heatmapProps } from '../props'

describe('HeatMapRectangle', () => {
    it('draws cells as rectangles', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells cell={HeatMapRectangle} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('rect')).toHaveLength(12)
    })
})

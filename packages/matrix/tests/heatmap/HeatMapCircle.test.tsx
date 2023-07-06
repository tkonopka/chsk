import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapCircle } from '../../src'
import { heatmapProps } from '../props'

describe('HeatMapColorCircle', () => {
    it('draws cells as circles', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells component={HeatMapCircle} />
                </HeatMap>
            </Chart>
        )
        // the data has four rows and three columns (x, y, z)
        expect(screen.getByRole('heatmap-cells').querySelectorAll('circle')).toHaveLength(12)
    })
})

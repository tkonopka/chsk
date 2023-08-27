import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapSimpleCircle } from '../../src'
import { heatmapProps } from '../props'

describe('HeatMapSimpleCircle', () => {
    it('draws cells as circles', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells component={HeatMapSimpleCircle} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('circle')).toHaveLength(12)
        expect(result.querySelectorAll('circle')[0]?.getAttribute('class')).toEqual('cell')
    })
})

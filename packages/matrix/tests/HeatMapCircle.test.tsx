import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapCircle } from '../src'
import { heatmapProps } from './props'

describe('HeatMapCircle', () => {
    it('draws cells as circles', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells cell={HeatMapCircle} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('circle')).toHaveLength(12)
    })

    it('assigns className', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y']}>
                    <HeatMapCells cell={HeatMapCircle} keys={['x']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        expect(result.querySelectorAll('circle')[0].getAttribute('class')).toEqual('cell')
    })
})

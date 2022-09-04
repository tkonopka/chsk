import { fireEvent, render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '../src'
import { heatmapProps } from './props'

describe('HeatMapHighlight', () => {
    it('creates a detector surface', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapHighlight />
                </HeatMap>
            </Chart>
        )
        expect(screen.getByRole('heatmap-detector')).toBeDefined()
        expect(screen.queryByRole('heatmap-highlight-mask')).toBeNull()
    })

    it('creates masks on mouseover and removes on mouseleave', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells />
                    <HeatMapHighlight />
                </HeatMap>
            </Chart>
        )
        const detector = screen.getByRole('heatmap-detector')
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        expect(screen.getByRole('heatmap-highlight-mask')).toBeDefined()
        fireEvent.mouseLeave(detector)
        expect(screen.queryByRole('heatmap-highlight-mask')).toBeNull()
    })
})

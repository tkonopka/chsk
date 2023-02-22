import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '../src'
import { genericViewProps, heatmapProps } from './props'

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

    it('creates masks on mouseover and removes on mouseleave', async () => {
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
        await waitFor(() => {
            expect(screen.queryByRole('heatmap-highlight-mask')).toBeNull()
        })
    })

    it('creates masks with class name', async () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells />
                    <HeatMapHighlight className={'custom'}/>
                </HeatMap>
            </Chart>
        )
        const detector = screen.getByRole('heatmap-detector')
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        expect(screen.getByRole('heatmap-highlight-mask')).toBeDefined()
        fireEvent.mouseLeave(detector)
        const maskRects = screen.getByRole('heatmap-highlight-mask').querySelectorAll('rect')
        expect(maskRects).toHaveLength(4)
        expect(maskRects[0].getAttribute('class')).toContain('heatmapHighlight')
        expect(maskRects[0].getAttribute('class')).toContain('custom')
    })

    it('omits detector surface for non-interactive use', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapHighlight interactive={false} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-detector')).toBeNull()
    })

    it('skips work in non-heatmap context', () => {
        render(
            <Chart>
                <View {...genericViewProps}>
                    <HeatMapHighlight />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-detector')).toBeNull()
    })
})

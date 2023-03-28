import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '../src'
import { genericViewProps, heatmapProps } from './props'
import { getNumberAttr } from '../../core/tests/utils'

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
                    <HeatMapHighlight className={'custom'} />
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

    it('creates elements without role', async () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapHighlight setRole={false} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-detector')).toBeNull()
    })

    it('omits detector surface for non-interactive use', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapHighlight ids={['alpha']} keys={['y']} interactive={false} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-detector')).toBeNull()
        // non-interactive, but should display rectangle masks
        expect(screen.getByRole('heatmap-highlight').querySelectorAll('rect')).toHaveLength(4)
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

    it('creates masks and detectors for subsets', async () => {
        // matrix with 4 rows and 3 columns, each cell roughly of size 100x100
        render(
            <Chart size={[340, 440]} padding={[20, 20, 20, 20]}>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells />
                    <HeatMapHighlight keys={['y']} />
                </HeatMap>
            </Chart>
        )
        const cells = screen.getByRole('heatmap-cells')
        expect(cells.querySelectorAll('rect')).toHaveLength(12)
        // initially, there should be no mask
        await waitFor(() => {
            expect(screen.queryByRole('heatmap-highlight-mask')).toBeNull()
        })
        // mouse over the detector on the middle key should create a mask
        const detector = screen.getByRole('heatmap-detector')
        fireEvent.mouseMove(detector, { clientX: 150, clientY: 150 })
        await waitFor(() => {
            const maskRects = screen.getByRole('heatmap-highlight-mask').querySelectorAll('rect')
            expect(maskRects).toHaveLength(4)
        })
        // mouse move to nearby position has no effect
        fireEvent.mouseMove(detector, { clientX: 152, clientY: 152 })
        // mouse over the detector, but outside the selected keys, should remove the masks
        fireEvent.mouseMove(detector, { clientX: 20, clientY: 20 })
        await waitFor(() => {
            expect(screen.queryByRole('heatmap-highlight-mask')).toBeNull()
        })
    })

    it('creates masks with edge animation', async () => {
        render(
            <Chart size={[340, 440]} padding={[20, 20, 20, 20]}>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapHighlight edgeAnimation={true} />
                </HeatMap>
            </Chart>
        )
        // mouse over the detector on the middle key should create a mask
        const detector = screen.getByRole('heatmap-detector')
        fireEvent.mouseMove(detector, { clientX: 250, clientY: 250 })
        // there will be four mask rectangles
        // the first mask rectangle covers the top-left are of the heatmap
        // the first mask rectangle should start at low width, then expand to cover most of the heat map
        await waitFor(() => {
            const maskRects = screen.getByRole('heatmap-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'width')).toBeLessThan(100)
        })
        await waitFor(() => {
            const maskRects = screen.getByRole('heatmap-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'width')).toBeGreaterThan(100)
        })
        const maskRects = screen.getByRole('heatmap-highlight-mask').querySelectorAll('rect')
        expect(getNumberAttr(maskRects[0], 'height')).toBeGreaterThan(100)
    })
})

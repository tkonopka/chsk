import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { HeatMap, HeatMapSurface } from '../../src'
import { heatmapProps } from '../props'

describe('HeatMapSurface', () => {
    // expand surface to cover entire cells
    const expansion05 = [
        [0.5, 0.5],
        [0.5, 0.5],
    ] as [[number, number], [number, number]]

    // make scales without padding (easier calculation of expected sizes)
    const scaleNoPadding = {
        variant: 'band' as const,
        padding: 0,
    }

    // convenience conversion to integers
    const round = (x: string | null | undefined) => Math.round(Number(x))

    it('creates a surface over the entire view', () => {
        render(
            <Chart size={[440, 340]} padding={[20, 20, 20, 20]}>
                <HeatMap
                    {...heatmapProps}
                    keys={['x', 'y', 'z']}
                    scaleX={scaleNoPadding}
                    scaleY={scaleNoPadding}
                >
                    <HeatMapSurface expansion={expansion05} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-surface')
        const rect = result.querySelector('rect')
        expect(round(rect?.getAttribute('width'))).toEqual(400)
    })

    it('creates a surface over a part of the heat map', () => {
        render(
            <Chart size={[440, 340]} padding={[20, 20, 20, 20]}>
                <HeatMap
                    {...heatmapProps}
                    keys={['x', 'y', 'z']}
                    scaleX={scaleNoPadding}
                    scaleY={scaleNoPadding}
                >
                    <HeatMapSurface keys={['y']} ids={['beta', 'gamma']} expansion={expansion05} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-surface')
        const rect = result.querySelector('rect')
        expect(round(rect?.getAttribute('x'))).toBeGreaterThan(0)
        expect(round(rect?.getAttribute('y'))).toBeGreaterThan(0)
        expect(round(rect?.getAttribute('width'))).toBeLessThan(400)
        expect(round(rect?.getAttribute('height'))).toBeLessThan(300)
    })

    it('skips work when ids are empty/invalid', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapSurface ids={['aaaa', 'b']} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-surface')).toBeNull()
    })

    it('skips work when keys are empty/invalid', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapSurface keys={['aaaa', 'b']} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-surface')).toBeNull()
    })
})

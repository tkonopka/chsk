import { render, screen } from '@testing-library/react'
import { Chart, Polygon, NumericPositionSpec } from '../../src'
import { chartProps } from '../props'

describe('Polygon', () => {
    const points: NumericPositionSpec[] = [
        [0, 0],
        [2, 1],
        [1, 2],
    ]

    it('creates a default polygon', () => {
        render(
            <Chart {...chartProps}>
                <Polygon points={points} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a polygon variant with role', () => {
        render(
            <Chart {...chartProps}>
                <Polygon variant={'custom-polygon'} points={points} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBe('custom-polygon')
        expect(result?.getAttribute('class')).toBe('customPolygon')
    })

    it('creates a polygon variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Polygon variant={'custom-polygon'} points={points} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
        expect(result?.getAttribute('class')).toBe('customPolygon')
    })

    it('creates a custom polygon', () => {
        render(
            <Chart {...chartProps}>
                <Polygon variant={'test'} points={points} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

import { render, screen } from '@testing-library/react'
import { Chart, Square } from '../../src'
import { chartProps } from '../props'

describe('Square', () => {
    it('creates a default square', () => {
        render(
            <Chart {...chartProps}>
                <Square />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
        const width = result?.getAttribute('width')
        const height = result?.getAttribute('height')
        expect(width).toBe(height)
    })

    it('creates a square variant with role', () => {
        render(
            <Chart {...chartProps}>
                <Square variant={'custom-square'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBe('custom-square')
        expect(result?.getAttribute('class')).toBe('customSquare')
    })

    it('creates a square variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Square variant={'custom-square'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
        expect(result?.getAttribute('class')).toBe('customSquare')
    })
})

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
        expect(result?.getAttribute('role')).toContain('default')
        const width = result?.getAttribute('width')
        const height = result?.getAttribute('height')
        expect(width).toBe(height)
    })

    it('creates a default square without role', () => {
        render(
            <Chart {...chartProps}>
                <Square setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom square', () => {
        render(
            <Chart {...chartProps}>
                <Square variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
        const width = result?.getAttribute('width')
        const height = result?.getAttribute('height')
        expect(width).toBe(height)
    })
})

import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { InvertedTriangle } from '../../src/'
import { chartProps } from '../props'

describe('InvertedTriangle', () => {
    it('creates a default inverted triangle', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result).toBeDefined()
    })

    it('creates an inverted triangle with role', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle variant={'custom-triangle'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBe('custom-triangle')
    })

    it('creates an inverted triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle variant={'custom-triangle'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })
})

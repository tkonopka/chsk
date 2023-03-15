import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Diamond } from '../../src'
import { chartProps } from '../props'

describe('Diamond', () => {
    it('creates a default diamond', () => {
        render(
            <Chart {...chartProps}>
                <Diamond variant={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result).toBeDefined()
    })

    it('creates a diamond with role', () => {
        render(
            <Chart {...chartProps}>
                <Diamond variant={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBe('custom')
    })

    it('creates a diamond without role', () => {
        render(
            <Chart {...chartProps}>
                <Diamond variant={'custom'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })
})

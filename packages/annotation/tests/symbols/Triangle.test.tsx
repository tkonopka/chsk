import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Triangle } from '../../src'
import { chartProps } from '../props'

describe('Triangle', () => {
    it('creates a default triangle', () => {
        render(
            <Chart {...chartProps}>
                <Triangle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result).toBeDefined()
    })

    it('creates a triangle with role', () => {
        render(
            <Chart {...chartProps}>
                <Triangle variant={'custom-triangle'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBe('custom-triangle')
    })

    it('creates a triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <Triangle variant={'custom-triangle'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })
})

import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pentagon } from '../../src'
import { chartProps } from '../props'

describe('Pentagon', () => {
    it('creates a default shape', () => {
        render(
            <Chart {...chartProps}>
                <Pentagon />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result).toBeDefined()
    })

    it('creates a shape with role', () => {
        render(
            <Chart {...chartProps}>
                <Pentagon variant={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBe('custom')
    })

    it('creates a shape without role', () => {
        render(
            <Chart {...chartProps}>
                <Pentagon variant={'custom'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })
})

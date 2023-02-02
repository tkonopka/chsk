import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Diamond } from '../../src'
import { chartProps } from '../props'

describe('Diamond', () => {
    it('creates a default diamond', () => {
        render(
            <Chart {...chartProps}>
                <Diamond />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default diamond without role', () => {
        render(
            <Chart {...chartProps}>
                <Diamond setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom diamond', () => {
        render(
            <Chart {...chartProps}>
                <Diamond variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

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
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <Triangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom triangle', () => {
        render(
            <Chart {...chartProps}>
                <Triangle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

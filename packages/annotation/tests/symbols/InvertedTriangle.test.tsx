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
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default inverted triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom inverted triangle', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Segment } from '../../src'
import { chartProps } from '../props'

describe('Segment', () => {
    it('creates a default segment', () => {
        render(
            <Chart {...chartProps}>
                <Segment />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('line')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default segment without role', () => {
        render(
            <Chart {...chartProps}>
                <Segment setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('line')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom segment', () => {
        render(
            <Chart {...chartProps}>
                <Segment variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

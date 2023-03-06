import { render, screen } from '@testing-library/react'
import { Chart, Line } from '../../src'
import { chartProps } from '../props'

describe('Line', () => {
    it('creates a default line', () => {
        render(
            <Chart {...chartProps}>
                <Line x1={0} y1={0} x2={10} y2={20} />
            </Chart>
        )
        const result = screen.getByRole('default')
        expect(result?.getAttribute('y1')).toContain('0')
        expect(result?.getAttribute('x2')).toContain('10')
        expect(result?.getAttribute('y2')).toContain('20')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default line without role', () => {
        render(
            <Chart {...chartProps}>
                <Line x1={0} y1={0} x2={10} y2={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('line')).toHaveLength(1)
    })

    it('assigns markers', () => {
        render(
            <Chart {...chartProps}>
                <Line x1={0} y1={0} x2={10} y2={20} markerStart={'abc'} markerEnd={'xyz'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('line')?.getAttribute('marker-start')).toEqual('url(#abc)')
        expect(result.querySelector('line')?.getAttribute('marker-end')).toEqual('url(#xyz)')
    })
})

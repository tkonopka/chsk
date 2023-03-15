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
        const result = screen.getByRole('chart-content').querySelector('line')
        expect(result?.getAttribute('y1')).toContain('0')
        expect(result?.getAttribute('x2')).toContain('10')
        expect(result?.getAttribute('y2')).toContain('20')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a line variant with role', () => {
        render(
            <Chart {...chartProps}>
                <Line variant={'custom-line'} x1={0} y1={0} x2={10} y2={20} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('line')
        expect(result?.getAttribute('class')).toEqual('customLine')
        expect(result?.getAttribute('role')).toEqual('custom-line')
    })

    it('creates a line variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Line variant={'custom-line'} x1={0} y1={0} x2={10} y2={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('line')
        expect(result?.getAttribute('class')).toEqual('customLine')
        expect(result?.getAttribute('role')).toBeNull()
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

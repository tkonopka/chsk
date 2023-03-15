import { render, screen } from '@testing-library/react'
import { Chart, Circle } from '../../src'
import { chartProps } from '../props'

describe('Circle', () => {
    it('creates a default circle', () => {
        render(
            <Chart {...chartProps}>
                <Circle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(isFinite(Number(result?.getAttribute('cx')))).toBeFalsy()
        expect(isFinite(Number(result?.getAttribute('cy')))).toBeFalsy()
        expect(isFinite(Number(result?.getAttribute('r')))).toBeFalsy()
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a circle variant with role', () => {
        render(
            <Chart {...chartProps}>
                <Circle variant={'custom-circle'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(result?.getAttribute('role')).toBe('custom-circle')
        expect(result?.getAttribute('class')).toBe('customCircle')
    })

    it('creates a circle variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Circle variant={'custom-circle'} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(result?.getAttribute('role')).toBeNull()
        expect(result?.getAttribute('class')).toBe('customCircle')
    })

    it('creates a custom circle', () => {
        render(
            <Chart {...chartProps}>
                <Circle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('cx')).toContain('10')
        expect(result.getAttribute('cy')).toContain('20')
        expect(result.getAttribute('r')).toContain('5')
        expect(result.getAttribute('role')).toContain('test')
    })
})

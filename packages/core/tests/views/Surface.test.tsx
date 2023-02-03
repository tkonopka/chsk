import { render, screen } from '@testing-library/react'
import { Chart, Surface } from '../../src'
import { chartProps } from '../props'

describe('Surface', () => {
    it('creates inner surface', () => {
        render(
            <Chart {...chartProps}>
                <Surface variant={'inner'} />
            </Chart>
        )
        const result = screen.getByRole('surface-inner')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
    })

    it('creates outer surface', () => {
        render(
            <Chart {...chartProps}>
                <Surface variant={'outer'} />
            </Chart>
        )
        const result = screen.getByRole('surface-outer')
        expect(result.getAttribute('x')).toBe('-20')
        expect(result.getAttribute('y')).toBe('-20')
    })

    it('creates surface without role', () => {
        render(
            <Chart {...chartProps}>
                <Surface setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
    })
})

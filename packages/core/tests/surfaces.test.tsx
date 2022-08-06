import { render, screen } from '@testing-library/react'
import { Chart, BackgroundSurface, Surface } from '../src'
import { chartProps } from './props'

describe('BackgroundSurface', () => {
    it('creates inner surface', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundSurface variant={'inner'} />
            </Chart>
        )
        const result = screen.getByRole('inner')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
    })

    it('creates outer surface', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundSurface variant={'outer'} />
            </Chart>
        )
        const result = screen.getByRole('outer')
        expect(result.getAttribute('x')).toBe('-20')
        expect(result.getAttribute('y')).toBe('-20')
    })

    it('creates surface without role', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundSurface setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
    })
})

describe('Surface', () => {
    it('creates surface', () => {
        render(
            <Chart {...chartProps}>
                <Surface x={0} y={0} size={[50, 50]} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
    })
    it('creates surface without role', () => {
        render(
            <Chart {...chartProps}>
                <Surface x={0} y={0} size={[50, 50]} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
    })
})

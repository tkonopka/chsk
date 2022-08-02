import { render, screen } from '@testing-library/react'
import { Chart, BackgroundSurface } from '../src'
import { chartProps } from './helpers'

describe('BackgroundSurface', () => {
    it('creates inner surface', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundSurface variant={'inner'} />
            </Chart>
        )
        const result = screen.getByRole('inner')
        //screen.debug(result)
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
})

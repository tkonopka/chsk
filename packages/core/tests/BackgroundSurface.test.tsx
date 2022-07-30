import { render, screen } from '@testing-library/react'
import { Chart, BackgroundSurface } from '../src'

const chartProps = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    data: [],
}

describe('BackgroundSurface', () => {
    it('creates inner surface', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundSurface variant={'inner'} />
            </Chart>
        )
        const result = screen.getByRole('surface')
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
        const result = screen.getByRole('surface')
        //screen.debug(result)
        expect(result.getAttribute('x')).toBe('-20')
        expect(result.getAttribute('y')).toBe('-20')
    })
})

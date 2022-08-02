import { render, screen } from '@testing-library/react'
import { Chart, Grid } from '../src'
import { chartProps } from './helpers'

describe('Grid', () => {
    it('creates horizontal grid lines', () => {
        render(
            <Chart {...chartProps}>
                <Grid variant="x" values={6} />
            </Chart>
        )
        const result = screen.getByRole('grid-x')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates vertical grid lines', () => {
        render(
            <Chart {...chartProps}>
                <Grid variant="y" values={6} />
            </Chart>
        )
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid with boolean nice', () => {
        render(
            <Chart
                {...chartProps}
                scaleX={{ variant: 'log' as const, min: 1, max: 100, nice: true }}
            >
                <Grid variant="y" values={6} />
            </Chart>
        )
        // this criterion does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid with numeric nice', () => {
        render(
            <Chart {...chartProps} scaleX={{ variant: 'log' as const, min: 1, max: 100, nice: 2 }}>
                <Grid variant="y" values={6} />
            </Chart>
        )
        // this test does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })
})

import { render, screen } from '@testing-library/react'
import { Chart, Grid } from '../src'

const scaleProps = {
    variant: 'linear' as const,
    min: 0,
    max: 100,
}
const chartProps = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}

describe('Grid', () => {
    it('creates horizontal grid lines', () => {
        render(
            <Chart {...chartProps}>
                <Grid variant="x" values={6} />
            </Chart>
        )
        const result = screen.getAllByRole('line-grid')
        expect(result).toHaveLength(6)
    })

    it('creates vertical grid lines', () => {
        render(
            <Chart {...chartProps}>
                <Grid variant="y" values={6} />
            </Chart>
        )
        const result = screen.getAllByRole('line-grid')
        expect(result).toHaveLength(6)
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
        const result = screen.getAllByRole('line-grid')
        // this criterion does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        expect(result).toHaveLength(6)
    })

    it('creates grid with numeric nice', () => {
        render(
            <Chart {...chartProps} scaleX={{ variant: 'log' as const, min: 1, max: 100, nice: 2 }}>
                <Grid variant="y" values={6} />
            </Chart>
        )
        const result = screen.getAllByRole('line-grid')
        // this criterion does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        expect(result).toHaveLength(6)
    })
})

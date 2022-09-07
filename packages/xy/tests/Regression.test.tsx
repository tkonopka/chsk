import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, Regression } from '../src/scatter'
import { scatterProps } from './props'

describe('Regression', () => {
    it('creates a regression line', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Regression ids={['linear']} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result).toHaveLength(1)
    })

    it('creates more than one regression line', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Regression />
                </Scatter>
            </Chart>
        )
        // the dataset has two series, so there should be two regression lines
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result).toHaveLength(2)
    })

    it('skips modeling for a disabled line', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear']) }}>
                <Scatter {...scatterProps}>
                    <Regression />
                </Scatter>
            </Chart>
        )
        // the dataset has two series, but one is disabled, so one line
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result).toHaveLength(1)
    })

    it('creates a regression for pooled data', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Regression variant={'pooled'} />
                </Scatter>
            </Chart>
        )
        // the dataset has two series, but the model should pool all data, so one line
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result).toHaveLength(1)
    })

    it('creates a regression for pooled data, but skips disabled ids', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['quadratic']) }}>
                <Scatter {...scatterProps}>
                    <Regression variant={'pooled'} />
                    <Regression />
                </Scatter>
            </Chart>
        )
        // regression with pooled data (with one series omitted) and individual data
        // should be the same. So the details of two regression lines should be equal
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result[0].getAttribute('y1')).toEqual(result[1].getAttribute('y1'))
        expect(result[0].getAttribute('y2')).toEqual(result[1].getAttribute('y2'))
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Regression variant={'series'} ids={['non-existent']} />
                    <Regression variant={'pooled'} ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('regression')).toBeNull()
    })
})

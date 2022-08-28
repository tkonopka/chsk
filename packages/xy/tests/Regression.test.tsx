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

    it('creates multiple regression line', () => {
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

    it('creates a regression for pooled data', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Regression variant={'pooled'} />
                </Scatter>
            </Chart>
        )
        // the dataset has two series, so there should be two regression lines
        const result = screen.getByRole('view-scatter').querySelectorAll('line')
        expect(result).toHaveLength(1)
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

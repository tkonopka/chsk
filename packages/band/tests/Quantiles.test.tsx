import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chask/core'
import { Quantile, Quantiles } from '../src'
import { quantileProps } from './props'

describe('Quantiles', () => {
    it('creates boxes and whiskers (vertical)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        // the data has two groups of two boxes each
        const result = screen.getByRole('view-quantile')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
        expect(screen.getAllByRole('boxwhisker')).toHaveLength(4)
    })

    it('creates boxes and whiskers (horizontal)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps} horizontal={true}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        const result = screen.getByRole('view-quantile')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('displays bars only for specified ids', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Quantile>
            </Chart>
        )
        // the chart should have only bars for 'alpha' - three bars for keys x, y, z
        const result = screen.getByRole('view-quantile')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tickLabel')
        expect(ticks).toHaveLength(2)
        expect(ticks[0].textContent).toEqual('alpha')
        expect(ticks[1].textContent).toEqual('beta')
    })

    it('displays bars only for specified keys', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles keys={['x']} />
                </Quantile>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-quantile')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles keys={[]} />
                </Quantile>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-quantile')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })
})

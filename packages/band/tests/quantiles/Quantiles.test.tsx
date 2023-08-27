import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chsk/core'
import { Quantile, Quantiles } from '../../src/quantiles'
import { dataMissingKeys, quantileProps, stripProps } from '../props'

describe('Quantiles', () => {
    it('avoids work in non-quantile view', () => {
        render(
            <Chart>
                <Quantiles />
            </Chart>
        )
        expect(screen.getByRole('chart-content').children).toHaveLength(0)
    })

    it('creates boxes and whiskers (vertical)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        // the data has two groups of two boxes each
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(4)
        expect(screen.getAllByRole('box-and-whiskers')).toHaveLength(4)
    })

    it('creates boxes and whiskers (horizontal)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps} horizontal={true}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('displays boxes only for specified ids', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Quantile>
            </Chart>
        )
        // the chart should have only bars for 'alpha' - two bars for keys x, y
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(2)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(2)
        expect(ticks[0]?.textContent).toEqual('alpha')
        expect(ticks[1]?.textContent).toEqual('beta')
    })

    it('displays boxes only for specified keys', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles keys={['x']} />
                </Quantile>
            </Chart>
        )
        // the chart should have only bars for key 'x' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('displays nothing when ids are empty', () => {
        render(
            <Chart>
                <Quantile {...stripProps}>
                    <Quantiles ids={[]} />
                </Quantile>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
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
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y']) }}>
                <Quantile {...quantileProps}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('handles missing data', () => {
        render(
            <Chart>
                <Quantile {...quantileProps} data={dataMissingKeys}>
                    <Quantiles />
                </Quantile>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(2)
    })
})

import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chsk/core'
import { Distribution, Distributions } from '../../src'
import { dataMissingKeys, quantileProps, stripProps } from '../props'

describe('Distributions', () => {
    it('avoids work in non-quantile view', () => {
        render(
            <Chart>
                <Distributions />
            </Chart>
        )
        expect(screen.getByRole('chart-content').children).toHaveLength(0)
    })

    it('creates boxes and whiskers (vertical)', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions />
                </Distribution>
            </Chart>
        )
        // the data has two groups of two boxes each
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(4)
        expect(screen.getAllByRole('box-and-whiskers')).toHaveLength(4)
    })

    it('creates boxes and whiskers (horizontal)', () => {
        render(
            <Chart>
                <Distribution {...quantileProps} horizontal={true}>
                    <Distributions />
                </Distribution>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('displays boxes only for specified ids', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Distribution>
            </Chart>
        )
        // the chart should have only bars for 'alpha' - two bars for keys x, y
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(2)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tick-label')
        expect(ticks).toHaveLength(2)
        expect(ticks[0].textContent).toEqual('alpha')
        expect(ticks[1].textContent).toEqual('beta')
    })

    it('displays boxes only for specified keys', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions keys={['x']} />
                </Distribution>
            </Chart>
        )
        // the chart should have only bars for key 'x' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('displays nothing when ids are empty', () => {
        render(
            <Chart>
                <Distribution {...stripProps}>
                    <Distributions ids={[]} />
                </Distribution>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions keys={[]} />
                </Distribution>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y']) }}>
                <Distribution {...quantileProps}>
                    <Distributions />
                </Distribution>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('handles missing data', () => {
        render(
            <Chart>
                <Distribution {...quantileProps} data={dataMissingKeys}>
                    <Distributions />
                </Distribution>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(2)
    })
})

import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { LineAndWhiskers, Quantile, Quantiles } from '../../src/quantiles'
import { dataPrecomputedQuantilesValues, quantileProps } from '../props'

describe('LineAndWhisker', () => {
    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <LineAndWhiskers data={undefined} horizontal={false} />
            </Chart>
        )
        expect(screen.getByRole('chart-content').children).toHaveLength(0)
    })

    it('avoids work when custom data does not specify moments', () => {
        // dataPrecomputedQuantileValues has valid quantiles, but not moments
        render(
            <Chart>
                <Quantile {...quantileProps} data={dataPrecomputedQuantilesValues}>
                    <Quantiles component={LineAndWhiskers} />
                </Quantile>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('view-content')).toBeDefined()
        expect(screen.getByRole('chart-content').querySelectorAll('line')).toHaveLength(0)
    })

    it('creates lines and whiskers (vertical)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles component={LineAndWhiskers} />
                </Quantile>
            </Chart>
        )
        // the data has two groups of two boxes each
        expect(screen.getAllByRole('line-and-whiskers')).toHaveLength(4)
        // each distribution should be associated with one line in the middle and two whiskers
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('line')).toHaveLength(12)
    })

    it('creates lines and whiskers (horizontal)', () => {
        render(
            <Chart>
                <Quantile {...quantileProps} horizontal={true}>
                    <Quantiles component={LineAndWhiskers} />
                </Quantile>
            </Chart>
        )
        expect(screen.getAllByRole('line-and-whiskers')).toHaveLength(4)
        // each distribution should be associated with one line in the middle, two whiskers
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('line')).toHaveLength(12)
    })

    it('creates lines and whiskers without role', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles component={LineAndWhiskers} whiskerCapWidth={0.5} setRole={false} />
                </Quantile>
            </Chart>
        )
        expect(screen.queryAllByRole('line-and-whiskers')).toHaveLength(0)
        // each distribution should be associated with one line in the middle, two whiskers, two caps
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('line')).toHaveLength(20)
    })
})

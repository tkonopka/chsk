import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BoxAndWhiskers, Quantile, Quantiles } from '../../src/quantiles'
import { dataPrecomputedQuantilesValues, quantileProps } from '../props'

describe('BoxAndWhiskers', () => {
    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <BoxAndWhiskers data={undefined} horizontal={false} />
            </Chart>
        )
        expect(screen.getByRole('chart-content').children).toHaveLength(0)
    })

    it('creates box-and-whiskers from custom data', () => {
        // dataPrecomputedQuantileValues has valid quantiles, but not moments
        render(
            <Chart>
                <Quantile {...quantileProps} data={dataPrecomputedQuantilesValues}>
                    <Quantiles component={BoxAndWhiskers} setRole={false} />
                </Quantile>
            </Chart>
        )
        expect(screen.queryAllByRole('box-and-whiskers')).toHaveLength(0)
        // four box-and-whisker, i.e. eight whisker lines + four median lines
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(4)
        expect(screen.getByRole('view-content').querySelectorAll('line')).toHaveLength(12)
    })
})

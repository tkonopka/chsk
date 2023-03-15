import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BarAndWhisker, Distribution, Distributions } from '../../src/distributions'
import { dataPrecomputedQuantilesValues, quantileProps } from '../props'

describe('BarAndWhisker', () => {
    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <BarAndWhisker data={undefined} horizontal={false} />
            </Chart>
        )
        expect(screen.getByRole('chart-content').children).toHaveLength(0)
    })

    it('avoids work when custom data does not specify moments', () => {
        // dataPrecomputedQuantileValues has valid quantiles, but not moments
        render(
            <Chart>
                <Distribution {...quantileProps} data={dataPrecomputedQuantilesValues}>
                    <Distributions component={BarAndWhisker} />
                </Distribution>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('view-content')).toBeDefined()
        expect(screen.getByRole('chart-content').querySelectorAll('line')).toHaveLength(0)
    })

    it('creates bars and whiskers (vertical)', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions component={BarAndWhisker} />
                </Distribution>
            </Chart>
        )
        // the data has two groups of two boxes each
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
        expect(result.querySelectorAll('line')).toHaveLength(4)
        expect(screen.getAllByRole('bar-and-whisker')).toHaveLength(4)
    })

    it('creates bar and whiskers (horizontal)', () => {
        render(
            <Chart>
                <Distribution {...quantileProps} horizontal={true}>
                    <Distributions component={BarAndWhisker} />
                </Distribution>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
        expect(result.querySelectorAll('line')).toHaveLength(4)
    })

    it('creates bar and whisker without role', () => {
        render(
            <Chart>
                <Distribution {...quantileProps}>
                    <Distributions
                        component={BarAndWhisker}
                        whiskerCapWidth={0.5}
                        setRole={false}
                    />
                </Distribution>
            </Chart>
        )
        expect(screen.queryAllByRole('bar-and-whiskers')).toHaveLength(0)
        // each distribution should be associated with one rect, one whisker, and one cap
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(4)
        expect(screen.getByRole('view-content').querySelectorAll('line')).toHaveLength(8)
    })
})

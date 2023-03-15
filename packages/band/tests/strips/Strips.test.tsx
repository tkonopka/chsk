import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chsk/core'
import { Strip, Strips } from '../../src'
import { dataMissingKeys, stripProps } from '../props'

describe('Strips', () => {
    it('avoids work in non-strip view', () => {
        render(
            <Chart>
                <Strips />
            </Chart>
        )
        const content = screen.getByRole('chart-content')
        expect(content.querySelectorAll('circle')).toHaveLength(0)
    })

    it('creates strips of data points (vertical)', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips />
                </Strip>
            </Chart>
        )
        // the data has two groups, alpha has 22 points, beta has 12
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(34)
    })

    it('creates strips of data points (horizontal)', () => {
        render(
            <Chart>
                <Strip {...stripProps} horizontal={true}>
                    <Strips />
                </Strip>
            </Chart>
        )
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(34)
    })

    it('displays data only for specified ids', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Strip>
            </Chart>
        )
        // the chart should have only bars for 'alpha' - 22 points
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(22)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(2)
        expect(ticks[0].textContent).toEqual('alpha')
        expect(ticks[1].textContent).toEqual('beta')
    })

    it('displays data only for specified keys', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips keys={['x']} />
                </Strip>
            </Chart>
        )
        // the chart should have only circles for key 'x' - for ids 'alpha' (11) and 'beta' (6)
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(17)
    })

    it('displays nothing when ids are empty', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips ids={[]} />
                </Strip>
            </Chart>
        )
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(0)
    })

    it('displays nothing when ids do not match data', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips ids={['aaa', 'bbb']} />
                </Strip>
            </Chart>
        )
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(0)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Strips keys={[]} />
                </Strip>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(0)
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y']) }}>
                <Strip {...stripProps}>
                    <Strips />
                </Strip>
            </Chart>
        )
        const result = screen.getByRole('view-strip')
        expect(result.querySelectorAll('circle')).toHaveLength(0)
    })

    it('handles missing data', () => {
        render(
            <Chart>
                <Strip {...stripProps} data={dataMissingKeys}>
                    <Strips />
                </Strip>
            </Chart>
        )
        const result = screen.getByRole('view-strip')
        // dataset has values only in a selected id-key combos
        const expected = Number(dataMissingKeys[0].x?.length) + Number(dataMissingKeys[1].y?.length)
        expect(result.querySelectorAll('circle')).toHaveLength(expected)
    })
})

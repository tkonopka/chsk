import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chsk/core'
import { Bar, BarDataItem, Bars, Strip } from '../../src'
import { barProps, stripProps } from '../props'
import { getNumberAttr } from '../../../core/tests/utils'

describe('Bars', () => {
    it('avoids work in non-bars context', () => {
        render(
            <Chart>
                <Bars />
            </Chart>
        )
        expect(screen.queryAllByRole('bars')).toHaveLength(0)
    })

    it('defines grouped bars (vertical)', () => {
        render(
            <Chart>
                <Bar {...barProps} variant={'grouped'}>
                    <Bars />
                </Bar>
            </Chart>
        )
        expect(screen.queryByRole('bars-labels')).toBeDefined()
        // the data has two groups of three bars each
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(6)
        expect(screen.getAllByRole('bars')).toHaveLength(3)
    })

    it('defines stacked bars (vertical)', () => {
        render(
            <Chart size={[440, 340]} padding={[20, 20, 20, 20]}>
                <Bar {...barProps} variant={'stacked'}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        const bars = result.querySelectorAll('rect')
        expect(bars).toHaveLength(6)
        // the chart view will have width 400
        // there are two indexes (alpha, beta)
        // so each bar should have width slightly smaller than 200 (allowing for padding)
        expect(getNumberAttr(bars[0], 'width')).toBeGreaterThan(100)
        expect(getNumberAttr(bars[0], 'width')).toBeLessThan(200)
    })

    it('defines grouped bars (horizontal)', () => {
        render(
            <Chart>
                <Bar {...barProps} variant={'grouped'} horizontal={true}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(6)
    })

    it('displays bars from data with missing values', () => {
        const dataMissing = [
            {
                id: 'X',
                x: 75,
            },
            {
                id: 'Y',
                y: 50,
            },
        ]
        render(
            <Chart>
                <Bar
                    data={dataMissing}
                    keys={['x', 'y']}
                    variant={'stacked'}
                    scaleIndex={{
                        variant: 'band' as const,
                        domain: ['X', 'Y'],
                    }}
                    scaleValue={{
                        variant: 'linear' as const,
                        domain: [0, 100] as [number, number],
                    }}
                >
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        // the data has two groups with one bar each
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('displays bars only for specified ids', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <Bars ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Bar>
            </Chart>
        )
        // the chart should have only bars for 'alpha' - three bars for keys x, y, z
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(2)
        expect(ticks[0]?.textContent).toEqual('alpha')
        expect(ticks[1]?.textContent).toEqual('beta')
    })

    it('displays bars only for specified keys', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <Bars keys={['x', 'y']} />
                </Bar>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <Bars keys={[]} />
                </Bar>
            </Chart>
        )
        // the chart should have only bars for keys 'x' and 'y' - for ids 'alpha' and 'beta'
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y', 'z']) }}>
                <Bar {...barProps}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })

    it('handles missing data', () => {
        const dataMissingKeys: Array<BarDataItem> = [
            {
                id: 'alpha',
                x: 55,
                z: 10,
            },
            {
                id: 'beta',
                y: 25,
            },
        ]
        render(
            <Chart>
                <Bar {...barProps} data={dataMissingKeys} scaleValue={{ variant: 'linear' }}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
    })

    it('handles id without any data', () => {
        const dataMissingKeys: Array<BarDataItem> = [
            {
                id: 'alpha',
                x: 55,
                z: 10,
            },
            {
                id: 'beta',
            },
        ]
        render(
            <Chart>
                <Bar {...barProps} data={dataMissingKeys} scaleValue={{ variant: 'linear' }}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    const dataNegativeValues: Array<BarDataItem> = [
        {
            id: 'alpha',
            x: 20,
        },
        {
            id: 'beta',
            x: -20,
        },
    ]

    it('handles negative values (vertical)', () => {
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={dataNegativeValues}
                    keys={['x']}
                    scaleValue={{ variant: 'linear', domain: 'auto' }}
                    horizontal={false}
                >
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelectorAll('rect')
        expect(result).toHaveLength(2)
        // two bars should have equal size
        expect(result[0]?.getAttribute('height')).toEqual(result[1]?.getAttribute('height'))
        expect(result[0]?.getAttribute('width')).toEqual(result[1]?.getAttribute('width'))
    })

    it('handles negative values (horizontal)', () => {
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={dataNegativeValues}
                    keys={['x']}
                    scaleValue={{ variant: 'linear', domain: 'auto' }}
                    horizontal={true}
                >
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelectorAll('rect')
        expect(result).toHaveLength(2)
        // two bars should have equal size
        expect(result[0]?.getAttribute('height')).toEqual(result[1]?.getAttribute('height'))
        expect(result[0]?.getAttribute('width')).toEqual(result[1]?.getAttribute('width'))
    })

    it('skips works in non-Bars setting', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Bars keys={['x', 'y']} />
                </Strip>
            </Chart>
        )
        expect(screen.queryByRole('bars')).toBeNull()
    })
})

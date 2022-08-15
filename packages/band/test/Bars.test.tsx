import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chask/core'
import { Bar, Bars } from '../src'
import { barProps } from './props'

describe('Bars', () => {
    it('defines grouped bars (vertical)', () => {
        render(
            <Chart>
                <Bar {...barProps} stacked={false}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bar-bars')
        // the data has two groups of three bars each
        expect(result.querySelectorAll('rect')).toHaveLength(6)
    })

    it('defines stacked bars (vertical)', () => {
        render(
            <Chart>
                <Bar {...barProps} stacked={true}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bar-bars')
        // the data has two groups of three bars each
        expect(result.querySelectorAll('rect')).toHaveLength(6)
    })

    it('defines grouped bars (horizontal)', () => {
        render(
            <Chart>
                <Bar {...barProps} stacked={false} horizontal={true}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bar-bars')
        // the data has two groups of three bars each
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
                    stacked={true}
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
        const result = screen.getByRole('bar-bars')
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
        const result = screen.getByRole('bar-bars')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tickLabel')
        expect(ticks).toHaveLength(2)
        expect(ticks[0].textContent).toEqual('alpha')
        expect(ticks[1].textContent).toEqual('beta')
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
        const result = screen.getByRole('bar-bars')
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
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })
})

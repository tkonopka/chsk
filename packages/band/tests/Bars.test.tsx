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
        // the data has two groups of three bars each
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('rect')).toHaveLength(6)
        const keys = screen.getAllByRole('bars')
        expect(keys).toHaveLength(3)
    })

    it('defines stacked bars (vertical)', () => {
        render(
            <Chart size={[440, 340]} padding={[20, 20, 20, 20]}>
                <Bar {...barProps} stacked={true}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        const bars = result.querySelectorAll('rect')
        expect(bars).toHaveLength(6)
        // the chart view will have width 400
        // there are two indexes (alpha, beta)
        // so each bar should have width slightly smaller than 200 (allowing for padding)
        expect(Number(bars[0].getAttribute('width'))).toBeGreaterThan(100)
        expect(Number(bars[0].getAttribute('width'))).toBeLessThan(200)
    })

    it('defines grouped bars (horizontal)', () => {
        render(
            <Chart>
                <Bar {...barProps} stacked={false} horizontal={true}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
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
        const result = screen.getByRole('view-bar')
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
        const result = screen.getByRole('view-bar')
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
        const result = screen.getByRole('view-bar')
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

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y', 'z']) }}>
                <Bar {...barProps}>
                    <Bars />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })
})

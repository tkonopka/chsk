import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
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
})

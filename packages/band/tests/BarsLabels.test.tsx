import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Bar, BarsLabels } from '../src'
import { barProps } from './props'

describe('BarsLabels', () => {
    it('creates center-aligned labels for bars', () => {
        // view with two indexes, one bar each
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BarsLabels />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bars-labels')
        const labels = result.querySelectorAll('text')
        expect(labels).toHaveLength(2)
        // center-aligned, so they labels should be at different x-coordinates
        expect(labels[0].getAttribute('x')).not.toEqual(labels[1].getAttribute('x'))
    })

    it('creates left-aligned labels for bars', () => {
        // view with two indexes, one bar each
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BarsLabels align={[0, 0.5]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bars-labels')
        const labels = result.querySelectorAll('text')
        expect(labels).toHaveLength(2)
        // left-aligned, so labels should be at equal x-coordinates
        expect(labels[0].getAttribute('x')).toEqual(labels[1].getAttribute('x'))
    })

    it('creates labels for many bars', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} stacked={true}>
                    <BarsLabels minSize={[0, 0]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bars-labels')
        // the data has two groups of three bars each
        expect(result.querySelectorAll('text')).toHaveLength(6)
    })

    it('skips labels for small bars', () => {
        render(
            <Chart size={[500, 400]}>
                <Bar {...barProps} horizontal={true} stacked={false}>
                    <BarsLabels minSize={[200, 10]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bars-labels')
        const labels = result.querySelectorAll('text')
        // some bars are bound to be smaller than 200/500
        expect(labels.length).toBeGreaterThan(0)
        expect(labels.length).toBeLessThan(6)
    })

    it('places labels outside bars', () => {
        render(
            <Chart size={[500, 400]}>
                <Bar {...barProps} horizontal={true} stacked={false}>
                    <BarsLabels minSize={[200, 10]} showOuter={true} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('bars-labels')
        // some bars are bound to be smaller than 200/500
        expect(result.querySelectorAll('text')).toHaveLength(6)
    })

    it('displays labels only for selected ids', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BarsLabels ids={['alpha']} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('text')).toHaveLength(3)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BarsLabels keys={[]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })
})

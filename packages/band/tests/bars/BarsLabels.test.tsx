import { render, screen, waitFor } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { getTransform } from '../../../core/tests/utils'
import { Bar, BarsLabels } from '../../src/bars'
import { barProps } from '../props'

describe('BarsLabels', () => {
    it('avoids work in non-bar view', () => {
        // view with two indexes, one bar each
        render(
            <Chart>
                <BarsLabels />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const labels = result.querySelectorAll('text')
        expect(labels).toHaveLength(0)
    })

    it('creates center-aligned labels for bars', async () => {
        // view with two indexes, one bar each
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BarsLabels />
                </Bar>
            </Chart>
        )
        expect(screen.queryAllByRole('bars-labels')).toHaveLength(1)
        const labels = screen.getByRole('view-bar').querySelectorAll('text')
        expect(labels).toHaveLength(2)
        await waitFor(() => {
            // center-aligned, so labels should be at different x-coordinates
            expect(getTransform(labels[0], 'X')).toBeGreaterThan(0)
            expect(getTransform(labels[0], 'X')).not.toEqual(getTransform(labels[1], 'X'))
        })
    })

    it('creates left-aligned labels for bars', async () => {
        // view with two indexes, one bar each
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BarsLabels align={[0, 0.5]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        const labels = result.querySelectorAll('text')
        expect(labels).toHaveLength(2)
        await waitFor(() => {
            // left-aligned, so labels should be at equal x-coordinates
            expect(getTransform(labels[0], 'X')).toBeGreaterThan(0)
            expect(getTransform(labels[0], 'X')).toEqual(getTransform(labels[1], 'X'))
        })
    })

    it('creates labels for many bars', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true}>
                    <BarsLabels minSize={[0, 0]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        // the data has two groups of three bars each
        expect(result.querySelectorAll('text')).toHaveLength(6)
    })

    it('creates labels without role', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true}>
                    <BarsLabels setRole={false} />
                </Bar>
            </Chart>
        )
        expect(screen.queryByRole('bars-labels')).toBeNull()
        expect(screen.getByRole('view-bar').querySelectorAll('text')).toHaveLength(6)
    })

    it('skips labels for small bars', () => {
        render(
            <Chart size={[500, 400]}>
                <Bar {...barProps} horizontal={true}>
                    <BarsLabels minSize={[200, 10]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        const labels = result.querySelectorAll('text')
        // some bars are bound to be smaller than 200/500
        expect(labels.length).toBeGreaterThan(0)
        expect(labels.length).toBeLessThan(6)
    })

    it('skips all labels', () => {
        render(
            <Chart size={[500, 400]}>
                <Bar {...barProps}>
                    <BarsLabels minSize={[1000, 1000]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('places labels outside bars', () => {
        render(
            <Chart size={[500, 400]}>
                <Bar {...barProps} horizontal={true}>
                    <BarsLabels minSize={[200, 10]} showOuter={true} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
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

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['x', 'y', 'z']) }}>
                <Bar {...barProps}>
                    <BarsLabels />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })
})

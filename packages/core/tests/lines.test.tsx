import { render, screen } from '@testing-library/react'
import { Chart, GridLines, Line, View } from '../src'
import { chartProps, viewProps } from './props'

describe('Line', () => {
    it('creates a default line', () => {
        render(
            <Chart {...chartProps}>
                <Line x1={0} y1={0} x2={10} y2={20} />
            </Chart>
        )
        const result = screen.getByRole('default')
        expect(result?.getAttribute('y1')).toContain('0')
        expect(result?.getAttribute('x2')).toContain('10')
        expect(result?.getAttribute('y2')).toContain('20')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default line without role', () => {
        render(
            <Chart {...chartProps}>
                <Line x1={0} y1={0} x2={10} y2={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('line')).toHaveLength(1)
    })
})

describe('GridLines', () => {
    it('creates horizontal grid lines', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridLines variant="x" />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-x')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates vertical grid lines', () => {
        render(
            <Chart {...chartProps}>
                <GridLines variant="y" values={6} />
            </Chart>
        )
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid with boolean nice', () => {
        render(
            <Chart {...chartProps}>
                <View
                    {...viewProps}
                    scaleX={{ variant: 'log' as const, min: 1, max: 100, nice: true }}
                >
                    <GridLines variant="y" values={6} />
                </View>
            </Chart>
        )
        // this criterion does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid with numeric nice', () => {
        render(
            <Chart {...chartProps}>
                <View
                    {...viewProps}
                    scaleX={{ variant: 'log' as const, min: 1, max: 100, nice: 2 }}
                >
                    <GridLines variant="y" values={6} />
                </View>
            </Chart>
        )
        // this test does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        const result = screen.getByRole('grid-y')
        expect(result.querySelectorAll('line')).toHaveLength(6)
    })

    it('creates expanded lines (asymmetric)', () => {
        render(
            <Chart {...chartProps} size={[400, 300]} padding={[20, 20, 20, 20]}>
                <View {...viewProps}>
                    <GridLines variant="y" values={6} expansion={[10, 40]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-y').querySelectorAll('line')
        // the chart has inner width = 400-40 = 360.
        // a side-to-side grid line should have x2=360. An expanded line should go to x2=400
        expect(result[0].getAttribute('x1')).toBe('-10')
        expect(result[0].getAttribute('x2')).toBe('400')
    })

    it('creates expanded lines (symmetric)', () => {
        render(
            <Chart {...chartProps} size={[400, 300]} padding={[20, 20, 20, 20]}>
                <View {...viewProps}>
                    <GridLines variant="y" values={6} expansion={10} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-y').querySelectorAll('line')
        expect(result[0].getAttribute('x1')).toBe('-10')
        expect(result[0].getAttribute('x2')).toBe('370')
    })
})

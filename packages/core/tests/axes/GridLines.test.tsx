import { render, screen } from '@testing-library/react'
import { Chart, GridLines, View } from '../../src'
import { chartProps, viewProps } from '../props'

describe('GridLines', () => {
    it('creates horizontal grid lines', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridLines variant="x" />
                </View>
            </Chart>
        )
        const lines = screen.getByRole('grid-lines').querySelectorAll('line')
        expect(lines).toHaveLength(6)
        expect(lines[0].getAttribute('role')).toBeNull()
        expect(lines[1].getAttribute('role')).toBeNull()
    })

    it('creates vertical grid lines', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridLines variant="y" values={6} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('grid-lines').querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridLines variant="y" values={6} setRole={false} />
                </View>
            </Chart>
        )
        const lines = screen.getByRole('view-content').querySelectorAll('line')
        expect(lines[0].getAttribute('role')).toBeNull()
        expect(lines[1].getAttribute('role')).toBeNull()
    })

    it('creates grid with boolean nice', () => {
        render(
            <Chart {...chartProps}>
                <View
                    {...viewProps}
                    scaleX={{ variant: 'log' as const, domain: [1, 100], nice: true }}
                >
                    <GridLines variant="y" values={6} />
                </View>
            </Chart>
        )
        // this criterion does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        expect(screen.getByRole('grid-lines').querySelectorAll('line')).toHaveLength(6)
    })

    it('creates grid with numeric nice', () => {
        render(
            <Chart {...chartProps}>
                <View
                    {...viewProps}
                    scaleX={{ variant: 'log' as const, domain: [1, 100], nice: 2 }}
                >
                    <GridLines variant="y" values={6} />
                </View>
            </Chart>
        )
        // this test does not actually check the effect of nice: true
        // the usefulness of the test is only in that it doesn't crash
        expect(screen.getByRole('grid-lines').querySelectorAll('line')).toHaveLength(6)
    })

    it('creates expanded lines (asymmetric)', () => {
        render(
            <Chart {...chartProps} size={[400, 300]} padding={[20, 20, 20, 20]}>
                <View {...viewProps}>
                    <GridLines variant="y" values={6} expansion={[10, 40]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-lines').querySelectorAll('line')
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
        const result = screen.getByRole('grid-lines').querySelectorAll('line')
        expect(result[0].getAttribute('x1')).toBe('-10')
        expect(result[0].getAttribute('x2')).toBe('370')
    })

    it('creates grid lines without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridLines variant="x" setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('grid-lines')).toBeNull()
        expect(screen.getByRole('chart-content').querySelectorAll('line')).toHaveLength(6)
    })
})

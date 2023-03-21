import { render, screen } from '@testing-library/react'
import { Axis, AxisTicks, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'

describe('AxisTicks', () => {
    it('creates ticks with role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-top').querySelectorAll('g')
        // the first g inside axis-top should be a group with all ticks
        expect(result[0].getAttribute('role')).toBe('axis-ticks')
        // the next g should be a group with one tick
        expect(result[1].getAttribute('role')).toBe('tick')
        // elements within the tick group do not need a role
        expect(result[1].querySelector('line')?.getAttribute('role')).toBeNull()
        expect(result[1].querySelector('text')?.getAttribute('role')).toBeNull()
    })

    it('creates ticks without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" setRole={false} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-top').querySelectorAll('g')
        expect(result[0].getAttribute('role')).toBeNull()
        expect(result[1].getAttribute('role')).toBeNull()
        expect(result[1].querySelector('line')?.getAttribute('role')).toBeNull()
        expect(result[1].querySelector('text')?.getAttribute('role')).toBeNull()
    })

    it('formats tick labels', () => {
        const percentFormat = (v: unknown) => v + '%'
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={6} labelFormat={percentFormat} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('tick')
        expect(result[0].textContent).toContain('%')
    })

    it('can omit ticks altogether', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={[]} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.queryAllByRole('axis-ticks')
        expect(result).toHaveLength(0)
    })

    it('can omit tick labels', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={6} labelFormat={() => ''} />
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis-top').querySelectorAll('text')).toHaveLength(0)
    })

    it('can request specific ticks', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={[0, 20, 30]} />
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis-top').querySelectorAll('text')).toHaveLength(3)
    })

    it('can rotate tick labels', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={[0, 50, 100]} labelAngle={45} />
                    </Axis>
                </View>
            </Chart>
        )
        const ticks = screen.getByRole('axis-top').querySelectorAll('text')
        expect(ticks[0].closest('g')?.getAttribute('style')).toContain('rotate(45')
    })
})

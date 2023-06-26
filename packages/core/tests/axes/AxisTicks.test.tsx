import { render, screen } from '@testing-library/react'
import { Axis, AxisTicks, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'

describe('AxisTicks', () => {
    it('creates ticks with role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis').querySelectorAll('g')
        // the first g inside axis-top should be a group with all ticks
        expect(result[0].getAttribute('role')).toBe('ticks')
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
                        <AxisTicks setRole={false} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis').querySelectorAll('g')
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
                        <AxisTicks ticks={6} labelFormat={percentFormat} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('tick')
        expect(result[0].textContent).toContain('%')
    })

    it('accepts complex label format function', () => {
        const customFormat = (v: unknown) => <tspan style={{ fill: 'red' }}>{Number(v)} abc</tspan>
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={6} labelFormat={customFormat} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('tick')
        expect(result[0].textContent).toContain('abc')
        expect(result[0].querySelectorAll('tspan')).toHaveLength(1)
    })

    it('can omit ticks altogether', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={[]} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.queryAllByRole('ticks')
        expect(result).toHaveLength(0)
    })

    it('omits empty tick labels', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={6} labelFormat={() => ''} />
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis').querySelectorAll('text')).toHaveLength(0)
    })

    it('omits lines of zero length', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={6} tickSize={0} />
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis').querySelectorAll('text')).toHaveLength(6)
        expect(screen.getByRole('axis').querySelectorAll('line')).toHaveLength(0)
    })

    it('displays ticks at specified locations', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={[0, 20, 30]} />
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis').querySelectorAll('text')).toHaveLength(3)
    })

    it('rotates tick labels', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks ticks={[0, 50, 100]} labelAngle={45} />
                    </Axis>
                </View>
            </Chart>
        )
        const ticks = screen.getByRole('axis').querySelectorAll('text')
        expect(ticks[0].getAttribute('style')).toContain('rotate(45')
    })
})

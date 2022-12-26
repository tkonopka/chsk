import { render, screen } from '@testing-library/react'
import { Axis, AxisTicks, Chart, View } from '../src'
import { chartProps, viewProps } from './props'

describe('AxisTicks', () => {
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
        const result = screen.getAllByRole('tick-label')
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
                        <AxisTicks variant="top" ticks={6} labelFormat={null} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.queryAllByRole('tick-label')
        expect(result).toHaveLength(0)
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
        const result = screen.queryAllByRole('tick-label')
        expect(result).toHaveLength(3)
    })

    it('can rotate tick labels', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisTicks variant="top" ticks={[0, 50, 100]} labelRotate={45} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.queryAllByRole('tick-label')
        expect(result[1].getAttribute('transform')).toContain('rotate(')
    })
})

import { IntervalLabel } from '../src/intervals'
import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chask/core'
import { chartProps, viewProps } from './props'

describe('IntervalLabel', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <IntervalLabel start={[0, 0]} end={[60, 0]} units={'absolute'}>
                        Label
                    </IntervalLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('interval-label')[0]
        const line = result.querySelector('line')
        // the line should go from (0, 0) to (60, 0)
        expect(line?.getAttribute('x1')).toBe('0')
        expect(line?.getAttribute('x2')).toBe('60')
        expect(line?.getAttribute('y2')).toBe('0')
    })

    it('creates a line with relative coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <IntervalLabel start={[0, 0]} end={[0.5, 0]} units={'relative'}>
                        Label
                    </IntervalLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('interval-label')[0]
        const line = result.querySelector('line')
        expect(Number(line?.getAttribute('x2'))).toBeGreaterThan(100)
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <IntervalLabel start={[0, 0]} end={[80, 0]} units={'relative'}>
                        Label
                    </IntervalLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('interval-label')[0]
        const line = result.querySelector('line')
        expect(Number(line?.getAttribute('x2'))).toBeGreaterThan(100)
    })

    it('creates a line with text rotation', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <IntervalLabel start={[0, 0]} end={[1, 0]} rotate={45}>
                        Label
                    </IntervalLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('interval-label')[0]
        expect(result.querySelector('text')?.getAttribute('transform')).toContain('rotate(45)')
    })

    it('creates a line without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <IntervalLabel start={[0, 0]} end={[1, 0]} setRole={false}>
                        Label
                    </IntervalLabel>
                </View>
            </Chart>
        )
        const result = screen.queryByRole('boxed-label-top')
        expect(result).toBeNull()
    })
})

import { render, screen } from '@testing-library/react'
import { Chart, Axis, View, AxisLabel } from '../../src'
import { chartProps, viewProps } from '../props'

describe('Axis', () => {
    it('creates top axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={6} label={'top axis'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis')
        expect(screen.getAllByRole('tick')).toHaveLength(6)
        // there should be one line per tick, plus the axis line
        expect(result.querySelectorAll('line')).toHaveLength(7)
        expect(screen.getByRole('axis-label').textContent).toContain('top axis')
    })

    it('creates bottom axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="bottom" ticks={6} label={'bottom axis'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis')
        expect(screen.getAllByRole('tick')).toHaveLength(6)
        expect(result.querySelectorAll('line')).toHaveLength(7)
        expect(screen.getByRole('axis-label').textContent).toContain('bottom axis')
    })

    it('creates left axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="left" ticks={6} label={'left axis'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis')
        expect(screen.getAllByRole('tick')).toHaveLength(6)
        expect(result.querySelectorAll('line')).toHaveLength(7)
        expect(screen.getByRole('axis-label').textContent).toContain('left axis')
    })

    it('creates right axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="right" ticks={6} label={'right axis'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis')
        expect(screen.getAllByRole('tick')).toHaveLength(6)
        expect(result.querySelectorAll('line')).toHaveLength(7)
        expect(screen.getByRole('axis-label').textContent).toContain('right axis')
    })

    it('creates axis without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="right" setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('axis')).toBeNull()
    })

    it('creates axis without ticks', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="right" ticks={[]} label={'label'} />
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('tick')).toHaveLength(0)
        expect(screen.getByRole('axis-label').textContent).toContain('label')
    })

    it('skips label component when label is empty', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={6} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('axis-label')).toBeNull()
    })

    it('places label at the end of the axis', () => {
        const customTheme = {
            AxisLabel: {
                top: {
                    align: 1,
                },
            },
        }
        render(
            <Chart {...chartProps} size={[400, 300]} padding={[40, 40, 40, 40]} theme={customTheme}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={6} label={'axis label'} />
                </View>
            </Chart>
        )
        // the chart inner width is 400 - 40 -40 = 320
        // label at the end of the axis means a transform with translate(320
        expect(screen.getByRole('axis-label').getAttribute('style')).toContain('translateX(320')
    })

    it('transfers variant to child elements', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={[]}>
                        <AxisLabel>label</AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis-label').getAttribute('class')).toBe('axisLabel top')
    })

    it('handles misc children elements variant to child elements', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={[]}>
                        miscellaneous
                        <AxisLabel key={0}>label</AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        expect(screen.getByRole('axis-label').textContent).toBe('label')
    })
})

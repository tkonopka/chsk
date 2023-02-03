import { render, screen } from '@testing-library/react'
import { Chart, Axis, View } from '../../src'
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
        const axis = screen.getByRole('axis-top')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axis-label')
        expect(label.textContent).toContain('top axis')
        const line = screen.getByRole('axis')
        expect(line.getAttribute('class')).toEqual('axis top')
    })

    it('creates bottom axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="bottom" ticks={6} label={'bottom axis'} />
                </View>
            </Chart>
        )
        const axis = screen.getByRole('axis-bottom')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axis-label')
        expect(label.textContent).toContain('bottom axis')
        const line = screen.getByRole('axis')
        expect(line.getAttribute('class')).toEqual('axis bottom')
    })

    it('creates left axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="left" ticks={6} label={'left axis'} />
                </View>
            </Chart>
        )
        const axis = screen.getByRole('axis-left')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axis-label')
        expect(label.textContent).toContain('left axis')
        const line = screen.getByRole('axis')
        expect(line.getAttribute('class')).toEqual('axis left')
    })

    it('creates right axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="right" ticks={6} label={'right axis'} />
                </View>
            </Chart>
        )
        const axis = screen.getByRole('axis-right')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axis-label')
        expect(label.textContent).toContain('right axis')
        const line = screen.getByRole('axis')
        expect(line.getAttribute('class')).toEqual('axis right')
    })

    it('creates axis without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="right" setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('axis-right')).toBeNull()
    })

    it('skips label component when label is empty', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top" ticks={6} />
                </View>
            </Chart>
        )
        const label = screen.queryByRole('axis-label')
        expect(label).toBeNull()
    })

    it('places label at the end of the axis', () => {
        const customTheme = {
            AxisLabel: {
                top: {
                    anchor: 1,
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
        const label = screen.getByRole('axis-label')
        // the chart inner width is 400 - 40 -40 = 320
        // label at the end of the axis means a transform with translate(320
        expect(label?.getAttribute('style')).toContain('translateX(320')
    })
})

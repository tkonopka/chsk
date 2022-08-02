import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '../src'
import { chartProps } from './helpers'

describe('Axis', () => {
    it('creates top axis', () => {
        render(
            <Chart {...chartProps}>
                <Axis variant="top" ticks={6} label={'top axis'} />
            </Chart>
        )
        //screen.debug()
        const axis = screen.getByRole('axis-top')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axisLabel')
        expect(label.textContent).toContain('top axis')
    })

    it('creates bottom axis', () => {
        render(
            <Chart {...chartProps}>
                <Axis variant="bottom" ticks={6} label={'bottom axis'} />
            </Chart>
        )
        const axis = screen.getByRole('axis-bottom')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axisLabel')
        expect(label.textContent).toContain('bottom axis')
    })

    it('creates left axis', () => {
        render(
            <Chart {...chartProps}>
                <Axis variant="left" ticks={6} label={'left axis'} />
            </Chart>
        )
        const axis = screen.getByRole('axis-left')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axisLabel')
        expect(label.textContent).toContain('left axis')
    })

    it('creates right axis', () => {
        render(
            <Chart {...chartProps}>
                <Axis variant="right" ticks={6} label={'right axis'} />
            </Chart>
        )
        const axis = screen.getByRole('axis-right')
        expect(axis).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(6)
        const label = screen.getByRole('axisLabel')
        expect(label.textContent).toContain('right axis')
    })

    it('skips label component when label is empty', () => {
        render(
            <Chart {...chartProps}>
                <Axis variant="top" ticks={6} />
            </Chart>
        )
        const label = screen.queryByRole('axisLabel')
        expect(label).toBeNull()
    })

    it('places label at the end of the axis', () => {
        const customTheme = {
            axisLabel: {
                top: { anchor: 'end' },
            },
        }
        render(
            <Chart
                {...chartProps}
                width={400}
                margin={{ top: 40, bottom: 40, left: 40, right: 40 }}
                theme={customTheme}
            >
                <Axis variant="top" ticks={6} label={'axis label'} />
            </Chart>
        )
        const label = screen.getByRole('axisLabel').closest('g')
        // the chart inner width is 400 - 40 -40 = 320
        // label at the end of the axis means a transform with translate(320
        expect(label?.getAttribute('transform')).toContain('translate(320')
    })

    it('accepts an invalid label anchor', () => {
        const customTheme = {
            axisLabel: {
                top: { anchor: 'invalid' },
            },
        }
        render(
            <Chart
                {...chartProps}
                width={400}
                margin={{ top: 40, bottom: 40, left: 40, right: 40 }}
                theme={customTheme}
            >
                <Axis variant="top" ticks={6} label={'axis label'} />
            </Chart>
        )
        const label = screen.getByRole('axisLabel')
        expect(label.textContent).toContain('axis label')
    })

    it('accepts a non-string and non-number as label anchor', () => {
        const customTheme = {
            axisLabel: {
                top: { anchor: [] },
            },
        }
        render(
            <Chart {...chartProps} theme={customTheme}>
                <Axis variant="top" ticks={6} label={'axis label'} />
            </Chart>
        )
        const label = screen.getByRole('axisLabel')
        expect(label).not.toBeNull()
    })
})

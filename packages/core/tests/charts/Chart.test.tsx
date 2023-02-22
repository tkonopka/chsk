import { act, render, screen } from '@testing-library/react'
import { Chart, useChartData, ChartRef } from '../../src/charts'
import { ForwardedRef } from 'react'
import { getNumberAttr } from '../utils'

global.ResizeObserver = require('resize-observer-polyfill')

describe('Chart', () => {
    it('creates a chart with default props', () => {
        render(<Chart />)
        expect(screen.getByRole('chart-content')).toBeDefined()
    })

    it('creates a dimensions reference rect', () => {
        render(<Chart size={[200, 100]} padding={[10, 10, 10, 10]} />)
        const result = screen.getByRole('dimensions-reference')
        expect(result).toBeDefined()
        expect(getNumberAttr(result.querySelector('rect'), 'width')).toEqual(180)
        expect(getNumberAttr(result.querySelector('rect'), 'height')).toEqual(80)
    })

    it('creates a chart without role', () => {
        const result = render(<Chart size={[200, 100]} setRole={false} />)
        const container = result.container
        expect(screen.queryByRole('chart')).toBeNull()
        expect(screen.queryByRole('dimensions-reference')).toBeNull()
        expect(container.querySelectorAll('rect')).toHaveLength(1)
        expect(container.querySelectorAll('g')).toHaveLength(2)
    })

    it('sets an initial state', () => {
        let state: Record<string, unknown> = { abc: 0 }
        expect(state.abc).toEqual(0)
        const GetChartData = () => {
            state = useChartData().data
            return null
        }
        render(
            <Chart data={{ abc: 1 }}>
                <GetChartData />
            </Chart>
        )
        expect(state.abc).toEqual(1)
    })

    it('updates state using ref', () => {
        let state: Record<string, unknown> = { abc: 0, milestones: [] }
        const ref: ForwardedRef<ChartRef> = {
            current: {
                updateData: d => (state = d),
                toggleMilestone: milestone => (state.milestones = new Set<string>([milestone])),
            },
        }
        const GetChartData = () => {
            state = useChartData().data
            return null
        }
        render(
            <Chart fref={ref}>
                <GetChartData />
            </Chart>
        )
        act(() => ref.current?.updateData({ abc: 2 }))
        act(() => ref.current?.toggleMilestone('xyz'))
        expect(state.abc).toEqual(2)
        expect(Array.from(state.milestones as Set<string>)).toEqual(['xyz'])
    })

    it('toggles milestones using ref', () => {
        let state: Record<string, unknown> = { abc: 0, milestones: [] }
        const ref: ForwardedRef<ChartRef> = {
            current: {
                updateData: d => (state = d),
                toggleMilestone: milestone => (state.milestones = new Set<string>([milestone])),
            },
        }
        const GetChartData = () => {
            state = useChartData().data
            return null
        }
        render(
            <Chart fref={ref}>
                <GetChartData />
            </Chart>
        )
        // default state has no milestones
        expect(state.milestones).toBeUndefined()
        // toggle a milestone on
        act(() => ref.current?.toggleMilestone('xyz'))
        expect(Array.from(state.milestones as Set<string>)).toEqual(['xyz'])
        // toggle a milestone off
        act(() => ref.current?.toggleMilestone('xyz'))
        expect(Array.from(state.milestones as Set<string>)).toEqual([])
    })

    it('stretches to fill parent container (timer)', () => {
        jest.useFakeTimers()
        const WrappedChart = ({ x }: { x: number }) => {
            return (
                <div role="parent" style={{ width: x + 'px', height: x + 'px' }}>
                    <Chart size={[400, 300]} stretch={true} />
                </div>
            )
        }
        const { rerender } = render(<WrappedChart x={200} />)
        rerender(<WrappedChart x={250} />)
        act(() => {
            jest.runAllTimers()
        })
        // the Chart has an absolute size, but the svg should take width/height from parent element
        const svg = screen.getByRole('parent').querySelector('svg')
        expect(svg?.getAttribute('width')).not.toEqual('400')
        expect(svg?.getAttribute('height')).not.toEqual('300')
    })
})

import { act, render, screen } from '@testing-library/react'
import { Chart, useDisabledKeys, useChartData, ChartRef, useMilestones } from '../src'
import { ForwardedRef, useEffect } from 'react'

global.ResizeObserver = require('resize-observer-polyfill')

describe('Chart', () => {
    it('creates a chart with default props', () => {
        render(<Chart />)
        expect(screen.getByRole('chart-content')).toBeDefined()
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

    it('stretches to fill parent container', () => {
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

describe('useDisabledKeys', () => {
    it('reports first render status', () => {
        const result = { disabledKeys: new Set<string>(['temp']), firstRender: false }
        const GetDisabledKeys = () => {
            const temp = useDisabledKeys()
            result.disabledKeys = temp.disabledKeys
            result.firstRender = temp.firstRender
            return null
        }
        render(
            <Chart>
                <GetDisabledKeys />
            </Chart>
        )
        expect(result.disabledKeys.size).toEqual(0)
        expect(result.firstRender).toBeTruthy()
    })

    it('reports non-first render status', () => {
        const result: boolean[] = []
        const SetDisabledKeys = () => {
            const { data, setData } = useChartData()
            useEffect(() => {
                if (!data.disabledKeys) {
                    setData({ ...data, disabledKeys: new Set() })
                }
            })
            return null
        }
        const GetDisabledKeys = () => {
            const temp = useDisabledKeys()
            result.push(temp.firstRender)
            return null
        }
        render(
            <Chart>
                <SetDisabledKeys />
                <GetDisabledKeys />
            </Chart>
        )
        // the render will have two stages:
        // at first the chart state should be null (firstRender = true)
        // after useEffect, the chart should re-render (firstRender = false)
        expect(result).toEqual([true, false])
    })

    it('detects disabled keys', () => {
        let result: string[] = []
        const GetDisabledKeys = () => {
            const temp = useDisabledKeys()
            result = Array.from(temp.disabledKeys).sort()
            return null
        }
        render(
            <Chart data={{ disabledKeys: new Set<string>(['a', 'b']) }}>
                <GetDisabledKeys />
            </Chart>
        )
        // the render will have two stages:
        // at first the chart state should be null (firstRender = true)
        // after useEffect, the chart should re-render (firstRender = false)
        expect(result).toEqual(['a', 'b'])
    })

    it('computes array of booleans', () => {
        let result: boolean[] = []
        const testKeys = ['a', 'b', 'c']
        const GetDisabledKeys = () => {
            const temp = useDisabledKeys(testKeys)
            result = temp.disabled
            return null
        }
        render(
            <Chart data={{ disabledKeys: new Set<string>(['a', 'b']) }}>
                <GetDisabledKeys />
            </Chart>
        )
        expect(result).toEqual([true, true, false])
    })
})

describe('useMilestones', () => {
    it('retrieves a default milestone', () => {
        let result = null
        const GetMilestones = () => {
            result = useMilestones()
            return null
        }
        render(
            <Chart>
                <GetMilestones />
            </Chart>
        )
        expect(typeof result).toEqual('object')
        expect(Array.from(result ?? ['default'])).toEqual([])
    })

    it('retrieves a set milestone string', () => {
        let result = null
        const GetMilestones = () => {
            result = useMilestones()
            return null
        }
        render(
            <Chart data={{ milestones: new Set<string>('a') }}>
                <GetMilestones />
            </Chart>
        )
        expect(typeof result).toEqual('object')
        expect(Array.from(result ?? ['default'])).toEqual(['a'])
    })
})

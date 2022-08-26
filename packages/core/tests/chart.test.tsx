import { act, render, screen } from '@testing-library/react'
import { Chart, useDisabledKeys, useChartData, ChartRef, useMilestones } from '../src'
import { ForwardedRef, useEffect } from 'react'

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
        act(() => {
            ref.current?.updateData({ abc: 2 })
        })
        act(() => {
            ref.current?.toggleMilestone('xyz')
        })
        expect(state.abc).toEqual(2)
        expect(Array.from(state.milestones as Set<string>)).toEqual(['xyz'])
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

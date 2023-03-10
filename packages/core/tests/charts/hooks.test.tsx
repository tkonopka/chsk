import { Chart, useChartData, useDisabledKeys, useMilestones } from '../../src'
import { render } from '@testing-library/react'
import { useEffect } from 'react'

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
                    setData?.({ ...data, disabledKeys: new Set() })
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

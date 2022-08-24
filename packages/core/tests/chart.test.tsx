import { render, screen } from '@testing-library/react'
import { Chart, useDisabledKeys, useChartData } from '../src'
import { useEffect } from 'react'
import { ChartDataContextProps } from '../dist/types'

describe('Chart', () => {
    it('creates a chart with default props', () => {
        render(<Chart />)
        expect(screen.getByRole('chart-content')).toBeDefined()
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

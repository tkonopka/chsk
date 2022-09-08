import { useChartData } from './contexts'
import { useMemo } from 'react'

// fetch a part of ChartData that relates to active/disabled keys
export const useDisabledKeys = (keys?: string[]) => {
    const { data: chartData } = useChartData()
    const disabledKeys = (chartData.disabledKeys as Set<string>) ?? new Set<string>()
    const firstRender = chartData.disabledKeys === undefined
    // create an array of booleans, one boolean flag per key
    const disabled = useMemo(
        () => (keys ? keys.map(k => disabledKeys.has(k)) : []),
        [keys, Array.from(disabledKeys)]
    )
    return { disabledKeys, firstRender, disabled }
}

export const useMilestones = () => {
    const { data: chartData } = useChartData()
    return chartData.milestones ? (chartData.milestones as Set<string>) : new Set<string>()
}

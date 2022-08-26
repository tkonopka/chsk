import { useChartData } from './contexts'

export const useDisabledKeys = () => {
    const { data: chartData } = useChartData()
    const disabledKeys = (chartData.disabledKeys as Set<string>) ?? new Set<string>()
    const firstRender = chartData.disabledKeys === undefined
    return { disabledKeys, firstRender }
}

export const useMilestones = () => {
    const { data: chartData } = useChartData()
    return chartData.milestones ? (chartData.milestones as Set<string>) : new Set<string>()
}

import { useChartData } from './contexts'

export const useDisabledKeys = () => {
    const { data: chartData } = useChartData()
    const disabledKeys = (chartData.disabledKeys as Set<string>) ?? new Set<string>()
    const firstRender = chartData.disabledKeys === undefined
    return { disabledKeys, firstRender }
}

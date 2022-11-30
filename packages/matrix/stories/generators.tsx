import { roundDecimalPlaces } from '@chsk/core'
import { HeatMapDataItem, UpSetDataItem } from '../src'

export const generateContinuousHeatMapData = (
    ids: string[],
    keys: string[],
    interval: [number, number],
    round = 1
): Array<HeatMapDataItem> => {
    const intervalSize = interval[1] - interval[0]
    const result = ids.map((id: string) => {
        const series: Record<string, unknown> = { id: id }
        keys.forEach(
            k => (series[k] = roundDecimalPlaces(interval[0] + intervalSize * Math.random(), round))
        )
        return series as HeatMapDataItem
    })
    return result
}

export const generateCategoricalHeatMapData = (
    ids: string[],
    keys: string[],
    domain: string[]
): Array<HeatMapDataItem> => {
    const domainSize = domain.length
    const result = ids.map((id: string) => {
        const series: Record<string, unknown> = { id: id }
        keys.forEach(k => (series[k] = domain[Math.floor(domainSize * Math.random())]))
        return series as HeatMapDataItem
    })
    return result
}

export const generateUpSetData = (
    ids: string[],
    domain: string[],
    n: number
): Array<UpSetDataItem> => {
    const domainSize = domain.length
    const result = ids.map((id: string) => {
        const series: Record<string, unknown> = { id }
        const seriesSize = Math.max(Math.floor(n / 2), Math.floor(n * Math.random()))
        const values = Array(seriesSize)
            .fill(0)
            .map(() => domain[Math.floor(domainSize * Math.random())])
        series.data = Array.from(new Set(values))
        return series as UpSetDataItem
    })
    return result
}

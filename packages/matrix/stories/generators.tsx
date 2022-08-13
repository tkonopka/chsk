import { roundDecimalPlaces, WithId } from '@chask/core'
import { HeatMapDataItem } from '../src'

export const generateHeatMapData = (
    ids: string[],
    keys: string[],
    interval: [number, number],
    round: number = 1
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

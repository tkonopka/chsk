import { breaks, interval } from '@chsk/core'
import { HistogramDataItem } from './types'

export const getBreaksArray = (data: Array<HistogramDataItem>, n: number) => {
    const values = interval(data.map(seriesData => interval(seriesData.data)).flat())
    return breaks(values, n)
}

import { isNumber } from '@chsk/core'
import { BarProcessedDataItem } from './types'
import { isBandProcessedDataArray } from '../bands/predicates'

export const isBarProcessedData = (data: Array<unknown>): data is Array<BarProcessedDataItem> => {
    return isBandProcessedDataArray(data, isNumber)
}

import { ProcessedDataContextProps } from './types'
import { WithId } from '../general'

// build a dictionary mapping series string ids to integers
export const getIndexes = (data?: Array<WithId>): Record<string, number> => {
    const result: Record<string, number> = {}
    data?.forEach((seriesData, index) => {
        result[seriesData.id] = index
    })
    return result
}

// get intersection of values and allowed values, or all allowed values
const getSet = (values: string[] | undefined, allowed: string[]) => {
    const allowedSet = new Set<string>(allowed)
    if (!values) return allowedSet
    const result = new Set<string>(values)
    values.filter(v => !allowedSet.has(v)).forEach(v => result.delete(v))
    return result
}

// get sets containing ids and keys to display (or sets of all available ids and keys)
export const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    processedData: ProcessedDataContextProps
) => {
    const idSet = getSet(ids, Object.keys(processedData.seriesIndexes))
    const keySet = getSet(keys, processedData.keys)
    const keyArray = processedData.keys.filter(x => keySet.has(x))
    const idArray = Object.keys(processedData.seriesIndexes).filter(x => idSet.has(x))
    return { idSet, keySet, idArray, keyArray }
}

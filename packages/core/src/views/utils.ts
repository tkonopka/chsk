import { WithId } from './types'
import { ProcessedDataContextProps } from './types'

// build a dictionary mapping series string ids to integers
export const getIndexes = (data: Array<WithId>): Record<string, number> => {
    const result: Record<string, number> = {}
    data.forEach((seriesData, index) => {
        result[seriesData.id] = index
    })
    return result
}

// get sets containing ids and keys to display (or sets of all available ids and keys)
export const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    processedData: ProcessedDataContextProps
) => {
    const idSet = ids ? new Set(ids) : new Set(Object.keys(processedData.seriesIndexes))
    const keySet = keys ? new Set(keys) : new Set(processedData.keys)
    return { idSet, keySet }
}

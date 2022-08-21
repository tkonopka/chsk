import { ProcessedDataContextProps } from '@chask/core'

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

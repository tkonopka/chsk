import { WithId } from './types'
import { ProcessedDataContextProps } from './types'
import { cloneDeep } from 'lodash'
import { SizeSpec, X, Y } from '../general'
import { ScaleProps } from '../scales'

// build a dictionary mapping series string ids to integers
export const getIndexes = (data?: Array<WithId>): Record<string, number> => {
    const result: Record<string, number> = {}
    data?.forEach((seriesData, index) => {
        result[seriesData.id] = index
    })
    return result
}

// helper to getIdKeySets
const getSet = (values: string[] | undefined, allowed: Set<string>) => {
    if (!values) return allowed
    const result = new Set<string>(values)
    values.map(v => {
        if (!allowed.has(v)) result.delete(v)
    })
    return result
}

// get sets containing ids and keys to display (or sets of all available ids and keys)
export const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    processedData: ProcessedDataContextProps
) => {
    const allIds = new Set(Object.keys(processedData.seriesIndexes))
    const allKeys = new Set(processedData.keys)
    return { idSet: getSet(ids, allIds), keySet: getSet(keys, allKeys) }
}

export const fillScaleSize = (
    innerSize: SizeSpec,
    scaleX: Omit<ScaleProps, 'size'>,
    scaleY: Omit<ScaleProps, 'size'>
) => {
    const result = {
        x: cloneDeep(scaleX) as ScaleProps,
        y: cloneDeep(scaleY) as ScaleProps,
    }
    result.x.size = innerSize[X]
    result.y.size = innerSize[Y]
    return result
}

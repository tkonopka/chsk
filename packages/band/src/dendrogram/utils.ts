import { BandAxisScale, range } from '@chsk/core'
import { DendrogramPreparedDataItem } from './types'

/** get a hierarchy level that contains all the given keys */
const getCommonLevel = (
    data: DendrogramPreparedDataItem,
    indexScale: BandAxisScale,
    keys: string[]
) => {
    const positions = keys.map(k => indexScale(k))
    // loop over all levels except the last one (redundant)
    const lastLevel = data.positionInterval.length - 1
    for (let i = 0; i < lastLevel; i++) {
        const interval = data.positionInterval[i] as [number, number]
        if (positions.every(v => v >= interval[0] && v <= interval[1])) {
            return i
        }
    }
    return lastLevel
}

/** adjust the result array to contain all levels that make up a sub-tree of a dendrogram */
const getSubTree = (data: DendrogramPreparedDataItem, level: number, result: number[]) => {
    result.push(level)
    const pair = data.merge[level]
    if (!pair) return
    if (pair[0] > 0) {
        getSubTree(data, pair[0] - 1, result)
    }
    if (pair[1] > 0) {
        getSubTree(data, pair[1] - 1, result)
    }
}

/** get an array of level indexes to display */
export const getTargetLevels = (
    item: DendrogramPreparedDataItem,
    indexScale: BandAxisScale,
    levels: undefined | number[],
    keys: undefined | string[],
    subTree = false
) => {
    let result: number[] = []
    if (keys === undefined && levels === undefined) {
        result = range(item.merge.length)
    } else if (levels !== undefined) {
        result = result.concat(levels)
    }
    if (keys !== undefined) {
        const commonLevel = getCommonLevel(item, indexScale, keys)
        if (subTree) {
            const commonTree: number[] = []
            getSubTree(item, commonLevel, commonTree)
            result = result.concat(commonTree)
        } else {
            result.push(commonLevel)
        }
    }
    // sort in decreasing order to declare large-scale blocks first, then small-scale blocks on top
    result.sort((a, b) => b - a)
    return result
}

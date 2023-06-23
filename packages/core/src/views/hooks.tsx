import { useMemo } from 'react'
import {
    ContainerProps,
    getAnchoredOrigin,
    useDimensions,
    getInnerSize,
    getDimensionsProps,
    addPositions,
} from '../general'
import { getAbsolutePosition, useScales } from '../scales'
import { defaultContainerProps } from './defaults'
import { ProcessedDataContextProps } from './types'

/** compute a summary of a container box */
export const useContainer = ({
    position = defaultContainerProps.position,
    positionUnits = defaultContainerProps.positionUnits,
    size = defaultContainerProps.size,
    sizeUnits = defaultContainerProps.sizeUnits,
    padding = defaultContainerProps.padding,
    anchor = defaultContainerProps.anchor,
    offset = defaultContainerProps.offset,
}: ContainerProps) => {
    const dimensions = useDimensions()
    const { scales } = useScales()
    const { dimsProps, origin, innerSize } = useMemo(() => {
        const dimsProps = getDimensionsProps(size, sizeUnits, dimensions.size, padding)
        const innerSize = getInnerSize(dimsProps.size, padding)
        const pos = getAbsolutePosition(position, positionUnits, dimensions.size, scales)
        const origin = addPositions(getAnchoredOrigin(pos, dimsProps.size, anchor), offset)
        return { dimsProps, origin, innerSize }
    }, [position, positionUnits, size, sizeUnits, padding, anchor, dimensions, scales, offset])
    return { dimensions, dimsProps, origin, innerSize }
}

// get intersection of values and allowed values, or all allowed values
const getSet = (values: string[] | undefined | null, allowed: string[]) => {
    if (values === null) return new Set<string>()
    const allowedSet = new Set<string>(allowed)
    if (!values) return allowedSet
    const result = new Set<string>(values)
    values.filter(v => !allowedSet.has(v)).forEach(v => result.delete(v))
    return result
}

/** get information about ids and keys consistent with a processed dataset
 *
 * @param ids array of ids to check against processedData;
 * set to undefined to retrieve all available ids;
 * set to null to get empty results
 * @param keys array of keys to check against processedData;
 * set to undefined to retrieve all available keys;
 * set to null to get empty results
 * @param processedData object summarizing a view dataset
 */
export const useIdsKeys = (
    ids: string[] | undefined | null,
    keys: string[] | undefined | null,
    processedData: ProcessedDataContextProps
) => {
    return useMemo(() => {
        const idSet = getSet(ids, Object.keys(processedData.seriesIndexes))
        const keySet = getSet(keys, processedData.keys)
        const keyArray = processedData.keys.filter(x => keySet.has(x))
        const idArray = Object.keys(processedData.seriesIndexes).filter(x => idSet.has(x))
        return { idSet, keySet, idArray, keyArray }
    }, [ids, keys, processedData])
}

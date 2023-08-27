import { VennDataItem, VennProcessedDataItem } from './types'
import { countCommonElements, countOverlap, rotatePointTrig } from './utils'
import { NumericPositionSpec, indexes } from '@chsk/core'
import { processData2 } from './compute2'
import { processData3 } from './compute3'

// compute overlaps between sets - only suited for 1, 2, or 3 sets
export const processData = (
    data: Array<VennDataItem>,
    angle: number,
    separation: number,
    proportional: boolean
): Array<VennProcessedDataItem> => {
    const sets = data.slice(0, 3).map(seriesData => new Set(seriesData.data))
    // count elements common to all sets
    if (sets.length === 0) return []
    const common = countCommonElements(sets)
    // compute intersections and prep output object
    const data3 = data.slice(0, 3)
    const result = data3.map((seriesData, index) => {
        const id = seriesData.id
        return {
            id,
            index,
            size: Number(sets[index]?.size),
            intersection: indexes(data3).map(index2 => countOverlap(sets[index], sets[index2])),
            common,
            r: 1,
            center: [0, 0] as NumericPositionSpec,
            points: [
                [1, 0],
                [1, 0],
            ] as NumericPositionSpec[],
            largeArcs: [0, 0] as number[],
        }
    })
    // assign positions
    if (result.length === 2) {
        processData2(
            result as [VennProcessedDataItem, VennProcessedDataItem],
            separation,
            proportional
        )
    } else if (result.length === 3) {
        processData3(
            result as [VennProcessedDataItem, VennProcessedDataItem, VennProcessedDataItem],
            separation
        )
    }

    // global rotation
    const cosAngle = Math.cos(angle),
        sinAngle = Math.sin(angle)
    return result.map((item: VennProcessedDataItem) => {
        item.center = rotatePointTrig(item.center, cosAngle, sinAngle)
        item.points = item.points.map(p => rotatePointTrig(p, cosAngle, sinAngle))
        return item
    })
}

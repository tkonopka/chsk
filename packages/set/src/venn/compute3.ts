import { NumericPositionSpec, addPositions } from '@chsk/core'
import { VennProcessedDataItem } from './types'
import { rotatePoint } from './utils'

const add = addPositions

// modifies object 'result'
export const processData3 = (result: Array<VennProcessedDataItem>, separation: number) => {
    const shiftY = separation * Math.tan(Math.PI / 6)
    // circle centers
    result[0].center = [-separation, shiftY]
    result[1].center = [separation, shiftY]
    result[2].center = [0, -2 * separation * Math.sin(Math.PI / 3) + shiftY]
    // angle between x-axis and intersection between circles 0 and 1
    const theta = Math.acos(separation)
    // 120 degrees is used to rotate around equilateral triangle formed by three sets
    const alpha = (2 * Math.PI) / 3
    const outerPoint: NumericPositionSpec = [separation, +Math.sin(theta)]
    const innerPoint: NumericPositionSpec = [separation, -Math.sin(theta)]
    const p01 = add(result[0].center, outerPoint)
    const p10 = add(result[0].center, innerPoint)
    const p12 = add(result[1].center, rotatePoint(outerPoint, alpha))
    const p21 = add(result[1].center, rotatePoint(innerPoint, alpha))
    const p20 = add(result[2].center, rotatePoint(outerPoint, -alpha))
    const p02 = add(result[2].center, rotatePoint(innerPoint, -alpha))
    result[0].points = [p01, p02, p10, p20]
    result[1].points = [p12, p10, p21, p01]
    result[2].points = [p20, p21, p02, p12]
    const largeArc = Number(2 * theta + Math.PI / 6 < Math.PI)
    result[0].largeArcs = [0, 0, 0, largeArc]
    result[1].largeArcs = [0, 0, 0, largeArc]
    result[2].largeArcs = [0, 0, 0, largeArc]
}

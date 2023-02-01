import { SideType } from '../axes'
import {
    BOTTOM,
    FourSideSizeSpec,
    LEFT,
    NumericPositionSpec,
    RIGHT,
    SizeSpec,
    TOP,
    X,
    Y,
} from '../general'
import { getMinMax } from '../scales'

// compute absolute positions for item bounding rectangles, symbols, and labels
export const getItemPositions = (
    variant: SideType,
    position: NumericPositionSpec,
    horizontal: boolean,
    itemSize: SizeSpec,
    itemPadding: FourSideSizeSpec,
    labelOffset: number,
    symbolSizes: number[]
) => {
    // shorthand and book-keeping
    const pad = itemPadding
    const stepSize = horizontal ? itemSize[0] : itemSize[1]
    const stepPadding = horizontal ? pad[LEFT] + pad[RIGHT] : pad[TOP] + pad[BOTTOM]
    const step: NumericPositionSpec = horizontal ? [stepSize, 0] : [0, stepSize]
    const stepMultiplier = horizontal ? [1, 0] : [0, 1]
    const maxSize: number = getMinMax(symbolSizes)[1]
    const centerX = pad[LEFT] + (itemSize[X] - pad[LEFT] - pad[RIGHT]) / 2

    const itemPosition: NumericPositionSpec[] = []
    const itemS: NumericPositionSpec[] = []
    const labelPosition: NumericPositionSpec[] = []
    const symbolPosition: NumericPositionSpec[] = []
    const pos = [position[0], position[1]]
    symbolSizes.map((s, i) => {
        const r = symbolSizes[i]
        const extraStep = Math.max(0, 2 * r + stepPadding - stepSize)
        itemPosition.push([pos[X], pos[Y]])
        pos[X] += step[X] + extraStep * stepMultiplier[X]
        pos[Y] += step[Y] + extraStep * stepMultiplier[Y]
        const symbolPos: [number, number] = [maxSize + pad[LEFT], r + pad[TOP]]
        const labelPos: [number, number] = [2 * maxSize + pad[LEFT] + labelOffset, r + pad[TOP]]
        if (variant === 'left') {
            symbolPos[X] = itemSize[X] - maxSize - pad[RIGHT]
            labelPos[X] = symbolPos[X] - maxSize - labelOffset
        } else if (variant === 'top') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = pad[TOP] - labelOffset
        } else if (variant === 'bottom') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = 2 * maxSize + pad[TOP] + labelOffset
        }
        symbolPosition.push(symbolPos)
        labelPosition.push(labelPos)
        itemS.push([
            itemSize[X] + extraStep * stepMultiplier[X],
            itemSize[Y] + extraStep * stepMultiplier[Y],
        ])
    })
    return { itemPosition, itemS, labelPosition, symbolPosition }
}

export const getTitlePosition = (
    variant: SideType,
    position: NumericPositionSpec,
    size: SizeSpec,
    padding: FourSideSizeSpec,
    r = 0
): [number, number] => {
    let x = position[0]
    if (variant === 'right') {
        x += padding[LEFT]
    } else if (variant === 'left') {
        x += size[0] - padding[RIGHT]
    } else if (variant === 'bottom' || variant === 'top') {
        x += padding[LEFT] + (size[0] - padding[LEFT] - padding[RIGHT]) / 2
    }
    return [x, position[1] + padding[TOP] + r]
}

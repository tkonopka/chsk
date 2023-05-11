import {
    FourSideSizeSpec,
    NumericPositionSpec,
    SizeSpec,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    X,
    Y,
    SideVariant,
    CssProps,
    max,
} from '../general'
import { ColorScale } from '../scales'
import { addColor } from '../themes'

// estimate the size of a legend based on number of items
export const getSizeEstimate = (
    padding: FourSideSizeSpec,
    itemSize: SizeSpec,
    nItems: number,
    firstOffset: NumericPositionSpec,
    title: boolean | undefined,
    horizontal: boolean
): SizeSpec => {
    const sizeMultiplier = horizontal
        ? [nItems + (title ? 1 : 0), 1]
        : [1, nItems + (title ? 1 : 0)]
    return [
        itemSize[X] * sizeMultiplier[X] + firstOffset[X] + padding[LEFT] + padding[RIGHT],
        itemSize[Y] * sizeMultiplier[Y] + firstOffset[Y] + padding[TOP] + padding[BOTTOM],
    ]
}

// calculate position of first non-title element in a legend / tooltip
export const getContentPosition = (
    titlePosition: NumericPositionSpec,
    itemSize: SizeSpec,
    firstOffset: NumericPositionSpec,
    title: string | undefined,
    horizontal: boolean
) => {
    const result: NumericPositionSpec = [...titlePosition]
    if (title) {
        const step = horizontal ? [itemSize[X], 0] : [0, itemSize[Y]]
        result[X] += step[X] + firstOffset[X]
        result[Y] += step[Y] + firstOffset[Y]
    }
    return result
}

// compute absolute positions for item bounding rectangles, symbols, and labels
export const getItemPositions = (
    variant: SideVariant,
    position: NumericPositionSpec,
    horizontal: boolean,
    size: SizeSpec,
    itemPadding: FourSideSizeSpec,
    labelDistance: number,
    symbolSizes: number[]
) => {
    const pad = itemPadding
    const stepSize = horizontal ? size[0] : size[1]
    const stepPadding = horizontal ? pad[LEFT] + pad[RIGHT] : pad[TOP] + pad[BOTTOM]
    const step: NumericPositionSpec = horizontal ? [stepSize, 0] : [0, stepSize]
    const stepMultiplier = horizontal ? [1, 0] : [0, 1]
    const maxSize: number = max(symbolSizes)
    const centerX = pad[LEFT] + (size[X] - pad[LEFT] - pad[RIGHT]) / 2

    const itemPosition: NumericPositionSpec[] = []
    const itemSize: SizeSpec[] = []
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
        const labelPos: [number, number] = [2 * maxSize + pad[LEFT] + labelDistance, r + pad[TOP]]
        if (variant === 'left') {
            symbolPos[X] = size[X] - maxSize - pad[RIGHT]
            labelPos[X] = symbolPos[X] - maxSize - labelDistance
        } else if (variant === 'top') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = pad[TOP] - labelDistance
        } else if (variant === 'bottom') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = 2 * maxSize + pad[TOP] + labelDistance
        }
        symbolPosition.push(symbolPos)
        labelPosition.push(labelPos)
        itemSize.push([
            size[X] + extraStep * stepMultiplier[X],
            size[Y] + extraStep * stepMultiplier[Y],
        ])
    })
    return { itemPosition, itemSize, labelPosition, symbolPosition }
}

export const getTitlePosition = (
    variant: SideVariant,
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

export const getSymbolPosition = (
    variant: SideVariant,
    size: SizeSpec,
    padding: FourSideSizeSpec,
    r: number
): NumericPositionSpec => {
    const result: NumericPositionSpec = [r + padding[LEFT], r + padding[TOP]]
    if (variant === 'left') {
        result[X] = size[X] - padding[RIGHT] - r
    } else if (variant === 'bottom') {
        result[X] = padding[LEFT] + (size[X] - padding[LEFT] - padding[RIGHT]) / 2
    } else if (variant === 'top') {
        result[X] = padding[LEFT] + (size[X] - padding[LEFT] - padding[RIGHT]) / 2
    }
    return result
}

export const getLabelPosition = (
    variant: SideVariant,
    symbolPosition: NumericPositionSpec,
    offset: number
): NumericPositionSpec => {
    const result: NumericPositionSpec = [symbolPosition[X], symbolPosition[Y]]
    if (variant === 'left') {
        result[X] -= offset
    } else if (variant === 'right') {
        result[X] += offset
    } else if (variant === 'bottom') {
        result[Y] += offset
    } else if (variant === 'top') {
        result[Y] -= offset
    }
    return result
}

export const getSymbolStyle = (
    style: CssProps | undefined,
    color: string | number | undefined,
    colorScale: ColorScale,
    item: string
) => {
    const itemColor =
        typeof color === 'number'
            ? colorScale(color)
            : color ?? colorScale(colorScale.domain().indexOf(item ?? ''))
    return addColor(style, itemColor)
}

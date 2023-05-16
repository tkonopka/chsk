import {
    AnchorSpec,
    BOTTOM,
    FourSideSizeSpec,
    LEFT,
    NumericPositionSpec,
    RIGHT,
    SizeSpec,
    TOP,
    WithId,
    X,
    Y,
} from '../general'

export const guessLabel = <DataSpec extends WithId & Record<string, unknown>>(
    x: DataSpec
): string => {
    if ('label' in x) return String(x.label)
    const result = x as DataSpec & { label?: string }
    if ('key' in x && 'data' in x) {
        return String(result['key']) + ': ' + String(result['data'])
    }
    if ('id' in x && 'data' in x) {
        return String(result['id']) + ': ' + String(result['data'])
    }
    if ('key' in x) {
        return String(result['key'])
    }
    return result.id
}

// returns array indicating by how much a box overlaps a parent container
export const exitsParent = (
    position: NumericPositionSpec,
    size: SizeSpec,
    containerSize: SizeSpec,
    margin: FourSideSizeSpec
): SizeSpec => {
    const [x, y] = position
    const result: SizeSpec = [0, 0]
    if (x < -margin[LEFT]) {
        result[X] = x + margin[LEFT]
    } else if (x + size[X] > containerSize[X] + margin[RIGHT]) {
        result[X] = x + size[X] - containerSize[X] - margin[RIGHT]
    }
    if (y < -margin[TOP]) {
        result[Y] = y + margin[TOP]
    } else if (y + size[Y] > containerSize[Y] + margin[BOTTOM]) {
        result[Y] = y + size[Y] - containerSize[Y] - margin[BOTTOM]
    }
    return result
}

// flip settings for a tooltip, e.g. from top-right to bottom-left
export const flipPositionAnchor = (
    position: NumericPositionSpec,
    anchor: AnchorSpec,
    overhang: SizeSpec
) => {
    const flippedPosition: NumericPositionSpec = [...position]
    const flippedAnchor: AnchorSpec = [...anchor]
    for (const i in [X, Y]) {
        if (Math.abs(overhang[i])) {
            flippedPosition[i] = -position[i]
            flippedAnchor[i] = 1 - anchor[i]
        }
    }
    return { flippedPosition, flippedAnchor }
}

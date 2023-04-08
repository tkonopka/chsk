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

// returns array intended as boolean 0/1 indicators, except in number form
export const exitsParent = (
    position: NumericPositionSpec,
    size: SizeSpec,
    containerSize: SizeSpec,
    margin: FourSideSizeSpec
): [boolean, boolean] => {
    const x = position[X]
    const y = position[Y]
    return [
        x < -margin[LEFT] || x + size[X] > containerSize[X] + margin[RIGHT],
        y < -margin[TOP] || y + size[Y] > containerSize[Y] + margin[BOTTOM],
    ]
}

// flip settings for a tooltip, e.g. from top-right to bottom-left
export const flipPositionAnchor = (
    position: NumericPositionSpec,
    anchor: AnchorSpec,
    flip: [boolean, boolean]
) => {
    const flippedPosition: NumericPositionSpec = [...position]
    const flippedAnchor: AnchorSpec = [...anchor]
    for (const i in [X, Y]) {
        if (flip[i]) {
            flippedPosition[i] = -position[i]
            flippedAnchor[i] = 1 - anchor[i]
        }
    }
    return { flippedPosition, flippedAnchor }
}

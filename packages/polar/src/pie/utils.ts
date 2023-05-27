import {
    cloneProps,
    createContinuousScaleProps,
    expandToSquare,
    isScaleWithDomain,
    LinearScaleSpec,
    NumericScaleProps,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'

export const getPieXYScaleProps = (
    scaleSpecX: LinearScaleSpec,
    scaleSpecY: LinearScaleSpec,
    size: SizeSpec
) => {
    const result = {
        x: cloneProps(scaleSpecX) as NumericScaleProps,
        y: cloneProps(scaleSpecY) as NumericScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecX)) {
        result.x = createContinuousScaleProps(scaleSpecX, [-1, 1]) as NumericScaleProps
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        result.y = createContinuousScaleProps(scaleSpecY, [-1, 1]) as NumericScaleProps
    }
    result.x.size = size[X]
    result.y.size = size[Y]
    return expandToSquare(result.x, result.y)
}

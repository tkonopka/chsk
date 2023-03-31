import {
    createContinuousScaleProps,
    expandToSquare,
    isScaleWithDomain,
    LinearScaleSpec,
    NumericScaleProps,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

export const getPieXYScaleProps = (
    scaleSpecX: LinearScaleSpec,
    scaleSpecY: LinearScaleSpec,
    size: SizeSpec
) => {
    const result = {
        x: cloneDeep(scaleSpecX) as NumericScaleProps,
        y: cloneDeep(scaleSpecY) as NumericScaleProps,
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

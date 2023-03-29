import {
    createContinuousScaleProps,
    expandScalePropsToSquare,
    isScaleWithDomain,
    LinearScaleProps,
    LinearScaleSpec,
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
    const scales = {
        x: cloneDeep(scaleSpecX) as LinearScaleProps,
        y: cloneDeep(scaleSpecY) as LinearScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecX)) {
        scales.x = createContinuousScaleProps(scaleSpecX, [-1, 1]) as LinearScaleProps
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        scales.y = createContinuousScaleProps(scaleSpecY, [-1, 1]) as LinearScaleProps
    }
    scales.x.size = size[X]
    scales.y.size = size[Y]
    scales.x.nice = false
    scales.y.nice = false
    return expandScalePropsToSquare(scales.x, scales.y)
}

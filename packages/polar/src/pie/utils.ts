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
        scalePropsX: cloneDeep(scaleSpecX) as LinearScaleProps,
        scalePropsY: cloneDeep(scaleSpecY) as LinearScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecX)) {
        scales.scalePropsX = createContinuousScaleProps(scaleSpecX, [-1, 1]) as LinearScaleProps
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        scales.scalePropsY = createContinuousScaleProps(scaleSpecY, [-1, 1]) as LinearScaleProps
    }
    scales.scalePropsX.size = size[X]
    scales.scalePropsY.size = size[Y]
    scales.scalePropsX.nice = false
    scales.scalePropsY.nice = false
    return expandScalePropsToSquare(scales.scalePropsX, scales.scalePropsY)
}

import { SizeSpec, X, Y } from '../general'
import { ScaleProps } from '../scales'
import { cloneDeep } from 'lodash'

export const fillScaleSize = (
    innerSize: SizeSpec,
    scaleX: Omit<ScaleProps, 'size'>,
    scaleY: Omit<ScaleProps, 'size'>
) => {
    const result = {
        x: cloneDeep(scaleX) as ScaleProps,
        y: cloneDeep(scaleY) as ScaleProps,
    }
    result.x.size = innerSize[X]
    result.y.size = innerSize[Y]
    return result
}

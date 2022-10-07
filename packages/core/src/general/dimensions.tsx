import { DimensionsProviderBaseProps, FourSideSizeSpec, SizeSpec, SizeUnit } from './types'
import { getInnerSize } from './utils'

export const getAbsoluteSize = (
    size: SizeSpec,
    units: SizeUnit,
    referenceSize: SizeSpec
): SizeSpec => {
    if (units === 'relative') return [size[0] * referenceSize[0], size[1] * referenceSize[1]]
    return [size[0], size[1]]
}

export const getDimensionsProps = (
    size: SizeSpec,
    units: SizeUnit,
    referenceSize: SizeSpec,
    padding: FourSideSizeSpec
): DimensionsProviderBaseProps & { innerSize: SizeSpec } => {
    const absoluteSize = getAbsoluteSize(size, units, referenceSize)
    const innerSize = getInnerSize(absoluteSize, padding)
    return {
        size: absoluteSize,
        padding,
        innerSize,
    }
}

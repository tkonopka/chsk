import { DimensionsProviderBaseProps, FourSideSizeSpec, SizeSpec, SizeUnits } from './types'
import { getInnerSize } from './utils'

export const getAbsoluteSize = (
    size: SizeSpec,
    units: SizeUnits,
    referenceSize: SizeSpec
): SizeSpec => {
    const unitPair = Array.isArray(units) ? units : [units, units]
    return [
        unitPair[0] === 'relative' ? size[0] * referenceSize[0] : size[0],
        unitPair[1] === 'relative' ? size[1] * referenceSize[1] : size[1],
    ]
}

export const getDimensionsProps = (
    size: SizeSpec,
    units: SizeUnits,
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

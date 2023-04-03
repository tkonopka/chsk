import {
    DimensionsProviderProps,
    FourSideSizeSpec,
    NumericPositionSpec,
    SizeSpec,
    SizeUnits,
} from './types'

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
): DimensionsProviderProps => {
    const absoluteSize = getAbsoluteSize(size, units, referenceSize)
    return { size: absoluteSize, padding }
}

export const getTranslate = (x: number | NumericPositionSpec, y = 0): undefined | string => {
    if (Array.isArray(x)) {
        return getTranslate(x[0], x[1])
    }
    return x === 0 && y === 0 ? undefined : 'translate(' + x + ',' + y + ')'
}

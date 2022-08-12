import { createContext, ReactNode, useContext } from 'react'
import {
    DimensionsContextProps,
    DimensionsProviderBaseProps,
    SideSizeSpec,
    SizeSpec,
    SizeUnit,
} from './types'
import { BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH } from './constants'

export const getAbsoluteSize = (
    size: SizeSpec,
    unit: SizeUnit,
    referenceSize: SizeSpec
): SizeSpec => {
    if (unit === 'relative') return [size[0] * referenceSize[0], size[1] * referenceSize[1]]
    return [size[0], size[1]]
}

export const getDimensionsProps = (
    size: SizeSpec,
    units: SizeUnit,
    referenceSize: SizeSpec,
    padding: SideSizeSpec
): DimensionsProviderBaseProps => {
    return {
        size: getAbsoluteSize(size, units, referenceSize),
        padding,
    }
}

export const DimensionsContext = createContext({
    size: [0, 0],
    padding: [0, 0, 0, 0],
    innerSize: [0, 0],
} as DimensionsContextProps)

export const DimensionsProvider = ({
    size,
    padding,
    children,
}: DimensionsProviderBaseProps & { children: ReactNode }) => {
    const innerSize: [number, number] = [
        size[WIDTH] - padding[LEFT] - padding[RIGHT],
        size[HEIGHT] - padding[TOP] - padding[BOTTOM],
    ]
    const value: DimensionsContextProps = { size, padding, innerSize }

    return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>
}

export const useDimensions = () => useContext(DimensionsContext)

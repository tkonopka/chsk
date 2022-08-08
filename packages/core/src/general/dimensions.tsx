import { createContext, ReactNode, useContext } from 'react'
import {
    DimensionsContextProps,
    DimensionsProviderBaseProps,
    SideSizeSpec,
    SizeSpec,
} from './types'
import { BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH } from './constants'

export const getDimensionsProps = ({
    size,
    dimensions,
    padding,
}: {
    size?: SizeSpec
    dimensions: DimensionsContextProps
    padding: SideSizeSpec
}): DimensionsProviderBaseProps => {
    return {
        size: size ?? dimensions.innerSize,
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

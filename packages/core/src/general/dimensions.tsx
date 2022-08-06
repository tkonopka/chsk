import { createContext, ReactNode, useContext } from 'react'
import { DimensionsContextProps } from './types'

// indexes for padding arrays
export const TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3
// indexes for size arrays
export const WIDTH = 0,
    HEIGHT = 1

export const DimensionsContext = createContext({
    size: [0, 0],
    padding: [0, 0, 0, 0],
    innerSize: [0, 0],
} as DimensionsContextProps)

export const DimensionsProvider = ({
    size,
    padding,
    children,
}: Pick<DimensionsContextProps, 'size' | 'padding'> & { children: ReactNode }) => {
    const innerSize: [number, number] = [
        size[WIDTH] - padding[LEFT] - padding[RIGHT],
        size[HEIGHT] - padding[TOP] - padding[BOTTOM],
    ]
    const value: DimensionsContextProps = { size, padding, innerSize }

    return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>
}

export const useDimensions = () => useContext(DimensionsContext)

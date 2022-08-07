import { createContext, ReactNode, useContext } from 'react'
import { DimensionsContextProps } from './types'
import { BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH } from './constants'

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

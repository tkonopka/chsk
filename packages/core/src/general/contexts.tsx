import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DimensionsContextProps, DimensionsProviderProps } from './types'
import { getInnerSize } from './utils'

export const DimensionsContext = createContext({
    size: [0, 0],
    padding: [0, 0, 0, 0],
    innerSize: [0, 0],
} as DimensionsContextProps)

export const DimensionsProvider = ({
    size,
    padding,
    containerRef,
    children,
}: DimensionsProviderProps & { children: ReactNode }) => {
    const value: DimensionsContextProps = useMemo(
        () => ({ size, padding, containerRef, innerSize: getInnerSize(size, padding) }),
        [size, padding, containerRef]
    )
    return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>
}

export const useDimensions = () => useContext(DimensionsContext)

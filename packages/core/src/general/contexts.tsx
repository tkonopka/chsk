import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DimensionsContextProps, DimensionsProviderBaseProps } from './types'
import { getInnerSize } from './utils'

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
    const value: DimensionsContextProps = useMemo(
        () => ({ size, padding, innerSize: getInnerSize(size, padding) }),
        [size, padding]
    )
    return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>
}

export const useDimensions = () => useContext(DimensionsContext)

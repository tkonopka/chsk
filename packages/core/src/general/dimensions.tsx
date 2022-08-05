import { createContext, ReactNode, useContext } from 'react'
import { DimensionsContextProps } from './types'

export const DimensionsContext = createContext({
    width: 0,
    height: 0,
    padding: { top: 0, left: 0, bottom: 0, right: 0 },
    innerWidth: 0,
    innerHeight: 0,
} as DimensionsContextProps)

export const DimensionsProvider = ({
    width,
    height,
    padding,
    children,
}: Pick<DimensionsContextProps, 'width' | 'height' | 'padding'> & { children: ReactNode }) => {
    const value: DimensionsContextProps = {
        width,
        height,
        padding,
        innerWidth: width - padding.left - padding.right,
        innerHeight: height - padding.top - padding.bottom,
    }

    return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>
}

export const useDimensions = () => useContext(DimensionsContext)

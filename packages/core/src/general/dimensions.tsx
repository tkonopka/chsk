import { createContext, ReactNode, useContext } from 'react'
import { DimensionsSpec } from './types'

export const dimensionsContext = createContext({
    width: 0,
    height: 0,
    margin: { top: 0, left: 0, bottom: 0, right: 0 },
    innerWidth: 0,
    innerHeight: 0,
} as DimensionsSpec)

export const DimensionsProvider = ({
    width,
    height,
    margin,
    children,
}: Pick<DimensionsSpec, 'width' | 'height' | 'margin'> & { children: ReactNode }) => {
    const value: DimensionsSpec = {
        width,
        height,
        margin,
        innerWidth: width - margin.left - margin.right,
        innerHeight: height - margin.top - margin.bottom,
    }

    return <dimensionsContext.Provider value={value}>{children}</dimensionsContext.Provider>
}

export const useDimensions = () => useContext(dimensionsContext)

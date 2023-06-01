import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DensityDataContextProps } from './types'

export const DensityPreparedDataContext = createContext({
    data: [],
    binSize: 1,
    seriesIndexes: {},
    keys: [],
} as DensityDataContextProps)

export const DensityPreparedDataProvider = ({
    data,
    binSize,
    seriesIndexes,
    keys,
    children,
}: DensityDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(
        () => ({ data, binSize, seriesIndexes, keys }),
        [data, binSize, seriesIndexes, keys]
    )
    return (
        <DensityPreparedDataContext.Provider value={value}>
            {children}
        </DensityPreparedDataContext.Provider>
    )
}

export const useDensityPreparedData = () => useContext(DensityPreparedDataContext)

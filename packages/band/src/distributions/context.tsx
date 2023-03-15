import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DistributionPreparedDataContextProps } from './types'

export const DistributionPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as DistributionPreparedDataContextProps)

export const DistributionPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: DistributionPreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <DistributionPreparedDataContext.Provider value={value}>
            {children}
        </DistributionPreparedDataContext.Provider>
    )
}

export const useDistributionPreparedData = () => useContext(DistributionPreparedDataContext)

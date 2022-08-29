import { createContext, ReactNode, useContext, useMemo } from 'react'
import { QuantilePreparedDataContextProps } from './types'

export const QuantilePreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as QuantilePreparedDataContextProps)

export const QuantilePreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: QuantilePreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <QuantilePreparedDataContext.Provider value={value}>
            {children}
        </QuantilePreparedDataContext.Provider>
    )
}

export const useQuantilePreparedData = () => useContext(QuantilePreparedDataContext)

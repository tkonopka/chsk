import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { QuantilePreparedDataItem } from './types'

export const QuantilePreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<QuantilePreparedDataItem>)

export const QuantilePreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<QuantilePreparedDataItem> & {
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

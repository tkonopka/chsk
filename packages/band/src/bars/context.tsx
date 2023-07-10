import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { BarPreparedDataItem } from './types'

export const BarPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<BarPreparedDataItem>)

export const BarPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<BarPreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <BarPreparedDataContext.Provider value={value}>{children}</BarPreparedDataContext.Provider>
    )
}

export const useBarPreparedData = () => useContext(BarPreparedDataContext)

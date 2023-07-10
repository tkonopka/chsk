import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { VennPreparedDataItem } from './types'

export const VennPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<VennPreparedDataItem>)

export const VennPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<VennPreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data, seriesIndexes, keys])
    return (
        <VennPreparedDataContext.Provider value={value}>
            {children}
        </VennPreparedDataContext.Provider>
    )
}

export const useVennPreparedData = () => useContext(VennPreparedDataContext)

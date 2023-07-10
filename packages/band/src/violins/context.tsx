import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { ViolinPreparedDataItem } from './types'

export const ViolinPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<ViolinPreparedDataItem>)

export const ViolinPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<ViolinPreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <ViolinPreparedDataContext.Provider value={value}>
            {children}
        </ViolinPreparedDataContext.Provider>
    )
}

export const useViolinPreparedData = () => useContext(ViolinPreparedDataContext)

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { HistogramProcessedDataItem } from './types'

export const HistogramPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<HistogramProcessedDataItem>)

export const HistogramPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<HistogramProcessedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <HistogramPreparedDataContext.Provider value={value}>
            {children}
        </HistogramPreparedDataContext.Provider>
    )
}

export const useHistogramPreparedData = () => useContext(HistogramPreparedDataContext)

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { HistogramDataContextProps } from './types'

export const HistogramPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as HistogramDataContextProps)

export const HistogramPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: HistogramDataContextProps & {
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

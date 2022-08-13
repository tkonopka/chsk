import { createContext, ReactNode, useContext, useMemo } from 'react'
import { BarPreparedDataContextProps, BarProcessedDataContextProps } from './types'

// two similar contexts
// - processed data - for internal representations of raw dataGroups values
// - prepared data - for holding coordinates and plot-ready values

export const BarProcessedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as BarProcessedDataContextProps)

export const BarPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as BarPreparedDataContextProps)

export const BarProcessedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: BarProcessedDataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <BarProcessedDataContext.Provider value={value}>
            {children}
        </BarProcessedDataContext.Provider>
    )
}

export const BarPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: BarPreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <BarPreparedDataContext.Provider value={value}>{children}</BarPreparedDataContext.Provider>
    )
}

export const useBarProcessedData = () => useContext(BarProcessedDataContext)
export const useBarPreparedData = () => useContext(BarPreparedDataContext)

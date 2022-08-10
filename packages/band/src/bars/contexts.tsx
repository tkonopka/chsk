import { createContext, ReactNode, useContext, useMemo } from 'react'
import { BarPreparedDataContextProps, BarProcessedDataContextProps } from './types'

// two similar contexts
// - processed data - for internal representations of raw dataGroups values
// - prepared data - for holding coordinates and plot-ready values

export const BarProcessedDataContext = createContext({
    data: [],
    seriesIndexes: {},
} as BarProcessedDataContextProps)

export const BarPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
} as BarPreparedDataContextProps)

export const BarProcessedDataProvider = ({
    data,
    seriesIndexes,
    children,
}: BarProcessedDataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes }), [data])
    return (
        <BarProcessedDataContext.Provider value={value}>
            {children}
        </BarProcessedDataContext.Provider>
    )
}

export const BarPreparedDataProvider = ({
    data,
    seriesIndexes,
    children,
}: BarPreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes }), [data])
    return (
        <BarPreparedDataContext.Provider value={value}>{children}</BarPreparedDataContext.Provider>
    )
}

export const useBarProcessedData = () => useContext(BarProcessedDataContext)
export const useBarPreparedData = () => useContext(BarPreparedDataContext)

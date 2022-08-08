import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DataContextProps } from './types'

// named contexts for various types of data:
// - original - data as provided in the props
// - processed - view-specific summary representation
// - prepared - data with coordinates for plotting

export const OriginalDataContext = createContext({ data: null } as DataContextProps)
//export const ProcessedDataContext = createContext({ data: null } as DataContextProps)
//export const PreparedDataContext = createContext({ data: null } as DataContextProps)

// providers for the data contexts

export const OriginalDataProvider = ({
    data,
    children,
}: DataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <OriginalDataContext.Provider value={value}>{children}</OriginalDataContext.Provider>
}

/**
export const ProcessedDataProvider = ({
    data,
    auxData = {},
    children,
}: DataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value: DataContextProps = useMemo(() => ({ data, ...auxData }), [data])
    return <ProcessedDataContext.Provider value={value}>{children}</ProcessedDataContext.Provider>
}

export const PreparedDataProvider = ({
    data,
    auxData = {},
    children,
}: DataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value: DataContextProps = useMemo(() => ({ data, ...auxData }), [data])
    return <PreparedDataContext.Provider value={value}>{children}</PreparedDataContext.Provider>
}
*/

// hooks for the contexts

export const useOriginalData = () => useContext(OriginalDataContext)

//export const useProcessedData = () => useContext(ProcessedDataContext)
//export const usePreparedData = () => useContext(PreparedDataContext)

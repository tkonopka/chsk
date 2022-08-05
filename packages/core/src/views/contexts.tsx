import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DataContextProps } from './types'

// different contexts for various types of data
export const OriginalDataContext = createContext({ data: null } as DataContextProps)
export const ProcessedDataContext = createContext({ data: null } as DataContextProps)

// providers for each of the data contexts
export const OriginalDataProvider = ({
    data,
    children,
}: DataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <OriginalDataContext.Provider value={value}>{children}</OriginalDataContext.Provider>
}
export const ProcessedDataProvider = ({
    data,
    children,
}: DataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <ProcessedDataContext.Provider value={value}>{children}</ProcessedDataContext.Provider>
}

// hooks for all the contexts
export const useOriginalData = () => useContext(OriginalDataContext)
export const useProcessedData = () => useContext(ProcessedDataContext)

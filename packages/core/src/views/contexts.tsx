import { createContext, ReactNode, useContext, useMemo } from 'react'
import { OriginalDataContextProps, ProcessedDataContextProps } from './types'

/** Context for data in original format */

export const OriginalDataContext = createContext({ data: [] } as OriginalDataContextProps)

export const OriginalDataProvider = ({
    data,
    children,
}: OriginalDataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <OriginalDataContext.Provider value={value}>{children}</OriginalDataContext.Provider>
}

export const useOriginalData = () => useContext(OriginalDataContext)

/** Context for data in a processed format */

export const ProcessedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as ProcessedDataContextProps)

export const ProcessedDataProvider = function ({
    data,
    seriesIndexes,
    keys,
    children,
}: ProcessedDataContextProps & {
    children: ReactNode
}) {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data, seriesIndexes, keys])
    return <ProcessedDataContext.Provider value={value}>{children}</ProcessedDataContext.Provider>
}

export const useProcessedData = () => useContext(ProcessedDataContext)

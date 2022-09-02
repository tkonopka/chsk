import { createContext, ReactNode, useContext, useMemo } from 'react'
import { RawDataContextProps, ProcessedDataContextProps } from './types'

/** Context for data in original format */

export const RawDataContext = createContext({ data: [] } as RawDataContextProps)

export const OriginalDataProvider = ({
    data,
    children,
}: RawDataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <RawDataContext.Provider value={value}>{children}</RawDataContext.Provider>
}

export const useRawData = () => useContext(RawDataContext)

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

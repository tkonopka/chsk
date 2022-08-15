import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ScatterDataContextProps } from './types'

// two similar contexts
// - processed data - for internal representations of raw data values
// - prepared data - for holding coordinates and plot-ready values

export const ScatterProcessedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    seriesIds: [],
} as ScatterDataContextProps)

export const ScatterPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    seriesIds: [],
} as ScatterDataContextProps)

export const ScatterProcessedDataProvider = ({
    data,
    seriesIndexes,
    seriesIds,
    children,
}: ScatterDataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, seriesIds }), [data])
    return (
        <ScatterProcessedDataContext.Provider value={value}>
            {children}
        </ScatterProcessedDataContext.Provider>
    )
}

export const ScatterPreparedDataProvider = ({
    data,
    seriesIndexes,
    seriesIds,
    children,
}: ScatterDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, seriesIds }), [data])
    return (
        <ScatterPreparedDataContext.Provider value={value}>
            {children}
        </ScatterPreparedDataContext.Provider>
    )
}

export const useScatterProcessedData = () => useContext(ScatterProcessedDataContext)
export const useScatterPreparedData = () => useContext(ScatterPreparedDataContext)

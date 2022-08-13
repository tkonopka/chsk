import { createContext, ReactNode, useContext, useMemo } from 'react'
import { HeatMapDataContextProps } from './types'

export const ProcessedHeatMapDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as HeatMapDataContextProps)

export const ProcessedHeatMapDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: HeatMapDataContextProps & {
    auxData?: Record<string, unknown>
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data, seriesIndexes, keys])
    return (
        <ProcessedHeatMapDataContext.Provider value={value}>
            {children}
        </ProcessedHeatMapDataContext.Provider>
    )
}

export const useProcessedHeatMapData = () => useContext(ProcessedHeatMapDataContext)

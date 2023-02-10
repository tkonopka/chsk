import { createContext, ReactNode, useContext, useMemo } from 'react'
import { VennDataContextProps } from './types'

export const VennPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as VennDataContextProps)

export const VennPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: VennDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data, seriesIndexes, keys])
    return (
        <VennPreparedDataContext.Provider value={value}>
            {children}
        </VennPreparedDataContext.Provider>
    )
}

export const useVennPreparedData = () => useContext(VennPreparedDataContext)

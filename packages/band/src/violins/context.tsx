import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ViolinPreparedDataContextProps } from './types'

export const ViolinPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as ViolinPreparedDataContextProps)

export const ViolinPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: ViolinPreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <ViolinPreparedDataContext.Provider value={value}>
            {children}
        </ViolinPreparedDataContext.Provider>
    )
}

export const useViolinPreparedData = () => useContext(ViolinPreparedDataContext)

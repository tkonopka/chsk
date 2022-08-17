import { createContext, ReactNode, useContext, useMemo } from 'react'
import { BarPreparedDataContextProps } from './types'

export const BarPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as BarPreparedDataContextProps)

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

export const useBarPreparedData = () => useContext(BarPreparedDataContext)

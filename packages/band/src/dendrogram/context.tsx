import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DendrogramPreparedDataContextProps } from './types'

export const DendrogramPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as DendrogramPreparedDataContextProps)

export const DendrogramPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: DendrogramPreparedDataContextProps & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <DendrogramPreparedDataContext.Provider value={value}>
            {children}
        </DendrogramPreparedDataContext.Provider>
    )
}

export const useDendrogramPreparedData = () => useContext(DendrogramPreparedDataContext)

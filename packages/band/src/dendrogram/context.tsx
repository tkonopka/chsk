import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { DendrogramPreparedDataItem } from './types'

export const DendrogramPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<DendrogramPreparedDataItem>)

export const DendrogramPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<DendrogramPreparedDataItem> & {
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

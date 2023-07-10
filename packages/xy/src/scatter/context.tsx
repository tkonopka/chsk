import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { ScatterPreparedDataItem } from './types'

export const ScatterPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<ScatterPreparedDataItem>)

export const ScatterPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<ScatterPreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data, seriesIndexes, keys])
    return (
        <ScatterPreparedDataContext.Provider value={value}>
            {children}
        </ScatterPreparedDataContext.Provider>
    )
}

export const useScatterPreparedData = () => useContext(ScatterPreparedDataContext)

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { SchedulePreparedDataItem } from './types'

export const SchedulePreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<SchedulePreparedDataItem>)

export const SchedulePreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<SchedulePreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <SchedulePreparedDataContext.Provider value={value}>
            {children}
        </SchedulePreparedDataContext.Provider>
    )
}

export const useSchedulePreparedData = () => useContext(SchedulePreparedDataContext)

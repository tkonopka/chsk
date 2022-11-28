import { createContext, ReactNode, useContext, useMemo } from 'react'
import { SchedulePreparedDataContextProps } from './types'

export const SchedulePreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as SchedulePreparedDataContextProps)

export const SchedulePreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: SchedulePreparedDataContextProps & {
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

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { PreparedDataContextProps } from '@chsk/core'
import { StripPreparedDataItem } from './types'

export const StripPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as PreparedDataContextProps<StripPreparedDataItem>)

export const StripPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: PreparedDataContextProps<StripPreparedDataItem> & {
    children: ReactNode
}) => {
    const value = useMemo(() => ({ data, seriesIndexes, keys }), [data])
    return (
        <StripPreparedDataContext.Provider value={value}>
            {children}
        </StripPreparedDataContext.Provider>
    )
}

export const useStripPreparedData = () => useContext(StripPreparedDataContext)

import { createContext, ReactNode, useContext, useMemo } from 'react'
import { StripPreparedDataContextProps } from './types'

export const StripPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as StripPreparedDataContextProps)

export const StripPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: StripPreparedDataContextProps & {
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

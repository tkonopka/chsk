import { createContext, ReactNode, useContext, useMemo } from 'react'
import { ScatterDataContextProps } from './types'

export const ScatterPreparedDataContext = createContext({
    data: [],
    seriesIndexes: {},
    keys: [],
} as ScatterDataContextProps)

export const ScatterPreparedDataProvider = ({
    data,
    seriesIndexes,
    keys,
    children,
}: ScatterDataContextProps & {
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

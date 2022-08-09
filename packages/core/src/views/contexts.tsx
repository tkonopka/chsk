import { createContext, ReactNode, useContext, useMemo } from 'react'
import { DataContextProps } from './types'

export const OriginalDataContext = createContext({ data: [] } as DataContextProps)

export const OriginalDataProvider = ({
    data,
    children,
}: DataContextProps & { children: ReactNode }) => {
    const value = useMemo(() => ({ data }), [data])
    return <OriginalDataContext.Provider value={value}>{children}</OriginalDataContext.Provider>
}

export const useOriginalData = () => useContext(OriginalDataContext)

import { createContext, useContext } from 'react'
import { ChartDataProviderProps, ChartDataProviderValue } from './types'

export const ChartDataContext = createContext({ data: {} } as ChartDataProviderValue)

export const ChartDataProvider = ({ value, children }: ChartDataProviderProps) => {
    return <ChartDataContext.Provider value={value}>{children}</ChartDataContext.Provider>
}

export const useChartData = () => useContext(ChartDataContext)

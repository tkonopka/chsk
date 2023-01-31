import { createContext, ReactNode, useContext, useState } from 'react'
import { TooltipData, TooltipProviderValue } from './types'

export const TooltipContext = createContext({} as TooltipProviderValue)

export const TooltipProvider = ({
    data = {},
    value,
    children,
}: {
    data?: TooltipData
    value?: TooltipProviderValue
    children: ReactNode
}) => {
    const [tooltipData, setTooltipData] = useState<TooltipData>(data)
    return (
        <TooltipContext.Provider value={value ?? { data: tooltipData, setData: setTooltipData }}>
            {children}
        </TooltipContext.Provider>
    )
}

export const useTooltip = () => useContext(TooltipContext)

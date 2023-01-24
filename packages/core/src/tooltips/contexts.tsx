import { createContext, ReactNode, useContext } from 'react'
import { TooltipContextProps } from './types'

export const TooltipContext = createContext({} as TooltipContextProps)

export const TooltipProvider = ({
    tooltip,
    children,
}: {
    tooltip: TooltipContextProps
    children: ReactNode
}) => {
    return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>
}

export const useTooltip = () => useContext(TooltipContext)

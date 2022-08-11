import { createContinuousScale } from './continuous'
import { createContext, ReactNode, useContext } from 'react'
import { ScalesContextProps } from './types'

const defaultScaleX = createContinuousScale({
    variant: 'linear',
    axis: 'y',
    size: 1,
    domain: [0, 1],
})
const defaultScaleY = createContinuousScale({
    variant: 'linear',
    axis: 'y',
    size: 1,
    domain: [0, 1],
})

export const ScalesContext = createContext({
    scaleX: defaultScaleX,
    scaleY: defaultScaleY,
    horizontal: null,
} as ScalesContextProps)

export const ScalesProvider = ({
    scales,
    children,
}: {
    scales: ScalesContextProps
    children: ReactNode
}) => {
    return <ScalesContext.Provider value={scales}>{children}</ScalesContext.Provider>
}

export const useScales = () => useContext(ScalesContext)

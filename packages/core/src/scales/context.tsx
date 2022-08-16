import { createContinuousScale } from './continuous'
import { createContext, ReactNode, useContext } from 'react'
import { ScalesContextProps } from './types'
import { defaultCategoricalScale } from './defaults'

const defaultScaleX = createContinuousScale({
    variant: 'linear',
    axis: 'x',
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
    x: defaultScaleX,
    y: defaultScaleY,
    horizontal: null,
    color: defaultCategoricalScale,
    size: defaultScaleX,
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

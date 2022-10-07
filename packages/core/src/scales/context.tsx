import { createContext, ReactNode, useContext } from 'react'
import {
    BandScaleProps,
    ColorScaleProps,
    ContinuousScaleProps,
    ScalesContextProps,
    SizeScaleProps,
} from './types'
import { defaultCategoricalScale, defaultScaleX, defaultScaleY, defaultSizeScale } from './defaults'
import { createAxisScale } from './axes'
import { createColorScale } from './colors'

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

export const createScales = (
    scaleX: ContinuousScaleProps | BandScaleProps,
    scaleY: ContinuousScaleProps | BandScaleProps,
    scaleColor?: ColorScaleProps,
    scaleSize?: SizeScaleProps
): ScalesContextProps => {
    return {
        x: createAxisScale({ axis: 'x', scaleProps: scaleX }),
        y: createAxisScale({ axis: 'y', scaleProps: scaleY }),
        color: scaleColor ? createColorScale(scaleColor) : defaultCategoricalScale,
        size: scaleSize ? createAxisScale({ scaleProps: scaleSize }) : defaultSizeScale,
    }
}

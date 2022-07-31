import { scaleLog, scaleLinear, scaleBand } from 'd3-scale'
import {
    AxisScale,
    ScaleProps,
    ScalesContextProps,
    ContinuousScaleSpec,
    BandScaleSpec,
    ScaleSpec,
} from './types'
import { createContext, ReactNode, useContext } from 'react'
import { DimensionsContextProps } from '../general'

export const createContinuousScale = ({
    variant = 'linear',
    axis = 'x',
    size = 100,
    min = 0,
    max = 1,
    clamp = false,
    nice = false,
}: ContinuousScaleSpec & ScaleProps) => {
    const range = axis === 'y' ? [size, 0] : [0, size]
    const domain = [min, max]
    const result = variant === 'log' ? scaleLog() : scaleLinear()
    result.rangeRound(range).domain(domain).clamp(clamp)
    if (nice === true) result.nice()
    if (typeof nice === 'number') result.nice(nice)
    return result
}

export const createBandScale = ({ axis = 'x', size = 100, domain }: BandScaleSpec & ScaleProps) => {
    const range = axis === 'y' ? [size, 0] : [0, size]
    return scaleBand<string>(range).domain(domain)
}

export const createScale = ({
    axis = 'x',
    size = 100,
    scale,
}: ScaleProps & {
    scale: ScaleSpec
}) => {
    if (scale.variant === 'band') return createBandScale({ axis, size, ...scale })
    return createContinuousScale({ axis, size, ...scale })
}

export const getTicks = (scale: AxisScale, ticks: number | undefined) => {
    if ('ticks' in scale) return scale.ticks(ticks) as Array<number>
    return scale.domain()
}

export const scalesContext = createContext({
    scaleX: scaleLinear(),
    scaleY: scaleLinear(),
} as ScalesContextProps)

export const ScalesProvider = ({
    width,
    height,
    margin,
    scaleX,
    scaleY,
    children,
}: Pick<DimensionsContextProps, 'width' | 'height' | 'margin'> & {
    scaleX: ScaleSpec
    scaleY: ScaleSpec
    children: ReactNode
}) => {
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const value: ScalesContextProps = {
        scaleX: createScale({ axis: 'x', size: innerWidth, scale: scaleX }),
        scaleY: createScale({ axis: 'y', size: innerHeight, scale: scaleY }),
    }
    return <scalesContext.Provider value={value}>{children}</scalesContext.Provider>
}

export const useScales = () => useContext(scalesContext)

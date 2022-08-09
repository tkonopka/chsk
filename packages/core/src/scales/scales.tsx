import { scaleLog, scaleLinear, scaleBand } from 'd3-scale'
import {
    AxisScale,
    ScaleProps,
    ScalesContextProps,
    ContinuousScaleSpec,
    BandScaleSpec,
    ScaleSpec,
    ContinuousAxisScale,
} from './types'
import { createContext, ReactNode, useContext } from 'react'
import { BOTTOM, DimensionsContextProps, LEFT, RIGHT, TOP } from '../general'

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

export const isContinuousAxisScale = (scale: AxisScale): scale is ContinuousAxisScale => {
    return 'ticks' in scale
}

/** get an array of ticks in the scale domain */
export const getTicks = (scale: AxisScale, ticks: number | undefined) => {
    if (isContinuousAxisScale(scale)) {
        if (ticks === undefined) return scale.ticks(4) as Array<number>
        return scale.ticks(ticks) as Array<number>
    }
    return scale.domain()
}

/** get an array of ticks in the scale range */
export const getTickCoordinates = (
    scale: AxisScale,
    values: undefined | number | number[] | string[]
) => {
    if ('ticks' in scale) {
        const tickValues = Array.isArray(values)
            ? (values as Array<number>)
            : (getTicks(scale, values) as Array<number>)
        return tickValues?.map((v: number) => scale(v) as number)
    }
    const tickValues = Array.isArray(values)
        ? (values as Array<string>)
        : (getTicks(scale, undefined) as Array<string>)
    return tickValues?.map(v => scale(v) as number)
}

export const getScales = ({
    size,
    padding,
    scaleX,
    scaleY,
}: Pick<DimensionsContextProps, 'size' | 'padding'> & {
    scaleX: ScaleSpec
    scaleY: ScaleSpec
}): ScalesContextProps => {
    const [width, height] = size
    const innerWidth = width - padding[LEFT] - padding[RIGHT]
    const innerHeight = height - padding[TOP] - padding[BOTTOM]
    return {
        scaleX: createScale({ axis: 'x', size: innerWidth, scale: scaleX }),
        scaleY: createScale({ axis: 'y', size: innerHeight, scale: scaleY }),
    }
}

export const ScalesContext = createContext({
    scaleX: scaleLinear(),
    scaleY: scaleLinear(),
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

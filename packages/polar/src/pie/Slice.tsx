import { animate, m, useMotionValue } from 'framer-motion'
import { arc } from 'd3-shape'
import { interpolateObject } from 'd3-interpolate'
import { deg2rad, getClassName, useTheme } from '@chsk/core'
import { SliceProps } from './types'
import { useState } from 'react'

// uses radians
const getSliceD = ({
    innerRadius,
    outerRadius,
    r = 0,
    startAngle,
    endAngle,
    padAngle = 0,
}: Pick<
    SliceProps,
    'innerRadius' | 'outerRadius' | 'r' | 'startAngle' | 'endAngle' | 'padAngle'
>) => {
    const generator = arc().cornerRadius(r).padAngle(padAngle)
    return generator({ startAngle, endAngle, innerRadius, outerRadius }) ?? ''
}

export const Slice = ({
    innerRadius,
    outerRadius,
    r = 0,
    startAngle,
    endAngle,
    angleUnit = 'radian',
    padAngle = 0,
    //
    className,
    setRole = true,
    ...props
}: SliceProps) => {
    const theme = useTheme()
    const isRadian = angleUnit === 'radian'
    const sliceProps = {
        innerRadius,
        outerRadius,
        r,
        startAngle: isRadian ? startAngle : deg2rad(startAngle),
        endAngle: isRadian ? endAngle : deg2rad(endAngle),
        padAngle,
    }
    const d = useMotionValue(getSliceD(sliceProps))
    const [values, setValues] = useState(sliceProps)
    const [working, setWorking] = useState(false)

    if (d.get() !== getSliceD(sliceProps) && !working) {
        const animateConfig = theme.Transition.default
        const interpolator = interpolateObject(values, sliceProps)
        animate(0, 1, {
            ...animateConfig,
            onPlay: () => {
                setWorking(true)
            },
            onUpdate: latest => {
                d.set(getSliceD(interpolator(latest)))
            },
            onComplete: () => {
                setValues(sliceProps)
                setWorking(false)
            },
        })
    }

    const compositeClassName = getClassName('slice', className)
    return (
        <m.path
            d={d}
            role={setRole ? 'slice' : undefined}
            className={compositeClassName}
            {...props}
        />
    )
}

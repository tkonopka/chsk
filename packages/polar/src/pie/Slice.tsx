import { animate, m, useMotionValue } from 'framer-motion'
import { arc } from 'd3-shape'
import { interpolateObject } from 'd3-interpolate'
import { getClassName, useTheme } from '@chsk/core'
import { SliceProps } from './types'
import { useState } from 'react'

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
    padAngle = 0,
    //
    className,
    setRole = true,
    ...props
}: SliceProps) => {
    const theme = useTheme()
    const sliceProps = { innerRadius, outerRadius, r, startAngle, endAngle, padAngle }
    const d = useMotionValue(getSliceD(sliceProps))
    const [values, setValues] = useState(sliceProps)
    const [working, setWorking] = useState(false)

    if (d.get() !== getSliceD(sliceProps) && !working) {
        const interpolator = interpolateObject(values, sliceProps)
        animate(0, 1, {
            type: 'spring',
            ...theme.Motion,
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

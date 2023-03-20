import { animate, m, useMotionValue } from 'framer-motion'
import { deg2rad, getClassName, useTheme, zeroPosition } from '@chsk/core'
import { PolarTypographyProps } from './types'
import { useState } from 'react'
import { interpolate } from 'd3-interpolate'

const getTransform = (x: number, y: number, degrees: number) => {
    return 'translateX(' + x + 'px) translateY(' + y + 'px) rotate(' + degrees + 'deg)'
}

export const PolarTypography = ({
    // typography props
    position = zeroPosition,
    variant = 'polar-label',
    rotate = 0,
    style,
    className,
    setRole = true,
    children,
    // polar props
    radial,
    tangential,
}: PolarTypographyProps) => {
    const theme = useTheme()

    // target position
    const [r, theta] = position
    const thetaRad = deg2rad(theta % 360)
    const x = r * Math.sin(thetaRad)
    const y = -r * Math.cos(thetaRad)
    let angle = rotate
    if (radial) {
        angle += theta - 90
    } else if (tangential) {
        angle += theta
    }
    angle = angle % 360

    let classPrefix = ''
    if (variant === 'polar-label') {
        if (radial && (theta < 0 || theta > 180)) {
            classPrefix = 'leftHemisphere '
            angle += 180
        } else if (tangential && (theta < -90 || theta > 90)) {
            classPrefix = 'bottomHemisphere '
            angle += 180
        }
    }
    angle = angle % 360

    // animations that move a label around a circle
    const [values, setValues] = useState([r, thetaRad, angle])
    const [working, setWorking] = useState(false)
    const transform = useMotionValue(getTransform(x, y, angle))
    if (transform.get() !== getTransform(x, y, angle) && !working) {
        const interpolator = interpolate(values, [r, thetaRad, angle])
        animate(0, 1, {
            type: 'spring',
            ...theme.Motion,
            onPlay: () => {
                setWorking(true)
            },
            onUpdate: latest => {
                const [rLatest, thetaRadLatest, angleLatest] = interpolator(latest)
                const latestX = rLatest * Math.sin(thetaRadLatest)
                const latestY = -rLatest * Math.cos(thetaRadLatest)
                transform.set(getTransform(latestX, latestY, angleLatest))
            },
            onComplete: () => {
                setValues([r, thetaRad, angle])
                setWorking(false)
            },
        })
    }

    if (!children) return null

    const compositeClassName = getClassName(variant, classPrefix + (className ?? ''))
    return (
        <m.g role={setRole ? variant : undefined} style={{ transform }}>
            <text style={style} className={'label ' + compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}

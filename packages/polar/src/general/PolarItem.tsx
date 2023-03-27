import { animate, m, useMotionValue } from 'framer-motion'
import { deg2rad, rad2deg, useTheme, zeroPosition } from '@chsk/core'
import { PolarItemProps } from './types'
import { useState } from 'react'
import { interpolate } from 'd3-interpolate'
import { HALFPI, R, THETA, TWOPI } from './constants'

const getTransform = (x: number, y: number, degrees: number) => {
    return 'translateX(' + x + 'px) translateY(' + y + 'px) rotate(' + degrees + 'deg)'
}

export const PolarItem = ({
    variant = 'default',
    position = zeroPosition,
    angleUnit = 'radian',
    radial,
    tangential,
    setRole = true,
    children,
}: PolarItemProps) => {
    const theme = useTheme()

    // target position
    const isRadians = angleUnit === 'radian'
    const r = position[R]
    const theta = isRadians ? position[THETA] : deg2rad(position[THETA])
    const x = r * Math.sin(theta)
    const y = -r * Math.cos(theta)

    let angle = 0
    if (radial) {
        angle += theta - HALFPI
    } else if (tangential) {
        angle += theta
    }
    angle = angle % TWOPI

    if (radial && (theta < 0 || theta > Math.PI)) {
        angle += Math.PI
    } else if (tangential && (theta < -HALFPI || theta > HALFPI)) {
        angle += Math.PI
    }
    angle = rad2deg(angle % TWOPI)

    // animations that move a label around a circle
    const [values, setValues] = useState([r, theta, angle])
    const [working, setWorking] = useState(false)
    const transform = useMotionValue(getTransform(x, y, angle))
    if (transform.get() !== getTransform(x, y, angle) && !working) {
        const animateConfig = theme.Motion[variant] ?? theme.Motion.default
        const interpolator = interpolate(values, [r, theta, angle])
        animate(0, 1, {
            ...animateConfig,
            onPlay: () => {
                setWorking(true)
            },
            onUpdate: latest => {
                const [rLatest, thetaLatest, angleLatest] = interpolator(latest)
                const latestX = rLatest * Math.sin(thetaLatest)
                const latestY = -rLatest * Math.cos(thetaLatest)
                transform.set(getTransform(latestX, latestY, angleLatest))
            },
            onComplete: () => {
                setValues([r, theta, angle])
                setWorking(false)
            },
        })
    }

    if (!children) return null
    return (
        <m.g role={setRole && variant !== 'default' ? variant : undefined} style={{ transform }}>
            {children}
        </m.g>
    )
}

import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { PolygonProps } from './types'
import { getMotionTarget, roundDecimalPlaces } from '../general/'

export const Polygon = ({
    variant = 'default',
    initial,
    animate,
    points,
    className,
    setRole = true,
    ...props
}: PolygonProps) => {
    const pointsString = points
        .map(coords => roundDecimalPlaces(coords[0], 2) + ',' + roundDecimalPlaces(coords[1], 2))
        .join(' ')
    const config = { points: pointsString }
    return (
        <m.polygon
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={getMotionTarget(config, initial)}
            animate={getMotionTarget(config, animate)}
            className={getClassName(variant, className)}
            {...props}
        />
    )
}

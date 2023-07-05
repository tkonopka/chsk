import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { mergeTargets, roundDecimalPlaces } from '../general'
import { PolygonProps } from './types'

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
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            className={getClassName(variant, className)}
            {...props}
        />
    )
}

import { getClassName } from '../themes'
import { PolygonProps } from './types'
import { roundDecimalPlaces } from '../general/'

export const Polygon = ({
    variant = 'default',
    points,
    className,
    setRole = true,
    ...props
}: PolygonProps) => {
    const compositeClassName = getClassName(variant, className)
    const pointsString = points
        .map(coords => roundDecimalPlaces(coords[0], 2) + ',' + roundDecimalPlaces(coords[1], 2))
        .join(' ')
    return (
        <polygon
            role={setRole && variant !== 'default' ? variant : undefined}
            points={pointsString}
            className={compositeClassName}
            {...props}
        />
    )
}

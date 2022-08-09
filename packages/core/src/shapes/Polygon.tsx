import { composeClassName } from '../themes'
import { PolygonProps } from './types'
import { roundDecimalPlaces } from '../general/'

export const Polygon = ({
    variant = 'default',
    points,
    className,
    style,
    setRole = true,
    key,
}: PolygonProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const pointsString = points
        .map(coords => roundDecimalPlaces(coords[0], 2) + ',' + roundDecimalPlaces(coords[1], 2))
        .join(' ')
    return (
        <polygon
            key={key}
            role={setRole ? variant : undefined}
            points={pointsString}
            style={style}
            className={compositeClassName}
        />
    )
}

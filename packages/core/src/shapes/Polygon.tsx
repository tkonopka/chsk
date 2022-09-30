import { composeClassName } from '../themes'
import { PolygonProps } from './types'
import { roundDecimalPlaces } from '../general/'

export const Polygon = ({
    variant = 'default',
    points,
    className,
    style,
    setRole = true,
    ...props
}: PolygonProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const pointsString = points
        .map(coords => roundDecimalPlaces(coords[0], 2) + ',' + roundDecimalPlaces(coords[1], 2))
        .join(' ')
    return (
        <polygon
            role={setRole ? variant : undefined}
            points={pointsString}
            style={style}
            className={compositeClassName}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}

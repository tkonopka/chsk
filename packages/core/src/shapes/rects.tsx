import { composeClassName, getStyles } from '../themes'
import { RectProps } from './types'

export const getRectStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'rect', component: 'rect' })
}

export const Rect = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    center = false,
    className,
    style,
    setRole = true,
}: RectProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    return (
        <rect
            role={setRole ? variant : undefined}
            x={center ? x - width / 2 : x}
            y={center ? y - height / 2 : y}
            width={width}
            height={height}
            style={style}
            className={compositeClassName}
        />
    )
}

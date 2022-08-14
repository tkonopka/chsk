import { composeClassName } from '../themes'
import { RectangleProps } from './types'

export const Rectangle = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    rx,
    ry,
    center = false,
    className,
    style,
    setRole = true,
    key,
}: RectangleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    return (
        <rect
            key={key}
            role={setRole ? variant : undefined}
            x={center ? x - width / 2 : x}
            y={center ? y - height / 2 : y}
            width={width}
            height={height}
            rx={rx}
            ry={ry}
            style={style}
            className={compositeClassName}
        />
    )
}

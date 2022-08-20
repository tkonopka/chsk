import { composeClassName } from '../themes'
import { LabelProps } from './types'
import { NumericPositionSpec, X, Y, getAlignPosition } from '../general'

export const Label = ({
    position = [0, 0],
    variant = 'label',
    transform,
    size = [20, 20],
    padding = [0, 0, 0, 0],
    align = [0.5, 0.5],
    style,
    className,
    setRole = true,
    children,
}: LabelProps) => {
    if (children === undefined || children === '') return null
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])

    const corner: NumericPositionSpec = [position[X] - size[X] / 2, position[Y] - size[Y] / 2]
    const pos = getAlignPosition(corner, size, padding, align)

    return (
        <text
            role={setRole ? variant : undefined}
            x={pos[X] === 0 ? undefined : pos[X]}
            y={pos[Y] === 0 ? undefined : pos[Y]}
            style={style}
            transform={transform}
            className={compositeClassName}
        >
            {children}
        </text>
    )
}

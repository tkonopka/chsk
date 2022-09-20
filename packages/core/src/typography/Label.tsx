import { LabelProps } from './types'
import { NumericPositionSpec, X, Y, getAlignPosition } from '../general'
import { Typography } from './Typography'

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
    const corner: NumericPositionSpec = [position[X] - size[X] / 2, position[Y] - size[Y] / 2]
    const pos = getAlignPosition(corner, size, padding, align)
    return (
        <Typography
            variant={variant}
            position={pos}
            transform={transform}
            style={style}
            className={className}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

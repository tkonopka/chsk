import { addPositions, useDimensions, X, Y } from '../general'
import { AxisLabelProps } from './types'
import { Typography } from '../typography'
import { useThemedProps } from '../themes'
import { defaultAxisLabelTopProps } from './defaults'
import { getAxisPosition } from './utils'

const UnthemedAxisLabel = ({
    variant = 'top',
    distance = defaultAxisLabelTopProps.distance,
    offset = defaultAxisLabelTopProps.offset,
    align = defaultAxisLabelTopProps.align,
    angle = defaultAxisLabelTopProps.angle,
    className,
    style,
    setRole,
    children,
}: AxisLabelProps) => {
    const { size } = useDimensions()
    if (children === undefined || children === '') return null

    // use size=[0, 0] because AxisLabel will be called from within Axis.
    let [x, y] = getAxisPosition(variant, [0, 0], distance)
    if (variant === 'left' || variant === 'right') {
        y += (1 - align) * size[Y]
    } else {
        x += align * size[X]
    }

    return (
        <Typography
            variant={'axis-label'}
            position={addPositions([x, y], offset)}
            angle={angle}
            style={style}
            className={className ?? variant}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

export const AxisLabel = (props: AxisLabelProps) => (
    <UnthemedAxisLabel {...useThemedProps(props, 'AxisLabel')} />
)

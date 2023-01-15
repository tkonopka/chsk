import { m } from 'framer-motion'
import { LabelProps } from './types'
import { NumericPositionSpec, X, Y, getAlignPosition } from '../general'
import { composeClassName } from '../themes'

export const Label = ({
    position = [0, 0],
    variant = 'label',
    rotate,
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
    const compositeClassName = composeClassName([variant, className])
    const config = {
        translateX: pos[X],
        translateY: pos[Y],
        rotate,
        originX: '0px',
        originY: '0px',
    }
    return (
        <m.g role={setRole ? variant : undefined} initial={config} animate={config}>
            <text style={style} className={compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}

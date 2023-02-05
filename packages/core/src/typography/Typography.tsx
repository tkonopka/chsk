import { m } from 'framer-motion'
import { X, Y } from '../general'
import { getClassName } from '../themes'
import { getTextContent } from './utils'
import { TypographyProps } from './types'

export const Typography = ({
    position = [0, 0],
    variant = 'default',
    rotate,
    style,
    className,
    setRole = true,
    children,
}: TypographyProps) => {
    const content = getTextContent(children)
    if (content === '') return null
    const compositeClassName = getClassName(variant, className)
    const config = { x: position[X], y: position[Y], rotate, originX: '0px', originY: '0px' }
    return (
        <m.g role={setRole ? variant : undefined} initial={config} animate={config}>
            <text style={style} className={compositeClassName}>
                {content}
            </text>
        </m.g>
    )
}

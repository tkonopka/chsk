import {
    centerAlign,
    getAlignPosition,
    getAnchoredOrigin,
    getTranslate,
    zeroPadding,
    zeroPosition,
} from '../general'
import { getClassName } from '../themes/utils'
import { ButtonProps } from './types'

/**
 * Button is quite similar to Label.
 *
 * Differences:
 *
 * - accepts interactivity props (onClick, etc.)
 * - uses the variant string as a label by default
 * - accept non-string content
 *
 */

export const Button = ({
    variant = 'default',
    position = zeroPosition,
    size = [20, 20],
    padding = zeroPadding,
    anchor = centerAlign,
    align = centerAlign,
    style,
    className,
    setRole = true,
    children,
    ...props
}: ButtonProps) => {
    const corner = getAnchoredOrigin(position, size, anchor)
    const [x, y] = getAlignPosition(corner, size, align, padding)
    const compositeClassName = getClassName('button ' + variant, className)
    return (
        <g
            role={setRole ? 'button-' + variant.replace(' ', '-') : undefined}
            transform={getTranslate(x, y)}
            className={compositeClassName}
            {...props}
        >
            {children ?? (
                <text style={style} className={compositeClassName}>
                    {variant}
                </text>
            )}
        </g>
    )
}

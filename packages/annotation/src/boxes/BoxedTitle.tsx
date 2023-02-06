import { BoxedTitleProps } from './types'
import { useDimensions } from '@chsk/core'
import { BoxedLabel } from './BoxedLabel'

export const BoxedTitle = ({
    variant,
    offset = 0,
    size = 26,
    expansion = [0, 0, 0, 0],
    rx,
    ry,
    boxStyle,
    textStyle,
    className,
    style,
    setRole = true,
    children,
}: BoxedTitleProps) => {
    const dimensions = useDimensions()

    const horizontal = variant === 'top' || variant === 'bottom'
    const vertical = variant === 'left' || variant === 'right'

    // size of box to fill entire width/height of a view
    const [width, height] = dimensions.size
    const boxSize: [number, number] = horizontal ? [width, size] : [height, size]

    // location and rotation of center of label
    let x = 0,
        y = 0
    if (variant === 'left') x -= size / 2 + offset
    if (variant === 'right') x += width + size / 2 + offset
    if (variant === 'top') y -= size / 2 + offset
    if (variant === 'bottom') y += height + size / 2 + offset
    if (vertical) y += 0.5 * height
    if (horizontal) x += 0.5 * width
    const rotate = variant === 'left' ? -90 : variant === 'right' ? 90 : 0

    return (
        <g role={setRole ? 'boxed-title-' + variant : undefined}>
            <BoxedLabel
                variant={'boxed-title'}
                position={[x, y]}
                size={boxSize}
                expansion={expansion}
                rotate={rotate}
                className={className}
                rx={rx}
                ry={ry}
                boxStyle={boxStyle}
                textStyle={textStyle}
                style={style}
                setRole={setRole}
            >
                {children}
            </BoxedLabel>
        </g>
    )
}

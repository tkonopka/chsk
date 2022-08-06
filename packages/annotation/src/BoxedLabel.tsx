import { BoxedLabelProps } from './types'
import { getAxisTranslate, Rectangle, Text, useDimensions } from '@chask/core'

export const BoxedLabel = ({
    variant,
    offset = 0,
    size = 26,
    extent,
    expansion = 0,
    rx,
    ry,
    boxStyle,
    textStyle,
    className,
    style,
    setRole = true,
    children,
}: BoxedLabelProps) => {
    const dimensions = useDimensions()

    if (children === undefined || children === '') return null

    const horizontal = variant === 'top' || variant === 'bottom'
    const vertical = variant === 'left' || variant === 'right'

    // translation toward a corner of an axis
    const [width, height] = dimensions.innerSize
    const translation = getAxisTranslate({ variant, padding: offset, width, height })

    // effective extent (width/height) of the rectangle
    const effectiveExtent = extent ?? (horizontal ? width : height) + expansion

    // location and rotation of center of label
    let x = 0,
        y = 0
    if (variant === 'left') x -= size / 2
    if (variant === 'right') x += size / 2
    if (variant === 'top') y -= size / 2
    if (variant === 'bottom') y += size / 2
    if (vertical) y += 0.5 * height
    if (horizontal) x += 0.5 * width
    const rotate = variant === 'left' ? -90 : variant === 'right' ? 90 : 0
    const labelTranslation = 'translate(' + x + ',' + y + ')'
    const labelRotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    const compositeClassName = ['label boxed-label', className].join(' ')

    // content of the label - text or custom node
    const content =
        typeof children === 'string' ? (
            <Text
                variant={'boxed-label'}
                transform={labelTranslation + labelRotation}
                className={compositeClassName}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Text>
        ) : (
            <g transform={labelTranslation + labelRotation}>{children}</g>
        )

    return (
        <g
            transform={translation}
            style={style}
            className={compositeClassName}
            role={setRole ? 'boxed-label-' + variant : undefined}
        >
            <Rectangle
                variant={'boxed-label'}
                x={x}
                y={y}
                width={vertical ? size : effectiveExtent}
                height={vertical ? effectiveExtent : size}
                rx={rx}
                ry={ry}
                center={true}
                className={compositeClassName}
                style={boxStyle}
                setRole={setRole}
            />
            {content}
        </g>
    )
}

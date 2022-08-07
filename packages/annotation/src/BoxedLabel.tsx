import { BoxedLabelProps } from './types'
import {
    BOTTOM,
    composeClassName,
    getAnchoredOrigin,
    LEFT,
    Rectangle,
    RIGHT,
    Text,
    TOP,
    useDimensions,
} from '@chask/core'

export const BoxedLabel = ({
    position,
    positionRelative = false,
    size = [26, 100],
    translate = [0, 0],
    anchor = [0.5, 0.5],
    rotate = 0,
    expansion = [0, 0, 0, 0],
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

    // compute effective x, y position for top-left corner or box
    let [x, y] = getAnchoredOrigin({
        position,
        positionRelative,
        size,
        anchor,
        parentSize: dimensions.innerSize,
    })
    // adjust to get the box center
    x += size[0] / 2 + translate[0]
    y += size[1] / 2 + translate[1]

    // compute effective size
    const effectiveSize = [
        size[0] + expansion[LEFT] + expansion[RIGHT],
        size[1] + expansion[TOP] + expansion[BOTTOM],
    ]

    // location and rotation of center of label
    const translation = 'translate(' + x + ',' + y + ')'
    const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    let compositeClassName: string | undefined = className ?? ''
    if (compositeClassName.search("boxed-label") < 0) {
        compositeClassName = composeClassName(['label boxed-label', className])
    }

    // content of the label - text or custom node
    const content =
        typeof children === 'string' ? (
            <Text
                variant={'boxed-label'}
                className={compositeClassName}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Text>
        ) : (
            children
        )

    return (
        <g
            transform={translation + rotation}
            style={style}
            className={compositeClassName}
            role={setRole ? 'boxed-label' : undefined}
        >
            <Rectangle
                variant={'boxed-label'}
                x={0}
                y={0}
                width={effectiveSize[0]}
                height={effectiveSize[1]}
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

import { m } from 'framer-motion'
import { BoxedLabelProps } from './types'
import {
    BOTTOM,
    getClassName,
    getAbsolutePosition,
    getAbsoluteSize,
    getAnchoredOrigin,
    LEFT,
    Rectangle,
    RIGHT,
    TOP,
    useDimensions,
    useScales,
    rad2deg,
} from '@chsk/core'

export const BoxedLabel = ({
    variant = 'boxed-label',
    position,
    positionUnits = 'absolute',
    size = [100, 32],
    sizeUnits = 'absolute',
    translate = [0, 0],
    anchor = [0.5, 0.5],
    angle = 0,
    angleUnit = 'degree',
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
    const scales = useScales()

    // compute effective x, y position for top-left corner or box
    const absPos = getAbsolutePosition(position, positionUnits, dimensions.size, scales)
    const absSize = getAbsoluteSize(size, sizeUnits, dimensions.size)
    let [x, y] = getAnchoredOrigin(absPos, absSize, anchor)
    // adjust to get the box center
    x += size[0] / 2 + translate[0]
    y += size[1] / 2 + translate[1]

    // adjust (enlarge/shrink) the effective size
    absSize[0] += expansion[LEFT] + expansion[RIGHT]
    absSize[1] += expansion[TOP] + expansion[BOTTOM]

    // content of the label - text or custom node
    const compositeClassName = getClassName(variant, className)
    const content =
        typeof children === 'string' ? (
            <text style={textStyle} className={'label ' + compositeClassName}>
                {children}
            </text>
        ) : (
            children
        )

    const degrees = angle && angleUnit === 'radian' ? rad2deg(angle) : angle
    const config = { x, y, rotate: degrees, originX: '0px', originY: '0px' }
    return (
        <m.g
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            style={style}
            className={compositeClassName}
        >
            <Rectangle
                variant={'label'}
                x={0}
                y={0}
                width={absSize[0]}
                height={absSize[1]}
                rx={rx}
                ry={ry}
                center={true}
                className={compositeClassName}
                style={boxStyle}
                setRole={false}
            />
            {content}
        </m.g>
    )
}

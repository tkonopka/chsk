import { MouseEvent, useCallback, useState } from 'react'
import {
    useDimensions,
    NumericPositionSpec,
    addPositions,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    X,
    Y,
    getTranslate,
} from '../general'
import { getClassName } from '../themes/utils'
import { DraggableProps } from './types'
import { getEventXY } from './utils'

const getDragOffset = (
    variant: string,
    start: NumericPositionSpec,
    x: number,
    y: number
): NumericPositionSpec => {
    if (variant === 'x') return [x - start[X], 0]
    if (variant === 'y') return [0, y - start[Y]]
    return [x - start[X], y - start[Y]]
}

export const Draggable = ({
    variant = 'xy',
    expansion = [500, 500, 500, 500],
    style,
    className,
    setRole = true,
    children,
    ...props
}: DraggableProps) => {
    const { ref, size } = useDimensions()
    // current/last fixed position
    const [position, setPosition] = useState<NumericPositionSpec>([0, 0])
    // computed offset from drag start position
    const [offset, setOffset] = useState<NumericPositionSpec>([0, 0])
    // position of drag start
    const [start, setStart] = useState<NumericPositionSpec | null>(null)

    const handleMouseDown = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            setStart([x, y])
        },
        [ref, setStart]
    )
    const handleMouseUp = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (!start || x === undefined || y === undefined) return
            setPosition(position => addPositions(position, getDragOffset(variant, start, x, y)))
            setOffset([0, 0])
            setStart(null)
        },
        [ref, variant, start, setStart, setOffset, setPosition]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            //props.onMouseLeave?.(event)
            if (!start) return
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            setOffset(getDragOffset(variant, start, x, y))
        },
        [variant, ref, start, setOffset, props]
    )

    const compositeClassName = getClassName('draggable', className)

    // invisible reference rectangle picks up mouse motion even when pointer moves
    // outside the draggable shape - needed for fast mouse movements
    const reference =
        start !== null ? (
            <rect
                role={setRole ? 'draggable-reference' : undefined}
                key={'reference'}
                x={-expansion[LEFT]}
                y={-expansion[TOP]}
                width={size[X] + expansion[LEFT] + expansion[RIGHT]}
                height={size[Y] + expansion[TOP] + expansion[BOTTOM]}
                style={{ opacity: 0 }}
                className={'dragging'}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
        ) : null

    return (
        <>
            <g
                key={'content'}
                role={setRole ? 'draggable' : undefined}
                transform={getTranslate(position[X] + offset[X], position[Y] + offset[Y])}
                className={compositeClassName}
                style={style}
                onMouseDown={handleMouseDown}
                {...props}
            >
                {children}
            </g>
            {reference}
        </>
    )
}

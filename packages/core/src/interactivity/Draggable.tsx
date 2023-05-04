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
    SizeSpec,
} from '../general'
import { getClassName } from '../themes/utils'
import { DragData, DraggableProps } from './types'
import { getEventXY } from './utils'
import { getAbsolutePosition, Scales, useScales } from '../scales'

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

const getDragData = (position: NumericPositionSpec, size: SizeSpec, scales: Scales): DragData => {
    return {
        absolute: [position[X], position[Y]],
        relative: [position[X] / size[X], position[Y] / size[Y]],
        view: [scales.x.invert(position[X]), scales.y.invert(position[Y])],
    }
}

export const Draggable = ({
    variant = 'xy',
    position = [0, 0],
    positionUnits = 'absolute',
    expansion = [500, 500, 500, 500],
    // handlers
    onDragStart,
    onDrag,
    onDragEnd,
    // svg
    style,
    className,
    setRole = true,
    children,
}: DraggableProps) => {
    const { ref, size } = useDimensions()
    const { scales } = useScales()

    const pos = getAbsolutePosition(position, positionUnits, size, scales)

    // last set position
    const [latest, setLatest] = useState<NumericPositionSpec>(pos)
    // computed offset from drag start position
    const [offset, setOffset] = useState<NumericPositionSpec>([0, 0])
    // position of drag start
    const [start, setStart] = useState<NumericPositionSpec | null>(null)

    const handleMouseDown = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            setStart([x, y])
            onDragStart?.(getDragData(latest, size, scales), event)
        },
        [ref, setStart, onDragStart, latest]
    )
    const handleMouseUp = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (!start || x === undefined || y === undefined) return
            const newLatest = addPositions(latest, getDragOffset(variant, start, x, y))
            setLatest(newLatest)
            setOffset([0, 0])
            setStart(null)
            onDragEnd?.(getDragData(newLatest, size, scales), event)
        },
        [ref, variant, start, setStart, setOffset, latest, setLatest, onDragEnd]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!start) return
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            const newOffset = getDragOffset(variant, start, x, y)
            setOffset(newOffset)
            onDrag?.(getDragData(addPositions(latest, newOffset), size, scales), event)
        },
        [variant, ref, latest, start, setOffset, onDrag]
    )

    const compositeClassName = getClassName('draggable', className)

    // invisible reference rectangle picks up mouse events even when pointer moves
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
                transform={getTranslate(latest[X] + offset[X], latest[Y] + offset[Y])}
                className={compositeClassName}
                style={style}
                onMouseDown={handleMouseDown}
            >
                {children}
            </g>
            {reference}
        </>
    )
}

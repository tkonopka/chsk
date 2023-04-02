import { useCallback, useRef, MouseEvent, useState } from 'react'
import { Rectangle, RectangleProps } from '../shapes'
import { changeDomain, shiftDomain, useScales } from '../scales'
import { ViewControllerProps } from './types'
import { RegionProps } from '../general'
import { getEventXY } from '../interactivity/utils'

// remembers view state at the beginning of a pan operation
type PanProps = { x: number; y: number }

export const PanController = ({
    variant = 'xy',
    width,
    height,
    setRole,
    ...props
}: RectangleProps & Pick<ViewControllerProps, 'variant'>) => {
    const ref = useRef<SVGSVGElement>(null)
    const { scales, scaleProps, setScaleProps } = useScales()
    const [anchor, setAnchor] = useState<PanProps | null>(null)

    // handling box drawing for custom zoom
    const onMouseDown = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (x === undefined || y === undefined) return
        setAnchor({ x, y })
    }
    const onMouseMove = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (!anchor || x === undefined || y === undefined) return
        const newProps = { ...scaleProps }
        const xShift = x - anchor.x
        const yShift = y - anchor.y
        if (variant.includes('x') && Math.abs(xShift) > 0) {
            newProps.x = shiftDomain(newProps.x, scales.x, xShift)
            newProps.x.nice = false
        }
        if (variant.includes('y') && Math.abs(yShift) > 0) {
            newProps.y = shiftDomain(newProps.y, scales.y, yShift)
            newProps.y.nice = false
        }
        if (Math.abs(xShift) + Math.abs(yShift) > 0) {
            setScaleProps(newProps)
            setAnchor({ x, y })
        }
    }
    const onMouseUp = () => {
        setAnchor(null)
    }
    const onMouseLeave = () => {
        setAnchor(null)
    }

    const onProps = { onMouseDown, onMouseUp, onMouseMove, onMouseLeave }
    return (
        <g role={setRole ? 'controller-pan' : undefined} ref={ref}>
            <rect width={width} height={height} {...props} {...onProps} />
        </g>
    )
}

export const ZoomController = ({
    variant = 'xy',
    className,
    setRole,
    width,
    height,
    selectionStyle,
    ...props
}: RectangleProps & Pick<ViewControllerProps, 'variant' | 'selectionStyle'>) => {
    const ref = useRef<SVGSVGElement>(null)
    const { scales, scaleProps, setScaleProps } = useScales()
    const [selection, setSelection] = useState<RegionProps | null>(null)

    // handling box drawing for custom zoom
    const onMouseDown = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            if (variant === 'xy') {
                setSelection({ x, y, width: 0, height: 0 })
            } else if (variant === 'x') {
                setSelection({ x, y: 0, width: 0, height })
            } else if (variant === 'y') {
                setSelection({ x: 0, y, width, height: 0 })
            }
        },
        [ref, setSelection]
    )
    const onMouseMove = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (x === undefined || y === undefined || !selection) return
        if (variant === 'x') {
            setSelection(prevSelection =>
                prevSelection ? { ...prevSelection, width: x - prevSelection.x } : null
            )
        } else if (variant === 'y') {
            setSelection(prevSelection =>
                prevSelection ? { ...prevSelection, height: y - prevSelection.y } : null
            )
        } else {
            setSelection(prevSelection =>
                prevSelection
                    ? {
                          ...prevSelection,
                          width: x - prevSelection.x,
                          height: y - prevSelection.y,
                      }
                    : null
            )
        }
    }
    const onMouseUp = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (x === undefined || y === undefined || !selection) return
        const width = x - selection.x
        const height = y - selection.y
        if (width === 0 || height === 0) return
        const newProps = { ...scaleProps }
        if (variant.includes('x')) {
            newProps.x = changeDomain(scaleProps.x, scales.x, [selection.x, selection.x + width])
        }
        if (variant.includes('y')) {
            newProps.y = changeDomain(scaleProps.y, scales.y, [selection.y, selection.y + height])
        }
        setSelection(null)
        setScaleProps(newProps)
    }
    // needed when user leaves the detector zone without completing the zoom
    const onMouseLeave = () => {
        setSelection(null)
    }

    const onProps = { onMouseDown, onMouseUp, onMouseMove }
    const selectionClassName = 'selection viewController' + (className ? ' ' + className : '')
    return (
        <g role={setRole ? 'controller-zoom' : undefined} ref={ref}>
            <rect
                width={width}
                height={height}
                {...props}
                {...onProps}
                onMouseLeave={onMouseLeave}
            />
            {selection && selection.width && selection.height ? (
                // this uses <Rectangle> and not <rect> to handle negative widths and heights
                <Rectangle
                    variant={'selection'}
                    {...selection}
                    className={selectionClassName}
                    style={{ ...selectionStyle, pointerEvents: 'none' }}
                    transition={{ type: 'tween', duration: 0 }}
                    setRole={setRole}
                />
            ) : null}
        </g>
    )
}

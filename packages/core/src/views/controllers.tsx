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
            newProps.x.nice = 0
        }
        if (variant.includes('y') && Math.abs(yShift) > 0) {
            newProps.y = shiftDomain(newProps.y, scales.y, yShift)
            newProps.y.nice = 0
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
    boxStyle,
    ...props
}: RectangleProps & Pick<ViewControllerProps, 'variant' | 'boxStyle'>) => {
    const ref = useRef<SVGSVGElement>(null)
    const { scales, scaleProps, setScaleProps } = useScales()
    const [region, setRegion] = useState<RegionProps | null>(null)

    // handling box drawing for custom zoom
    const onMouseDown = useCallback(
        (event: MouseEvent) => {
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined) return
            if (variant === 'xy') {
                setRegion({ x, y, width: 0, height: 0 })
            } else if (variant === 'x') {
                setRegion({ x, y: 0, width: 0, height })
            } else if (variant === 'y') {
                setRegion({ x: 0, y, width, height: 0 })
            }
        },
        [ref, setRegion]
    )
    const onMouseMove = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (x === undefined || y === undefined || !region) return
        if (variant === 'x') {
            setRegion(prev => (prev ? { ...prev, width: x - prev.x } : null))
        } else if (variant === 'y') {
            setRegion(prev => (prev ? { ...prev, height: y - prev.y } : null))
        } else {
            setRegion(prev => (prev ? { ...prev, width: x - prev.x, height: y - prev.y } : null))
        }
    }
    const onMouseUp = (event: MouseEvent) => {
        const { x, y } = getEventXY(event, ref)
        if (x === undefined || y === undefined || !region) return
        const width = x - region.x
        const height = y - region.y
        if (width === 0 || height === 0) return
        const newProps = { ...scaleProps }
        if (variant.includes('x')) {
            newProps.x = changeDomain(scaleProps.x, scales.x, [region.x, region.x + width])
        }
        if (variant.includes('y')) {
            newProps.y = changeDomain(scaleProps.y, scales.y, [region.y, region.y + height])
        }
        setRegion(null)
        setScaleProps(newProps)
    }
    // needed when user leaves the detector zone without completing the zoom
    const onMouseLeave = () => {
        setRegion(null)
    }

    const onProps = { onMouseDown, onMouseUp, onMouseMove }
    return (
        <g role={setRole ? 'controller-zoom' : undefined} ref={ref}>
            <rect
                width={width}
                height={height}
                {...props}
                {...onProps}
                onMouseLeave={onMouseLeave}
            />
            {region && region.width && region.height ? (
                // this uses <Rectangle> and not <rect> to handle negative widths and heights
                <Rectangle
                    variant={'zoom-box'}
                    {...region}
                    className={className}
                    style={{ ...boxStyle, pointerEvents: 'none' }}
                    transition={{ type: 'tween', duration: 0 }} // for fast responsiveness
                    setRole={setRole}
                />
            ) : null}
        </g>
    )
}

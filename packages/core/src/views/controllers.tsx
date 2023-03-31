import { useCallback, useRef, MouseEvent } from 'react'
import { RectangleProps } from '../shapes'
import { useScales, zoomDomain } from '../scales'
import { ViewControllerProps } from './types'

export const DragController = ({
    setRole,
    ...props
}: RectangleProps & Pick<ViewControllerProps, 'variant'>) => {
    return <rect role={setRole ? 'controller-drag' : undefined} {...props} />
}

export const ZoomController = ({
    variant = 'xy',
    mode = 'zoom',
    zoomFactor = 1,
    setRole,
    ...props
}: RectangleProps & Pick<ViewControllerProps, 'variant' | 'mode' | 'zoomFactor'>) => {
    const ref = useRef<SVGSVGElement>(null)
    const { scales, scaleProps, setScaleProps } = useScales()

    // handling click interactions to zoom in and out
    const zoom = mode === 'zoom out' ? 1 / zoomFactor : zoomFactor
    const onClick = useCallback(
        (event: MouseEvent) => {
            const clientRect = ref?.current?.getBoundingClientRect()
            if (clientRect === undefined) return
            const x = Math.round(event.clientX - clientRect?.x)
            const y = Math.round(event.clientY - clientRect?.y)
            if (variant.includes('x')) {
                scaleProps.x = zoomDomain(scaleProps.x, scales.x, zoom, x)
            }
            if (variant.includes('y')) {
                scaleProps.y = zoomDomain(scaleProps.y, scales.y, zoom, y)
            }
            setScaleProps(scaleProps)
        },
        [scales, scaleProps, setScaleProps, zoom]
    )

    // handling box drawing for custom zoom
    const onMouseDown = () => {
        console.log('mouse down')
    }
    const onMouseUp = () => {
        console.log('mouse up')
    }

    const onProps = mode === 'zoom' ? { onMouseDown, onMouseUp } : { onClick }
    return (
        <g role={setRole ? 'controller-zoom' : undefined} ref={ref}>
            <rect {...props} {...onProps} />
        </g>
    )
}

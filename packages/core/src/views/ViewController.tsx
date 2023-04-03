import { useCallback, useState } from 'react'
import { SizeSpec, X, Y } from '../general'
import { getClassName } from '../themes'
import { useScales, zoomDomain } from '../scales'
import { Button, Toolbar, ToolbarData } from '../interactivity'
import { defaultControllerContainerProps, defaultViewProps } from './defaults'
import { ViewControllerValue, ViewControllerProps } from './types'
import { useContainer } from './hooks'
import { PanController, ZoomController } from './controllers'

export const ViewController = ({
    variant = 'xy',
    values = ['none', 'pan', 'zoom', 'zoom-in', 'zoom-out', 'reset'],
    value = 'none',
    zoomFactor = 2,
    selectionStyle,
    // toolbar
    container = defaultControllerContainerProps,
    itemSize = [24, 24],
    itemPadding = [0, 0, 0, 0],
    itemAlign = [0, 0],
    itemStyle,
    horizontal = false,
    component = Button,
    modifiers,
    //
    className,
    setRole = defaultViewProps.setRole,
    style,
}: ViewControllerProps) => {
    const { scales, scaleProps, setScaleProps } = useScales()
    const { origin, innerSize } = useContainer({})

    // toolbar
    const n = values.length
    const size: SizeSpec = horizontal
        ? [itemSize[X] * n, itemSize[Y]]
        : [itemSize[X], itemSize[Y] * n]
    const { origin: position } = useContainer({
        ...defaultControllerContainerProps,
        ...container,
        size,
        sizeUnits: 'absolute',
    })
    const [selected, setSelected] = useState(value)

    // handle clicks on buttons: toggling pointer/pan/drag mode and adjusting scales
    const onClick = useCallback(
        (data?: ToolbarData<ViewControllerValue>) => {
            const value = data?.value
            if (value === 'reset') {
                setScaleProps(null)
            } else if (value === 'zoom-in' || value === 'zoom-out') {
                const zoom = value === 'zoom-out' ? 1 / zoomFactor : zoomFactor
                const newProps = { ...scaleProps }
                if (variant.includes('x')) {
                    newProps.x = zoomDomain(scaleProps.x, scales.x, zoom)
                }
                if (variant.includes('y')) {
                    newProps.y = zoomDomain(scaleProps.y, scales.y, zoom)
                }
                setScaleProps(newProps)
            } else {
                setSelected(value ?? 'none')
            }
        },
        [setScaleProps, setSelected]
    )
    const toolbar = (
        <Toolbar<ViewControllerValue>
            key={'toolbar'}
            position={position}
            itemSize={itemSize}
            itemPadding={itemPadding}
            itemAlign={itemAlign}
            itemStyle={itemStyle}
            horizontal={horizontal}
            values={values}
            value={selected}
            component={component}
            modifiers={modifiers}
            handlers={{ onClick }}
            className={className}
            setRole={setRole}
        />
    )

    // detector surfaces
    const rectProps = {
        variant,
        x: origin[X],
        y: origin[Y],
        width: innerSize[X],
        height: innerSize[Y],
        style: { opacity: 0 },
        setRole,
        className,
    }
    const panController = <PanController key={'pan'} {...rectProps} />
    const zoom = <ZoomController key={'zoom'} selectionStyle={selectionStyle} {...rectProps} />

    const compositeClassName = getClassName('view-controller ' + variant, className)
    return (
        <g
            role={setRole ? 'view-controller' : undefined}
            style={style}
            className={compositeClassName}
        >
            {selected === 'pan' ? panController : null}
            {selected === 'zoom' ? zoom : null}
            {toolbar}
        </g>
    )
}

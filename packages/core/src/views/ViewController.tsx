import { createElement, useCallback, useState } from 'react'
import {
    getTranslate,
    NumericPositionSpec,
    SizeSpec,
    SvgElementProps,
    WithId,
    X,
    Y,
    zeroPadding,
    zeroPosition,
} from '../general'
import { getClassName } from '../themes'
import { useScales } from '../scales'
import { Button, ButtonProps, DataComponent, DataInteractivityProps } from '../interactivity'
import { defaultControllerContainerProps, defaultViewProps } from './defaults'
import { ViewControllerMode, ViewControllerProps } from './types'
import { useContainer } from './hooks'
import { PanController, ZoomController } from './controllers'

type ControllerButtonData = WithId & { mode: ViewControllerMode }

type ControllerToolbarProps = SvgElementProps &
    Pick<
        ViewControllerProps,
        | 'buttons'
        | 'mode'
        | 'itemSize'
        | 'itemPadding'
        | 'itemAlign'
        | 'itemStyle'
        | 'horizontal'
        | 'component'
    > & {
        position: NumericPositionSpec
    } & DataInteractivityProps<ControllerButtonData, ButtonProps>

const ControllerToolbar = ({
    buttons = ['none', 'pan', 'zoom', 'zoom-in', 'zoom-out', 'reset'],
    mode = 'none',
    //
    position = zeroPosition,
    itemSize = [24, 24],
    itemPadding = zeroPadding,
    itemAlign = zeroPosition,
    itemStyle,
    horizontal = false,
    //
    dataComponent = DataComponent,
    component = Button,
    handlers,
    modifiers,
    //
    className,
    setRole = defaultViewProps.setRole,
    style,
}: ControllerToolbarProps) => {
    const multipliers = horizontal ? [1, 0] : [0, 1]
    const content = buttons.map((button, i) => {
        const itemPosition: NumericPositionSpec = [
            itemSize[X] * multipliers[X] * i,
            itemSize[Y] * multipliers[Y] * i,
        ]
        return createElement(dataComponent, {
            key: 'button-' + button,
            component,
            data: {
                id: button,
                mode: button,
            },
            props: {
                variant: button,
                selected: button === mode,
                position: itemPosition,
                size: itemSize,
                padding: itemPadding,
                anchor: zeroPosition,
                align: itemAlign,
                className: className,
                style: itemStyle,
                setRole,
            },
            handlers,
            modifiers,
        })
    })

    return (
        <g
            role={setRole ? 'toolbar' : undefined}
            transform={getTranslate(position[X], position[Y])}
            className={getClassName('view-controller toolbar', className)}
            style={style}
        >
            {content}
        </g>
    )
}

export const ViewController = ({
    variant = 'xy',
    buttons = ['none', 'pan', 'zoom', 'zoom-in', 'zoom-out', 'reset'],
    mode = 'none',
    zoomFactor = 2,
    selectionStyle,
    // toolbar
    container = defaultControllerContainerProps,
    itemSize = [24, 24],
    itemPadding = [0, 0, 0, 0],
    itemAlign = [0, 0.5],
    itemStyle,
    horizontal = false,
    component = Button,
    modifiers,
    //
    className,
    setRole = defaultViewProps.setRole,
    style,
}: ViewControllerProps) => {
    const { setScaleProps } = useScales()
    const n = buttons.length
    const size: SizeSpec = horizontal ? [itemSize[X] * n, itemSize[Y]] : [itemSize[X], itemSize[Y]]
    const { origin: viewOrigin, innerSize: viewSize } = useContainer({})
    const { origin } = useContainer({ ...container, size, sizeUnits: 'absolute' })
    const [currentMode, setMode] = useState(mode)

    const onClick = useCallback(
        (data?: ControllerButtonData) => {
            if (data?.mode === 'reset') {
                setScaleProps(null)
                setMode('none')
            } else {
                setMode(data?.mode ?? 'none')
            }
        },
        [setScaleProps, setMode]
    )

    const rectProps = {
        x: viewOrigin[X],
        y: viewOrigin[Y],
        width: viewSize[X],
        height: viewSize[Y],
        style: { opacity: 0 },
        setRole,
        className,
    }
    const panController = <PanController key={'pan'} {...rectProps} />
    const zoomController = (
        <ZoomController
            key={'zoom'}
            variant={variant}
            mode={currentMode}
            zoomFactor={zoomFactor}
            selectionStyle={selectionStyle}
            {...rectProps}
        />
    )
    const toolbar = (
        <ControllerToolbar
            key={'toolbar'}
            position={origin}
            itemSize={itemSize}
            itemPadding={itemPadding}
            itemAlign={itemAlign}
            itemStyle={itemStyle}
            horizontal={horizontal}
            buttons={buttons}
            mode={currentMode}
            component={component}
            modifiers={modifiers}
            handlers={{ onClick }}
            className={className}
            setRole={setRole}
        />
    )

    const compositeClassName = getClassName('view-controller ' + variant, className)
    return (
        <g
            role={setRole ? 'view-controller' : undefined}
            style={style}
            className={compositeClassName}
        >
            {currentMode === 'pan' ? panController : null}
            {currentMode?.includes('zoom') ? zoomController : null}
            {toolbar}
        </g>
    )
}

import { createElement, MouseEvent, useCallback, useState } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { cloneProps, CssProps, SvgElementVariantProps, WithId } from '../general'
import { merge } from 'lodash'

export const DataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    handlers,
    modifiers,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    const [componentStyle, setComponentStyle] = useState<CssProps | undefined>(props.style)
    const [key, setKey] = useState(0)
    const style = props.style

    const handleMouseEnter = useCallback(
        (event: MouseEvent) => {
            handlers?.onMouseEnter?.(data, event)
            if (modifiers?.onMouseEnter) {
                setComponentStyle(merge(cloneProps(style, false), modifiers.onMouseEnter))
            }
        },
        [data, handlers, style, modifiers, setComponentStyle]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            handlers?.onMouseMove?.(data, event)
            if (modifiers?.onMouseMove) {
                setComponentStyle(merge(cloneProps(style, false), modifiers.onMouseMove))
            }
        },
        [data, handlers, style, modifiers, setComponentStyle]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            handlers?.onMouseLeave?.(data, event)
            if (modifiers?.onMouseLeave) {
                setComponentStyle(merge(cloneProps(style, false), modifiers.onMouseLeave))
                // setKey forces the component to repaint
                // (without this, React can skip painting and the modifiers may not appear)
                setKey(key => key + 1)
            }
        },
        [data, handlers, style, modifiers, setComponentStyle, setKey]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            handlers?.onClick?.(data, event)
            if (modifiers?.onClick) {
                setComponentStyle(merge(cloneProps(style, false), modifiers.onClick))
            }
        },
        [data, handlers, style, modifiers, setComponentStyle]
    )

    return createElement(component, {
        ...props,
        key,
        style: componentStyle,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
    })
}

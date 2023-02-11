import { createElement, MouseEvent, useCallback, useState } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { CssProps, SvgElementVariantProps, useDimensions, WithId } from '../general'
import { useTooltip } from '../tooltips'
import { clone, merge } from 'lodash'

export const TooltipDataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    handlers,
    modifiers,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    const { setData: setTooltipData } = useTooltip()
    const { ref } = useDimensions()
    const [componentStyle, setComponentStyle] = useState<CssProps | undefined>(props.style)
    const [key, setKey] = useState(0)
    const style = props.style

    const handleTooltip = useCallback(
        (event: MouseEvent) => {
            const clientRect = ref?.current?.getBoundingClientRect()
            if (clientRect === undefined || data === undefined || data === null) return
            const x = Math.round(event.clientX - clientRect?.x)
            const y = Math.round(event.clientY - clientRect?.y)
            setTooltipData({ x, y, data: [data] })
        },
        [data]
    )

    const handleMouseEnter = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            handlers?.onMouseEnter?.(data, event)
            if (modifiers?.onMouseEnter) {
                setComponentStyle(merge(clone(style), modifiers.onMouseEnter))
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            handlers?.onMouseMove?.(data, event)
            if (modifiers?.onMouseMove) {
                setComponentStyle(merge(clone(style), modifiers.onMouseMove))
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            setTooltipData({})
            handlers?.onMouseLeave?.(data, event)
            if (modifiers?.onMouseLeave) {
                setComponentStyle(merge(clone(style), modifiers.onMouseLeave))
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            handlers?.onClick?.(data, event)
            if (modifiers?.onClick) {
                setComponentStyle(merge(clone(style), modifiers.onClick))
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers]
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

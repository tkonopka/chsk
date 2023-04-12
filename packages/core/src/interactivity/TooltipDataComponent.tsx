import { createElement, MouseEvent, useCallback, useState } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { CssProps, SvgElementVariantProps, useDimensions, WithId } from '../general'
import { useTooltip } from '../tooltips'
import { clone, merge } from 'lodash'
import { getEventXY } from './utils'

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
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined || data === undefined || data === null) return
            setTooltipData({ x, y, data: [data] })
        },
        [data, ref, setTooltipData]
    )

    const handleMouseEnter = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            handlers?.onMouseEnter?.(data, event)
            if (modifiers?.onMouseEnter) {
                setComponentStyle(merge(clone(style), modifiers.onMouseEnter))
            }
        },
        [data, handleTooltip, handlers, modifiers, style, setComponentStyle]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            handlers?.onMouseMove?.(data, event)
            if (modifiers?.onMouseMove) {
                setComponentStyle(merge(clone(style), modifiers.onMouseMove))
            }
        },
        [data, handleTooltip, handlers, modifiers, style, setComponentStyle]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            setTooltipData({})
            handlers?.onMouseLeave?.(data, event)
            if (modifiers?.onMouseLeave) {
                setComponentStyle(merge(clone(style), modifiers.onMouseLeave))
                // setKey forces the component to repaint
                // (without setKey, React can skip painting and the modifiers may not appear)
                setKey(key => key + 1)
            }
        },
        [data, setTooltipData, handlers, modifiers, style, setComponentStyle, setKey]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            handlers?.onClick?.(data, event)
            if (modifiers?.onClick) {
                setComponentStyle(merge(clone(style), modifiers.onClick))
            }
        },
        [data, handlers, modifiers, style, setComponentStyle]
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

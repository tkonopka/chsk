import { createElement, MouseEvent, useCallback } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { SvgElementVariantProps, useDimensions, WithId } from '../general'
import { useTooltip } from '../tooltips'

export const TooltipDataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onClick,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    const { setData: setTooltipData } = useTooltip()
    const { ref } = useDimensions()

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
            onMouseEnter?.(data, event)
        },
        [data, onMouseEnter]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            onMouseMove?.(data, event)
        },
        [data, onMouseMove]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            setTooltipData({})
            onMouseLeave?.(data, event)
        },
        [data, onMouseLeave]
    )
    const handleClick = useCallback((event: MouseEvent) => onClick?.(data, event), [data, onClick])

    return createElement(component, {
        ...props,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
    })
}

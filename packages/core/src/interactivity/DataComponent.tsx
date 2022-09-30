import { createElement, MouseEvent, useCallback } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { SvgElementVariantProps } from '../general'

export const DataComponent = <
    DataSpec,
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
    const handleMouseEnter = useCallback(
        (event: MouseEvent) => onMouseEnter?.(data, event),
        [data, props]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => onMouseMove?.(data, event),
        [data, props]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => onMouseLeave?.(data, event),
        [data, props]
    )
    const handleClick = useCallback((event: MouseEvent) => onClick?.(data, event), [data, props])

    return createElement(component, {
        ...props,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
    })
}

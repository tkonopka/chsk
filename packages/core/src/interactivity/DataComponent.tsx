import { createElement, MouseEvent, useCallback } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { SvgElementVariantProps, WithId } from '../general'

export const DataComponent = <
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
    const handleMouseEnter = useCallback(
        (event: MouseEvent) => onMouseEnter?.(data, event),
        [data, onMouseEnter]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => onMouseMove?.(data, event),
        [data, onMouseMove]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => onMouseLeave?.(data, event),
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

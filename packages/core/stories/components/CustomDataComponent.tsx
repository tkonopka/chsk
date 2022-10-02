import { createElement, MouseEvent, useCallback } from 'react'
import { DataComponentProps, InteractivityProps, useChartData } from '../../src'
import { SvgElementVariantProps } from '../../src'

export const CustomDataComponent = <
    DataSpec extends { id?: string },
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
    const { data: chartData, setData: setChartData } = useChartData()

    const activeId: unknown = chartData.activeId ?? null
    const clickedIds: Set<string> = (chartData.clickedIds as Set<string>) ?? new Set<string>()

    const id = data?.id ?? ''
    const clicked = data && clickedIds.has(id)
    const active = data && activeId === id
    if (active || clicked) {
        props.style = {
            ...props.style,
            stroke: '#222222',
            strokeWidth: clicked && !active ? 2 : 3,
        }
    } else {
        props.style = {
            ...props.style,
            stroke: props?.style?.fill ?? undefined,
            strokeWidth: 2,
        }
    }

    const handleMouseEnter = useCallback(
        (event: MouseEvent) => {
            setChartData({ ...chartData, activeId: data?.id })
            onMouseEnter?.(data, event)
        },
        [data, onMouseEnter, chartData]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => onMouseMove?.(data, event),
        [data, onMouseMove]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            setChartData({ ...chartData, activeId: null })
            onMouseLeave?.(data, event)
        },
        [data, onMouseLeave, chartData]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (clickedIds.has(id)) {
                clickedIds.delete(id)
            } else {
                clickedIds.add(id)
            }
            setChartData({ ...chartData, clickedIds })
            onClick?.(data, event)
        },
        [data, onClick, chartData]
    )

    return createElement(component, {
        key: 'custom-data-component-' + active,
        ...props,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
    })
}

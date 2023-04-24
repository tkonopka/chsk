import { createElement, MouseEvent, useCallback } from 'react'
import { WithId, DataComponentProps, InteractivityProps, useChartData } from '../../../src'
import { SvgElementVariantProps } from '../../../src'

export const CustomDataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    handlers,
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
            if (!setChartData) return
            setChartData({ ...chartData, activeId: data?.id })
            handlers?.onMouseEnter?.(data, event)
        },
        [data, handlers, chartData]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => handlers?.onMouseMove?.(data, event),
        [data, handlers]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            if (!setChartData) return
            setChartData({ ...chartData, activeId: null })
            handlers?.onMouseLeave?.(data, event)
        },
        [data, handlers, chartData]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (!setChartData) return
            if (clickedIds.has(id)) {
                clickedIds.delete(id)
            } else {
                clickedIds.add(id)
            }
            setChartData({ ...chartData, clickedIds })
            handlers?.onClick?.(data, event)
        },
        [data, handlers, chartData]
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

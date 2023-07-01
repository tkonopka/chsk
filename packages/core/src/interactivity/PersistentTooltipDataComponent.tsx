import { createElement, MouseEvent, useCallback, useState } from 'react'
import { DataComponentProps, DataInteractivityModifiers, InteractivityProps } from './types'
import { CssProps, SvgElementVariantProps, useDimensions, WithId } from '../general'
import { useTooltip } from '../tooltips'
import { getEventXY } from './utils'

export const PersistentTooltipDataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    handlers,
    modifiers,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    const { data: tooltipData, setData: setTooltipData } = useTooltip()
    const { ref } = useDimensions()
    const [componentStyle, setComponentStyle] = useState<CssProps | undefined>(props.style)
    const [key, setKey] = useState(0)
    const style = props.style

    const handleTooltip = useCallback(
        (event: MouseEvent, style?: CssProps, modifiers?: DataInteractivityModifiers) => {
            const { x, y } = getEventXY(event, ref)
            if (x === undefined || y === undefined || data === undefined || data === null) return
            if (data === tooltipData?.data?.[0]) {
                setTooltipData({})
                if (modifiers?.onMouseLeave) {
                    setComponentStyle({ ...style, ...modifiers.onMouseLeave })
                }
            } else {
                setTooltipData({ x, y, data: [data] })
                if (modifiers?.onMouseEnter) {
                    setComponentStyle({ ...style, ...modifiers.onMouseEnter })
                }
            }
        },
        [data, ref, tooltipData, setTooltipData, setComponentStyle]
    )

    const handleClick = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event, style, modifiers)
            handlers?.onClick?.(data, event)
            if (modifiers?.onClick) {
                setComponentStyle({ ...style, ...modifiers.onClick })
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers, style, setComponentStyle, setTooltipData, tooltipData]
    )

    return createElement(component, {
        ...props,
        key,
        style: componentStyle,
        ...handlers,
        onClick: handleClick,
    })
}

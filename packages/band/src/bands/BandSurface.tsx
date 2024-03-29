import { createElement, useCallback, useState, MouseEvent } from 'react'
import {
    BandAxisScale,
    useIdsKeys,
    useDimensions,
    useScales,
    X,
    Y,
    useProcessedData,
    RecordWithId,
    Rectangle,
    DataComponent,
    WithId,
    useTooltip,
} from '@chsk/core'
import { BandSurfaceProps } from './types'

export const BandSurface = ({
    variant = 'step',
    ids,
    expansion = [0, 0],
    interactive = false,
    tooltip = false,
    component = Rectangle,
    componentProps,
    dataComponent = DataComponent,
    handlers,
    modifiers,
    className,
    setRole = true,
    style,
}: BandSurfaceProps) => {
    const processedData = useProcessedData()
    const { size } = useDimensions()
    const { scales } = useScales()
    const { data: tooltipData } = useTooltip()
    const [active, setActive] = useState<string | undefined>(undefined)

    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const surfaceWidth = variant === 'step' ? indexScale.step() : indexScale.bandwidth()
    const valueSize = horizontal ? size[X] : size[Y]
    const expandedSize = valueSize + expansion[0] + expansion[1]
    const height = horizontal ? surfaceWidth : expandedSize
    const width = horizontal ? expandedSize : surfaceWidth
    const { idSet } = useIdsKeys(ids, null, processedData)

    const tooltipId = tooltipData?.data?.[0]?.id
    const onMouseEnter = useCallback(
        (data: WithId | undefined, event: MouseEvent) => {
            handlers?.onMouseEnter?.(data, event)
            setActive(data?.id)
        },
        [handlers, setActive]
    )
    const onMouseLeave = useCallback(
        (data: WithId | undefined, event: MouseEvent) => {
            handlers?.onMouseLeave?.(data, event)
            setActive(undefined)
        },
        [handlers, setActive]
    )
    const compositeHandlers = interactive ? { ...handlers, onMouseEnter, onMouseLeave } : handlers

    const keyPrefix = 'band-'
    const surfaceProps = {
        variant: 'band-surface',
        setRole: false,
        ...componentProps,
        width,
        height,
        className,
        style,
    }
    const bands = processedData.data
        .map((seriesData: RecordWithId, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            const indexPos = indexScale(seriesData.id)
            const x = horizontal ? -expansion[0] : indexPos - surfaceWidth / 2
            const y = horizontal ? indexPos - surfaceWidth / 2 : -expansion[0]
            const tooltipOpacity = tooltip ? tooltipId === seriesData.id : false
            const interactiveOpacity = interactive ? seriesData.id === active : false
            const fixedOpacity = !tooltip && !interactive
            return createElement(dataComponent, {
                key: keyPrefix + j,
                component,
                data: { id: seriesData.id },
                props: {
                    ...surfaceProps,
                    x,
                    y,
                    opacity: +(fixedOpacity || interactiveOpacity || tooltipOpacity),
                },
                handlers: compositeHandlers,
                modifiers,
            })
        })
        .filter(Boolean)

    if (bands.length === 0) return null
    return <g role={setRole ? 'band-surface' : undefined}>{bands}</g>
}

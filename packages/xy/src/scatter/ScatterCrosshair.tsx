import { MouseEvent, useCallback, useRef, useState } from 'react'
import { debounce } from 'lodash'
import {
    Circle,
    ContinuousAxisScale,
    NumericPositionSpec,
    OpacityMotion,
    SimpleDataComponent,
    useDimensions,
    useDisabledKeys,
    useProcessedData,
    useScales,
    X,
    Y,
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
    FourSideSizeSpec,
    CssProps,
    useRawData,
    useTooltip,
} from '@chsk/core'
import { ScatterCrosshairProps, ScatterInteractiveDataItem } from './types'
import { useScatterPreparedData } from './context'
import { isScatterData, isScatterProcessedData } from './predicates'
import { useSymbolData, useTargets, distanceXY, distanceX, distanceY } from './helpers'
import { defaultScatterTooltipFormat } from './defaults'
import { createActiveSymbol, createCrosshairLines } from './overlays'

export const ScatterCrosshair = ({
    variant = 'xy',
    expansion,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    minDistance,
    tooltipFormat = defaultScatterTooltipFormat,
    visible,
    className,
    style,
    setRole = true,
    dataComponent = SimpleDataComponent,
    ...props
}: ScatterCrosshairProps) => {
    const originalData = useRawData().data
    const processedData = useProcessedData().data
    const preparedData = useScatterPreparedData()
    const { size } = useDimensions()
    const { scales } = useScales()
    const { disabledKeys } = useDisabledKeys()
    const detectorRef = useRef<SVGRectElement>(null)
    const [activeData, setActiveData] = useState<ScatterInteractiveDataItem | undefined>(undefined)
    const { setData: setTooltipData } = useTooltip()
    const [detectorStyle, setDetectorStyle] = useState<CssProps>({})
    if (!isScatterProcessedData(processedData)) return null
    if (!isScatterData(originalData)) return null

    // extension of detector rectangle
    const padding: FourSideSizeSpec = expansion ? expansion : [0, 0, 0, 0]

    const symbolData = useSymbolData(processedData, preparedData)
    const targets = useTargets(preparedData, disabledKeys)

    const handleClick = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onClick?.(activeData, event)
        },
        [activeData, props]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onMouseLeave?.(activeData, event)
            setActiveData(undefined)
            setTooltipData({})
            setDetectorStyle(props.modifiers?.onMouseLeave ?? {})
        },
        [setActiveData, setTooltipData]
    )

    const criterion = variant === 'xy' ? distanceXY : variant === 'x' ? distanceX : distanceY
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!detectorRef || !detectorRef.current) return
            const { x, y } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [
                event.clientX - x - padding[LEFT],
                event.clientY - y - padding[TOP],
            ]
            const values = targets.map(target => criterion(target, mouse))
            const hit = values.reduce(
                (result, x, i) => (x < result[0] ? [x, i] : result),
                [values[0], 0]
            )
            if (minDistance && hit[0] > minDistance) {
                handleMouseLeave(event)
                return
            }
            const target = targets[hit[1] ?? 0]
            const seriesIndex = target[2]
            const seriesData = processedData[seriesIndex]
            const index = target[3]
            if (activeData) {
                if (activeData.id === seriesData.id && activeData.index === index) {
                    return
                }
            }
            const data = {
                ...symbolData[seriesIndex][index],
                key: seriesData.id,
                original: originalData[seriesIndex].data[index],
            }
            const newActiveData = { ...data, label: tooltipFormat(data) }
            setActiveData(newActiveData)
            setTooltipData({
                x: target[0],
                y: target[1],
                title: newActiveData.id,
                data: [newActiveData],
            })
            setDetectorStyle(props.modifiers?.onMouseEnter ?? {})
            props.handlers?.onMouseEnter?.(data, event)
        },
        [activeData, setActiveData, setTooltipData, targets, processedData]
    )
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10, { leading: true })

    const detector = (
        <rect
            ref={detectorRef}
            role={setRole ? 'crosshair-detector' : undefined}
            x={-padding[LEFT]}
            y={-padding[TOP]}
            width={size[X] + padding[LEFT] + padding[RIGHT]}
            height={size[Y] + padding[TOP] + padding[BOTTOM]}
            style={{ ...detectorStyle, opacity: 0.0 }}
            onMouseMove={debouncedHandleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        />
    )

    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const coordinates: [number, number] =
        activeData !== undefined && activeData.point !== undefined
            ? [xScale(activeData.point[X]), yScale(activeData.point[Y])]
            : [NaN, NaN]
    const seriesIndex = preparedData.seriesIndexes[activeData?.id ?? '']
    const activeSymbol = createActiveSymbol({
        activeData,
        coordinates,
        scales,
        seriesIndex,
        dataComponent,
        symbol,
        symbolStyle,
        symbolClassName,
        setRole,
    })
    const lines = createCrosshairLines({
        visible: visible ?? [true, true],
        size,
        coordinates,
        style,
        className,
        setRole,
    })

    return (
        <g role={setRole ? 'scatter-crosshair' : undefined}>
            <OpacityMotion
                key={'crosshair'}
                role={setRole ? 'crosshair-presence' : undefined}
                visible={activeData !== undefined}
                firstRender={false}
            >
                {lines}
                {activeSymbol}
            </OpacityMotion>
            {detector}
        </g>
    )
}

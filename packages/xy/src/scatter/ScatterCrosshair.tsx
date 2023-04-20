import { createElement, MouseEvent, useCallback, useRef, useState } from 'react'
import { debounce } from 'lodash'
import {
    addColor,
    Circle,
    ContinuousAxisScale,
    Line,
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
    SizeSpec,
    CssProps,
    useRawData,
    useTooltip,
    NumericAxisScale,
    Scales,
} from '@chsk/core'
import { ScatterCrosshairProps, ScatterCrosshairVariant, ScatterInteractiveDataItem } from './types'
import { useScatterPreparedData } from './context'
import { isScatterData, isScatterProcessedData } from './predicates'
import { useSymbolData, useTargets, distanceSquared } from './helpers'
import { defaultScatterTooltipFormat } from './defaults'

const createCrosshairLines = ({
    variant = 'default',
    coordinates,
    size,
    style,
    setRole,
    className,
}: {
    variant: ScatterCrosshairVariant
    coordinates: [number, number]
    size: SizeSpec
    style?: CssProps
    setRole?: boolean
    className?: string
}) => {
    if (coordinates === undefined) return null
    return (
        <>
            {variant === 'default' || variant === 'vertical' ? (
                <Line
                    key={'vertical'}
                    variant={'crosshair'}
                    x1={coordinates[X]}
                    x2={coordinates[X]}
                    y1={0}
                    y2={size[Y]}
                    style={style}
                    className={className}
                    setRole={setRole}
                />
            ) : null}
            {variant === 'default' || variant === 'horizontal' ? (
                <Line
                    key={'horizontal'}
                    variant={'crosshair'}
                    x1={0}
                    x2={size[X]}
                    y1={coordinates[Y]}
                    y2={coordinates[Y]}
                    style={style}
                    className={className}
                    setRole={setRole}
                />
            ) : null}
        </>
    )
}

const createActiveSymbol = ({
    activeData,
    coordinates,
    scales,
    seriesIndex,
    dataComponent = SimpleDataComponent,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    setRole,
}: Pick<
    ScatterCrosshairProps,
    'symbol' | 'dataComponent' | 'symbolStyle' | 'symbolClassName' | 'setRole'
> & {
    activeData?: ScatterInteractiveDataItem
    coordinates: NumericPositionSpec
    scales: Scales
    seriesIndex: number
}) => {
    if (activeData === undefined || activeData.point === undefined) return null
    const scaleSize = scales.size as NumericAxisScale
    return createElement(dataComponent, {
        key: 'active-' + seriesIndex + '-' + activeData.index,
        component: symbol,
        props: {
            variant: 'active',
            cx: coordinates[X],
            cy: coordinates[Y],
            r: scaleSize(activeData.size ?? 0),
            className: symbolClassName,
            style: addColor(symbolStyle, scales.color(seriesIndex)),
            setRole,
        },
    })
}

export const ScatterCrosshair = ({
    variant,
    expansion,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    minDistance,
    tooltipFormat = defaultScatterTooltipFormat,
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
            console.log('handleClick with activeData ' + JSON.stringify(activeData))
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

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!detectorRef || !detectorRef.current) return
            const { x, y } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [
                event.clientX - x - padding[LEFT],
                event.clientY - y - padding[TOP],
            ]
            const distances = targets.map(target => distanceSquared(target, mouse))
            const hit = distances.reduce(
                (result, x, i) => (x < result[0] ? [x, i] : result),
                [distances[0], 0]
            )
            const hitDistance = Math.sqrt(hit[0])
            if (minDistance && hitDistance > minDistance) {
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
        variant: variant ?? 'default',
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

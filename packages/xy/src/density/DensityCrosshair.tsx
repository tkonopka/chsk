import { MouseEvent, useCallback, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import {
    Square,
    NumericPositionSpec,
    OpacityMotion,
    SimpleDataComponent,
    useDimensions,
    X,
    Y,
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
    FourSideSizeSpec,
    CssProps,
    useTooltip,
} from '@chsk/core'
import {
    DENSITY_COLOR,
    DENSITY_COUNT,
    DensityCrosshairProps,
    DensityInteractiveDataItem,
} from './types'
import { useDensityPreparedData } from './context'
import { distanceXY, distanceX, distanceY } from '../scatter/helpers'
import { defaultDensityTooltipFormat } from './defaults'
import { createCrosshairLines } from '../scatter/overlays'
import { createDensitySymbol } from './overlays'

export const DensityCrosshair = ({
    variant = 'xy',
    expansion,
    symbol = Square,
    symbolR,
    symbolStyle,
    symbolClassName,
    minDistance,
    tooltipFormat = defaultDensityTooltipFormat,
    visible,
    className,
    style,
    setRole = true,
    dataComponent = SimpleDataComponent,
    ...props
}: DensityCrosshairProps) => {
    const preparedData = useDensityPreparedData()
    const { size } = useDimensions()
    const detectorRef = useRef<SVGRectElement>(null)
    const [activeData, setActiveData] = useState<DensityInteractiveDataItem | undefined>(undefined)
    const { setData: setTooltipData } = useTooltip()
    const [detectorStyle, setDetectorStyle] = useState<CssProps>({})
    const binSize = preparedData.binSize
    const padding: FourSideSizeSpec = expansion ? expansion : [binSize, binSize, binSize, binSize]

    const handleClick = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onClick?.(activeData, event)
        },
        [activeData, props.handlers]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            props.handlers?.onMouseLeave?.(activeData, event)
            setActiveData(undefined)
            setTooltipData({})
            setDetectorStyle(props.modifiers?.onMouseLeave ?? {})
        },
        [setActiveData, setTooltipData, props.handlers]
    )

    const targets = preparedData.data
    const criterion = variant === 'xy' ? distanceXY : variant === 'x' ? distanceX : distanceY
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!detectorRef || !detectorRef.current) return
            const { x, y } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [
                event.clientX - x - padding[LEFT],
                event.clientY - y - padding[TOP],
            ]
            const mouseBins: NumericPositionSpec = [mouse[X] / binSize, mouse[Y] / binSize]
            const values = targets.map(target => criterion(target, mouseBins))
            const hit = values.reduce(
                (result, x, i) => (x < result[0] ? [x, i] : result),
                [values[0], 0]
            )
            if (minDistance && hit[0] > minDistance / binSize) {
                handleMouseLeave(event)
                return
            }
            const target = targets[hit[1] ?? 0]
            if (activeData) {
                if (activeData.bins[X] == target[X] && activeData.bins[Y] === target[Y]) {
                    return
                }
            }
            const data = {
                id: target[X] + ',' + target[Y], // this affects the key field in tooltips
                bins: [target[X], target[Y]] as NumericPositionSpec,
                data: target,
                count: target[DENSITY_COUNT],
                color: target[DENSITY_COLOR],
            }
            const newActiveData = { ...data, label: tooltipFormat(data) }
            setActiveData(newActiveData)
            setTooltipData({
                x: target[0] * binSize,
                y: target[1] * binSize,
                title: JSON.stringify(newActiveData.bins),
                data: [newActiveData],
            })
            setDetectorStyle(props.modifiers?.onMouseEnter ?? {})
            props.handlers?.onMouseEnter?.(data, event)
        },
        [activeData, setActiveData, setTooltipData, targets]
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

    const coordinates: [number, number] =
        activeData !== undefined
            ? [activeData.bins[X] * binSize, activeData.bins[Y] * binSize]
            : [NaN, NaN]
    const activeSymbol = createDensitySymbol({
        activeData,
        coordinates,
        dataComponent,
        symbol,
        symbolR: symbolR ?? binSize / 2,
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
        <g role={setRole ? 'density-crosshair' : undefined}>
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

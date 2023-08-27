import { MouseEvent, useCallback, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import {
    mean,
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
    useScales,
    isCategoricalColorScale,
    ColorScale,
    TooltipDataItem,
} from '@chsk/core'
import {
    DENSITY_COLOR,
    DENSITY_CONTENT,
    DENSITY_COUNT,
    DensityCrosshairProps,
    DensityInteractiveDataItem,
    DensityPreparedDataItem,
} from './types'
import { useDensityPreparedData } from './context'
import { distanceXY, distanceX, distanceY } from '../scatter/helpers'
import { createCrosshairLines } from '../scatter/overlays'
import { createDensitySymbol } from './overlays'

const createInteractiveDataItem = (
    target: DensityPreparedDataItem
): DensityInteractiveDataItem => ({
    id: target[X] + ',' + target[Y], // this affects the key field in tooltips
    bins: [target[X], target[Y]] as NumericPositionSpec,
    data: target,
    count: target[DENSITY_COUNT],
    color: target[DENSITY_COLOR],
})

const createTooltipDataItems = (
    item: DensityInteractiveDataItem,
    scale: ColorScale
): TooltipDataItem[] => {
    const values = item.data[DENSITY_CONTENT]
    if (!isCategoricalColorScale(scale)) {
        return [
            { id: item.id, label: 'count ' + item.count, color: item.color, data: mean(values) },
        ]
    }
    const counts: Record<string, number> = {}
    values.map(v => {
        const s = String(v)
        if (!(s in counts)) {
            counts[s] = 0
        }
        counts[s] += 1
    })
    const result: TooltipDataItem[] = []
    const domain: string[] = scale.domain().map(String)
    for (const [k, v] of Object.entries(counts)) {
        result.push({
            id: String(domain[Number(k)]),
            color: scale(Number(k)),
            label: domain[Number(k)] + ': ' + v,
            data: v,
        })
    }
    return result
}

export const DensityCrosshair = ({
    variant = 'xy',
    expansion,
    symbol = Square,
    symbolR,
    symbolStyle,
    symbolClassName,
    minDistance,
    visible,
    className,
    style,
    setRole = true,
    dataComponent = SimpleDataComponent,
    ...props
}: DensityCrosshairProps) => {
    const preparedData = useDensityPreparedData()
    const { scales } = useScales()
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

    const targets: DensityPreparedDataItem[] = preparedData.data
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
            type pair = [number, number]
            const hit = values.reduce((result, x, i) => (x < result[0] ? [x, i] : result) as pair, [
                values[0],
                0,
            ] as pair)
            if (minDistance && hit[0] > minDistance / binSize) {
                handleMouseLeave(event)
                return
            }
            const target = targets[hit[1] ?? 0]
            if (!target) return
            if (activeData) {
                if (activeData.bins[X] == target[X] && activeData.bins[Y] === target[Y]) {
                    return
                }
            }
            const newActiveData = createInteractiveDataItem(target)
            setActiveData(newActiveData)
            setTooltipData({
                x: target[0] * binSize,
                y: target[1] * binSize,
                title: newActiveData.bins[X] + ', ' + newActiveData.bins[Y],
                data: createTooltipDataItems(newActiveData, scales.color),
            })
            setDetectorStyle(props.modifiers?.onMouseEnter ?? {})
            props.handlers?.onMouseEnter?.(newActiveData, event)
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

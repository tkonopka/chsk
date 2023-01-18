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
} from '@chsk/core'
import { ScatterCrosshairProps, ScatterInteractiveDataItem } from './types'
import { useScatterPreparedData } from './context'
import { isScatterProcessedData } from './predicates'
import { createElement, MouseEvent, useCallback, useMemo, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { getSymbolData } from './helpers'

// two coordinates, series index, point index
type targetData = [number, number, number, number]

const distanceSquared = (a: number[], b: number[]) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2

export const ScatterCrosshair = ({
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    minDistance,
    className,
    style,
    setRole,
    dataComponent = SimpleDataComponent,
    ...props
}: ScatterCrosshairProps) => {
    const processedData = useProcessedData().data
    const preparedData = useScatterPreparedData()
    const dimensions = useDimensions()
    const scales = useScales()
    const { disabledKeys } = useDisabledKeys()
    const detectorRef = useRef<SVGRectElement>(null)
    const [activeData, setActiveData] = useState<ScatterInteractiveDataItem | undefined>(undefined)
    if (!isScatterProcessedData(processedData)) return null

    // extension of detector rectangle
    const padding = minDistance ? minDistance : 0

    const symbolData = getSymbolData(processedData, preparedData)
    const targets = useMemo(() => {
        const result: targetData[] = []
        preparedData.keys.forEach(id => {
            if (disabledKeys.has(id)) return
            const seriesIndex = preparedData.seriesIndexes[id]
            if (seriesIndex === undefined) return
            const data = preparedData.data[seriesIndex]
            data.r.forEach((r: number, index: number) => {
                result.push([data.x[index], data.y[index], seriesIndex, index])
            })
        })
        return result
    }, [preparedData, disabledKeys])

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!detectorRef || !detectorRef.current) return
            const { x, y } = detectorRef.current.getBoundingClientRect()
            const mouse: NumericPositionSpec = [
                event.clientX - x - padding,
                event.clientY - y - padding,
            ]
            const distances = targets.map(target => distanceSquared(target, mouse))
            const hit = distances.reduce(
                (result, x, i) => (x < result[0] ? [x, i] : result),
                [distances[0], 0]
            )
            const hitDistance = Math.sqrt(hit[0])
            if (minDistance && hitDistance > minDistance) {
                setActiveData(undefined)
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
            const data = symbolData[seriesIndex][index]
            setActiveData(data)
            props.onMouseEnter?.(data, event)
        },
        [activeData, setActiveData, targets, processedData]
    )
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10, { leading: true })

    const handleMouseLeave = useCallback(() => {
        setActiveData(undefined)
    }, [setActiveData])

    const detector = (
        <rect
            ref={detectorRef}
            role={setRole ? 'crosshair-detector' : undefined}
            x={-padding}
            y={-padding}
            width={dimensions.innerSize[X] + 2 * padding}
            height={dimensions.innerSize[Y] + 2 * padding}
            style={{ opacity: 0.0 }}
            onMouseMove={debouncedHandleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    )

    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const coordinates =
        activeData !== undefined && activeData.point !== undefined
            ? [xScale(activeData.point[X]), yScale(activeData.point[Y])]
            : [NaN, NaN]
    const seriesIndex = preparedData.seriesIndexes[activeData?.id ?? '']
    const pointIndex = activeData?.index ?? 0
    const activeSymbol =
        activeData !== undefined && activeData.point !== undefined
            ? createElement(dataComponent, {
                  key: 'active-' + seriesIndex + '-' + activeData.index,
                  component: symbol,
                  props: {
                      variant: 'active',
                      cx: coordinates[X],
                      cy: coordinates[Y],
                      r: activeData.size,
                      className: symbolClassName,
                      style: addColor(symbolStyle, scales.color(seriesIndex)),
                      setRole: true,
                  },
              })
            : null

    return (
        <g role={'scatter-crosshair'}>
            <OpacityMotion
                key={'crosshair-lines'}
                role={'crosshair-lines'}
                visible={activeData !== undefined}
                firstRender={false}
            >
                {coordinates !== undefined ? (
                    <>
                        <Line
                            key={'vertical'}
                            variant={'crosshair'}
                            x1={coordinates[X]}
                            x2={coordinates[X]}
                            y1={0}
                            y2={dimensions.innerSize[Y]}
                            style={style}
                            className={className}
                            setRole={setRole}
                        />
                        <Line
                            key={'horizontal'}
                            variant={'crosshair'}
                            x1={0}
                            x2={dimensions.innerSize[X]}
                            y1={coordinates[Y]}
                            y2={coordinates[Y]}
                            style={style}
                            className={className}
                            setRole={setRole}
                        />
                    </>
                ) : null}
            </OpacityMotion>
            <OpacityMotion
                key={'active-symbol-' + seriesIndex + '-' + pointIndex}
                role={'active-symbol'}
                visible={activeData !== undefined}
                firstRender={false}
            >
                {activeSymbol}
            </OpacityMotion>
            {detector}
        </g>
    )
}

import { useRef, MouseEvent } from 'react'
import {
    Circle,
    useDimensions,
    NumericPositionSpec,
    useScales,
    X,
    Y,
    useTooltip,
} from '../../../src'

export const DetectorWithTooltip = () => {
    const { setData: setTooltipData } = useTooltip()
    const detectorRef = useRef<SVGRectElement>(null)
    const size = useDimensions().innerSize

    const handleMouseMove = (event: MouseEvent) => {
        if (!detectorRef || !detectorRef.current) return
        const { x, y } = detectorRef.current.getBoundingClientRect()
        const pos = [
            Math.round(event.clientX - x),
            Math.round(event.clientY - y),
        ] as NumericPositionSpec
        setTooltipData({ x: pos[X], y: pos[Y] })
    }
    const handleMouseLeave = () => {
        setTooltipData({})
    }

    return (
        <rect
            ref={detectorRef}
            x={0}
            y={0}
            width={size[X]}
            height={size[Y]}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: 0 }}
        />
    )
}

export const ShapesWithTooltip = () => {
    const { setData: setTooltipData } = useTooltip()
    const colorScale = useScales().color
    const detectorRef = useRef<SVGRectElement>(null)
    const size = useDimensions().innerSize

    const keys = ['alpha', 'beta', 'gamma']
    const handleMouseMove = (event: MouseEvent, indexes: number[]) => {
        if (!detectorRef || !detectorRef.current) return
        const { x, y } = detectorRef.current.getBoundingClientRect()
        const pos = [
            Math.round(event.clientX - x),
            Math.round(event.clientY - y),
        ] as NumericPositionSpec
        setTooltipData({
            x: pos[X],
            y: pos[Y],
            data: indexes.map(i => ({ id: 'X', key: keys[i], label: keys[i] })),
        })
    }
    const handleMouseLeave = () => {
        // commented to let tooltip stay visible for dev & stories
        // in real-life apps, mouse leave events usually make tooltips disappear
        // setPosition(null)
    }

    return (
        <>
            <rect
                ref={detectorRef}
                x={0}
                y={0}
                width={size[X]}
                height={size[Y]}
                style={{ opacity: 0 }}
            />
            <Circle
                cx={80}
                cy={50}
                r={25}
                style={{ fill: colorScale(0) }}
                onMouseMove={(event: MouseEvent) => handleMouseMove(event, [0])}
                onMouseLeave={handleMouseLeave}
            />
            <Circle
                cx={80}
                cy={110}
                r={25}
                style={{ fill: colorScale(1) }}
                onMouseMove={(event: MouseEvent) => handleMouseMove(event, [1])}
                onMouseLeave={handleMouseLeave}
            />
            <Circle
                cx={80}
                cy={170}
                r={25}
                style={{ fill: colorScale(2) }}
                onMouseMove={(event: MouseEvent) => handleMouseMove(event, [2])}
                onMouseLeave={handleMouseLeave}
            />
            <Circle
                cx={200}
                cy={110}
                r={25}
                style={{ fill: '#444444' }}
                onMouseMove={(event: MouseEvent) => handleMouseMove(event, [0, 1, 2])}
                onMouseLeave={handleMouseLeave}
            />
        </>
    )
}

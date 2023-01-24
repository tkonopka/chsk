import { ReactNode, useRef, useState, MouseEvent } from 'react'
import {
    Circle,
    useDimensions,
    NumericPositionSpec,
    useScales,
    X,
    Y,
    TooltipDataItem,
} from '../../src'
import { TooltipProvider } from '../../src'

export const DetectorWithTooltip = ({ children }: { children: ReactNode }) => {
    const detectorRef = useRef<SVGRectElement>(null)
    const [position, setPosition] = useState<NumericPositionSpec | null>(null)
    const size = useDimensions().innerSize

    const handleMouseMove = (event: MouseEvent) => {
        if (!detectorRef || !detectorRef.current) return
        const { x, y } = detectorRef.current.getBoundingClientRect()
        const pos = [
            Math.round(event.clientX - x),
            Math.round(event.clientY - y),
        ] as NumericPositionSpec
        setPosition(pos)
    }
    const handleMouseLeave = () => {
        setPosition(null)
    }

    return (
        <>
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
            <TooltipProvider
                tooltip={{ x: position?.[X] ?? undefined, y: position?.[Y] ?? undefined }}
            >
                {children}
            </TooltipProvider>
        </>
    )
}

export const ShapesWithTooltip = ({ children }: { children?: ReactNode }) => {
    const colorScale = useScales().color
    const detectorRef = useRef<SVGRectElement>(null)
    const [position, setPosition] = useState<NumericPositionSpec | null>(null)
    const [data, setData] = useState<TooltipDataItem[]>([])
    const size = useDimensions().innerSize

    const keys = ['alpha', 'beta', 'gamma']
    const handleMouseMove = (event: MouseEvent, indexes: number[]) => {
        if (!detectorRef || !detectorRef.current) return
        const { x, y } = detectorRef.current.getBoundingClientRect()
        const pos = [
            Math.round(event.clientX - x),
            Math.round(event.clientY - y),
        ] as NumericPositionSpec
        setPosition(pos)
        setData(indexes.map(i => ({ id: 'X', key: keys[i], label: keys[i] })))
    }
    const handleMouseLeave = () => {
        //setPosition(null)
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
            <TooltipProvider
                tooltip={{ x: position?.[X] ?? undefined, y: position?.[Y] ?? undefined, data }}
            >
                {children}
            </TooltipProvider>
        </>
    )
}

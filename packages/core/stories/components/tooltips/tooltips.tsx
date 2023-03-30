import { MouseEvent } from 'react'
import { Circle, useDimensions, useScales, useTooltip, X, Y } from '../../../src'

export const DetectorWithTooltip = () => {
    const { setData: setTooltipData } = useTooltip()
    const { size, ref } = useDimensions()

    const handleMouseMove = (event: MouseEvent) => {
        const clientRect = ref?.current?.getBoundingClientRect()
        if (clientRect === undefined) return
        const x = Math.round(event.clientX - clientRect?.x)
        const y = Math.round(event.clientY - clientRect?.y)
        setTooltipData({ x, y })
    }
    const handleMouseLeave = () => {
        setTooltipData({})
    }

    return (
        <rect
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
    const colorScale = useScales().scales.color
    const { ref } = useDimensions()

    const keys = ['alpha', 'beta', 'gamma']
    const handleMouseMove = (event: MouseEvent, indexes: number[]) => {
        const clientRect = ref?.current?.getBoundingClientRect()
        if (clientRect === undefined) return
        const x = Math.round(event.clientX - clientRect?.x)
        const y = Math.round(event.clientY - clientRect?.y)
        setTooltipData({
            x,
            y,
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

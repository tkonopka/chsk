import { LineLabelProps } from './types'
import { getAbsolutePosition, Line, useDimensions, useScales, Text } from '@chask/core'

export const LineLabel = ({
    start,
    end,
    units = 'view',
    translate = [0, -8],
    align = 0.5,
    rotate = 0,
    expansion = [0, 0],
    markerStart,
    markerEnd,
    className,
    style,
    lineStyle,
    textStyle,
    setRole = true,
    children,
}: LineLabelProps) => {
    const dimensions = useDimensions()
    const scales = useScales()

    // coordinates for line segment
    const xExpansion = scales.scaleX.bandwidth() * expansion[0]
    const yExpansion = scales.scaleY.bandwidth() * expansion[1]
    let absStart = getAbsolutePosition(start, units, dimensions.innerSize, scales)
    let absEnd = getAbsolutePosition(end, units, dimensions.innerSize, scales)
    absStart = [absStart[0] - xExpansion, absStart[1] - yExpansion]
    absEnd = [absEnd[0] + xExpansion, absEnd[1] + yExpansion]

    // settings for text label
    const textPos = [
        absStart[0] + translate[0] + (absEnd[0] - absStart[0]) * align,
        absStart[1] + translate[1] + (absEnd[1] - absStart[1]) * align,
    ]
    const translation = 'translate(' + textPos[0] + ',' + textPos[1] + ')'
    const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    return (
        <g style={style} className={className} role={setRole ? 'interval-label' : undefined}>
            <Line
                variant={'interval-label'}
                x1={absStart[0]}
                y1={absStart[1]}
                x2={absEnd[0]}
                y2={absEnd[1]}
                markerStart={markerStart}
                markerEnd={markerEnd}
                className={className}
                style={lineStyle}
                setRole={setRole}
            />
            <Text
                variant={'interval-label'}
                transform={translation + rotation}
                className={className}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Text>
        </g>
    )
}

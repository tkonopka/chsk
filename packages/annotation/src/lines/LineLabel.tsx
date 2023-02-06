import { LineLabelProps } from './types'
import { Line, useDimensions, useScales, Typography, getClassName } from '@chsk/core'
import { getLineAbsolutePositions } from './utils'

export const LineLabel = ({
    // settings for line
    start,
    end,
    units = 'view',
    expansion = [0, 0],
    lineStyle,
    // position of text
    translate = [0, -8],
    align = 0.5,
    rotate = 0,
    markerStart,
    markerEnd,
    textStyle,
    //
    className,
    style,
    setRole = true,
    children,
}: LineLabelProps) => {
    const { size } = useDimensions()
    const scales = useScales()

    const { lineStart, lineEnd } = getLineAbsolutePositions({
        start,
        end,
        units,
        expansion,
        scales,
        size,
    })
    const textPos: [number, number] = [
        lineStart[0] + translate[0] + (lineEnd[0] - lineStart[0]) * align,
        lineStart[1] + translate[1] + (lineEnd[1] - lineStart[1]) * align,
    ]
    const compositeClassName = getClassName('line-label', className)

    return (
        <g style={style} className={className} role={setRole ? 'line-label' : undefined}>
            <Line
                variant={'line'}
                x1={lineStart[0]}
                y1={lineStart[1]}
                x2={lineEnd[0]}
                y2={lineEnd[1]}
                markerStart={markerStart}
                markerEnd={markerEnd}
                className={compositeClassName}
                style={lineStyle}
                setRole={setRole}
            />
            <Typography
                variant={'label'}
                position={textPos}
                rotate={rotate}
                className={compositeClassName}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Typography>
        </g>
    )
}

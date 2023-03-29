import { useDimensions, useScales, Typography, Path, getClassName } from '@chsk/core'
import { getLineAbsolutePositions, getBracketPositions } from './lines'
import { BracketLabelProps } from './types'

export const BracketLabel = ({
    // settings for line
    variant = 'right',
    start,
    end,
    units = 'view',
    expansion = [0, 0],
    tickSize = 5,
    lineStyle,
    // position of text
    translate = [0, -8],
    align = 0.5,
    angle = 0,
    textStyle,
    //
    className,
    style,
    setRole = true,
    children,
}: BracketLabelProps) => {
    const { size } = useDimensions()
    const { scales } = useScales()

    // toggle left-handed and right-handed symbol via tickSize
    tickSize = variant === 'left' ? -tickSize : tickSize

    const { lineStart, lineEnd } = getLineAbsolutePositions({
        start,
        end,
        units,
        expansion,
        scales,
        size,
    })
    const { tickStart, tickEnd } = getBracketPositions({
        start: lineStart,
        end: lineEnd,
        size: tickSize,
    })
    const textPos: [number, number] = [
        lineStart[0] + translate[0] + (lineEnd[0] - lineStart[0]) * align,
        lineStart[1] + translate[1] + (lineEnd[1] - lineStart[1]) * align,
    ]
    const compositeClassName = getClassName('bracket-label', className)

    return (
        <g
            style={style}
            className={compositeClassName}
            role={setRole ? 'bracket-label-' + variant : undefined}
        >
            <Path
                variant={'bracket'}
                points={[tickStart, lineStart, lineEnd, tickEnd]}
                className={compositeClassName}
                style={lineStyle}
                setRole={setRole}
            />
            <Typography
                variant={'label'}
                position={textPos}
                angle={angle}
                className={compositeClassName}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Typography>
        </g>
    )
}

import { useDimensions, useScales, Typography, Path, getClassName } from '@chsk/core'
import { getBracePositions, getLineAbsolutePositions } from './lines'
import { BraceLabelProps } from './types'

export const BraceLabel = ({
    // settings for line
    variant = 'right',
    start,
    end,
    units = 'view',
    expansion = [0, 0],
    tickSize = 5,
    braceR = 8,
    lineStyle,
    // position of text
    offset = [0, -12],
    align = 0.5,
    angle = 0,
    textStyle,
    //
    className,
    style,
    setRole = true,
    children,
}: BraceLabelProps) => {
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
    const {
        tickStart,
        braceStart,
        pinchStart,
        lineMiddle,
        pinchMiddle,
        pinchEnd,
        braceEnd,
        tickEnd,
    } = getBracePositions({
        start: lineStart,
        end: lineEnd,
        pinch: 0.5,
        size: tickSize,
        r: braceR,
    })
    const textPos: [number, number] = [
        lineStart[0] + offset[0] + (lineEnd[0] - lineStart[0]) * align,
        lineStart[1] + offset[1] + (lineEnd[1] - lineStart[1]) * align,
    ]
    const compositeClassName = getClassName('brace-label', className)

    return (
        <g
            style={style}
            className={compositeClassName}
            role={setRole ? 'brace-label-' + variant : undefined}
        >
            <Path
                variant={'brace'}
                points={[
                    tickStart,
                    tickStart,
                    lineStart,
                    braceStart,
                    pinchStart,
                    lineMiddle,
                    pinchMiddle,
                    pinchMiddle,
                    lineMiddle,
                    pinchEnd,
                    braceEnd,
                    lineEnd,
                    tickEnd,
                    tickEnd,
                ]}
                curve={'BasisOpen'}
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

import { BraceLabelProps } from './types'
import { useDimensions, useScales, Typography, Path } from '@chsk/core'
import { getBracePositions, getLineAbsolutePositions } from './utils'

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
    translate = [0, -12],
    align = 0.5,
    rotate = 0,
    textStyle,
    //
    className,
    style,
    setRole = true,
    children,
}: BraceLabelProps) => {
    const dimensions = useDimensions()
    const scales = useScales()

    // toggle left-handed and right-handed symbol via tickSize
    tickSize = variant === 'left' ? -tickSize : tickSize

    const { lineStart, lineEnd } = getLineAbsolutePositions({
        start,
        end,
        units,
        expansion,
        scales,
        size: dimensions.innerSize,
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

    // settings for text label
    const textPos = [
        lineStart[0] + translate[0] + (lineEnd[0] - lineStart[0]) * align,
        lineStart[1] + translate[1] + (lineEnd[1] - lineStart[1]) * align,
    ]
    const translation = 'translate(' + textPos[0] + ',' + textPos[1] + ')'
    const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    return (
        <g style={style} className={className} role={setRole ? 'brace-label' : undefined}>
            <Path
                variant={'brace-label'}
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
                className={className}
                style={lineStyle}
                setRole={setRole}
            />
            <Typography
                variant={'brace-label'}
                transform={translation + rotation}
                className={className}
                style={textStyle}
                setRole={setRole}
            >
                {children}
            </Typography>
        </g>
    )
}

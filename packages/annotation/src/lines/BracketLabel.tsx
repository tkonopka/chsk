import { BracketLabelProps } from './types'
import { useDimensions, useScales, Typography, Path } from '@chsk/core'
import { getLineAbsolutePositions, getBracketPositions } from './utils'

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
    rotate = 0,
    textStyle,
    //
    className,
    style,
    setRole = true,
    children,
}: BracketLabelProps) => {
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
    const { tickStart, tickEnd } = getBracketPositions({
        start: lineStart,
        end: lineEnd,
        size: tickSize,
    })

    // settings for text label
    const textPos = [
        lineStart[0] + translate[0] + (lineEnd[0] - lineStart[0]) * align,
        lineStart[1] + translate[1] + (lineEnd[1] - lineStart[1]) * align,
    ]
    const translation = 'translate(' + textPos[0] + ',' + textPos[1] + ')'
    const rotation = rotate === 0 ? '' : ' rotate(' + rotate + ')'

    return (
        <g style={style} className={className} role={setRole ? 'bracket-label' : undefined}>
            <Path
                variant={'bracket-label'}
                points={[tickStart, lineStart, lineEnd, tickEnd]}
                className={className}
                style={lineStyle}
                setRole={setRole}
            />
            <Typography
                variant={'bracket-label'}
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

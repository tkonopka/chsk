import { getTranslate, LEFT, range, TOP, X, Y, zeroPosition } from '../general'
import { Rectangle } from '../shapes'
import { isContinuousColorScale, useScales } from '../scales'
import { getScaleTicks } from '../axes'
import { useThemedProps } from '../themes'
import { LinearGradient } from './LinearGradient'
import { defaultLegendColorScaleProps } from './defaults'
import { LegendColorScaleProps } from './types'
import { getAxisPosition } from '../axes/utils'

const UnthemedLegendColorScale = ({
    variant = 'bottom',
    position = zeroPosition,
    size = [10, 10],
    padding = defaultLegendColorScaleProps.padding,
    offset = zeroPosition,
    axisDistance = 0,
    horizontal = false,
    ticks = defaultLegendColorScaleProps.ticks,
    tickSize = defaultLegendColorScaleProps.tickSize,
    tickStyle,
    labelAngle = defaultLegendColorScaleProps.labelAngle,
    labelDistance = defaultLegendColorScaleProps.labelDistance,
    labelStyle,
    className,
    style,
    setRole = true,
    gradientId,
}: LegendColorScaleProps) => {
    const scale = useScales().scales.color
    if (!isContinuousColorScale(scale)) return null

    // create a list of colors
    const scaleSize = horizontal ? size[X] : -size[Y]
    const domain = scale.domain()
    const domainSize = domain[domain.length - 1] - domain[0]
    const nStops = 21
    const stops = range(nStops).map(i => scale(domain[0] + (i / nStops) * domainSize))

    // details for gradient rectangle
    const gradId = 'legend-grad-' + (gradientId ?? className ?? variant)
    const gradientStyle = style ? { ...style } : {}
    gradientStyle.fill = 'url(#' + gradId + ')'

    return (
        <g
            role={setRole ? 'legend-color-scale' : undefined}
            transform={getTranslate(
                position[X] + padding[LEFT] + offset[X],
                position[Y] + padding[TOP] + offset[Y]
            )}
        >
            <LinearGradient
                id={gradId}
                start={horizontal ? [0, 0] : [0, 1]}
                end={horizontal ? [1, 0] : [0, 0]}
                stops={stops}
            />
            <Rectangle
                variant="legend-color-scale"
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                style={gradientStyle}
                setRole={false}
            />
            <g transform={getTranslate(getAxisPosition(variant, size, axisDistance))}>
                {getScaleTicks({
                    variant,
                    scale,
                    scaleSize,
                    ticks,
                    tickSize,
                    tickStyle,
                    labelDistance,
                    labelAngle,
                    labelStyle,
                    className,
                    setRole,
                })}
            </g>
        </g>
    )
}

export const LegendColorScale = (props: LegendColorScaleProps) => (
    <UnthemedLegendColorScale {...useThemedProps(props, 'LegendColorScale')} />
)

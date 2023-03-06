import { cloneDeep } from 'lodash'
import { LEFT, TOP, X, Y, zeroPosition } from '../general'
import { Rectangle } from '../shapes'
import { isContinuousColorScale, useScales } from '../scales'
import { getAxisTranslate, getScaleTicks } from '../axes'
import { useThemedProps } from '../themes'
import { LinearGradient } from './LinearGradient'
import { defaultLegendColorScaleProps } from './defaults'
import { LegendColorScaleProps } from './types'

const UnthemedLegendColorScale = ({
    variant = 'bottom',
    position,
    size = [10, 10],
    padding = defaultLegendColorScaleProps.padding,
    translate = zeroPosition,
    offset = 0,
    horizontal = false,
    ticks = defaultLegendColorScaleProps.ticks,
    tickSize = defaultLegendColorScaleProps.tickSize,
    labelRotate = defaultLegendColorScaleProps.labelRotate,
    labelOffset = defaultLegendColorScaleProps.labelOffset,
    className,
    style,
    setRole = true,
    gradientId,
}: LegendColorScaleProps) => {
    const scale = useScales().color
    if (!isContinuousColorScale(scale)) return null

    // create a list of colors
    const scaleSize = horizontal ? size[X] : -size[Y]
    const domain = scale.domain()
    const domainSize = domain[domain.length - 1] - domain[0]
    const nStops = 21
    const stops = Array(nStops)
        .fill(0)
        .map((v, i) => scale(domain[0] + (i / nStops) * domainSize))

    // details for gradient rectangle
    const gradId = 'legend-grad-' + (gradientId ?? className ?? variant)
    const gradientStyle = style ? cloneDeep(style) : {}
    gradientStyle.fill = 'url(#' + gradId + ')'

    const transform =
        'translate(' +
        (position[X] + padding[LEFT] + translate[X]) +
        ',' +
        (position[Y] + padding[TOP] + translate[Y]) +
        ')'
    return (
        <g role={setRole ? 'legend-color-scale' : undefined} transform={transform}>
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
            <g transform={getAxisTranslate({ variant, offset, size })}>
                {getScaleTicks({
                    variant,
                    scale,
                    scaleSize,
                    ticks,
                    tickSize,
                    labelOffset,
                    labelRotate,
                })}
            </g>
        </g>
    )
}

export const LegendColorScale = (props: LegendColorScaleProps) => (
    <UnthemedLegendColorScale {...useThemedProps(props, 'LegendColorScale')} />
)

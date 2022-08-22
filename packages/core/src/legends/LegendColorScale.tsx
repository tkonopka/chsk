import {LegendColorScaleProps } from './types'
import { Rectangle } from '../shapes'
import { useProcessedData } from '../views'
import { useTheme } from '../themes'
import {getTicks, useScales} from '../scales'
import {LinearGradient} from "../defs";
import {cloneDeep} from "lodash";

export const LegendColorScale = ({
    position,
    size = [10, 10],
    padding,
    translate = [0, 0],
    ticks,
    align,
    horizontal,
    className,
    style,
    setRole = true,
}: LegendColorScaleProps) => {
    const data = useProcessedData()
    const colorScale = useScales().color
    const theme = useTheme().Legend
    console.log("LCS")

    // create a list of colors
    const domain = colorScale.domain()
    const domainSize = domain[1] - domain[0]
    const nStops = 21
    const stops = Array(nStops).fill(0).map((v, i) => colorScale(domain[0] + (i / nStops) * domainSize))
    const allTicks = Array.isArray(ticks) ? ticks : getTicks(colorScale, ticks)

    // details for gradient rectangle
    const gradientId = 'legend-grad-'+ (className ?? '0')
    const gradientStyle = style ? cloneDeep(style) : {}
    gradientStyle.fill = 'url(#' + gradientId + ')'

    const transform = 'translate(' + position[0] + ',' + position[1] + ')'
    return (
        <g role={setRole ? 'legend-color-scale' : undefined} transform={transform} style={style}>
            <LinearGradient
                id={gradientId}
                start={horizontal ? [0, 0] : [0, 1]}
                end={horizontal ? [1, 0]: [0, 0]}
                stops={stops}
            />
            <Rectangle
                variant="legendColorScale"
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                style={gradientStyle}
                setRole={false}
            />
        </g>
    )
}

import { getTickCoordinates, getTicks, useScales } from '../scales'
import { numberPair, useDimensions, X, Y } from '../general'
import { Line } from '../shapes'
import { useThemedProps } from '../themes'
import { defaultGridLinesProps } from './defaults'
import { GridLinesProps } from './types'

const UnthemedGridLines = ({
    variant,
    values,
    shift = defaultGridLinesProps.shift,
    shiftUnit = defaultGridLinesProps.shiftUnit,
    expansion = defaultGridLinesProps.expansion,
    className,
    style,
    setRole = true,
}: GridLinesProps) => {
    const { scales } = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y

    // compute locations for grid lines, avoiding duplicate positions
    const tickValues = Array.isArray(values) ? values : getTicks(scale, values)
    const coordinates = new Set<number>()
    type KeyValue = [string, number]
    const tickCoordinates: KeyValue[] = []
    const shiftMultiplier = shiftUnit === 'band' ? 1 : scale.step() / scale.bandwidth()
    shift.forEach(s => {
        getTickCoordinates(scale, tickValues, s * shiftMultiplier).map((v, i) => {
            if (!coordinates.has(v)) {
                tickCoordinates.push([String(tickValues[i]) + s, v])
                coordinates.add(v)
            }
        })
    })
    const [e1, e2] = numberPair(expansion)

    const lineProps = { variant: 'grid', className, style, setRole: false }
    const result = isX
        ? tickCoordinates.map(kv => (
              <Line key={kv[0]} {...lineProps} x1={kv[1]} x2={kv[1]} y1={-e1} y2={size[Y] + e2} />
          ))
        : tickCoordinates.map(kv => (
              <Line key={kv[0]} {...lineProps} x1={-e1} x2={size[X] + e2} y1={kv[1]} y2={kv[1]} />
          ))

    return <g role={setRole ? 'grid-lines' : undefined}>{result}</g>
}

export const GridLines = (props: GridLinesProps) => (
    <UnthemedGridLines {...useThemedProps(props, 'GridLines')} />
)

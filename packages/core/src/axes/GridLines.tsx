import { uniq } from 'lodash'
import { getTickCoordinates, useScales } from '../scales'
import { useDimensions, X, Y } from '../general'
import { Line } from '../shapes'
import { useThemedProps } from '../themes'
import { defaultGridLinesProps } from './defaults'
import { GridLinesProps } from './types'

const UnthemedGridLines = ({
    variant,
    values,
    shift = defaultGridLinesProps.shift,
    expansion = defaultGridLinesProps.expansion,
    className,
    style,
    setRole = true,
}: GridLinesProps) => {
    const scales = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y

    // compute locations for tick marks, avoiding drawing multiple lines with uniq
    const tickCoordinates = uniq(shift.map(s => getTickCoordinates(scale, values, s)).flat())

    // extension of gridlines across the natural view boundaries
    const [e1, e2] = Array.isArray(expansion)
        ? [expansion[0], expansion[1]]
        : [expansion, expansion]

    let result
    if (isX) {
        result = tickCoordinates?.map((v: number, i: number) => (
            <Line
                x1={v}
                x2={v}
                y1={-e1}
                y2={size[Y] + e2}
                variant={'grid'}
                key={'grid-x-' + i}
                className={className}
                style={style}
                setRole={setRole}
            />
        ))
    } else {
        result = tickCoordinates?.map((v: number, i: number) => (
            <Line
                x1={-e1}
                x2={size[X] + e2}
                y1={v}
                y2={v}
                variant={'grid'}
                key={'grid-y-' + i}
                className={className}
                style={style}
                setRole={setRole}
            />
        ))
    }
    return <g role={setRole ? 'grid-' + variant : undefined}>{result}</g>
}

export const GridLines = (props: GridLinesProps) => (
    <UnthemedGridLines {...useThemedProps(props, 'GridLines')} />
)

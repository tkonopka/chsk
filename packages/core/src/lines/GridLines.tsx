import { uniq } from 'lodash'
import { GridLinesProps } from './types'
import { getTickCoordinates, useScales } from '../scales'
import { useDimensions } from '../general'
import { Line } from './Line'

export const GridLines = ({
    variant,
    values,
    shift = [0],
    expansion = [0, 0],
    className,
    style,
    setRole = true,
}: GridLinesProps) => {
    const scales = useScales()
    const dimensions = useDimensions()
    const [width, height] = dimensions.innerSize
    const isX = variant === 'x'
    const scale = isX ? scales.scaleX : scales.scaleY

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
                y2={height + e2}
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
                x2={width + e2}
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
    return <g role={'grid-' + variant}>{result}</g>
}

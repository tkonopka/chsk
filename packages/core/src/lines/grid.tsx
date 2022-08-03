import { GridProps } from './types'
import { getTickCoordinates, useScales } from '../scales'
import { useDimensions } from '../general'
import { Line } from './lines'

export const Grid = ({
    variant,
    values,
    expansion = [0, 0],
    className,
    style,
    setRole = true,
}: GridProps) => {
    const scales = useScales()
    const dimensions = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.scaleX : scales.scaleY
    const tickCoordinates: Array<number> = getTickCoordinates(scale, values)

    let result
    if (isX) {
        result = tickCoordinates?.map((v: number, i: number) => (
            <Line
                x1={v}
                x2={v}
                y1={0 - expansion[1]}
                y2={dimensions.innerHeight + expansion[0]}
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
                x1={-expansion[0]}
                x2={dimensions.innerWidth + expansion[1]}
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

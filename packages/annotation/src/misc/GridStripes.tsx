import { GridStripesProps } from './types'
import {
    getTickCoordinates,
    Rectangle,
    useDimensions,
    useScales,
    useThemedProps,
    X,
    Y,
} from '@chsk/core'
import { uniq } from 'lodash'

const UnthemedGridStripes = ({
    variant,
    parity = 'even',
    values,
    expansion = 0,
    shift = [0],
    setRole = true,
    ...props
}: GridStripesProps) => {
    const scales = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y

    // compute locations for regions boundaries
    const tickCoordinates = uniq(shift.map(s => getTickCoordinates(scale, values, s)).flat()).sort(
        (a, b) => a - b
    )
    let startCoordinates: number[] = []
    let endCoordinates: number[] = []
    if (parity === 'even') {
        startCoordinates = tickCoordinates.filter((_, i) => i % 2 === 0)
        endCoordinates = tickCoordinates.filter((_, i) => i % 2 === 1)
    } else {
        startCoordinates = tickCoordinates.filter((_, i) => i % 2 === 1)
        endCoordinates = tickCoordinates.filter((_, i) => i > 0 && i % 2 === 0)
    }
    startCoordinates = startCoordinates.slice(0, endCoordinates.length)

    // extension of gridlines across the natural view boundaries
    const [e1, e2] = Array.isArray(expansion)
        ? [expansion[0], expansion[1]]
        : [expansion, expansion]

    let result
    if (isX) {
        // vertical rectangles
        result = startCoordinates?.map((v: number, i: number) => (
            <Rectangle
                variant={'grid-stripes'}
                key={'grid-stripes-x-' + i}
                x={v}
                width={endCoordinates[i] - v}
                y={-e1}
                height={size[Y] + e2}
                {...props}
            />
        ))
    } else {
        // horizontal rectangles
        result = startCoordinates?.map((v: number, i: number) => (
            <Rectangle
                variant={'grid-stripes'}
                key={'grid-stripes-y-' + i}
                x={-e1}
                width={size[X] + e2}
                y={v}
                height={endCoordinates[i] - v}
                {...props}
            />
        ))
    }
    return <g role={setRole ? 'grid-stripes-' + variant : undefined}>{result}</g>
}

export const GridStripes = (props: GridStripesProps) => (
    <UnthemedGridStripes {...useThemedProps(props, 'GridLines')} />
)

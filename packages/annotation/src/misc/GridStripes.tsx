import { createElement } from 'react'
import { uniq } from 'lodash'
import { GridStripesProps } from './types'
import {
    getTickCoordinates,
    numberPair,
    Rectangle,
    useDimensions,
    useScales,
    useThemedProps,
    X,
    Y,
} from '@chsk/core'

const UnthemedGridStripes = ({
    variant,
    parity = 'even',
    values,
    expansion = 0,
    shift = [0],
    component = Rectangle,
    setRole = true,
    ...props
}: GridStripesProps) => {
    const { scales } = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y

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
    const [e1, e2] = numberPair(expansion)

    let result
    if (isX) {
        result = startCoordinates?.map((v: number, i: number) =>
            createElement(component, {
                variant: 'grid-stripe',
                key: 'x-' + i,
                x: v,
                width: endCoordinates[i] - v,
                y: -e1,
                height: size[Y] + e1 + e2,
                ...props,
            })
        )
    } else {
        result = startCoordinates?.map((v: number, i: number) =>
            createElement(component, {
                variant: 'grid-stripe',
                key: 'y-' + i,
                x: -e1,
                width: size[X] + e1 + e2,
                y: v,
                height: endCoordinates[i] - v,
                ...props,
            })
        )
    }
    return <g role={setRole ? 'grid-stripes' : undefined}>{result}</g>
}

export const GridStripes = (props: GridStripesProps) => (
    <UnthemedGridStripes {...useThemedProps(props, 'GridLines')} />
)

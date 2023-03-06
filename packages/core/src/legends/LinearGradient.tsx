import { roundDecimalPlaces, X, Y } from '../general'
import { LinearGradientProps } from './types'

export const LinearGradient = ({
    id,
    start = [0, 0],
    end = [0, 1],
    stops,
    offsets,
}: LinearGradientProps) => {
    const n = stops.length
    if (n <= 1) return null
    let stopOffsets: number[]
    if (!offsets || offsets.length !== stops.length) {
        stopOffsets = Array(n)
            .fill(0)
            .map((v, i) => roundDecimalPlaces(i / (n - 1), 4))
    } else {
        stopOffsets = offsets
    }
    const elements = stops.map((stop, i) => (
        <stop key={'stop-' + i} offset={stopOffsets[i]} stopColor={stop} />
    ))

    return (
        <linearGradient
            id={id}
            x1={start[X]}
            y1={start[Y]}
            x2={end[X]}
            y2={end[Y]}
            role={'linear-gradient'}
        >
            {elements}
        </linearGradient>
    )
}

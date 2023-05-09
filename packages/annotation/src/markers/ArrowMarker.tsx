import { ArrowMarkerProps } from './types'

// construct an arrowhead with a simple triangle, following the SVG tutorial
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
const createTriangleArrowD = (width: number, size: number): string => {
    const w = (width * size) / 2
    const half = size / 2
    return ['M0,', half - w, 'L' + size + ',' + half + 'L0,', half + w, 'z'].join('')
}

// an open arrowhead shape, like a V
const createChevronArrowD = (width: number, size: number): string => {
    const w = (width * size) / 2
    const half = size / 2
    return ['M0,', half - w, 'L' + size + ',' + half + 'L0,', half + w].join('')
}

// similar to a triangle arrowhead, but with the back tucked in
const createWingedArrowD = (width: number, size: number): string => {
    const w = (width * size) / 2
    const half = size / 2
    return [
        'M0,',
        half - w,
        'L' + size + ',' + half + 'L0,',
        half + w,
        'L' + half + ',' + half + 'z',
    ].join('')
}

export const ArrowMarker = ({
    variant = 'triangle',
    id,
    size = 10,
    width = 1,
    style,
}: ArrowMarkerProps) => {
    let d = ''
    const w = Math.min(1, Math.max(0, width))
    if (variant === 'triangle') {
        d = createTriangleArrowD(w, size)
    } else if (variant === 'winged') {
        d = createWingedArrowD(w, size)
    } else {
        d = createChevronArrowD(w, size)
    }
    return (
        <marker
            id={id}
            viewBox={'0 0 ' + (size + 2) + ' ' + (size + 2)}
            refX={(3 * size) / 4}
            refY={size / 2}
            markerWidth={size / 2}
            markerHeight={size / 2}
            orient="auto-start-reverse"
        >
            <path d={d} style={style} />
        </marker>
    )
}

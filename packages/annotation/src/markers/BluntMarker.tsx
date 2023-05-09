import { BluntMarkerProps } from './types'

const createDiamondD = (size: number): string => {
    const halfSize = size / 2
    return [
        'M' + halfSize + ',0',
        'L0,' + halfSize,
        'L' + halfSize + ',' + size,
        'L' + size + ',' + halfSize,
        'z',
    ].join('')
}

export const BluntMarker = ({ variant = 'circle', id, size = 10, style }: BluntMarkerProps) => {
    let content = <rect x={0} y={0} width={size} height={size} style={style} />
    if (variant === 'circle') {
        content = <circle cx={size / 2} cy={size / 2} r={size / 2} style={style} />
    } else if (variant === 'diamond') {
        const d = createDiamondD(size)
        content = <path d={d} style={style} />
    }
    return (
        <marker
            id={id}
            viewBox={'0 0 ' + (size + 2) + ' ' + (size + 2)}
            refX={size / 2}
            refY={size / 2}
            markerWidth={size / 2}
            markerHeight={size / 2}
            orient="auto-start-reverse"
        >
            {content}
        </marker>
    )
}

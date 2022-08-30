import { BoxAndWhiskersProps } from './types'

export const BoxAndWhiskers = ({
    data,
    horizontal,
    boxStyle,
    whiskerStyle,
    medianStyle,
    whiskerCapWidth = 0.0,
    className,
    style,
    setRole,
}: BoxAndWhiskersProps) => {
    const halfBand = data.bandWidth / 2
    const halfCap = whiskerCapWidth * halfBand
    const coords = horizontal ? data.values.map(v => v).reverse() : data.values

    const cx = data.bandStart + halfBand
    const cy = data.values[2]
    const translate = horizontal
        ? 'translate(' + cy + ',' + cx + ')'
        : 'translate(' + cx + ',' + cy + ')'

    const box = (
        <rect
            x={-halfBand}
            y={-cy + coords[3]}
            width={data.bandWidth}
            height={coords[1] - coords[3]}
            style={boxStyle}
            className={className}
        />
    )
    const lines = [
        <line
            key={'median'}
            x1={-halfBand}
            x2={+halfBand}
            y1={0}
            y2={0}
            style={medianStyle}
            className={className}
        />,
        <line
            key={'whisker-upper'}
            y1={-cy + coords[3]}
            y2={-cy + coords[4]}
            style={whiskerStyle}
            className={className}
        />,
        <line
            key={'whisker-lower'}
            y1={-cy + coords[1]}
            y2={-cy + coords[0]}
            style={whiskerStyle}
            className={className}
        />,
    ]
    const caps = [
        <line
            key={'whisker-upper-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + coords[4]}
            y2={-cy + coords[4]}
            style={whiskerStyle}
            className={className}
        />,
        <line
            key={'whisker-lower-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + coords[0]}
            y2={-cy + coords[0]}
            style={whiskerStyle}
            className={className}
        />,
    ]

    return (
        <g
            transform={translate + (horizontal ? ' rotate(-90)' : '')}
            role={setRole ? 'boxwhisker' : undefined}
            style={style}
        >
            {box}
            {lines}
            {whiskerCapWidth > 0 ? caps : null}
        </g>
    )
}
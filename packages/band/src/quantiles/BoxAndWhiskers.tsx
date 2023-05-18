import { m } from 'framer-motion'
import { BoxAndWhiskersProps } from './types'
import { Line, Rectangle } from '@chsk/core'

export const BoxAndWhiskers = ({
    data,
    horizontal,
    boxStyle,
    whiskerStyle,
    middleStyle,
    whiskerCapWidth = 0.0,
    className,
    style,
    setRole,
    // interactivity props
    ...props
}: BoxAndWhiskersProps) => {
    if (!data) return null

    const halfBand = data.bandWidth / 2
    const halfCap = whiskerCapWidth * halfBand
    const coords = data.values

    const cx = data.bandStart + halfBand
    const cy = data.values[2]

    const commonProps = { className, setRole: false }
    const box = (
        <Rectangle
            variant={'box'}
            key={'box'}
            x={-halfBand}
            y={-cy + coords[3]}
            width={data.bandWidth}
            height={coords[1] - coords[3]}
            style={boxStyle}
            {...commonProps}
        />
    )
    const lines = [
        <Line
            variant={'median'}
            key={'median'}
            x1={-halfBand}
            x2={+halfBand}
            y1={0}
            y2={0}
            style={middleStyle}
            {...commonProps}
        />,
        <Line
            variant={'whisker'}
            key={'whisker-upper'}
            x1={0}
            x2={0}
            y1={-cy + coords[3]}
            y2={-cy + coords[4]}
            style={whiskerStyle}
            {...commonProps}
        />,
        <Line
            variant={'whisker'}
            key={'whisker-lower'}
            x1={0}
            x2={0}
            y1={-cy + coords[1]}
            y2={-cy + coords[0]}
            style={whiskerStyle}
            {...commonProps}
        />,
    ]
    const caps = [
        <Line
            variant={'whisker-cap'}
            key={'whisker-upper-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + coords[4]}
            y2={-cy + coords[4]}
            style={whiskerStyle}
            {...commonProps}
        />,
        <Line
            variant={'whisker-cap'}
            key={'whisker-lower-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + coords[0]}
            y2={-cy + coords[0]}
            style={whiskerStyle}
            {...commonProps}
        />,
    ]

    const config = {
        x: horizontal ? cy : cx,
        y: horizontal ? cx : cy,
        rotate: horizontal ? -90 : 0,
        originX: '0px',
        originY: '0px',
    }
    return (
        <m.g
            initial={config}
            animate={config}
            role={setRole ? 'box-and-whiskers' : undefined}
            style={style}
            {...props}
        >
            {box}
            {lines}
            {whiskerCapWidth > 0 ? caps : null}
        </m.g>
    )
}

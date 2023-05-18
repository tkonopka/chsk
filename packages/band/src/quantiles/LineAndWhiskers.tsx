import { m } from 'framer-motion'
import { Line } from '@chsk/core'
import { BoxAndWhiskersProps } from './types'

export const LineAndWhiskers = ({
    data,
    horizontal,
    middleStyle,
    whiskerStyle,
    whiskerCapWidth = 0.0,
    className,
    style,
    setRole,
    ...props
}: BoxAndWhiskersProps) => {
    if (!data) return null
    if (data.moments === undefined || data.interval === undefined) return null

    const halfBand = data.bandWidth / 2
    const halfCap = whiskerCapWidth * halfBand

    const cx = data.bandStart + halfBand
    const cy = data.moments[0]

    const commonProps = { className, setRole: false }
    const middle = (
        <Line
            variant={'mean'}
            key={'bar'}
            x1={-halfBand}
            y1={0}
            x2={halfBand}
            y2={0}
            style={middleStyle}
            {...commonProps}
        />
    )
    const lines = [
        <Line
            variant={'whisker'}
            key={'whisker-upper'}
            x1={0}
            x2={0}
            y1={0}
            y2={-cy + data.interval[1]}
            style={whiskerStyle}
            {...commonProps}
        />,
        <Line
            variant={'whisker'}
            key={'whisker-lower'}
            x1={0}
            x2={0}
            y1={0}
            y2={-cy + data.interval[0]}
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
            y1={-cy + data.interval[1]}
            y2={-cy + data.interval[1]}
            style={whiskerStyle}
            {...commonProps}
        />,
        <Line
            variant={'whisker-cap'}
            key={'whisker-lower-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + data.interval[0]}
            y2={-cy + data.interval[0]}
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
            role={setRole ? 'line-and-whiskers' : undefined}
            style={style}
            {...props}
        >
            {middle}
            {lines}
            {whiskerCapWidth > 0 ? caps : null}
        </m.g>
    )
}

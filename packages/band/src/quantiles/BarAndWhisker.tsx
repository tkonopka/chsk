import { m } from 'framer-motion'
import { ContinuousAxisScale, Line, Rectangle, ssrCompatible, useScales } from '@chsk/core'
import { BoxAndWhiskersProps } from './types'

export const BarAndWhisker = ({
    data,
    horizontal,
    boxStyle,
    whiskerStyle,
    whiskerCapWidth = 0.0,
    className,
    style,
    setRole,
    ...props
}: BoxAndWhiskersProps) => {
    const { scales } = useScales()
    if (!data) return null
    if (data.moments === undefined || data.interval === undefined) return null

    const halfBand = data.bandWidth / 2
    const halfCap = whiskerCapWidth * halfBand

    const cx = data.bandStart + halfBand
    const cy = data.moments[0]
    const scaleValue = horizontal
        ? (scales.x as ContinuousAxisScale)
        : (scales.y as ContinuousAxisScale)
    const zero = scaleValue(0)

    const commonProps = { className, setRole: false }
    const box = (
        <Rectangle
            variant={'bar'}
            key={'bar'}
            x={-halfBand}
            y={0}
            width={data.bandWidth}
            height={zero - cy}
            style={boxStyle}
            {...commonProps}
        />
    )
    const lines = [
        <Line
            variant={'whisker'}
            key={'line'}
            x1={0}
            x2={0}
            y1={0}
            y2={-cy + data.interval[1]}
            style={whiskerStyle}
            {...commonProps}
        />,
    ]
    const caps = [
        <Line
            variant={'whisker-cap'}
            key={'cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + data.interval[1]}
            y2={-cy + data.interval[1]}
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
            role={setRole ? 'bar-and-whisker' : undefined}
            style={ssrCompatible(style, config)}
            {...props}
        >
            {box}
            {lines}
            {whiskerCapWidth > 0 ? caps : null}
        </m.g>
    )
}

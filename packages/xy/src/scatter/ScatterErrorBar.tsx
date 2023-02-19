import { Line, SizeSpec, X, Y } from '@chsk/core'
import { ScatterErrorBarProps } from './types'

export const ScatterErrorBar = ({
    variant,
    lower,
    upper,
    capWidth = 0.0,
    className,
    style,
    setRole,
    ...props
}: ScatterErrorBarProps) => {
    const capSize: SizeSpec = variant === 'x' ? [0, capWidth / 2] : [capWidth / 2, 0]
    const commonProps = { style, className, setRole: false }
    const bar = (
        <Line
            key={'line'}
            x1={lower[X]}
            y1={lower[Y]}
            x2={upper[X]}
            y2={upper[Y]}
            {...commonProps}
        />
    )
    const caps =
        capWidth > 0
            ? [
                  <Line
                      key={'lower-cap'}
                      x1={lower[X] - capSize[X]}
                      x2={lower[X] + capSize[X]}
                      y1={lower[Y] - capSize[Y]}
                      y2={lower[Y] + capSize[Y]}
                      {...commonProps}
                  />,
                  <Line
                      key={'upper-cap'}
                      x1={upper[X] - capSize[X]}
                      x2={upper[X] + capSize[X]}
                      y1={upper[Y] - capSize[Y]}
                      y2={upper[Y] + capSize[Y]}
                      {...commonProps}
                  />,
              ]
            : null

    return (
        <g role={setRole ? 'error-bar' : undefined} {...props}>
            {bar}
            {caps}
        </g>
    )
}

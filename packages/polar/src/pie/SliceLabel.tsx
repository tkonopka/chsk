import { deg2rad, getClassName, NumericPositionSpec } from '@chsk/core'
import { R, THETA, PolarItem } from '../general'
import { SliceLabelProps } from './types'

export const SliceLabel = ({
    // slice
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    angleUnit = 'radian',
    // label/text props
    align = [0.5, 0.5],
    radial,
    tangential,
    // svg
    className,
    setRole = false,
    style,
    children,
}: SliceLabelProps) => {
    const sizeR = outerRadius - innerRadius
    const sizeAngle = endAngle - startAngle
    let theta = startAngle + align[THETA] * sizeAngle
    if (angleUnit === 'degree') theta = deg2rad(theta)
    const position: NumericPositionSpec = [innerRadius + align[R] * sizeR, theta]

    let classPrefix = ''
    if (radial && (theta < 0 || theta > Math.PI)) {
        classPrefix = ' leftHemisphere '
    } else if (tangential && (theta < -Math.PI / 2 || theta > Math.PI / 2)) {
        classPrefix = ' bottomHemisphere'
    }

    const compositeClassName = getClassName('label sliceLabel' + classPrefix, className)
    return (
        <PolarItem
            variant="label"
            position={position}
            angleUnit={'radian'}
            radial={radial}
            tangential={tangential}
            setRole={setRole}
        >
            <text className={compositeClassName} style={style}>
                {children}
            </text>
        </PolarItem>
    )
}

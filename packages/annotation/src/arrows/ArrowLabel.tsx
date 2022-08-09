import { ArrowLabelProps } from './types'
import { useDimensions } from '@chask/core'

// star symbols
// ★
// ✦

export const ArrowLabel = ({
    points,
    translate = [0, 0],
    className,
    style,
    setRole = true,
    children,
}: ArrowLabelProps) => {
    const dimensions = useDimensions()
    console.log(JSON.stringify(dimensions))
    if (children === undefined || children === '') return null

    return <g style={style} className={className} role={setRole ? 'arrow-label' : undefined}></g>
}

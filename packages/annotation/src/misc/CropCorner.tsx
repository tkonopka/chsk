import { ViewfinderProps } from './types'
import { NumericPositionSpec, Path } from '@chsk/core'

export const CropCorner = ({
    variant, // CropCorner uses a subset of the ViewfinderProps variants
    x,
    y,
    width,
    height,
    lengths = [20, 20],
    ...props
}: ViewfinderProps) => {
    const [lengthX, lengthY] = lengths
    let points: NumericPositionSpec[]
    if (variant === 'top-left') {
        points = [
            [x, y + lengthY],
            [x, y],
            [x + lengthX, y],
        ]
    } else if (variant === 'top-right') {
        points = [
            [x + width - lengthX, y],
            [x + width, y],
            [x + width, y + lengthY],
        ]
    } else if (variant === 'bottom-left') {
        points = [
            [x, y + height - lengthY],
            [x, y + height],
            [x + lengthX, y + height],
        ]
    } else {
        // variant is bottom-right
        points = [
            [x + width - lengthX, y + height],
            [x + width, y + height],
            [x + width, y + height - lengthY],
        ]
    }
    return <Path variant={'viewfinder'} points={points} setRole={false} {...props} />
}

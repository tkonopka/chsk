import { ViewfinderProps } from './types'
import { useDimensions, getAbsoluteSize } from '@chsk/core'
import { CropCorner } from './CropCorner'

const corners: ViewfinderProps['variant'][] = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
]

export const Viewfinder = ({
    variant = 'corners',
    lengths = [20, 20],
    lengthsUnits = 'absolute',
    setRole = true,
    ...props
}: ViewfinderProps) => {
    const dimensions = useDimensions()
    const allCorners = variant === 'corners'
    const absLengths = getAbsoluteSize(lengths, lengthsUnits, dimensions.size)
    const parts = corners.map(corner => {
        if (!allCorners && variant?.indexOf(String(corner)) < 0) return null
        return <CropCorner key={corner} variant={corner} lengths={absLengths} {...props} />
    })
    return <g role={setRole ? 'viewfinder' : undefined}>{parts.filter(Boolean)}</g>
}

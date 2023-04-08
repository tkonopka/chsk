import { NumericPositionSpec, SideVariant, SizeSpec, X, Y } from '../general'

export const getAxisPosition = (
    variant: SideVariant,
    size: SizeSpec,
    distance: number
): NumericPositionSpec => {
    if (variant === 'left') return [-distance, 0]
    if (variant === 'top') return [0, -distance]
    if (variant === 'bottom') return [0, size[Y] + distance]
    return [size[X] + distance, 0]
}

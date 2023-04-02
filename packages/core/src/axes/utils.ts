import { SideVariant, SizeSpec, X, Y } from '../general'

// produce a 'transform' string for an entire axis
export const getAxisTranslate = (variant: SideVariant, size: SizeSpec, offset: number) => {
    if (variant === 'left') return 'translate(' + -offset + ',0)'
    if (variant === 'top') return 'translate(0,' + -offset + ')'
    if (variant === 'bottom') return 'translate(0,' + (size[Y] + offset) + ')'
    return 'translate(' + (size[X] + offset) + ',0)'
}

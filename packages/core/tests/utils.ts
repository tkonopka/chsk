/** gets a X/Y coordinate from a framer-motion style string */
export const getTransform = (el: Element | null | undefined, variant = 'X') => {
    if (!el) return null
    const style = el?.getAttribute('style')
    const prefix = variant === 'rotate' ? variant : 'translate' + variant
    const hit = style
        ?.split(' ')
        .map(v => v.trim())
        .filter(v => v.startsWith(prefix))[0]
    if (!hit) return null
    return Number(
        hit
            .replace(prefix, '')
            .replace('(', '')
            .replace('px)', '')
            .replace('deg)', '')
            .replace(';', '')
    )
}

/** gets an attribute value and forces a numeric type */
export const getNumberAttr = (item: SVGElement | null | undefined, attribute: string) => {
    const raw = item ? item.getAttribute(attribute) : ''
    return Number(raw?.replace('px', ''))
}

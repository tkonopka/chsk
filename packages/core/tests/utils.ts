// helper to get X/Y coordinate from a framer-motion style string
export const getTransform = (el: Element | null, variant = 'X') => {
    const style = el?.getAttribute('style')
    const prefix = 'translate' + variant
    const hit = style
        ?.split(' ')
        .map(v => v.trim())
        .filter(v => v.startsWith(prefix))[0]
    if (!hit) return null
    return Number(hit.replace(prefix, '').replace('(', '').replace('px)', '').replace(';', ''))
}

export const getNumberAttr = (item: SVGElement | null, attribute: string) => {
    const raw = item ? item.getAttribute(attribute) : ''
    return Number(raw?.replace('px', ''))
}

export const getTranslate = (item: SVGElement | null | undefined, variant: string) => {
    const raw: string = (item ? item.getAttribute('style') : '') ?? ''
    const prefix = 'translate' + variant
    const part = raw.split(' ').filter(p => p.startsWith(prefix))[0]
    const result = part.replace(prefix, '').replace('(', '').replace('px)', '').replace(';', '')
    return Number(result)
}

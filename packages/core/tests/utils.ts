// helper to get X/Y coordinate from a framer-motion style string
export const getTransform = (el: Element | null, variant = 'X') => {
    const style = el?.getAttribute('style')
    if (!style) return null
    const prefix = 'translate' + variant
    const hit = style
        .split(' ')
        .map(v => v.trim())
        .filter(v => v.startsWith(prefix))[0]
    if (!hit) return null
    return Number(hit.replace(prefix, '').replace('(', '').replace('px)', '').replace(';', ''))
}

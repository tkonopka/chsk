import { ReactElement, ReactNode } from 'react'

export const getTextContent = (node?: ReactNode): string => {
    if (!node) return ''
    if (typeof node === 'string') return node
    if (typeof node !== 'object') return String(node).toString()
    if (Array.isArray(node)) return node.map(x => getTextContent(x)).join('')
    return String((node as ReactElement).props.children).toString()
}

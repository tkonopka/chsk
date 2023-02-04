import { ReactElement, ReactNode } from 'react'

export const getTextContent = (node?: ReactNode): string => {
    if (!node) return ''
    if (typeof node === 'string') return node
    return String((node as ReactElement).props.children)
}

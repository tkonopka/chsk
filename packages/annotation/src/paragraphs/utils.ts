import { ReactElement, ReactNode } from 'react'

export const getTextContent = (node?: ReactNode): string => {
    if (!node) return ''
    if (typeof node === 'string') return node
    return String((node as ReactElement).props.children)
}

// compute the length of one word by summing width associated with individual letters
const wordLength = (word: string, widths: Record<string, number>): number => {
    const fallback = widths[' '] ?? 0
    return word.split('').reduce((total, letter) => total + (widths[letter] ?? fallback), 0)
}

export const splitText = (
    content: string,
    widths: Record<string, number>,
    lineWidth: number
): string[] => {
    // use pre-existing line breaks
    const lines = content.split('\n')
    if (lines.length > 1) {
        return lines.map(line => splitText(line, widths, lineWidth)).flat()
    }
    // split long text
    const result: string[] = []
    const words = lines[0].split(' ').filter(word => word.length > 0)
    const wordLengths = words.map(word => wordLength(word, widths))
    const spaceLength = widths[' '] ?? 0
    let line = ''
    let lineLength = 0
    words.forEach((word, index) => {
        const wordLength = wordLengths[index]
        if (lineLength + spaceLength + wordLength < lineWidth) {
            lineLength += (line.length > 0 ? spaceLength : 0) + wordLength
            line += (line.length > 0 ? ' ' : '') + word
        } else {
            result.push(line)
            line = word
            lineLength = wordLength
        }
    })
    result.push(line)
    return result.filter(word => word.length > 0)
}

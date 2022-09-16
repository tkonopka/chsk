import { roundDecimalPlaces } from '@chask/core'

// round a string representing pixels to a fixed number of decimal places
export const roundPxDecimalPlaces = (s: string, n: number) => {
    const px = s.includes('px')
    const v = Number(s.replace('px', '').replace(';', ''))
    const result = isFinite(v) ? String(roundDecimalPlaces(v, n)) : s
    return px ? result + 'px' : result
}

export const cleanTransform = (x: string | undefined, n: number) => {
    if (x === undefined) return x
    const xWoPrefix = x.replace('transform:', '').trim()
    if (xWoPrefix === 'none') return null
    const xy: [string, string] = ['', '']
    const other: string[] = []
    xWoPrefix.split(' ').map(s => {
        if (s.startsWith('translateX')) {
            xy[0] = s.replace('translateX(', '').split(')')[0]
        } else if (s.startsWith('translateY')) {
            xy[1] = s.replace('translateY(', '').split(')')[0]
        } else {
            other.push(s)
        }
    })
    let translate = ''
    if (xy[0] !== '' && xy[1] !== '') {
        translate =
            'translate(' +
            roundPxDecimalPlaces(xy[0].replace('px', ''), n) +
            ',' +
            roundPxDecimalPlaces(xy[1].replace('px', ''), n) +
            ')'
    }
    return translate + other.join(' ')
}

export const cleanStyle = (raw: string, n: number) => {
    const parts = raw.split(';').map(part => part.trim())
    const transform = parts.filter(part => part.startsWith('transform:'))[0] // with colon at the end
    const other = parts.filter(part => !part.startsWith('transform')) // without colon -> eliminates transform-origin
    return { style: other.filter(Boolean).join('; '), transform: cleanTransform(transform, n) }
}

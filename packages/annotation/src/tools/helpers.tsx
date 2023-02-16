import { roundDecimalPlaces } from '@chsk/core'

// round a string representing pixels to a fixed number of decimal places
export const roundPxDecimalPlaces = (s: string, n: number) => {
    const px = s.includes('px')
    const v = Number(s.replace('px', '').replace(';', ''))
    const result = isFinite(v) ? String(roundDecimalPlaces(v, n)) : s
    return px ? result + 'px' : result
}

const extractValue = (s: string, prefix: string): string => {
    return s.replace(prefix + '(', '').split(')')[0]
}

export const cleanTransform = (x: string | undefined, n: number) => {
    if (x === undefined) return x
    const xWoPrefix = x.replace('transform:', '').trim()
    if (xWoPrefix === 'none') return null
    const translateXY: [string, string] = ['0', '0']
    const scaleXY: [string, string] = ['1', '1']
    const rotateDeg: [string] = ['0deg']
    const other: string[] = []
    xWoPrefix.split(' ').map(s => {
        if (s.startsWith('translateX')) {
            translateXY[0] = extractValue(s, 'translateX')
        } else if (s.startsWith('translateY')) {
            translateXY[1] = extractValue(s, 'translateY')
        } else if (s.startsWith('scaleX')) {
            scaleXY[0] = extractValue(s, 'scaleX')
        } else if (s.startsWith('scaleY')) {
            scaleXY[1] = extractValue(s, 'scaleY')
        } else if (s.startsWith('rotate(')) {
            rotateDeg[0] = extractValue(s, 'rotate')
        } else {
            other.push(s)
        }
    })
    let translate = ''
    if (translateXY[0] !== '0' || translateXY[1] !== '0') {
        translate =
            'translate(' +
            roundPxDecimalPlaces(translateXY[0].replace('px', ''), n) +
            ',' +
            roundPxDecimalPlaces(translateXY[1].replace('px', ''), n) +
            ')'
    }
    let scale = ''
    if (scaleXY[0] !== '1' || scaleXY[1] !== '1') {
        scale =
            'scale(' +
            roundPxDecimalPlaces(scaleXY[0], n) +
            ',' +
            roundPxDecimalPlaces(scaleXY[1], n) +
            ')'
    }
    let rotate = ''
    if (rotateDeg[0] !== '0deg') {
        rotate = 'rotate(' + roundPxDecimalPlaces(rotateDeg[0].replace('deg', ''), n) + ')'
    }
    return translate + scale + rotate + other.join(' ')
}

export const cleanStyle = (raw: string, n: number) => {
    const parts = raw.split(';').map(part => part.trim())
    const transform = parts.filter(part => part.startsWith('transform:'))[0] // with colon at the end
    const other = parts.filter(part => !part.startsWith('transform')) // without colon -> eliminates transform-origin
    return { style: other.filter(Boolean).join('; '), transform: cleanTransform(transform, n) }
}

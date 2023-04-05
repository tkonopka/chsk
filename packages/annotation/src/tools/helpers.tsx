import { roundDecimalPlaces } from '@chsk/core'
import { CleanSvgConfig } from './types'

/** round a pixel dimensions to a fixed number of decimal places, e.g. '2px 2.1234px' -> '2 2.123'  */
export const roundPxDecimalPlaces = (s: string, n: number, preservePx = false): string => {
    if (s.includes(' ')) {
        return s
            .split(' ')
            .map(token => roundPxDecimalPlaces(token, n, preservePx))
            .join(' ')
    }
    const px = s.includes('px') && preservePx
    const v = Number(s.replace('px', '').replace(';', ''))
    const result = isFinite(v) ? String(roundDecimalPlaces(v, n)) : s
    return px ? result + 'px' : result
}

/** convert a string encoding and rgb value (examples: 128, 50%, 0.5) to hex */
const rgbValue2hex = (x: string) => {
    let v: number
    if (x.includes('%')) {
        v = (255 * Number(x.replace('%', ''))) / 100
    } else if (x.includes('.')) {
        v = 255 * Number(x)
    } else {
        v = Number(x)
    }
    v = Math.max(0, Math.min(255, Math.round(v)))
    return (v < 16 ? '0' : '') + v.toString(16)
}

/** convert an rgb(r g b) or rgb(r g b a) string into hex */
export const rgb2hex = (rgb: string) => {
    const prefix = rgb.startsWith('rgb(') ? 'rgb' : rgb.startsWith('rgba(') ? 'rgba' : undefined
    if (!prefix) return rgb
    const sep = rgb.includes(',') ? ',' : ' '
    const parts = contentInParentheses(rgb, prefix)
        .replace('/', sep)
        .split(sep)
        .filter(Boolean)
        .map(s => s.trim())
    const n = prefix === 'rgba' && parts[3] === '1' ? 3 : parts.length
    const result = parts
        .slice(0, n)
        .map(s => rgbValue2hex(s))
        .join('')
    return '#' + result
}

const contentInParentheses = (s: string, prefix: string): string => {
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
            translateXY[0] = contentInParentheses(s, 'translateX')
        } else if (s.startsWith('translateY')) {
            translateXY[1] = contentInParentheses(s, 'translateY')
        } else if (s.startsWith('scaleX')) {
            scaleXY[0] = contentInParentheses(s, 'scaleX')
        } else if (s.startsWith('scaleY')) {
            scaleXY[1] = contentInParentheses(s, 'scaleY')
        } else if (s.startsWith('rotate(')) {
            rotateDeg[0] = contentInParentheses(s, 'rotate')
        } else {
            other.push(s)
        }
    })
    let translate = ''
    if (translateXY[0] !== '0' || translateXY[1] !== '0') {
        translate =
            'translate(' +
            roundPxDecimalPlaces(translateXY[0], n, false) +
            ',' +
            roundPxDecimalPlaces(translateXY[1], n, false) +
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
    const other = parts
        .filter(part => !part.startsWith('transform')) // without colon -> eliminates transform-origin
        .map(part => {
            if (part.startsWith('fill:') || part.startsWith('stroke:')) {
                const [k, v] = part.split(':', 2)
                return k + ': ' + rgb2hex(v.trim())
            }
            return part
        })
    return { style: other.filter(Boolean).join('; '), transform: cleanTransform(transform, n) }
}

/**
 * scan an svg element to summarize components and class names
 *
 * @param element an html element
 * @param config configuration for svg cleaning, should have 'skipRoles'
 * @param content dictionary with components and class names, used internally to recursively traverse element
 */
export const scanSvg = (
    element: HTMLElement,
    config: CleanSvgConfig,
    content?: Record<string, Set<string>>
): Record<string, Set<string>> => {
    const result = content ?? {}

    // early stopping - text nodes, or nodes that should be skipped
    if (!element.attributes) return result
    const role = element.getAttribute('role')
    if (role !== null && config.skipRoles.indexOf(role) >= 0) return result

    const nodeName = element.nodeName
    if (!(nodeName in result)) {
        result[nodeName] = new Set<string>()
    }
    for (const attr of element.attributes) {
        if (attr.name === 'class') {
            attr.value.split(' ').forEach(className => result[nodeName].add(className))
        }
    }

    if (element.hasChildNodes())
        element.childNodes.forEach(child => scanSvg(child as HTMLElement, config, result))
    return result
}

/**
 * simplify a set of style definitions so that they contain only entries that are relevant in some content
 *
 * @param styles string with style definitions, lines separated by newlines
 * @param content dictionary with components and class names, used internally to recursively traverse element
 */
export const shakeStyles = (
    styles: string | null,
    content: Record<string, Set<string>>
): string => {
    if (!styles) return ''
    return styles
        .split('\n')
        .map(line => {
            const tokens = line.split(' ')
            if (!tokens[0].startsWith('#')) return
            const selectorClasses = tokens[1].split('.')
            const selector = selectorClasses[0]
            if (!(selector in content)) return
            const classNames = selectorClasses.slice(1)
            const overlaps = classNames.every(className => content[selector].has(className))
            if (classNames.length === 0 || overlaps) {
                return line
            }
        })
        .filter(Boolean)
        .join('\n')
}

/**
 * process css lines to replace an existing ancestor with a new string
 */
export const changeAncestor = (
    styles: string | null,
    addAncestor: string | null,
    removeAncestor: boolean
): string => {
    if (!styles) return ''
    if (!addAncestor && !removeAncestor) return styles
    return styles
        .split('\n')
        .map(line => (removeAncestor ? line.split(' ').splice(1).join(' ') : line))
        .map(line => (addAncestor ? addAncestor + ' ' : '') + line)
        .join('\n')
}

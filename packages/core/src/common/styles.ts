import { CSSProperties } from 'react'

// turn js styles into a string of inline-css styles
export const cssStyleString = (style: CSSProperties): string => {
    let jsKey: keyof CSSProperties
    const result: Array<string> = []
    for (jsKey in style) {
        const cssKey = jsKey
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase()
        result.push(cssKey + ': ' + style[jsKey])
    }
    return result.filter(x => x.indexOf('>') + x.indexOf('<') === -2).join('; ')
}

// turn an array of string into a single space-separate className string
export const composeClassName = function (names: Array<string | undefined>) {
    const result = names.filter(x => x !== undefined).join(' ')
    return result === '' ? undefined : result
}

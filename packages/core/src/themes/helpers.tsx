import { CSSProperties } from 'react'
import { ThemeSpec } from './types'
import { cloneDeep, merge } from 'lodash'
import { emptyTheme } from './emptyTheme'

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

// turn hyphen-separated strings into camel case
export const camelCase = (s: string | undefined): string | undefined => {
    if (!s) return s
    return s
        .split('-')
        .map((part, i) => {
            if (i === 0) return part
            return part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase()
        })
        .join('')
}

export const mergeMotionConfig = (baseTheme: ThemeSpec, customTheme?: ThemeSpec) => {
    return merge(cloneDeep(baseTheme.Motion), customTheme?.Motion ?? emptyTheme.Motion)
}

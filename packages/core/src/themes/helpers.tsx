import { CSSProperties } from 'react'
import { CompleteThemeSpec, SvgBaseComponent, ThemeSpec } from './types'
import { cloneDeep, merge } from 'lodash'
import { emptyTheme } from './emptyTheme'

// turn js styles into a string of inline-css styles
export const cssStyleString = (style: CSSProperties) => {
    let jsKey: keyof CSSProperties
    const result: string[] = []
    for (jsKey in style) {
        const cssKey = jsKey
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase()
        const value = style[jsKey]
        if (value !== undefined) {
            result.push(cssKey + ': ' + value)
        }
    }
    return result.filter(x => x.indexOf('>') + x.indexOf('<') === -2).join('; ')
}

// turn hyphen-separated strings into camel case
export const camelCase = (s: string | undefined) => {
    if (!s) return s
    return s
        .split('-')
        .map((part, i) => {
            if (i === 0) return part
            return part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase()
        })
        .join('')
}

// get string with css-formatted styles for one component
export const componentStyles = (
    chartId: string,
    component: SvgBaseComponent,
    theme: CompleteThemeSpec
) => {
    const subTheme = theme[component]
    return Object.keys(subTheme)
        .map(variant => {
            const cssString = cssStyleString(subTheme[variant])
            if (cssString.length === 0) return ''
            const leading = '#' + chartId + ' ' + component
            if (variant === 'default') {
                return leading + ' { ' + cssString + ' }'
            }
            return leading + '.' + variant + ' { ' + cssString + ' }'
        })
        .filter(entry => entry.length > 0)
        .filter(entry => entry.indexOf('>') + entry.indexOf('<') === -2)
}

export const mergeMotionConfig = (baseTheme: ThemeSpec, customTheme?: ThemeSpec) => {
    return merge(cloneDeep(baseTheme.Motion), customTheme?.Motion ?? emptyTheme.Motion)
}

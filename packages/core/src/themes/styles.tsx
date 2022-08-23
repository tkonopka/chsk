import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { CSSProperties } from 'react'
import { CssProps } from '../general'
import { SvgBaseComponent } from './types'

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

// get string with css-formatted styles
export const getStyles = (chartId: string, component: SvgBaseComponent) => {
    const theme = useTheme()
    const subTheme = theme[component]
    return Object.keys(subTheme)
        .map(variant => {
            const cssStyle = cssStyleString(subTheme[variant])
            const leading = '#' + chartId + ' ' + component
            if (variant === 'default') {
                return leading + ' { ' + cssStyle + ' }'
            }
            return leading + '.' + variant + ' { ' + cssStyle + ' }'
        })
        .filter(entry => entry.indexOf('>') + entry.indexOf('<') === -2)
}

export const Styles = ({ chartId, styles }: { chartId: string; styles: SvgBaseComponent[] }) => {
    if (styles.length === 0) return null
    const styleDefinitions = styles
        ?.map(styleType => getStyles(chartId, styleType))
        .flat()
        .filter(v => v)
        .join('\n')
    return <style>{styleDefinitions}</style>
}

export const addColor = (style: CssProps | undefined, color: string) => {
    if (!style) return { fill: color, stroke: color }
    let result = cloneDeep(style)
    if (!result.fill) result = merge(result, { fill: color })
    if (!result.stroke) result = merge(result, { stroke: color })
    return result
}

export const addOpacity = (style: CssProps | undefined, opacity: number) => {
    if (!style) return { opacity }
    return merge(cloneDeep(style), { opacity })
}

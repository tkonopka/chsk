import { useTheme } from './themes'
import { getTextStyles } from '../typography'
import { getLineStyles } from '../lines'
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

// get string with css-formatted styles
export const getStyles = ({
    chartId,
    themeKey,
    component,
}: {
    chartId: string
    themeKey: 'circle' | 'line' | 'polygon' | 'rect' | 'text'
    component: string
}) => {
    const theme = useTheme()
    const subTheme = theme[themeKey]
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

export const getCircleStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'circle', component: 'circle' })
}

export const getRectStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'rect', component: 'rect' })
}

export const getPolygonStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'polygon', component: 'polygon' })
}

export const getShapeStyles = (id: string) => {
    return getCircleStyles(id).concat(getRectStyles(id)).concat(getPolygonStyles(id))
}

export const Styles = ({ chartId, styles }: { chartId: string; styles: string[] }) => {
    if (styles.length === 0) return null
    const styleDefinitions = styles
        ?.map(styleType => {
            if (styleType === 'text') return getTextStyles(chartId)
            if (styleType === 'line') return getLineStyles(chartId)
            if (styleType === 'shape') return getShapeStyles(chartId)
            return null
        })
        .flat()
        .filter(layer => layer !== null)
        .join('\n')
    return <style role="styles">{styleDefinitions}</style>
}

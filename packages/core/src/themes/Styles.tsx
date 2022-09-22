import { CompleteThemeSpec, SvgBaseComponent } from './types'
import { useTheme } from './context'
import { cssStyleString } from './helpers'

// get string with css-formatted styles
const getStyles = (chartId: string, component: SvgBaseComponent, theme: CompleteThemeSpec) => {
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
    const theme = useTheme()
    if (styles.length === 0) return null
    const styleDefinitions = styles
        ?.map(styleType => getStyles(chartId, styleType, theme))
        .flat()
        .filter(Boolean)
        .join('\n')
    return <style>{styleDefinitions}</style>
}

import { useTheme } from './theme'
import { cssStyleString } from '../common'
import { getTypographyStyles } from '../typography'
import { getSurfaceStyles } from '../general'
import { getLineStyles } from '../lines'
import { getShapeStyles } from '../shapes'

// get string with css-formatted styles
export const getStyles = ({
    chartId,
    themeKey,
    component,
}: {
    chartId: string
    themeKey: 'typography' | 'surface' | 'line' | 'circle' | 'rect'
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

export const Style = ({ chartId, styles }: { chartId: string; styles: string[] }) => {
    if (styles.length === 0) return null
    const styleDefinitions = styles
        ?.map(styleType => {
            if (styleType === 'typography') return getTypographyStyles(chartId)
            if (styleType === 'surface') return getSurfaceStyles(chartId)
            if (styleType === 'line') return getLineStyles(chartId)
            if (styleType === 'shape') return getShapeStyles(chartId)
            return null
        })
        .flat()
        .filter(layer => layer !== null)
        .join('\n')
    return <style role="styles">{styleDefinitions}</style>
}

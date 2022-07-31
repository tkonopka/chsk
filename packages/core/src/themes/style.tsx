import { useTheme } from './theme'
import { cssStyleString } from '../utils'

export const Style = ({
    id,
    themeKey,
    component,
    prefix,
}: {
    id: string
    themeKey: 'typography' | 'surface' | 'line'
    component: string
    prefix: string
}) => {
    const theme = useTheme()
    const subTheme = theme[themeKey]

    const result = Object.keys(subTheme)
        .map(variant => {
            const cssStyle = cssStyleString(subTheme[variant])
            const leading = '#' + id + ' ' + component
            if (variant === 'default') {
                return leading + ' { ' + cssStyle + ' }'
            }
            return leading + '.' + prefix + '-' + variant + ' { ' + cssStyle + ' }'
        })
        .filter(entry => entry.indexOf('>') + entry.indexOf('<') === -2)

    return (
        <style key={'style-' + themeKey} role={'style-' + themeKey}>
            {result.join('\n')}
        </style>
    )
}

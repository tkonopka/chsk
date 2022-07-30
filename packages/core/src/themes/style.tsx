import { ThemeSpec } from './types'
import { useTheme } from './theme'
import { cssStyleString } from '../utils'

export const Style = ({
    themeKey,
    component,
    prefix,
}: {
    themeKey: keyof ThemeSpec
    component: string
    prefix: string
}) => {
    const theme = useTheme()
    const subTheme = theme[themeKey]

    const result = Object.keys(subTheme)
        .map(variant => {
            const cssStyle = cssStyleString(subTheme[variant])
            if (variant === 'default') {
                return component + ' { ' + cssStyle + ' }'
            }
            return component + '.' + prefix + '-' + variant + ' { ' + cssStyle + ' }'
        })
        .filter(entry => entry.indexOf('>') + entry.indexOf('<') === -2)

    return (
        <style key={'style-' + themeKey} role={'style-' + themeKey}>
            {result.join('\n')}
        </style>
    )
}

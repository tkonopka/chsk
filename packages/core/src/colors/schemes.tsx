import { useTheme } from '../themes'

export const getColorStyles = (id: string) => {
    console.log(id)
    //const theme = useTheme()
    //const subTheme = theme.Colors

    /**
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
    **/
}

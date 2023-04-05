import { ThemeProvider } from './context'
import { useStyles } from './hooks'
import { defaultTheme } from './defaultTheme'
import { StyleProps } from './types'

// InnerStyle is a separate component because it uses the useStyles hook
// Placing the hook in a child component allows the ThemeProvider in Style to take effect
const InnerStyle = ({ ancestor, selectors }: Pick<StyleProps, 'ancestor' | 'selectors'>) => {
    return <style>{useStyles({ ancestor, selectors })}</style>
}

export const Style = ({
    ancestor,
    selectors,
    baseTheme = defaultTheme,
    theme,
    children,
}: StyleProps) => {
    return (
        <ThemeProvider baseTheme={baseTheme} theme={theme}>
            <InnerStyle key={0} ancestor={ancestor} selectors={selectors} />
            {children}
        </ThemeProvider>
    )
}

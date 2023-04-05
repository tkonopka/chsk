import { useMemo } from 'react'
import { ThemeProvider, useTheme } from './context'
import { defaultTheme } from './defaultTheme'
import { StyleProps } from './types'
import { getCss } from './utils'

// InnerStyle is a separate component because it call the useTheme hook
// Placing the hook in a child component allows the ThemeProvider in Style to take effect
const InnerStyle = ({ ancestor, selectors }: Pick<StyleProps, 'ancestor' | 'selectors'>) => {
    const theme = useTheme()
    const css = useMemo(() => getCss(theme, selectors, ancestor), [ancestor, selectors, theme])
    return <style>{css}</style>
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

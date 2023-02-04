import { createContext, ReactNode, useContext, useMemo } from 'react'
import { CompleteThemeSpec, ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { mergeTheme } from './utils'

export const ThemeContext = createContext(defaultTheme as CompleteThemeSpec)

export const ThemeProvider = ({
    baseTheme,
    theme,
    children,
}: {
    baseTheme: CompleteThemeSpec
    theme?: ThemeSpec
    children: ReactNode
}) => {
    const mergedTheme = useMemo(() => mergeTheme(baseTheme, theme) as CompleteThemeSpec, [theme])
    return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

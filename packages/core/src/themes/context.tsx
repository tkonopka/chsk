import { createContext, ReactNode, useContext } from 'react'
import { CompleteThemeSpec, ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { mergeTheme } from './utils'

export const ThemeContext = createContext(defaultTheme as CompleteThemeSpec)

export const ThemeProvider = ({ theme, children }: { theme?: ThemeSpec; children: ReactNode }) => {
    const mergedTheme = mergeTheme(defaultTheme, theme) as CompleteThemeSpec
    return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

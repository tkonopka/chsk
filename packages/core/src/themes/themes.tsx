import { createContext, ReactNode, useContext } from 'react'
import { CompleteThemeSpec, ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { merge, cloneDeep } from 'lodash'

export const mergeTheme = (baseTheme: CompleteThemeSpec, customTheme: ThemeSpec) => {
    return merge(cloneDeep(baseTheme), customTheme)
}

export const ThemeContext = createContext(defaultTheme as CompleteThemeSpec)

export const ThemeProvider = ({ theme, children }: { theme: ThemeSpec; children: ReactNode }) => {
    const mergedTheme: CompleteThemeSpec = mergeTheme(defaultTheme, theme)
    return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

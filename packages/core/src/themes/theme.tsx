import { createContext, ReactNode, useContext } from 'react'
import { CompleteThemeSpec, ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { merge, cloneDeep } from 'lodash'

export const mergeTheme = (baseTheme: CompleteThemeSpec, customTheme: ThemeSpec) => {
    return merge(cloneDeep(baseTheme), customTheme)
}

export const themeContext = createContext(defaultTheme as CompleteThemeSpec)

export const ThemeProvider = ({ theme, children }: { theme: ThemeSpec; children: ReactNode }) => {
    const mergedTheme: CompleteThemeSpec = mergeTheme(defaultTheme, theme)
    return <themeContext.Provider value={mergedTheme}>{children}</themeContext.Provider>
}

export const useTheme = () => useContext(themeContext)

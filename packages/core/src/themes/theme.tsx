import { createContext, ReactNode, useContext } from 'react'
import { ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { merge, cloneDeep } from 'lodash'

export const mergeTheme = (baseTheme: ThemeSpec, customTheme: ThemeSpec) => {
    return merge(cloneDeep(baseTheme), customTheme)
}

export const themeContext = createContext(defaultTheme as ThemeSpec)

export const ThemeProvider = ({ theme, children }: { theme: ThemeSpec; children: ReactNode }) => {
    const mergedTheme: ThemeSpec = mergeTheme(defaultTheme, theme)
    return <themeContext.Provider value={mergedTheme}>{children}</themeContext.Provider>
}

export const useTheme = () => useContext(themeContext)

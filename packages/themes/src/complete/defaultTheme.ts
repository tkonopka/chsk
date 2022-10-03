import { ThemeSpec, defaultTheme as coreDefaultTheme } from '@chask/core'
import { cloneDeep } from 'lodash'

// This theme is exactly the same as 'defaultTheme' in @chask/core
// it is provided here for consistency with the other complete themes.
// Thus, it is possible to import all themes - default or otherwise - from @chask/themes

export const defaultTheme: ThemeSpec = cloneDeep(coreDefaultTheme)

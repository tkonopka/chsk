import { ThemeSpec, defaultTheme as coreDefaultTheme } from '@chsk/core'
import { cloneDeep } from 'lodash'

// This theme is exactly the same as 'defaultTheme' in @chsk/core
// it is provided here for consistency with the other complete themes.
// Thus, it is possible to import all themes - default or otherwise - from @chsk/themes

export const defaultTheme: ThemeSpec = cloneDeep(coreDefaultTheme)

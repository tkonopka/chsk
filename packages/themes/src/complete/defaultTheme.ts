import { defaultTheme as coreDefaultTheme, CompleteThemeSpec } from '@chsk/core'
import { cloneDeep } from 'lodash'

// This theme is exactly the same as 'defaultTheme' in @chsk/core.
// It is provided here for consistency with other complete themes in @chsk/themes.
// With this definition, it is possible to import the default theme from @chsk/themes.

export const defaultTheme: CompleteThemeSpec = cloneDeep(coreDefaultTheme)

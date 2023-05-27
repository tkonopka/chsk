import { cloneProps, CompleteThemeSpec, emptyTheme as coreEmptyTheme } from '@chsk/core'

// This theme is exactly the same as 'emptyTheme' in @chsk/core.
// It is provided here for consistency with other complete themes in @chsk/themes.
// With this definition, it is possible to import the empty theme from @chsk/themes

export const emptyTheme: CompleteThemeSpec = cloneProps(coreEmptyTheme)

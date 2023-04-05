import { useMemo } from 'react'
import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { svgBaseComponents, ThemedComponent, StyleProps, WithVariant } from './types'
import { componentStyles } from './helpers'

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return useMemo(() => {
        return merge(cloneDeep(theme[key][String(props.variant ?? 'default')]), props)
    }, [theme, props, key])
}

export const useStyles = ({ ancestor, selectors }: Pick<StyleProps, 'ancestor' | 'selectors'>) => {
    const theme = useTheme()
    if (selectors === null || (selectors && selectors.length === 0)) return null
    return useMemo(() => {
        return (selectors ?? svgBaseComponents)
            .map(selector => componentStyles(ancestor, selector, theme))
            .flat()
            .filter(Boolean)
            .join('\n')
    }, [ancestor, selectors, theme])
}

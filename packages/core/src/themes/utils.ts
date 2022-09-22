import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { ThemedComponent, ThemeSpec, WithVariant } from './types'
import { CssProps } from '../general'
import { camelCase } from './helpers'

// turn an array of string into a single space-separate className string
export const composeClassName = function (names: Array<string | undefined>) {
    const result = names
        .filter(x => x !== undefined)
        .map(x => camelCase(x))
        .join(' ')
    return result === '' ? undefined : result
}

export const addColor = (style: CssProps | undefined, color: string) => {
    if (!style) return { fill: color, stroke: color }
    let result = cloneDeep(style)
    if (!result.fill) result = merge(result, { fill: color })
    if (!result.stroke) result = merge(result, { stroke: color })
    return result
}

export const addOpacity = (style: CssProps | undefined, opacity: number) => {
    if (!style) return { opacity }
    return merge(cloneDeep(style), { opacity })
}

export const mergeTheme = (baseTheme: ThemeSpec, customTheme?: ThemeSpec) => {
    return merge(cloneDeep(baseTheme), customTheme ?? {})
}

export const themedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return merge(cloneDeep(theme[key][String(props.variant ?? 'default')]), props)
}

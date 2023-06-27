import { CssProps, cloneProps, mergeProps } from '../general'
import { CompleteThemeSpec, SvgBaseComponent, svgBaseComponents, ThemeSpec } from './types'
import { camelCase, componentStyles } from './helpers'
import {
    AxisLabelThemedProps,
    AxisThemedProps,
    AxisTicksThemedProps,
    GridLinesThemedProps,
} from '../axes'
import {
    LegendColorScaleThemedProps,
    LegendItemListThemedProps,
    LegendItemThemedProps,
    LegendSizeScaleThemedProps,
    LegendThemedProps,
} from '../legends'
import { MilestoneMotionThemedProps } from '../charts'
import { SurfaceThemedProps, ViewClipThemedProps, ViewThemedProps } from '../views'
import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from '../tooltips'

// construct a className string by composing a variant code and a className string
export const getClassName = (
    variant: string,
    className: string | undefined,
    skipDefault = true
): string | undefined => {
    const prefix = skipDefault && variant === 'default' ? '' : camelCase(variant)
    if (prefix.length === 0 && !className) return undefined
    return prefix + (className && prefix.length ? ' ' : '') + camelCase(className)
}

export const addColor = (style: CssProps | undefined, color: string | undefined) => {
    if (!style) return { fill: color, stroke: color }
    const result = cloneProps(style)
    if (!result.fill) {
        result.fill = color
    }
    if (!result.stroke) {
        result.stroke = color
    }
    return result
}

export const addOpacity = (style: CssProps | undefined, opacity: number) => {
    if (!style) return { opacity }
    const result = cloneProps(style)
    result.opacity = opacity
    return result
}

export const mergeTheme = (baseTheme: ThemeSpec, customTheme?: ThemeSpec) => {
    return mergeProps(cloneProps(baseTheme), customTheme ?? {})
}

export const mergeThemes = (themes: ThemeSpec[]) => {
    let result = cloneProps(themes[0])
    themes.forEach((theme: ThemeSpec, i: number) => {
        if (i === 0) return
        result = mergeProps(result, theme)
    })
    return result
}

/**
 * generate css definitions from a theme object
 *
 * @param theme object with theme
 * @param selectors specifications for what to include in output:
 * null - skip calculation
 * undefined - report all css definitions
 * array - report css definitions for selected selectors
 * @param ancestor string, prefix for css definitions
 */
export const getCss = (
    theme: CompleteThemeSpec,
    selectors: null | undefined | SvgBaseComponent[],
    ancestor: string
) => {
    if (selectors === null || (selectors && selectors.length === 0)) return null
    return (selectors ?? svgBaseComponents)
        .map(selector => componentStyles(ancestor, selector, theme))
        .flat()
        .filter(Boolean)
        .join('\n')
}

/**
 * fill missing properties
 *
 * @param x primary object, this will be modified
 * @param y secondary object, values from this object will be transferred into x
 */
export const fillProps = <T>(
    x: T,
    y:
        | undefined
        | Partial<CssProps>
        | Partial<AxisThemedProps>
        | Partial<AxisLabelThemedProps>
        | Partial<AxisTicksThemedProps>
        | Partial<GridLinesThemedProps>
        | Partial<LegendThemedProps>
        | Partial<LegendItemThemedProps>
        | Partial<LegendItemListThemedProps>
        | Partial<LegendColorScaleThemedProps>
        | Partial<LegendSizeScaleThemedProps>
        | Partial<SurfaceThemedProps>
        | Partial<TooltipThemedProps>
        | Partial<TooltipItemListThemedProps>
        | Partial<TooltipItemThemedProps>
        | Partial<TooltipThemedProps>
        | Partial<MilestoneMotionThemedProps>
        | Partial<ViewThemedProps>
        | Partial<ViewClipThemedProps>
): T => {
    if (x === undefined || x === null) return x
    if (typeof x !== 'object' || typeof y !== 'object') return x
    const result = { ...x } as Record<string, unknown>
    const yObj = y as Record<string, unknown>
    const xKeys = Object.keys(x)
    for (const k of Object.keys(yObj).values()) {
        if (xKeys.indexOf(k) < 0) {
            result[k] = yObj[k]
        }
    }
    return result as T
}

/**
 * framer-motion has a bug that removes transforms in server-side rendering (ssr).
 * This function adjust a style object so that those transforms are included.
 */
export const ssrCompatible = (
    style: undefined | CssProps,
    config: { x: number; y: number; rotate?: number }
) => {
    if (typeof window === 'object') return style
    const rotate = config.rotate === undefined ? '' : 'rotate(' + config.rotate + 'deg)'
    return { ...style, transform: 'translate(' + config.x + 'px,' + config.y + 'px)' + rotate }
}

import { CompleteThemeSpec, getCss } from '@chsk/core'
import {
    changeAncestor,
    cleanStyle,
    rgb2hex,
    roundPxDecimalPlaces,
    scanSvg,
    shakeStyles,
} from './helpers'
import { CleanSvgConfig } from './types'

export const defaultCleanSvgConfig: CleanSvgConfig = {
    skipAttributes: ['transform-origin', 'svg.id'],
    skipRoles: ['dimensions-reference', 'view-controller'],
    roundAttributes: [
        'x',
        'x1',
        'x2',
        'y',
        'y1',
        'y2',
        'width',
        'height',
        'cx',
        'cy',
        'r',
        'rx',
        'ry',
        'opacity',
        'fill-opacity',
        'stroke-width',
        'stroke-dashoffset',
        'stroke-dasharray',
    ],
    roundAttributeDecimalPlaces: 3,
    newlineTags: ['style', 'g', 'rect', 'circle', 'line', 'path', 'text', 'filter', 'defs'],
    shake: true,
}

/**
 * edit an Svg element
 *
 * Motivation:
 *
 * Svg element can contain 'spurious' content for several reason:
 * 1. Animation libraries add instructions into svg element style tags,
 * but some of the instructions / transforms are not needed for static images.
 * 2. Some style transforms are supported by browsers, but not by other viewers, e.g. inkscape.
 * 3. Coordinates may have too many decimal points. The high precision can be a
 * result of calculation or animation, but is not needed for static images.
 *
 * Cleaning the Svg element increases compatibility with viewers and reduces file size.
 *
 * Warning:
 *
 * This function modifies object 'element'
 *
 * @param element HTML element to clean
 * @param config object holding cleaning options
 * @param theme object with theme, if available then css definitions will be recomputed
 * @param content object summarizing svg components and styles (for internal use)
 */
export const cleanSvg = (
    element: HTMLElement,
    config: CleanSvgConfig = defaultCleanSvgConfig,
    theme?: CompleteThemeSpec,
    content?: Record<string, Set<string>>
): HTMLElement => {
    const nodeName = element.nodeName

    // on root svg, scan document to learn about selectors and class names
    if (nodeName === 'svg') {
        content = scanSvg(element, config)
        content['svg.id'] = new Set([String(element.getAttribute('id'))])
    }

    // recompute css definitions using the theme (useful for charts that use outside/global css)
    if (nodeName === 'style' && theme) {
        const [chartId] = content ? Array.from(content['svg.id']) : ''
        element.textContent = getCss(theme, undefined, '#' + chartId)
    }

    const skipSet = new Set<string>(config.skipAttributes)

    // elements without attributes are plain text
    if (!element.attributes) {
        // style definitions might require shaking
        if (element.parentNode?.nodeName === 'style') {
            if (config.shake && content) {
                element.textContent = shakeStyles(element.textContent, content)
            }
            element.textContent = changeAncestor(element.textContent, skipSet.has('svg.id'))
        }
        return element
    }

    // simplify attributes
    const roundSet = new Set<string>(config.roundAttributes)
    const n = config.roundAttributeDecimalPlaces
    const skipAttributes: string[] = []
    for (const attr of element.attributes) {
        if (roundSet.has(attr.name)) {
            element.setAttribute(attr.name, roundPxDecimalPlaces(attr.value, n))
        } else if (attr.name === 'style') {
            const { style, transform } = cleanStyle(attr.value, n)
            element.setAttribute('style', style)
            if (style === '') {
                element.removeAttribute('style')
            }
            if (transform) {
                element.setAttribute('transform', transform)
            }
        } else if (attr.name === 'fill' || attr.name === 'stroke') {
            element.setAttribute(attr.name, rgb2hex(attr.value))
        }
        // special cases
        if (
            attr.value === 'undefined' ||
            (attr.name === 'opacity' && attr.value === '1') ||
            skipSet.has(nodeName + '.' + attr.name)
        ) {
            skipAttributes.push(attr.name)
        }
    }
    skipAttributes.concat(config.skipAttributes).forEach(attrName => {
        element.removeAttribute(attrName)
    })

    // remove some child nodes
    if (element.hasChildNodes() && config.skipRoles.length > 0) {
        // element.childNodes does not support .map or .filter, so iteration must be with .forEach
        const skipChildren: ChildNode[] = []
        element.childNodes.forEach(child => {
            const childElement = child as HTMLElement
            if (!childElement.attributes) return
            const role = childElement.getAttribute('role')
            if (role !== null && config.skipRoles.indexOf(role) >= 0) {
                skipChildren.push(child)
            }
        })
        skipChildren.forEach(child => child.remove())
    }

    // apply the same transformations to all child elements
    if (element.hasChildNodes())
        element.childNodes.forEach(child => cleanSvg(child as HTMLElement, config, theme, content))

    return element
}

import { cleanStyle, roundPxDecimalPlaces, scanSvg, shakeStyles } from './helpers'
import { CleanSvgConfig } from './types'

export const defaultCleanSvgConfig: CleanSvgConfig = {
    skipAttributeNames: ['transform-origin'],
    skipRoles: ['dimensions-reference', 'view-controller'],
    roundAttributeNames: [
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
    newlineAfterTags: ['style', 'g', 'rect', 'circle', 'line', 'path', 'text', 'filter', 'defs'],
    shakeStyles: true,
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
 * @param content object summarizing svg components and styles (for internal use)
 */
export const cleanSvg = (
    element: HTMLElement,
    config: CleanSvgConfig = defaultCleanSvgConfig,
    content?: Record<string, Set<string>>
): HTMLElement => {
    if (element.nodeName === 'svg' && config.shakeStyles) {
        content = scanSvg(element, config)
    }

    // elements without attributes are plain text
    if (!element.attributes) {
        // style definitions might require shaking
        if (element.parentNode?.nodeName === 'style' && config.shakeStyles && content) {
            element.textContent = shakeStyles(element.textContent, content)
        }
        return element
    }

    // simplify attributes
    const roundSet = new Set<string>(config.roundAttributeNames)
    const n = config.roundAttributeDecimalPlaces
    const skipAttributes: string[] = []
    for (const attr of element.attributes) {
        if (roundSet.has(attr.name)) {
            element.setAttribute(attr.name, roundPxDecimalPlaces(attr.value, n))
        }
        if (attr.name === 'style') {
            const { style, transform } = cleanStyle(attr.value, n)
            element.setAttribute('style', style)
            if (style === '') {
                element.removeAttribute('style')
            }
            if (transform) {
                element.setAttribute('transform', transform)
            }
        }
        if (attr.value === 'undefined') {
            skipAttributes.push(attr.name)
        }
    }
    skipAttributes.concat(config.skipAttributeNames).forEach(attrName => {
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
        element.childNodes.forEach(child => cleanSvg(child as HTMLElement, config, content))

    return element
}

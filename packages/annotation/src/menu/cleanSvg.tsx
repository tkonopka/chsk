import { cleanStyle, roundPxDecimalPlaces } from './helpers'

export const defaultCleanSvgConfig = {
    skipAttributeNames: ['transform-origin'],
    roundAttributeNames: ['x', 'x1', 'x2', 'y', 'y1', 'y2', 'width', 'height'],
    roundAttributeDecimalPlaces: 3,
}

/**
 * Edits an Svg element
 *
 * Motivation:
 *
 * However, some of the transforms are unnecessary for static images.
 * Some coordinates have too many decimal points and can be rounded to reduce file size.
 * Also, some style transforms are supported by browsers, but not by other viewers, e.g. inkscape.
 *
 * Cleaning the Svg element reduces image file size and increases compatibility with viewers.
 *
 * Warning:
 *
 * This function modifies object 'element'
 */
export const cleanSvg = (element: HTMLElement, config = defaultCleanSvgConfig): HTMLElement => {
    // pure text elements do not require any processing
    if (!element.attributes) {
        return element
    }

    // simplify attributes
    const roundSet = new Set<string>(config.roundAttributeNames)
    const n = config.roundAttributeDecimalPlaces
    for (const attr of element.attributes) {
        if (roundSet.has(attr.name)) {
            element.setAttribute(attr.name, roundPxDecimalPlaces(attr.value, n))
        }
        if (attr.name === 'style') {
            const { style, transform } = cleanStyle(attr.value, n)
            element.setAttribute('style', style)
            if (transform) {
                element.setAttribute('transform', transform)
            }
        }
    }
    config.skipAttributeNames.forEach(attrName => {
        element.removeAttribute(attrName)
    })

    // apply the same transformations to all child elements
    if (element.hasChildNodes())
        element.childNodes.forEach(child => cleanSvg(child as HTMLElement, config))

    return element
}

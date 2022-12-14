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

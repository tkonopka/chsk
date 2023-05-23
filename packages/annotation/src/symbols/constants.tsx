/**
 * Collection of settings for symbols, e.g. for scatter plots or legends.
 *
 * The intention is to scale each symbol type so that its area, given a
 * radius parameter, is equal to the area of circle with that radius.
 *
 * Some symbols are additionally scaled slightly with a 'visual factor'.
 * This balances a visual perception effect, where for example triangles with
 * area A can appear larger visually than circles with the same area A.
 */

import { range } from '@chsk/core'

/** rectangles */

const goldenRectVisualFactor = 0.96
const phi = (1 + Math.sqrt(5)) / 2
export const goldenRectWidth = Math.sqrt(Math.PI * phi) * goldenRectVisualFactor
export const goldenRectHeight = Math.sqrt(Math.PI / phi) * goldenRectVisualFactor

/** triangles */

const equilateralVisualFactor = 0.94

// distance from center of equilateral triangle to one of the vertices
const equilateralArm = 2 * Math.sqrt(Math.PI / (3 * Math.sqrt(3))) * equilateralVisualFactor
// length of a side of an equilateral triangle of unit area
const equilateralSide = Math.sqrt(3) * equilateralArm * equilateralVisualFactor
// coordinates for vertices of an equilateral triangle
export const equilateralCoordinates = [
    [0, -equilateralArm],
    [equilateralSide / 2, equilateralArm / 2],
    [-equilateralSide / 2, equilateralArm / 2],
]

/** diamond */

const diamondVisualFactor = 0.96
// distance from diamond center to one of its corners
const diamondEdge = Math.sqrt(Math.PI / 2) * diamondVisualFactor
export const diamondCoordinates = [
    [0, -diamondEdge],
    [diamondEdge, 0],
    [0, diamondEdge],
    [-diamondEdge, 0],
]

/** line segment */

// segmentArm is equivalent to a 'visual factor' used for symbols
const segmentArm = 1.1

// coordinates for vertices of line segment
export const segmentCoordinates = [
    [-segmentArm, 0],
    [segmentArm, 0],
]

/** pentagon */

const angleOffset = -Math.PI / 2
export const pentagonCoordinates = range(0, 5).map(i => [
    Math.cos(angleOffset + (2 * Math.PI * i) / 5),
    Math.sin(angleOffset + (2 * Math.PI * i) / 5),
])

/** star */

export const starCoordinates: Array<number[]> = []
const starProtrusion = 0.447
range(0, 5).forEach(i => {
    let angle = angleOffset + 2 * Math.PI * ((2 * i) / 10)
    starCoordinates.push([
        (1 + starProtrusion) * Math.cos(angle),
        (1 + starProtrusion) * Math.sin(angle),
    ])
    angle += 2 * Math.PI * (1 / 10)
    starCoordinates.push([
        (1 - starProtrusion) * Math.cos(angle),
        (1 - starProtrusion) * Math.sin(angle),
    ])
})

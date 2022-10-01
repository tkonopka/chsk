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

/** rectangles */

const squareVisualFactor = 0.96
export const squareHalfSide = 0.5 * Math.sqrt(Math.PI) * squareVisualFactor

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

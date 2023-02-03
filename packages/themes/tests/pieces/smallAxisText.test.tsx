import { smallAxisTextThemePiece } from '../../src/pieces/smallAxisText'
import { defaultTheme } from '../../src/complete/defaultTheme'
import { pxValue } from '../utils'

describe('small axis text', () => {
    it('specifies a small axis label size', () => {
        expect(smallAxisTextThemePiece).toHaveProperty('text')
        const refStyle = defaultTheme.text?.['axisLabel']
        const themeStyle = smallAxisTextThemePiece.text?.['axisLabel']
        expect(pxValue(themeStyle?.fontSize)).toBeLessThan(pxValue(refStyle?.fontSize))
    })

    it('specifies a small tick label size', () => {
        expect(smallAxisTextThemePiece).toHaveProperty('text')
        const refStyle = defaultTheme.text?.['tickLabel']
        const themeStyle = smallAxisTextThemePiece.text?.['tickLabel']
        expect(pxValue(themeStyle?.fontSize)).toBeLessThan(pxValue(refStyle?.fontSize))
    })

    it('decreases distance between axis and tick labels', () => {
        expect(smallAxisTextThemePiece).toHaveProperty('text')
        const refOffset = defaultTheme.AxisTicks?.top?.labelOffset
        const themeOffset = smallAxisTextThemePiece.AxisTicks?.top?.labelOffset
        expect(pxValue(themeOffset)).toBeLessThan(pxValue(refOffset))
    })

    it('decreases distance between axis and axis labels', () => {
        expect(smallAxisTextThemePiece).toHaveProperty('text')
        const refOffset = defaultTheme.AxisLabel?.top?.offset
        const themeOffset = smallAxisTextThemePiece.AxisLabel?.top?.offset
        expect(pxValue(themeOffset)).toBeLessThan(pxValue(refOffset))
    })
})

import { smallAxisTextTheme } from '../../src/partial'
import { defaultTheme } from '../../src/complete'
import { pxValue } from '../utils'

describe('small axis text', () => {
    it('specifies a small axis label size', () => {
        expect(smallAxisTextTheme).toHaveProperty('text')
        const refLabelStyle = defaultTheme.text?.['axisLabel']
        const refDefaultStyle = defaultTheme.text?.['default']
        const themeStyle = smallAxisTextTheme.text?.['axisLabel']
        expect(pxValue(themeStyle?.fontSize)).toBeLessThan(
            pxValue(refLabelStyle?.fontSize ?? refDefaultStyle?.fontSize)
        )
    })

    it('specifies a small tick label size', () => {
        expect(smallAxisTextTheme).toHaveProperty('text')
        const refStyle = defaultTheme.text?.['tickLabel']
        const themeStyle = smallAxisTextTheme.text?.['tickLabel']
        expect(pxValue(themeStyle?.fontSize)).toBeLessThan(pxValue(refStyle?.fontSize))
    })

    it('decreases distance between axis and tick labels', () => {
        expect(smallAxisTextTheme).toHaveProperty('text')
        const refOffset =
            defaultTheme.AxisTicks?.top?.labelOffset ?? defaultTheme.AxisTicks?.default?.labelOffset
        const themeOffset = smallAxisTextTheme.AxisTicks?.top?.labelOffset
        expect(pxValue(themeOffset)).toBeLessThan(pxValue(refOffset))
    })

    it('decreases distance between axis and axis labels', () => {
        expect(smallAxisTextTheme).toHaveProperty('text')
        const refOffset =
            defaultTheme.AxisLabel?.top?.offset ?? defaultTheme.AxisLabel?.default?.offset
        const themeOffset = smallAxisTextTheme.AxisLabel?.top?.offset
        expect(pxValue(themeOffset)).toBeLessThan(pxValue(refOffset))
    })
})

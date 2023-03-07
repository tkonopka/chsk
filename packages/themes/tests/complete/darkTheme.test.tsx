import { darkTheme } from '../../src/complete'
import { colArray } from '../utils'

describe('darkTheme', () => {
    it('check colArray', () => {
        expect(colArray('#00ff10')).toStrictEqual([0, 255, 16])
        expect(colArray('#00f')).toStrictEqual([0, 0, 255])
    })

    it('defines light color for text', () => {
        const textFill = darkTheme.text.default.fill ?? ''
        const textRgb = colArray(textFill)
        expect(textRgb[0]).toBeGreaterThan(128)
        expect(textRgb[1]).toBeGreaterThan(128)
        expect(textRgb[2]).toBeGreaterThan(128)
    })
})

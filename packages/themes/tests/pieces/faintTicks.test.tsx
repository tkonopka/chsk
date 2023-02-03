import { faintTicksThemePiece } from '../../src/pieces/faintTicks'
import { defaultTheme } from '../../src/complete/defaultTheme'
import { colArray } from '../utils'

describe('faintTicksThemePiece', () => {
    it('specifies a faint color for tick labels', () => {
        expect(faintTicksThemePiece).toHaveProperty('text')
        let refColor = colArray(defaultTheme.text?.['tickLabel']?.fill)
        if (isNaN(refColor[0])) {
            refColor = colArray(defaultTheme.text?.['default']?.fill)
        }
        const themeColor = colArray(faintTicksThemePiece.text?.['tickLabel']?.fill)
        expect(refColor[0]).toBeLessThan(themeColor[0])
        expect(refColor[1]).toBeLessThan(themeColor[1])
        expect(refColor[2]).toBeLessThan(themeColor[2])
    })

    it.skip('specifies a faint color for tick lines', () => {
        expect(faintTicksThemePiece).toHaveProperty('text')
        const refColor = colArray(defaultTheme.line?.['tick']?.stroke)
        const themeColor = colArray(faintTicksThemePiece.line?.['tick']?.stroke)
        expect(refColor[0]).toBeLessThan(themeColor[0])
        expect(refColor[1]).toBeLessThan(themeColor[1])
        expect(refColor[2]).toBeLessThan(themeColor[2])
    })
})

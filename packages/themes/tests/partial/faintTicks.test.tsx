import { faintTicksTheme } from '../../src'
import { defaultTheme } from '../../src/complete'
import { colArray } from '../utils'

describe('faintTicksTheme', () => {
    it('specifies a faint color for tick labels', () => {
        expect(faintTicksTheme).toHaveProperty('text')
        let refColor = colArray(defaultTheme.text?.['tickLabel']?.fill)
        if (isNaN(refColor[0])) {
            refColor = colArray(defaultTheme.text?.['default']?.fill)
        }
        const themeColor = colArray(faintTicksTheme.text?.['tickLabel']?.fill)
        expect(refColor[0]).toBeLessThan(themeColor[0])
        expect(refColor[1]).toBeLessThan(themeColor[1])
        expect(refColor[2]).toBeLessThan(themeColor[2])
    })

    it('specifies a faint color for tick lines', () => {
        expect(faintTicksTheme).toHaveProperty('text')
        const refColor = colArray(defaultTheme.line?.['tick']?.stroke)
        const themeColor = colArray(faintTicksTheme.line?.['tick']?.stroke)
        expect(refColor[0]).toBeLessThan(themeColor[0])
        expect(refColor[1]).toBeLessThan(themeColor[1])
        expect(refColor[2]).toBeLessThan(themeColor[2])
    })
})

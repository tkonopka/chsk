import { classicTheme } from '../src'

describe('classic theme', () => {
    it('add', () => {
        expect(classicTheme).toHaveProperty('AxisTicks')
    })
})

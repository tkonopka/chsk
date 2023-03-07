import { fontSystemUITheme } from '../../src/partial'

describe('font system-ui', () => {
    it('specifies default font family', () => {
        expect(fontSystemUITheme).toHaveProperty('text')
        const textStyle = fontSystemUITheme.text?.['default']
        expect(textStyle?.fontFamily).toBeDefined()
    })
})

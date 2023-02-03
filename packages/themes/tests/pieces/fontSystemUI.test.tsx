import { fontSystemUIThemePiece } from '../../src/pieces/fontSystemUI'

describe('font system-ui', () => {
    it('specifies default font family', () => {
        expect(fontSystemUIThemePiece).toHaveProperty('text')
        const textStyle = fontSystemUIThemePiece.text?.['default']
        expect(textStyle?.fontFamily).toBeDefined()
    })
})

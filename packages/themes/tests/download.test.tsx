import { downloadThemePiece } from '../src'

describe('download theme', () => {
    it('specifies styles for rect and path', () => {
        expect(downloadThemePiece).toHaveProperty('rect')
        expect(downloadThemePiece).toHaveProperty('path')
    })
})

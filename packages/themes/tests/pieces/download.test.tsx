import { downloadTheme } from '../../src/pieces'

describe('download theme', () => {
    it('specifies styles for text and path', () => {
        expect(downloadTheme).toHaveProperty('text')
        expect(downloadTheme).toHaveProperty('path')
    })

    it('specifies fill opacity for paths', () => {
        expect(downloadTheme?.path?.download?.fillOpacity).toBeGreaterThan(0)
    })
})

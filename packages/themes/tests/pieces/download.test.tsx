import { downloadTheme } from '../../src/pieces'

describe('download theme', () => {
    it('specifies styles for rect and path', () => {
        expect(downloadTheme).toHaveProperty('rect')
        expect(downloadTheme).toHaveProperty('path')
    })

    it('specifies fill opacity for paths', () => {
        expect(downloadTheme?.path?.download?.fillOpacity).toBeGreaterThan(0)
    })
})

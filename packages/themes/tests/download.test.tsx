import { downloadThemeSpec } from '../src'

describe('download theme', () => {
    it('specifies styles for rect and path', () => {
        expect(downloadThemeSpec).toHaveProperty('rect')
        expect(downloadThemeSpec).toHaveProperty('path')
    })
})

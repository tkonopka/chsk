import { mergeTheme, defaultTheme } from '../src'
import { ThemeSpec } from '../src'

describe('themes', () => {
    it('merge adds a new property', () => {
        const customTheme: ThemeSpec = {
            line: {
                default: {
                    strokeLinecap: 'round',
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme)
        expect(defaultTheme['line']['default']).not.toHaveProperty('strokeLinecap')
        expect(result['line']['default']).toHaveProperty('strokeLinecap', 'round')
    })

    it('merge replaces an existing property', () => {
        const customTheme: ThemeSpec = {
            surface: {
                inner: {
                    fill: '#0000dd',
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme)
        expect(defaultTheme['surface']['inner']).toHaveProperty('fill', '#eeeeee')
        expect(result['surface']['inner']).toHaveProperty('fill', '#0000dd')
    })
})

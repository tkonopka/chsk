import { CssProps } from '../../src/general'
import {
    getClassName,
    addColor,
    addOpacity,
    defaultTheme,
    CompleteThemeSpec,
    mergeTheme,
    ThemeSpec,
    mergeThemes,
    getCss,
    fillProps,
} from '../../src/themes'

describe('mergeTheme', () => {
    it('creates a copy', () => {
        const customTheme: ThemeSpec = {
            line: {
                default: {
                    strokeLinecap: 'round',
                },
            },
        }
        const result = mergeTheme(customTheme, undefined) as ThemeSpec
        expect(result['line']?.['default']).toHaveProperty('strokeLinecap', 'round')
        result['line'] = undefined
        expect(result['line']).toBeUndefined()
        expect(customTheme['line']).not.toBeUndefined()
    })

    it('handles trivial theme', () => {
        const customTheme: ThemeSpec = {
            line: {
                default: {
                    strokeLinecap: 'round',
                },
            },
        }
        const result = mergeTheme(customTheme, {}) as ThemeSpec
        expect(result['line']?.['default']).toHaveProperty('strokeLinecap', 'round')
        result['line'] = undefined
        expect(result['line']).toBeUndefined()
        expect(customTheme['line']).not.toBeUndefined()
    })

    it('adds a new property', () => {
        const customTheme: ThemeSpec = {
            line: {
                default: {
                    strokeLinecap: 'round',
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme) as CompleteThemeSpec
        expect(defaultTheme['line']['default']).not.toHaveProperty('strokeLinecap')
        expect(result['line']['default']).toHaveProperty('strokeLinecap', 'round')
    })

    it('replaces an existing property', () => {
        const customTheme: ThemeSpec = {
            rect: {
                inner: {
                    fill: '#0000dd',
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme) as CompleteThemeSpec
        expect(defaultTheme['rect']['inner']).toHaveProperty('fill', '#f2f2f2')
        expect(result['rect']['inner']).toHaveProperty('fill', '#0000dd')
    })

    it('replaces an array', () => {
        const customTheme: ThemeSpec = {
            GridLines: {
                default: {
                    expansion: [1234, 1234],
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme) as CompleteThemeSpec
        expect(defaultTheme['GridLines']['default']).toHaveProperty('expansion', [0, 0])
        expect(result['GridLines']['default']).toHaveProperty('expansion', [1234, 1234])
        // attempt to modify custom theme
        expect(result['GridLines']['default']).toBeDefined()
        const x = result['GridLines']['default'] ?? {}
        x.expansion = [567, 567]
        expect(defaultTheme['GridLines']['default']).toHaveProperty('expansion', [0, 0])
    })
})

describe('mergeThemes', () => {
    it('combines several themes', () => {
        const theme1: ThemeSpec = {
            line: {
                default: {
                    strokeLinecap: 'round',
                },
            },
        }
        const theme2: ThemeSpec = {
            line: {
                default: {
                    stroke: '#123456',
                },
            },
        }
        const theme3: ThemeSpec = {
            line: {
                default: {
                    opacity: 0.5,
                },
            },
        }
        const result = mergeThemes([theme1, theme2, theme3]) as CompleteThemeSpec
        expect(defaultTheme['line']['default']).not.toHaveProperty('strokeLinecap')
        expect(result['line']['default']).toHaveProperty('strokeLinecap', 'round')
        expect(result['line']['default']).toHaveProperty('stroke', '#123456')
        expect(result['line']['default']).toHaveProperty('opacity', 0.5)
    })
})

describe('getClassName', () => {
    it('concatenates class names', () => {
        expect(getClassName('a', 'b')).toEqual('a b')
    })

    it('handles undefined class name', () => {
        expect(getClassName('a', undefined)).toEqual('a')
    })

    it('converts hyphens to camel case', () => {
        expect(getClassName('long-name', 'very-long-name')).toEqual('longName veryLongName')
    })

    it('converts multiple hyphens to camel case', () => {
        expect(getClassName('long-name', 'very-long-name a-b')).toEqual('longName veryLongName aB')
    })

    it('removes default variant', () => {
        expect(getClassName('default', 'a')).toEqual('a')
    })

    it('preserves default variant with optional flat', () => {
        expect(getClassName('default', 'a', false)).toEqual('default a')
    })

    it('detects unnecessary class', () => {
        expect(getClassName('default', undefined)).toEqual(undefined)
    })
})

describe('addColor', () => {
    it('adds to an existing style', () => {
        const style = { strokeWidth: 1 }
        const result = addColor(style, 'blue')
        expect(result.fill).toEqual('blue')
        expect(result.stroke).toEqual('blue')
        expect(JSON.stringify(style)).not.toContain('fill')
    })

    it('adds to an empty style', () => {
        const result = addColor(undefined, 'blue')
        expect(result.fill).toEqual('blue')
    })

    it('does not over-ride an existing fill', () => {
        const result = addColor({ fill: 'red' }, 'blue')
        expect(result.fill).toEqual('red')
        expect(result.stroke).toEqual('blue')
    })

    it('does not over-ride an existing stroke', () => {
        const result = addColor({ stroke: 'red' }, 'blue')
        expect(result.fill).toEqual('blue')
        expect(result.stroke).toEqual('red')
    })
})

describe('addOpacity', () => {
    it('add to an existing style', () => {
        const style = { stroke: 'red' }
        const result = addOpacity(style, 0.75)
        expect(result.opacity).toEqual(0.75)
        expect(JSON.stringify(style)).not.toContain('opacity')
    })

    it('add to an empty style', () => {
        const result = addOpacity(undefined, 0.5)
        expect(result.opacity).toEqual(0.5)
    })
})

describe('getCss', () => {
    it('creates css with custom ancestor', () => {
        const result = getCss(defaultTheme, undefined, '#custom')
        expect(result?.slice(0, 8)).toBe('#custom ')
        expect(result).toContain('rect')
        expect(result).toContain('text')
    })

    it('creates css without ancestor', () => {
        const result = getCss(defaultTheme, undefined, '')
        expect(result?.slice(0, 1)).not.toBe(' ')
    })

    it('creates css only for some selectors', () => {
        const result = getCss(defaultTheme, ['circle'], '#custom')
        expect(result).toContain('circle')
        expect(result).not.toContain('text')
    })

    it('creates empty css', () => {
        const result = getCss(defaultTheme, null, '#custom')
        expect(result).toBeNull()
    })
})

describe('fillProps', () => {
    it('transfers data from secondary object into primary object', () => {
        const primary: Partial<CssProps> = { strokeWidth: 1 }
        const result = fillProps(primary, { stroke: '#000000' })
        expect(result?.strokeWidth).toEqual(1)
        expect(result?.stroke).toEqual('#000000')
    })

    it('preserves content in primary object', () => {
        const result = fillProps({ strokeWidth: 1 }, { strokeWidth: 1 })
        expect(result?.strokeWidth).toEqual(1)
    })

    it('allows secondary object to be undefined', () => {
        const result = fillProps({ strokeWidth: 1 }, undefined)
        expect(result?.strokeWidth).toEqual(1)
    })

    it('handles empty inputs', () => {
        expect(fillProps(undefined, undefined)).toEqual(undefined)
        expect(fillProps(null, undefined)).toEqual(null)
    })
})

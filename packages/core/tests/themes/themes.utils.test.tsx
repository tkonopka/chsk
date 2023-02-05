import { render } from '@testing-library/react'
import {
    getClassName,
    addColor,
    addOpacity,
    defaultTheme,
    Chart,
    AxisProps,
    CompleteThemeSpec,
    mergeTheme,
    ThemeSpec,
    useThemedProps,
    mergeThemes,
} from '../../src'
import { camelCase } from '../../src/themes/helpers'

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
                x: {
                    expansion: [1234, 1234],
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme) as CompleteThemeSpec
        expect(defaultTheme['GridLines']['x']).toHaveProperty('expansion', [0, 0])
        expect(result['GridLines']['x']).toHaveProperty('expansion', [1234, 1234])
        // attempt to modify custom theme
        expect(result['GridLines']['x']).toBeDefined()
        const x = result['GridLines']['x'] ?? {}
        x.expansion = [567, 567]
        expect(defaultTheme['GridLines']['x']).toHaveProperty('expansion', [0, 0])
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

/**
describe('composeClassName', () => {
    it('concatenates class names', () => {
        const result = composeClassName(['a', 'b', 'c'])
        expect(result).toEqual('a b c')
    })

    it('handles undefined', () => {
        const result = composeClassName(['a', undefined])
        expect(result).toEqual('a')
    })

    it('converts hyphens to camel case', () => {
        const result = composeClassName(['long-name', 'very-long-name', 'partial-'])
        expect(result).toEqual('longName veryLongName partial')
    })

    it('removes starting default', () => {
        const result = composeClassName(['default', 'a'])
        expect(result).toEqual('a')
    })

    it('preserves starting default with optional flat', () => {
        const result = composeClassName(['default', 'a'], false)
        expect(result).toEqual('default a')
    })

    it('handles empty input', () => {
        const result = composeClassName([])
        expect(result).toBeUndefined()
    })
})
*/

describe('getClassName', () => {
    it('concatenates class names', () => {
        const result = getClassName('a', 'b')
        expect(result).toEqual('a b')
    })

    it('handles undefined class name', () => {
        const result = getClassName('a', undefined)
        expect(result).toEqual('a')
    })

    it('converts hyphens to camel case', () => {
        const result = getClassName('long-name', 'very-long-name')
        expect(result).toEqual('longName veryLongName')
    })

    it('removes default variant', () => {
        const result = getClassName('default', 'a')
        expect(result).toEqual('a')
    })

    it('preserves default variant with optional flat', () => {
        const result = getClassName('default', 'a', false)
        expect(result).toEqual('default a')
    })
})

describe.skip('addColor', () => {
    it('adds to an existing style', () => {
        const result = addColor({ strokeWidth: 1 }, 'blue')
        expect(result.fill).toEqual('blue')
        expect(result.stroke).toEqual('blue')
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

describe.skip('addOpacity', () => {
    it('add to an existing style', () => {
        const result = addOpacity({ stroke: 'red' }, 0.75)
        expect(result.opacity).toEqual(0.75)
    })

    it('add to an empty style', () => {
        const result = addOpacity(undefined, 0.5)
        expect(result.opacity).toEqual(0.5)
    })
})

describe.skip('useThemedProps', () => {
    it('completes props from theme', () => {
        const customTheme: ThemeSpec = {
            Axis: {
                top: {
                    offset: 10,
                },
                bottom: {
                    offset: 5,
                },
                left: {
                    offset: 7,
                },
            },
        }
        let result: AxisProps = { variant: 'top' }
        const GetThemedAxisProps = (props: AxisProps) => {
            result = useThemedProps(props, 'Axis')
            return null
        }

        render(
            <Chart theme={customTheme}>
                <GetThemedAxisProps variant={'top'} />
            </Chart>
        )
        expect(result['variant']).toEqual('top')
        expect(result['offset']).toEqual(10)
    })
})

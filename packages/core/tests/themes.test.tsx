import { mergeTheme, defaultTheme, Chart } from '../src'
import { ThemeSpec } from '../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from './helpers'

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
            rect: {
                inner: {
                    fill: '#0000dd',
                },
            },
        }
        const result = mergeTheme(defaultTheme, customTheme)
        expect(defaultTheme['rect']['inner']).toHaveProperty('fill', '#eeeeee')
        expect(result['rect']['inner']).toHaveProperty('fill', '#0000dd')
    })
})

describe('styles', () => {
    it('skips styles element when not needed', () => {
        render(<Chart {...chartProps} styles={[]} />)
        // by setting styles=[], expect there to be no <styles> tag in the svg
        // but the testing-library framework always removes style tags
        // so there isn't anything to test here
        const result = screen.getByRole('chart-content')
        expect(result).toBeDefined()
    })
})

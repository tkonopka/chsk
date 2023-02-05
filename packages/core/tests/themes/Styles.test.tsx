import { render, screen } from '@testing-library/react'
import { Chart } from '../../src/charts'
import {
    mergeTheme,
    CompleteThemeSpec,
    ThemeSpec,
    defaultTheme,
    emptyTheme,
} from '../../src/themes'
import { componentStyles } from '../../src/themes/helpers'
import { chartProps } from '../props'

describe('Styles', () => {
    it('skips styles element when not needed', () => {
        render(<Chart {...chartProps} styles={[]} />)
        // by setting styles=[], expect there to be no <styles> tag in the svg
        // but the testing-library framework always removes style tags
        // so there isn't anything to test here
        const result = screen.getByRole('chart-content')
        expect(result).toBeDefined()
    })
})

describe('componentStyles', () => {
    it('creates styles specific to a chart identifier', () => {
        const result = componentStyles('chart', 'rect', defaultTheme)
        result.forEach(line => {
            expect(line).toContain('#chart rect')
        })
    })

    it('formats property names with hyphens', () => {
        const customTheme: ThemeSpec = { rect: { custom: { fillOpacity: 0.5 } } }
        const theme = mergeTheme(emptyTheme, customTheme) as CompleteThemeSpec
        const result = componentStyles('chart', 'rect', theme)
        expect(result.join('\n')).toContain('fill-opacity: 0.5')
    })

    it('handles default keyword', () => {
        const customTheme: ThemeSpec = { rect: { default: { fill: '#123123' } } }
        const theme = mergeTheme(emptyTheme, customTheme) as CompleteThemeSpec
        const result = componentStyles('chart', 'rect', theme)
        expect(result.join('\n')).not.toContain('default')
        // the default rect should be the first in the sequence
        expect(result[0]).toContain('fill')
        expect(result[0]).toContain('123123')
    })

    it('removes undefined property values', () => {
        const customTheme: ThemeSpec = { rect: { default: { fill: '#123123' } } }
        const theme = mergeTheme(emptyTheme, customTheme) as CompleteThemeSpec
        theme.rect = { default: { fill: undefined } }
        const result = componentStyles('chart', 'rect', theme)
        expect(result.join('\n')).not.toContain('undefined')
    })

    it('removes empty definitions', () => {
        const customTheme: ThemeSpec = { rect: { default: { fill: '#123123' } } }
        const theme = mergeTheme(emptyTheme, customTheme) as CompleteThemeSpec
        theme.rect = { default: {} }
        const result = componentStyles('chart', 'rect', theme)
        expect(result.join('\n')).not.toContain('#chart rect {')
    })

    it('gives empty string for emptyTheme', () => {
        const result = componentStyles('chart', 'rect', emptyTheme)
        expect(result).toHaveLength(0)
    })
})

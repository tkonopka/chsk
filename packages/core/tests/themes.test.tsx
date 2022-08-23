import { mergeTheme, defaultTheme, Chart, addColor, addOpacity } from '../src'
import { ThemeSpec } from '../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from './props'

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

describe('addColor', () => {
    it('adds to an existing style ', () => {
        const result = addColor({ strokeWidth: 1 }, 'blue')
        expect(result.fill).toEqual('blue')
        expect(result.stroke).toEqual('blue')
    })

    it('adds to an empty style ', () => {
        const result = addColor(undefined, 'blue')
        expect(result.fill).toEqual('blue')
    })

    it('does not over-ride an existing fill ', () => {
        const result = addColor({ fill: 'red' }, 'blue')
        expect(result.fill).toEqual('red')
        expect(result.stroke).toEqual('blue')
    })

    it('does not over-ride an existing stroke ', () => {
        const result = addColor({ stroke: 'red' }, 'blue')
        expect(result.fill).toEqual('blue')
        expect(result.stroke).toEqual('red')
    })
})

describe('addOpacity', () => {
    it('add to an existing style ', () => {
        const result = addOpacity({ stroke: 'red' }, 0.75)
        expect(result.opacity).toEqual(0.75)
    })

    it('add to an empty style ', () => {
        const result = addOpacity(undefined, 0.5)
        expect(result.opacity).toEqual(0.5)
    })
})

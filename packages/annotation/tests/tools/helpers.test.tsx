import { render, screen } from '@testing-library/react'
import { defaultCleanSvgConfig } from '../../src/tools/cleanSvg'
import {
    roundPxDecimalPlaces,
    rgb2hex,
    cleanTransform,
    cleanStyle,
    scanSvg,
    shakeStyles,
} from '../../src/tools/helpers'
import { cloneDeep } from 'lodash'

describe('roundPxDecimalPlaces', () => {
    it('leaves standard strings alone', () => {
        expect(roundPxDecimalPlaces('abc', 2)).toEqual('abc')
        expect(roundPxDecimalPlaces('10', 2)).toEqual('10')
    })

    it('rounds long decimals', () => {
        expect(roundPxDecimalPlaces('10.0000003px', 3)).toEqual('10px')
        expect(roundPxDecimalPlaces('10.123123px', 3)).toEqual('10.123px')
        expect(roundPxDecimalPlaces('10.1238px', 3)).toEqual('10.124px')
    })
})

describe('rgb2hex', () => {
    it('handles rgb string with commas and spaces', () => {
        expect(rgb2hex('rgb(255, 32, 5)')).toBe('#ff2005')
    })

    it('handles rgb string with spaces', () => {
        expect(rgb2hex('rgb(255 32 5)')).toBe('#ff2005')
    })

    it('handles rgb string with commas', () => {
        expect(rgb2hex('rgb(255,32,5)')).toBe('#ff2005')
    })

    it('preserves non-rgb string', () => {
        expect(rgb2hex('#222222')).toBe('#222222')
        expect(rgb2hex('abc')).toBe('abc')
    })

    it('preserves non-rgb string', () => {
        expect(rgb2hex('#222222')).toBe('#222222')
        expect(rgb2hex('abc')).toBe('abc')
    })

    it('handles rgb string with slash', () => {
        expect(rgb2hex('rgb(255 32 5 / 119)')).toBe('#ff200577')
        expect(rgb2hex('rgb(255, 32, 5 / 119)')).toBe('#ff200577')
    })

    it('handles rgb string with percentages', () => {
        expect(rgb2hex('rgb(50% 10% 100%)')).toBe(rgb2hex('rgb(128 26 255)'))
    })

    it('handles rgb string with decimals', () => {
        expect(rgb2hex('rgb(0.5 0.1 1.0 0.5)')).toBe(rgb2hex('rgb(128 26 255 128)'))
    })
})

describe('cleanTransform', () => {
    it('handles undefined and null', () => {
        expect(cleanTransform(undefined, 2)).toBeUndefined()
    })

    it('extract translateX and translateY with semicolon', () => {
        const input = 'translateX(140px) translateY(20px);'
        const expected = 'translate(140,20)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('extract translateX and translateY without semicolon', () => {
        const input = 'translateX(140px) translateY(20px)'
        const expected = 'translate(140,20)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('extract transform and apply rounding', () => {
        const input = 'translateX(140.1111px) translateY(20.1111px)'
        const expected = 'translate(140.11,20.11)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('extract translateX without translateY, and vice versa', () => {
        const inputX = 'translateX(140.1111px)'
        const expectedX = 'translate(140.11,0)'
        expect(cleanTransform(inputX, 2)).toEqual(expectedX)
        const inputY = 'translateY(20.1111px)'
        const expectedY = 'translate(0,20.11)'
        expect(cleanTransform(inputY, 2)).toEqual(expectedY)
    })

    it('extract scaleX and scaleY', () => {
        const input = 'scaleX(2) scaleY(3)'
        const expected = 'scale(2,3)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('extract scaleX and fill in scaleY, and vice versa', () => {
        const inputX = 'scaleX(2)'
        const expectedX = 'scale(2,1)'
        expect(cleanTransform(inputX, 2)).toEqual(expectedX)
        const inputY = 'scaleY(2)'
        const expectedY = 'scale(1,2)'
        expect(cleanTransform(inputY, 2)).toEqual(expectedY)
    })

    it('extract rotate', () => {
        const input = 'rotate(10deg)'
        const expected = 'rotate(10)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('omit zero rotation', () => {
        const input = 'translateX(10) rotate(0deg)'
        const expected = 'translate(10,0)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })

    it('detects no transform', () => {
        const input = 'none'
        expect(cleanTransform(input, 2)).toBeNull()
    })

    it('detects no transform (prefix)', () => {
        const input = 'transform: none'
        expect(cleanTransform(input, 2)).toBeNull()
    })

    it('leaves rotations', () => {
        const input = 'rotate(90)'
        expect(cleanTransform(input, 2)).toEqual(input)
    })

    it('extract skewX', () => {
        const input = 'skewX(1.0002)'
        const expected = 'skewX(1.0002)'
        expect(cleanTransform(input, 2)).toEqual(expected)
    })
})

describe('cleanStyle', () => {
    it('handles empty string', () => {
        const result = cleanStyle('', 2)
        expect(result.style).toBe('')
    })

    it('handles style that does not require changes', () => {
        const style = 'stroke-width: 2'
        const result = cleanStyle(style, 2)
        expect(result.style).toBe(style)
    })

    it('converts fill to hex', () => {
        const result = cleanStyle('fill: rgb(255 255 0)', 2)
        expect(result.style).toBe('fill: #ffff00')
    })

    it('converts stroke to hex', () => {
        const result = cleanStyle('stroke: rgb(255 255 0)', 2)
        expect(result.style).toBe('stroke: #ffff00')
    })

    it('converts multi-part style to hex', () => {
        const result = cleanStyle(
            'stroke: rgb(255 255 0); stroke-dasharray: 5; fill: rgb(0 0 0)',
            2
        )
        expect(result.style).toBe('stroke: #ffff00; stroke-dasharray: 5; fill: #000000')
    })
})

describe('scanSvg', () => {
    it('extracts components without class names', () => {
        render(
            <svg role={'root'}>
                <rect x={0} y={0} width={20} height={20} />
                <circle cx={0} cy={0} r={5} />
            </svg>
        )
        const result = scanSvg(screen.getByRole('root'), defaultCleanSvgConfig)
        expect('rect' in result).toBeTruthy()
        expect('circle' in result).toBeTruthy()
        expect('line' in result).toBeFalsy()
    })

    it('extracts class names', () => {
        render(
            <svg role={'root'}>
                <rect x={0} y={0} width={20} height={20} className={'A'} />
                <circle cx={0} cy={0} r={5} className={'B C'} />
            </svg>
        )
        const result = scanSvg(screen.getByRole('root'), defaultCleanSvgConfig)
        expect('rect' in result).toBeTruthy()
        expect('circle' in result).toBeTruthy()
        expect(result['rect']).toContain('A')
        expect(result['circle'].has('B')).toBeTruthy()
        expect(result['circle'].has('C')).toBeTruthy()
    })

    it('extracts class names from nested elements', () => {
        render(
            <svg role={'root'}>
                <circle className={'A'} />
                <g>
                    <circle className={'B'} />
                    <g>
                        <circle className={'B'} />
                        <circle className={'C'} />
                    </g>
                </g>
            </svg>
        )
        const result = scanSvg(screen.getByRole('root'), defaultCleanSvgConfig)
        expect(result['circle']).toContain('A')
        expect(result['circle']).toContain('B')
        expect(result['circle']).toContain('C')
    })

    it('skips class names nested inside certain roles', () => {
        render(
            <svg role={'root'}>
                <circle className={'A'} />
                <g>
                    <circle className={'B'} />
                    <g role={'skip-this'}>
                        <circle className={'B'} />
                        <circle className={'C'} />
                    </g>
                </g>
            </svg>
        )
        const config = cloneDeep(defaultCleanSvgConfig)
        config.skipRoles = ['skip-this']
        const result = scanSvg(screen.getByRole('root'), config)
        expect(result['circle']).toContain('A')
        expect(result['circle']).toContain('B')
        expect(result['circle']).not.toContain('C')
    })
})

describe('shakeStyles', () => {
    const longStyles = [
        '#chart circle { fill: #000000 }',
        '#chart circle.A { fill: #dd0000 }',
        '#chart circle.A.B { fill: #00dd00 }',
        '#chart text { textAnchor: start }',
        '#chart text.title { fontWeight: 600 }',
        '#chart text.legendItem { fill: #888888 }',
        '#chart rect { stroke: 2 }',
    ].join('\n')
    const emptySet = new Set<string>()

    it('accepts empty string', () => {
        const result = shakeStyles('', { circle: emptySet, rect: emptySet })
        expect(result).toEqual('')
    })

    it('accepts null', () => {
        const result = shakeStyles(null, { circle: emptySet, rect: emptySet })
        expect(result).toEqual('')
    })

    it('eliminates lines without chart id', () => {
        const badStyles = ['bad css', 'circle { fill: #000000 }'].join('\n')
        const result = shakeStyles(badStyles, { circle: emptySet, rect: emptySet })
        expect(result).toEqual('')
    })

    it('preserves base definitions for relevant selectors', () => {
        const result = shakeStyles(longStyles, { circle: emptySet, rect: emptySet })
        expect(result).toContain('chart')
        expect(result).toContain('circle')
        expect(result).toContain('rect')
        expect(result).not.toContain('text')
    })

    it('preserves class-specific definitions for relevant selectors', () => {
        const result = shakeStyles(longStyles, { text: new Set<string>(['title']) })
        expect(result).toContain('text')
        expect(result).not.toContain('circle')
        // css definitions specific to text.title
        expect(result).toContain('title')
        expect(result).toContain('fontWeight')
    })

    it('preserves definitions for multiple sub-classes', () => {
        const result = shakeStyles(longStyles, { circle: new Set<string>(['A', 'B']) })
        expect(result).not.toContain('text')
        expect(result).toContain('circle')
        // should have css definitions for circles and all subclasses
        expect(result).toContain('000000')
        expect(result).toContain('dd0000')
        expect(result).toContain('00dd00')
    })

    it('preserves definitions for first-level classes', () => {
        const result = shakeStyles(longStyles, { circle: new Set<string>(['A']) })
        expect(result).not.toContain('text')
        expect(result).toContain('circle')
        expect(result).toContain('000000')
        expect(result).toContain('dd0000')
        // css definition for circle.A.B is not needed
        expect(result).not.toContain('00dd00')
    })

    it('omits definitions for sub-classes despite partial overlap', () => {
        const result = shakeStyles(longStyles, { circle: new Set<string>(['B']) })
        expect(result).not.toContain('text')
        expect(result).toContain('circle')
        expect(result).toContain('000000')
        // css definition for circle.A is not needed
        expect(result).not.toContain('dd0000')
        // css definition for circle.A.B is not needed either
        expect(result).not.toContain('00dd00')
    })
})

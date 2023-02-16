import { render, screen } from '@testing-library/react'
import { roundPxDecimalPlaces, cleanTransform } from '../../src/tools/helpers'
import { cleanSvg } from '../../src/tools'

describe('converting pixels to fixed decimal places', () => {
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

describe('cleaning transform strings', () => {
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

describe('Svg format', () => {
    it('rounds values in one element', () => {
        render(
            <svg>
                <rect role={'target'} width={'25.625px'} height={'130.344827px'} />
            </svg>
        )
        const raw = screen.getByRole('target')
        const result = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(result.getAttribute('width')).toEqual('25.625px')
        expect(raw.getAttribute('height')).toEqual('130.344827px')
        expect(result.getAttribute('height')).toEqual('130.345px')
    })

    it('recursively rounds values', () => {
        render(
            <svg role={'root'}>
                <rect role={'target'} width={'25.625px'} height={'130.344827px'} />
            </svg>
        )
        const root = screen.getByRole('root')
        const cleanRoot = cleanSvg(root.cloneNode(true) as HTMLElement)
        expect(root.outerHTML).toContain('<svg')
        expect(cleanRoot.outerHTML).toContain('<svg')
        const rect = root.querySelector('rect')
        const cleanRect = cleanRoot.querySelector('rect')
        expect(cleanRect?.getAttribute('width')).toEqual('25.625px')
        expect(rect?.getAttribute('height')).toEqual('130.344827px')
        expect(cleanRect?.getAttribute('height')).toEqual('130.345px')
    })

    it('transfers transform from style (translateX, translateY) into attribute (rect)', () => {
        const transform = 'translateX(20px) translateY(50px); transform-origin: 12.8125px 113.824px'
        render(
            <svg>
                <rect
                    role={'target'}
                    width={'10px'}
                    height={'20px'}
                    style={{ fill: 'rgb(166, 206, 227)', stroke: 'rgb(166, 206, 227)', transform }}
                />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('transform')).toBeNull()
        expect(clean.getAttribute('transform')).toEqual('translate(20,50)')
    })

    it('transfers transform from style (translateX, translateY) into attribute (text)', () => {
        const transform = 'translateX(29px) translateY(12.5px); transform-origin: 14px -0.82px'
        render(
            <svg>
                <text role={'target'} width={'10px'} height={'20px'} style={{ transform }}>
                    abc
                </text>
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('transform')).toBeNull()
        expect(clean.getAttribute('transform')).toEqual('translate(29,12.5)')
    })

    it('removes transform: none (rect)', () => {
        const transform = 'none; transform-origin: 45px 15px'
        render(
            <svg>
                <rect role={'target'} width={'10px'} height={'20px'} style={{ transform }} />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('transform')).toBeNull()
        expect(clean.getAttribute('transform')).toBeNull()
    })

    it('removes empty style', () => {
        const transform = 'none'
        render(
            <svg>
                <rect role={'target'} width={'10px'} height={'20px'} style={{ transform }} />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('style')).not.toBeNull()
        expect(clean.getAttribute('style')).toBeNull()
    })

    it('removes attributes with value set to undefined', () => {
        render(
            <svg>
                <rect role={'target'} width={'10px'} height={'20px'} opacity={'undefined'} />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = cleanSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('width')).not.toBeNull()
        expect(clean.getAttribute('opacity')).toBeNull()
    })

    it('removes g with role dimensions-reference', () => {
        const transform = 'none'
        render(
            <svg role={'svg'}>
                <g role={'dimensions-reference'}>
                    <rect x={0} y={0} width={100} height={100} />
                </g>
                <circle role={'target'} cx={'20'} cy={'20'} r={'3'} />
            </svg>
        )
        const svg = screen.getByRole('svg')
        expect(svg.querySelector('circle')).not.toBeNull()
        expect(svg.querySelector('g')).not.toBeNull()
        expect(svg.querySelector('rect')).not.toBeNull()
        const clean = cleanSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('circle')).not.toBeNull()
        expect(clean.querySelector('g')).toBeNull()
        expect(clean.querySelector('rect')).toBeNull()
    })

    it('removes nested g with role dimensions-reference', () => {
        const transform = 'none'
        render(
            <svg role={'svg'}>
                <g role={'dimensions-reference'}>
                    <rect x={0} y={0} width={100} height={100} />
                </g>
                <g role={'other'}>
                    <g role={'dimensions-reference'}>
                        <rect x={0} y={0} width={100} height={100} />
                    </g>
                    <text role={'target'} x={'20'} y={'20'}>
                        abc
                    </text>
                </g>
            </svg>
        )
        const svg = screen.getByRole('svg')
        expect(svg.querySelector('text')).not.toBeNull()
        expect(svg.querySelectorAll('rect')).toHaveLength(2)
        const clean = cleanSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('text')).not.toBeNull()
        expect(clean.querySelectorAll('rect')).toHaveLength(0)
    })
})

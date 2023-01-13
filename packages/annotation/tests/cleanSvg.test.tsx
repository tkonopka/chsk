import { render, screen } from '@testing-library/react'
import { roundPxDecimalPlaces, cleanTransform } from '../src/menu/helpers'
import { cleanSvg } from '../src/menu'

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
        const raw = root.querySelector('rect')
        const result = cleanRoot.querySelector('rect')
        expect(result?.getAttribute('width')).toEqual('25.625px')
        expect(raw?.getAttribute('height')).toEqual('130.344827px')
        expect(result?.getAttribute('height')).toEqual('130.345px')
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
})

import { render, screen } from '@testing-library/react'
import { transformSvg, defaultSvgTransformConfig } from '../../src/files'

describe('transformSvg', () => {
    it('rounds values in one element', () => {
        render(
            <svg>
                <rect role={'target'} width={'25.625px'} height={'130.344827px'} />
            </svg>
        )
        const raw = screen.getByRole('target')
        const result = transformSvg(raw.cloneNode(true) as HTMLElement)
        expect(result.getAttribute('width')).toEqual('25.625')
        expect(raw.getAttribute('height')).toEqual('130.344827px')
        expect(result.getAttribute('height')).toEqual('130.345')
    })

    it('recursively rounds values', () => {
        render(
            <svg role={'root'}>
                <rect role={'target'} width={'25.625px'} height={'130.344827px'} />
            </svg>
        )
        const root = screen.getByRole('root')
        const cleanRoot = transformSvg(root.cloneNode(true) as HTMLElement)
        expect(root.outerHTML).toContain('<svg')
        expect(cleanRoot.outerHTML).toContain('<svg')
        const rect = root.querySelector('rect')
        const cleanRect = cleanRoot.querySelector('rect')
        expect(cleanRect?.getAttribute('width')).toEqual('25.625')
        expect(rect?.getAttribute('height')).toEqual('130.344827px')
        expect(cleanRect?.getAttribute('height')).toEqual('130.345')
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
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
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
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
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
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
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
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
        expect(raw.getAttribute('style')).not.toBeNull()
        expect(clean.getAttribute('style')).toBeNull()
    })

    it('removes attributes with value set to undefined', () => {
        render(
            <svg>
                <rect
                    role={'target'}
                    width={'10px'}
                    height={'20px'}
                    strokeWidth={'undefined'}
                    opacity={'undefined'}
                    fillOpacity={'undefined'}
                />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
        // width has a legitimate value, so should be preserved
        expect(raw.getAttribute('width')).not.toBeNull()
        expect(clean.getAttribute('width')).not.toBeNull()
        // several attributes are set to 'undefined', so should be removed
        const attrNames: string[] = ['opacity', 'stroke-width', 'fill-opacity']
        attrNames.forEach(attrName => {
            expect(raw.getAttribute(attrName)).not.toBeNull()
            expect(clean.getAttribute(attrName)).toBeNull()
        })
    })

    it('converts rgb colors to hex', () => {
        render(
            <svg>
                <rect
                    role={'target'}
                    width={'10px'}
                    height={'20px'}
                    stroke={'rgb(0, 0, 0)'}
                    fill={'rgb(0, 0, 0)'}
                />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
        expect(clean.getAttribute('stroke')).toEqual('#000000')
        expect(clean.getAttribute('fill')).toEqual('#000000')
    })

    it('converts rgba colors to hex', () => {
        render(
            <svg>
                <rect
                    role={'target'}
                    width={'10px'}
                    height={'20px'}
                    stroke={'rgba(0 0 255 0.5)'}
                    fill={'rgba(0 0 255 0.5)'}
                />
            </svg>
        )
        const raw = screen.getByRole('target')
        const clean = transformSvg(raw.cloneNode(true) as HTMLElement)
        expect(clean.getAttribute('stroke')).toEqual('#0000ff80')
        expect(clean.getAttribute('fill')).toEqual('#0000ff80')
    })

    it('removes g with role dimensions-reference', () => {
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
        const clean = transformSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('circle')).not.toBeNull()
        expect(clean.querySelector('g')).toBeNull()
        expect(clean.querySelector('rect')).toBeNull()
    })

    it('removes nested g with role dimensions-reference', () => {
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
        const clean = transformSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('text')).not.toBeNull()
        expect(clean.querySelectorAll('rect')).toHaveLength(0)
    })

    it('removes g with view-controller', () => {
        render(
            <svg role={'svg'}>
                <g role={'view-controller'}>
                    <rect x={0} y={0} width={100} height={100} />
                </g>
            </svg>
        )
        const svg = screen.getByRole('svg')
        expect(svg.querySelector('g')).not.toBeNull()
        expect(svg.querySelector('rect')).not.toBeNull()
        const clean = transformSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('g')).toBeNull()
        expect(clean.querySelector('rect')).toBeNull()
    })

    it('removes multiple child nodes', () => {
        render(
            <svg role={'svg'}>
                <g role={'view-controller'}>
                    <rect x={0} y={0} width={100} height={100} />
                </g>
                <g role={'view-controller'}>
                    <rect x={0} y={0} width={100} height={100} />
                </g>
            </svg>
        )
        const svg = screen.getByRole('svg')
        const clean = transformSvg(svg.cloneNode(true) as HTMLElement)
        expect(clean.querySelector('g')).toBeNull()
        expect(clean.querySelector('rect')).toBeNull()
    })

    it('removes id on root svg element', () => {
        render(
            <svg role={'svg'} id={'root'}>
                <g id={'g'}>
                    <circle />
                </g>
            </svg>
        )
        const svg = screen.getByRole('svg')
        expect(svg.getAttribute('id')).toBe('root')
        const clean = transformSvg(screen.getByRole('svg'), defaultSvgTransformConfig)
        expect(clean.getAttribute('id')).toBeNull()
    })
})

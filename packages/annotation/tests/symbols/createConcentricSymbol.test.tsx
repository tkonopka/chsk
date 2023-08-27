import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, Circle, Square } from '@chsk/core'
import { createConcentricSymbol } from '../../src/symbols'
import { chartProps } from '../props'
import { getNumberAttr } from '../../../core/tests/utils'

describe('createConcentricSymbol', () => {
    it('creates secondary symbol in the background', () => {
        const ConcentricCircle = createConcentricSymbol({
            variant: 'background',
            symbolPrimary: Circle,
            symbolSecondary: Circle,
            rMultiplier: 1.5,
            styleModifier: { fill: '#ffffff ' },
        })
        render(
            <Chart {...chartProps}>
                <ConcentricCircle
                    cx={0}
                    cy={0}
                    r={1}
                    style={{ stroke: '#0000ff', fill: '#ff0000' }}
                />
            </Chart>
        )
        const symbols = screen.getByRole('chart-content').querySelectorAll('circle')
        expect(symbols).toHaveLength(2)
        // first element should be secondary element in the background
        expect(symbols[0]?.getAttribute('class')).toContain('secondary')
        expect(getNumberAttr(symbols[0], 'r')).toEqual(1.5)
        expect(symbols[0]?.getAttribute('style')).not.toContain('#ff0000')
        expect(symbols[0]?.getAttribute('style')).toContain('#ffffff')
        // second element should be primary element in the foreground
        expect(symbols[1]?.getAttribute('class')).toContain('primary')
        expect(getNumberAttr(symbols[1], 'r')).toEqual(1)
        expect(symbols[1]?.getAttribute('style')).toContain('#ff0000')
        expect(symbols[1]?.getAttribute('style')).not.toContain('#ffffff')
        // both elements should contain a stroke color
        expect(symbols[0]?.getAttribute('style')).toContain('#0000ff')
        expect(symbols[1]?.getAttribute('style')).toContain('#0000ff')
    })

    it('creates secondary symbol in the foreground', () => {
        const ConcentricCircle = createConcentricSymbol({
            variant: 'foreground',
            symbolPrimary: Circle,
            symbolSecondary: Circle,
            rMultiplier: 0.8,
            styleModifier: { fill: '#ffffff ' },
        })
        render(
            <Chart {...chartProps}>
                <ConcentricCircle
                    cx={0}
                    cy={0}
                    r={2}
                    style={{ stroke: '#0000ff', fill: '#ff0000' }}
                />
            </Chart>
        )
        const symbols = screen.getByRole('chart-content').querySelectorAll('circle')
        expect(symbols).toHaveLength(2)
        // first element should be primary element in the background
        expect(symbols[0]?.getAttribute('class')).toContain('primary')
        expect(getNumberAttr(symbols[0], 'r')).toEqual(2)
        expect(symbols[0]?.getAttribute('style')).toContain('#ff0000')
        expect(symbols[0]?.getAttribute('style')).not.toContain('#ffffff')
        // second element should be secondary element in the foreground
        expect(symbols[1]?.getAttribute('class')).toContain('secondary')
        expect(getNumberAttr(symbols[1], 'r')).toEqual(1.6)
        expect(symbols[1]?.getAttribute('style')).not.toContain('#ff0000')
        expect(symbols[1]?.getAttribute('style')).toContain('#ffffff')
        // both elements should contain a stroke color
        expect(symbols[0]?.getAttribute('style')).toContain('#0000ff')
        expect(symbols[1]?.getAttribute('style')).toContain('#0000ff')
    })

    it('sets custom class names', () => {
        const ConcentricSquare = createConcentricSymbol({
            variant: 'background',
            symbolPrimary: Square,
            symbolSecondary: Square,
        })
        render(
            <Chart {...chartProps}>
                <ConcentricSquare cx={0} cy={0} r={1} className={'custom'} />
            </Chart>
        )
        const symbols = screen.getByRole('chart-content').querySelectorAll('rect')
        const g = symbols[0]?.closest('g')
        expect(symbols[0]?.getAttribute('class')).toBe('custom secondary')
        expect(symbols[1]?.getAttribute('class')).toBe('custom primary')
        expect(g?.getAttribute('class')).toBe('custom')
    })

    it('attaches event handlers to composite group', () => {
        const ConcentricSquare = createConcentricSymbol({
            variant: 'background',
            symbolPrimary: Square,
            symbolSecondary: Square,
        })
        let value = 0
        const customClickHandler = () => {
            value += 1
        }
        render(
            <Chart {...chartProps}>
                <ConcentricSquare cx={0} cy={0} r={2} onClick={customClickHandler} />
            </Chart>
        )
        const symbols = screen.getByRole('chart-content').querySelectorAll('rect')
        expect(symbols).toHaveLength(2)
        const g = symbols[0]?.closest('g')
        // clicks handlers should act on entire group
        expect(value).toBe(0)
        if (symbols[0]) fireEvent.click(symbols[0])
        if (symbols[1]) fireEvent.click(symbols[1])
        expect(value).toBe(2)
        if (g) fireEvent.click(g)
        expect(value).toBe(3)
    })
})

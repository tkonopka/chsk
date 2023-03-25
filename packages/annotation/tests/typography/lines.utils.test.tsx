import { getBracketPositions, getBracePositions } from '../../src/typography/lines'

describe('getLineTickPositions', () => {
    it('finds tick ends for horizontal line (size > 0)', () => {
        const { tickStart, tickEnd } = getBracketPositions({ start: [0, 0], end: [10, 0], size: 5 })
        expect(tickStart.map(Math.round)).toEqual([0, 5])
        expect(tickEnd.map(Math.round)).toEqual([10, 5])
    })

    it('finds tick ends for horizontal line (size < 0)', () => {
        // negative size is equivalent to a 'left-hand turn' at the end position
        const { tickStart, tickEnd } = getBracketPositions({
            start: [20, 0],
            end: [30, 0],
            size: -5,
        })
        expect(tickStart.map(Math.round)).toEqual([20, -5])
        expect(tickEnd.map(Math.round)).toEqual([30, -5])
    })

    it('finds tick ends for vertical line (size > 0)', () => {
        const { tickStart, tickEnd } = getBracketPositions({
            start: [10, 10],
            end: [10, 20],
            size: 5,
        })
        expect(tickStart.map(Math.round)).toEqual([5, 10])
        expect(tickEnd.map(Math.round)).toEqual([5, 20])
    })

    it('finds tick ends for vertical line (size < 0)', () => {
        // negative size is equivalent to a 'left-hand turn' at the end position
        const { tickStart, tickEnd } = getBracketPositions({
            start: [10, 10],
            end: [10, 20],
            size: -5,
        })
        expect(tickStart.map(Math.round)).toEqual([15, 10])
        expect(tickEnd.map(Math.round)).toEqual([15, 20])
    })

    it('finds tick ends for diagonal line (size > 0)', () => {
        const x = Math.sqrt((5 * 5) / 2)
        const { tickStart, tickEnd } = getBracketPositions({
            start: [10, 10],
            end: [20, 0],
            size: 5,
        })
        expect(tickStart.map(Math.round)).toEqual([10 + x, 10 + x].map(Math.round))
        expect(tickEnd.map(Math.round)).toEqual([20 + x, 0 + x].map(Math.round))
    })

    it('finds tick ends for diagonal line (size < 0)', () => {
        const x = Math.sqrt((5 * 5) / 2)
        const { tickStart, tickEnd } = getBracketPositions({
            start: [10, 10],
            end: [20, 0],
            size: -5,
        })
        expect(tickStart.map(Math.round)).toEqual([10 - x, 10 - x].map(Math.round))
        expect(tickEnd.map(Math.round)).toEqual([20 - x, 0 - x].map(Math.round))
    })
})

describe('getBracePositions', () => {
    it('finds brace positions for horizontal line (size > 0)', () => {
        const { braceStart, pinchStart, pinchMiddle, pinchEnd, braceEnd } = getBracePositions({
            start: [10, 10],
            end: [30, 10],
            pinch: 0.5,
            size: 2,
            r: 2,
        })
        expect(braceStart.map(Math.round)).toEqual([12, 10])
        expect(pinchStart.map(Math.round)).toEqual([18, 10])
        expect(pinchMiddle.map(Math.round)).toEqual([20, 8])
        expect(pinchEnd.map(Math.round)).toEqual([22, 10])
        expect(braceEnd.map(Math.round)).toEqual([28, 10])
    })

    it('finds brace positions for horizontal line (size < 0)', () => {
        const { braceStart, pinchStart, pinchMiddle, pinchEnd, braceEnd } = getBracePositions({
            start: [10, 10],
            end: [30, 10],
            pinch: 0.5,
            size: -2,
            r: 2,
        })
        expect(braceStart.map(Math.round)).toEqual([12, 10])
        expect(pinchStart.map(Math.round)).toEqual([18, 10])
        expect(pinchMiddle.map(Math.round)).toEqual([20, 12])
        expect(pinchEnd.map(Math.round)).toEqual([22, 10])
        expect(braceEnd.map(Math.round)).toEqual([28, 10])
    })

    it('finds brace positions for vertical line (size > 0)', () => {
        const { braceStart, pinchStart, pinchMiddle, pinchEnd, braceEnd } = getBracePositions({
            start: [10, 10],
            end: [10, 30],
            pinch: 0.5,
            size: 2,
            r: 2,
        })
        expect(braceStart.map(Math.round)).toEqual([10, 12])
        expect(pinchStart.map(Math.round)).toEqual([10, 18])
        expect(pinchMiddle.map(Math.round)).toEqual([12, 20])
        expect(pinchEnd.map(Math.round)).toEqual([10, 22])
        expect(braceEnd.map(Math.round)).toEqual([10, 28])
    })

    it('finds brace positions for vertical line (size < 0)', () => {
        const { braceStart, pinchStart, pinchMiddle, pinchEnd, braceEnd } = getBracePositions({
            start: [10, 10],
            end: [10, 30],
            pinch: 0.5,
            size: -2,
            r: 2,
        })
        expect(braceStart.map(Math.round)).toEqual([10, 12])
        expect(pinchStart.map(Math.round)).toEqual([10, 18])
        expect(pinchMiddle.map(Math.round)).toEqual([8, 20])
        expect(pinchEnd.map(Math.round)).toEqual([10, 22])
        expect(braceEnd.map(Math.round)).toEqual([10, 28])
    })

    it('finds brace positions for diagonal line (size > 0)', () => {
        const x = Math.sqrt((5 * 5) / 2)
        const { braceStart, pinchStart, pinchMiddle, pinchEnd, braceEnd } = getBracePositions({
            start: [10, 20],
            end: [50, 60],
            pinch: 0.5,
            size: 5,
            r: 5,
        })
        expect(braceStart.map(Math.round)).toEqual([10 + x, 20 + x].map(Math.round))
        expect(pinchStart.map(Math.round)).toEqual([30 - x, 40 - x].map(Math.round))
        expect(pinchMiddle.map(Math.round)).toEqual([30 + x, 40 - x].map(Math.round))
        expect(pinchEnd.map(Math.round)).toEqual([30 + x, 40 + x].map(Math.round))
        expect(braceEnd.map(Math.round)).toEqual([50 - x, 60 - x].map(Math.round))
    })
})

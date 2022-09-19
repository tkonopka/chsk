import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chask/core'
import { chartProps, viewProps } from './props'
import { BlockArrow } from '../src/arrows'
import { getBlockArrowPoints } from '../src/arrows/utils'

describe('getBlockArrowPoints', () => {
    it('creates points for a single arrow', () => {
        // arrow pointing up
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -100],
            heads: [false, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(4 + 7 - 1)
        // first few points represent base of arrow pointing upward
        expect(result[1]).toEqual([5, 0])
        expect(result[2]).toEqual([-5, 0])
        // a point in the middle represent the tip of the arrow
        expect(result[6]).toEqual([0, -100])
    })

    it('creates points for a short arrow', () => {
        // arrow pointing up
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -15],
            heads: [false, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(4 + 5 - 1)
        // first few points represent base of arrow pointing upward
        expect(result[1]).toEqual([5, 0])
        expect(result[2]).toEqual([-5, 0])
        // a point in the middle represent the tip of the arrow
        expect(result[5]).toEqual([0, -15])
    })

    it('creates points for a double arrow', () => {
        const result = getBlockArrowPoints({
            start: [0, 0],
            end: [0, -100],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(7 + 7 - 1)
        // one of the points represents the tip of the arrow
        expect(result[3]).toEqual([0, 0])
        // another point represents other tip
        expect(result[9]).toEqual([0, -100])
    })

    it('creates rotated arrow', () => {
        // arrow at some angle
        const result = getBlockArrowPoints({
            start: [20, 40],
            end: [60, 80],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(7 + 7 - 1)
        // arrow tips should match the start/end positions
        expect(result[3].map(Math.round)).toEqual([20, 40])
        expect(result[9].map(Math.round)).toEqual([60, 80])
    })

    it('creates diagonal arrow', () => {
        // arrow at 45 degree angle, arrowhead sides should be vertical/horizontal
        const result = getBlockArrowPoints({
            start: [100, 200],
            end: [200, 100],
            heads: [true, true],
            headWidth: 20,
            headLength: 10,
            stemWidth: 10,
        })
        expect(result).toHaveLength(7 + 7 - 1)
        // arrow tip should match the start/end positions
        expect(result[9].map(Math.round)).toEqual([200, 100])
        // arrow sides should be horizontal
        const x = Math.sqrt(100 + 100)
        expect(result[8].map(Math.round)).toEqual([200 - x, 100].map(Math.round))
        expect(result[10].map(Math.round)).toEqual([200, 100 + x].map(Math.round))
    })
})

describe('BlockArrow', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BlockArrow start={[10, 90]} end={[10, 20]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('block-arrow')
        expect(result).toBeDefined()
    })
})

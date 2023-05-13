import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { BlockArrow } from '../../src/'

describe('BlockArrow', () => {
    it('creates a vertical arrow with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <BlockArrow start={[10, 90]} end={[10, 20]} stemWidth={10} units={'absolute'} />
            </Chart>
        )
        const result = screen.getByRole('block-arrow')
        expect(result).toBeDefined()
        // the start of the arrow should be a blunt edge centered around 10,90
        expect(result.getAttribute('d')).toContain('M15,90L5,90')
    })

    it('creates a horizontal arrow with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <BlockArrow start={[10, 50]} end={[80, 50]} stemWidth={10} units={'absolute'} />
            </Chart>
        )
        const result = screen.getByRole('block-arrow')
        expect(result).toBeDefined()
        // the start of the arrow should be a blunt edge centered around 10,50
        expect(result.getAttribute('d')).toContain('M10,55L10,45')
    })

    it('attaches click handler', () => {
        let value = 0
        const customHandler = () => {
            value += 1
        }
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BlockArrow start={[10, 90]} end={[10, 20]} onClick={customHandler} />
                </View>
            </Chart>
        )
        expect(value).toEqual(0)
        const result = screen.getByRole('block-arrow')
        expect(result).toBeDefined()
        fireEvent.click(result)
        expect(value).toBeGreaterThan(0)
    })
})

import { MouseEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { BlockArrow } from '../../src/'

describe('BlockArrow', () => {
    it('creates an arrow with absolute coordinates', () => {
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

    it('attaches click handler', () => {
        let value: number = 0
        const customHandler = (event: MouseEvent) => {
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

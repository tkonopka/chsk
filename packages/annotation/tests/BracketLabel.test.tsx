import { BracketLabel } from '../src/lines'
import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chask/core'
import { chartProps, viewProps } from './props'

describe('BracketLabel', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[60, 0]} units={'absolute'}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('bracket-label')[0]
        const path = result.querySelector('path')
        expect(path?.getAttribute('class')).toBe('bracketLabel')
    })

    it('creates a line with relative coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[0.5, 0]} units={'relative'}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('bracket-label')[0]
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[80, 0]} units={'relative'}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('bracket-label')[0]
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })

    it('creates a line with text rotation', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[1, 0]} rotate={45}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('bracket-label')[0]
        expect(result.querySelector('text')?.getAttribute('transform')).toContain('rotate(45)')
    })

    it('creates a line without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[1, 0]} setRole={false}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.queryByRole('boxed-label-top')
        expect(result).toBeNull()
    })
})

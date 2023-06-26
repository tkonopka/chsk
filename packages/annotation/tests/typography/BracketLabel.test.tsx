import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { BracketLabel } from '../../src/'
import { chartProps, viewProps } from '../props'

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
        const result = screen.getByRole('bracket')
        expect(result?.getAttribute('class')).toContain('bracket')
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
        expect(screen.getByRole('bracket')).toBeDefined()
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[80, 0]} units={'view'}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        expect(screen.getAllByRole('bracket')).toBeDefined()
    })

    it('creates a line with text rotation', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[1, 0]} angle={45}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('bracket-label-right')
        expect(result.querySelector('text')?.getAttribute('style')).toContain('rotate(45')
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
        const result = screen.queryByRole('bracket')
        expect(result).toBeNull()
    })

    it('creates class names', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BracketLabel start={[0, 0]} end={[60, 0]} className={'custom'}>
                        abc
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('bracket-label-right')
        const text = result.querySelector('text')
        const path = result.querySelector('path')
        expect(text?.getAttribute('class')).toContain('label bracketLabel custom')
        expect(path?.getAttribute('class')).toContain('bracketLabel custom')
    })
})

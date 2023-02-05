import { BracketLabel } from '../src/lines'
import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
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
                    <BracketLabel start={[0, 0]} end={[1, 0]} rotate={45}>
                        Label
                    </BracketLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('bracket-label-right')
        expect(result.querySelector('text')?.closest('g')?.getAttribute('style')).toContain(
            'rotate(45'
        )
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
})

import { BraceLabel } from '../src/lines'
import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from './props'

describe('temp', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[60, 0]} units={'absolute'}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('brace-label-right')
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })
})

describe('BraceLabel', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[60, 0]} units={'absolute'}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('brace-label-right')
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })

    it('creates a line with relative coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[0.5, 0]} units={'relative'}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('brace-label-right')
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[80, 0]} units={'relative'}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('brace-label-right')
        const path = result.querySelector('path')
        expect(path).toBeDefined()
    })

    it('creates a line with text rotation', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[1, 0]} rotate={45}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('brace-label-right')
        expect(result.querySelector('text')?.closest('g')?.getAttribute('style')).toContain(
            'rotate(45'
        )
    })

    it('creates a line without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <BraceLabel start={[0, 0]} end={[1, 0]} setRole={false}>
                        Label
                    </BraceLabel>
                </View>
            </Chart>
        )
        expect(screen.queryByRole('brace')).toBeNull()
        expect(screen.queryByRole('brace-label')).toBeNull()
    })
})

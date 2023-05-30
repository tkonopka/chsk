import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterErrors } from '../../src/scatter'
import { scatterProps } from './scatter.props'
import { getNumberAttr } from '../../../core/tests/utils'

export const dataWithErrors = [
    {
        id: 'A',
        data: [
            { x: 1, y: 1, lo: 0.5, hi: 1.5 },
            { x: 2, y: 2, lo: 1.0, hi: 2.5 },
            { x: 3, y: 3.0, lo: 2.5, hi: 3.5 },
            { x: 4, y: 4.0, lo: 3.5, hi: 4.5 },
        ],
    },
]

const dataFrameWithErrors = [
    {
        id: 'A',
        data: {
            x: [1, 2, 3, 4],
            y: [1, 2, 3.0, 4.0],
            lo: [0.5, 1.0, 2.5, 3.5],
            hi: [1.5, 2.5, 3.5, 4.5],
        },
    },
]

describe('ScatterErrors', () => {
    it('creates horizontal error bars', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-errors').querySelectorAll('line')
        expect(result).toHaveLength(4)
        const line0 = result[0]
        expect(getNumberAttr(line0, 'y1')).toEqual(getNumberAttr(line0, 'y2'))
        expect(line0.getAttribute('class')).toContain('scatterError')
    })

    it('creates vertical error bars', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'y'} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-errors').querySelectorAll('line')
        expect(result).toHaveLength(4)
        const line0 = result[0]
        expect(getNumberAttr(line0, 'x1')).toEqual(getNumberAttr(line0, 'x2'))
        expect(line0.getAttribute('class')).toContain('scatterError')
    })

    it('creates error bars with caps', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'y'} lower={'lo'} upper={'hi'} capWidth={6} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-errors').querySelectorAll('line')
        expect(result).toHaveLength(12)
    })

    it('creates error bars with role, but individual lines without role', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} setRole={true} />
                </Scatter>
            </Chart>
        )
        const lines = screen.getByRole('scatter-errors').querySelectorAll('line')
        expect(lines[0].getAttribute('role')).toBeNull()
    })

    it('creates error bars without role', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} setRole={false} />
                </Scatter>
            </Chart>
        )
        const g = screen.getByRole('view-content').querySelector('g')
        expect(g?.getAttribute('role')).toBeNull()
        const lines = screen.getByRole('chart-content').querySelectorAll('line')
        expect(lines[0].getAttribute('role')).toBeNull()
    })

    it('ignores non-existent ids', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithErrors}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-errors')).toBeNull()
    })

    it('skips work in non-scatter context', () => {
        render(
            <Chart>
                <View scaleY={{ variant: 'band', domain: ['a', 'b'] }}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('scatter-errors')).toBeNull()
    })

    it('accepts data in data-frame format', () => {
        render(
            <Chart>
                <Scatter data={dataFrameWithErrors} x={'x'} y={'y'}>
                    <ScatterErrors variant={'x'} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-errors').querySelectorAll('line')
        expect(result).toHaveLength(4)
    })
})

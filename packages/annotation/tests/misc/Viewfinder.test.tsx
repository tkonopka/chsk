import { render, screen } from '@testing-library/react'
import { Chart, ChartProps } from '@chsk/core'
import { Viewfinder } from '../../src'

export const chartProps: Pick<ChartProps, 'size' | 'padding'> = {
    size: [400, 300],
    padding: [50, 50, 50, 50],
}

describe('Viewfinder', () => {
    it('creates four corners of a viewfinder', () => {
        render(
            <Chart {...chartProps}>
                <Viewfinder x={0} y={0} width={300} height={300} />
            </Chart>
        )
        expect(screen.getByRole('viewfinder').querySelectorAll('path')).toHaveLength(4)
    })

    it('creates viewfinder without role', () => {
        render(
            <Chart {...chartProps}>
                <Viewfinder x={0} y={0} width={300} height={300} setRole={false} />
            </Chart>
        )
        const corners = screen.getByRole('chart-content').querySelectorAll('path')
        expect(corners[0]?.closest('g')?.getAttribute('role')).toBeNull()
    })

    it('creates viewfinder with only one corner', () => {
        render(
            <Chart {...chartProps}>
                <Viewfinder variant={'top-left'} x={0} y={0} width={300} height={300} />
            </Chart>
        )
        expect(screen.getByRole('viewfinder').querySelectorAll('path')).toHaveLength(1)
    })

    it('creates viewfinder with only two corner', () => {
        render(
            <Chart {...chartProps}>
                <Viewfinder
                    variant={'top-right-bottom-left'}
                    x={0}
                    y={0}
                    width={300}
                    height={300}
                />
            </Chart>
        )
        expect(screen.getByRole('viewfinder').querySelectorAll('path')).toHaveLength(2)
    })
})

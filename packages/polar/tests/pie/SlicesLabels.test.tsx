import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pie, SlicesLabels } from '../../src'
import { pieProps } from './props'

describe('SlicesLabels', () => {
    it('creates labels', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SlicesLabels r={0.5} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n)
    })

    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <Pie data={[]}>
                    <SlicesLabels r={0.5} />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(0)
    })

    it('creates subset of slices', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SlicesLabels ids={['alpha']} r={0.5} />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(1)
    })

    it('creates labels without role', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SlicesLabels r={0.5} setRole={false} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n)
    })

    it('omits labels for small slices', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SlicesLabels r={0.5} minAngle={90} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n - 1)
    })
})

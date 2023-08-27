import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pie, SliceLabels } from '../../src'
import { pieProps } from './props'

describe('SliceLabels', () => {
    it('creates labels', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels />
                </Pie>
            </Chart>
        )
        const labels = screen.getByRole('view-pie').querySelectorAll('text')
        expect(labels).toHaveLength(pieProps.data.length)
        expect(labels[0]?.getAttribute('class')).toContain('sliceLabel')
    })

    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <Pie data={[]}>
                    <SliceLabels />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(0)
    })

    it('creates subset of labels', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels ids={['alpha']} />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(1)
    })

    it('creates labels without role', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels setRole={false} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n)
    })

    it('omits labels for small slices (degrees)', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels minAngle={90} angleUnit={'degree'} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n - 1)
    })

    it('omits labels for small slices (radian)', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels minAngle={Math.PI / 2} angleUnit={'radian'} />
                </Pie>
            </Chart>
        )
        const n = pieProps.data.length
        expect(screen.getByRole('view-pie').querySelectorAll('text')).toHaveLength(n - 1)
    })

    it('creates labels with slice ids', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabels format={x => x.id} />
                </Pie>
            </Chart>
        )
        const labels = screen.getByRole('view-pie').querySelectorAll('text')
        expect(labels[0]?.textContent).toBe('alpha')
        expect(labels[1]?.textContent).toBe('beta')
        expect(labels[2]?.textContent).toBe('gamma')
    })
})

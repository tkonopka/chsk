import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pie, Slice } from '../../src'
import { pieProps } from './props'

describe('Slice', () => {
    it('creates a default slice', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slice innerRadius={10} outerRadius={10} startAngle={0} endAngle={Math.PI} />
                </Pie>
            </Chart>
        )
        const path = screen.getByRole('view-pie').querySelector('path')
        expect(path?.getAttribute('d')).toContain('A')
    })

    it('creates a slice with rounded corner', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slice
                        innerRadius={10}
                        outerRadius={30}
                        r={5}
                        startAngle={0}
                        endAngle={Math.PI}
                    />
                </Pie>
            </Chart>
        )
        const path = screen.getByRole('view-pie').querySelector('path')
        expect(path?.getAttribute('d')?.split('A')).toHaveLength(7)
    })
})

import { render, screen, waitFor } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pie, SliceLabel } from '../../src'
import { pieProps } from './props'
import { getTransform } from '../../../core/tests/utils'

describe('SliceLabel', () => {
    it('creates a default slice label', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabel startAngle={0} endAngle={0} innerRadius={10} outerRadius={10}>
                        label
                    </SliceLabel>
                </Pie>
            </Chart>
        )
        const result = screen.getByText('label')
        expect(result.getAttribute('class')).toContain('label sliceLabel')
    })

    it('creates a radial label', async () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabel
                        startAngle={0}
                        endAngle={0}
                        innerRadius={10}
                        outerRadius={10}
                        radial
                    >
                        label
                    </SliceLabel>
                </Pie>
            </Chart>
        )
        const result = screen.getByText('label')
        await waitFor(() => {
            expect(getTransform(result.closest('g'), 'rotate')).toEqual(-90)
        })
    })

    it('creates a tangential label', async () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabel
                        startAngle={0}
                        endAngle={180}
                        angleUnit={'degree'}
                        innerRadius={10}
                        outerRadius={10}
                        align={[0.5, 0.5]}
                        tangential
                    >
                        label
                    </SliceLabel>
                </Pie>
            </Chart>
        )
        // slice is a semi-circle, tangent label at midpoint should be vertical
        const result = screen.getByText('label')
        await waitFor(() => {
            expect(getTransform(result.closest('g'), 'rotate')).toEqual(90)
        })
    })

    it('creates a label in left hemisphere', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabel
                        startAngle={-120}
                        endAngle={-150}
                        angleUnit={'degree'}
                        innerRadius={10}
                        outerRadius={10}
                        radial
                    >
                        label
                    </SliceLabel>
                </Pie>
            </Chart>
        )
        const label = screen.getByText('label')
        expect(label.getAttribute('class')).toContain('leftHemisphere')
        expect(label.getAttribute('class')).not.toContain('bottomHemisphere')
    })

    it('creates a label in bottom hemisphere', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <SliceLabel
                        startAngle={-120}
                        endAngle={-150}
                        angleUnit={'degree'}
                        innerRadius={10}
                        outerRadius={10}
                        tangential
                    >
                        label
                    </SliceLabel>
                </Pie>
            </Chart>
        )
        const label = screen.getByText('label')
        expect(label.getAttribute('class')).not.toContain('leftHemisphere')
        expect(label.getAttribute('class')).toContain('bottomHemisphere')
    })
})

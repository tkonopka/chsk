import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterChargedLabels, ScatterChargedLabelData } from '../../src/scatter'
import { scatterProps } from './scatter.props'

describe('ScatterChargedLabels', () => {
    it('creates a label', () => {
        const data: ScatterChargedLabelData[] = [
            { id: 'linear', index: 0, size: [40, 20], content: 'label' },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterChargedLabels data={data} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-charged-labels')).not.toBeNull()
        const label = screen.getByRole('scatter-charged-label')
        expect(label.querySelector('text')?.textContent).toBe('label')
        expect(label.querySelector('text')?.getAttribute('class')).toContain('scatterChargedLabel')
    })
})

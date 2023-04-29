import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterSelectedLabels, ScatterSelectedLabelData } from '../../src/scatter'
import { scatterProps } from './scatter.props'

describe('ScatterSelectedLabels', () => {
    it('creates a label', () => {
        const data: ScatterSelectedLabelData[] = [
            { id: 'linear', index: 0, size: [40, 20], content: 'label' },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSelectedLabels data={data} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-selected-labels')).not.toBeNull()
        const label = screen.getByRole('scatter-label')
        expect(label.querySelector('text')?.textContent).toBe('label')
        expect(label.querySelector('text')?.getAttribute('class')).toContain('scatterLabel')
    })
})

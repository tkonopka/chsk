import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { UpSet, UpSetGrid } from '../src/upset'
import { upSetProps } from './props'

describe('UpSetGrid', () => {
    it('draws circles for all ids and keys', () => {
        render(
            <Chart>
                <UpSet {...upSetProps}>
                    <UpSetGrid />
                </UpSet>
            </Chart>
        )
        // the dataset has four ids and four keys
        // so there should be 16 circles
        const result = screen.getByRole('upset-grid')
        expect(result.querySelectorAll('circle')).toHaveLength(16)
    })
})

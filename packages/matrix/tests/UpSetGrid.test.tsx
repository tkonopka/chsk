import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { UpSet, UpSetGrid } from '../src/upset'
import { upSetProps } from './props'

describe('UpSetGrid', () => {
    it('draws a grid for horizontal upset chart', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={true}>
                    <UpSetGrid />
                </UpSet>
            </Chart>
        )
        // the dataset has four ids and four keys
        // so there should be 16 circles
        const result = screen.getByRole('upset-grid')
        expect(result.querySelectorAll('circle')).toHaveLength(16)
    })

    it('draws a grid for vertical upset chart', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={false}>
                    <UpSetGrid />
                </UpSet>
            </Chart>
        )
        const result = screen.getByRole('upset-grid')
        expect(result.querySelectorAll('circle')).toHaveLength(16)
    })

    it('avoids work in non upset context', () => {
        render(
            <Chart>
                <UpSetGrid />
            </Chart>
        )
        expect(screen.queryByRole('upset-grid')).toBeNull()
    })
})

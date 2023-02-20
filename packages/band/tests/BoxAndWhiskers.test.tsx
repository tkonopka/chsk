import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BoxAndWhiskers } from '../src'

describe('BoxAndWhiskers', () => {
    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <BoxAndWhiskers data={undefined} horizontal={false} />
            </Chart>
        )
        expect(screen.queryAllByRole('boxwhisker')).toHaveLength(0)
    })
})

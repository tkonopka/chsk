import { render, screen } from '@testing-library/react'
import { Chart, SimpleDataComponent, Circle } from '../src'
import { chartProps } from './props'

describe('SimpleDataComponent', () => {
    it('creates a component', () => {
        render(
            <Chart {...chartProps}>
                <SimpleDataComponent
                    component={Circle}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                />
            </Chart>
        )
        const result = screen.getByRole('abc')
        expect(result).toBeDefined()
    })
})

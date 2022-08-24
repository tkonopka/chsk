import { render, screen } from '@testing-library/react'
import { Chart, OpacityMotion } from '../src'
import { chartProps } from './props'

describe('OpacityMotion', () => {
    it('creates a visible component on first render', () => {
        render(
            <Chart {...chartProps}>
                <OpacityMotion role={'example'} firstRender>
                    <rect width={10} height={10} />
                </OpacityMotion>
            </Chart>
        )
        const result = screen.getByRole('example')
        expect(result).toBeDefined()
        expect(result.getAttribute('opacity')).toEqual('1')
    })

    it('creates an invisible component for enter animation', () => {
        render(
            <Chart {...chartProps}>
                <OpacityMotion role={'example'} firstRender={false}>
                    <rect width={10} height={10} />
                </OpacityMotion>
            </Chart>
        )
        const result = screen.getByRole('example')
        expect(result).toBeDefined()
        expect(result.getAttribute('opacity')).toEqual('0')
    })
})

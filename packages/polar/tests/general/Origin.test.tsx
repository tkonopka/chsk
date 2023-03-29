import { render, screen } from '@testing-library/react'
import { Chart, ContinuousScaleProps, View } from '@chsk/core'
import { Origin } from '../../src'

describe('Origin', () => {
    const scaleLinear11: Omit<ContinuousScaleProps, 'size'> = { variant: 'linear', domain: [-1, 1] }

    it('creates a g component with a transform', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <Origin />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelectorAll('g')
        expect(result).toHaveLength(1)
        // style should contain translations
        expect(result[0]?.getAttribute('style')).toContain('150')
        expect(result[0]?.getAttribute('style')).toContain('100')
    })

    it('creates a g component with role', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <Origin variant={'custom'} setRole={true} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('custom')).toBeDefined()
    })
})
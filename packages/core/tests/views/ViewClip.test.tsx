import { render, screen } from '@testing-library/react'
import { Chart, View, ViewClip } from '../../src'

describe('ViewClip', () => {
    it('creates mask and a clipPath', () => {
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View>
                    <ViewClip id={'custom'}>
                        <circle x={0} y={0} r={4} />
                    </ViewClip>
                </View>
            </Chart>
        )
        const content = screen.getByRole('view-content')
        expect(content.querySelector('clipPath')).toBeDefined()
        expect(content.querySelector('clipPath')?.getAttribute('id')).toBe('custom')
        const rect = content.querySelector('clipPath')?.querySelector('rect')
        expect(rect?.getAttribute('width')).toBe('100')
        expect(rect?.getAttribute('height')).toBe('100')
        expect(content.querySelector('g')).toBeDefined()
        expect(content.querySelector('g')?.getAttribute('clip-path')).toBe('url(#custom)')
    })

    it('creates a clip mask with expansion', () => {
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View>
                    <ViewClip id={'custom'} expansion={[10, 10, 10, 10]}>
                        <circle x={0} y={0} r={4} />
                    </ViewClip>
                </View>
            </Chart>
        )
        const content = screen.getByRole('view-content')
        const rect = content.querySelector('clipPath')?.querySelector('rect')
        expect(rect?.getAttribute('x')).toBe('-10')
        expect(rect?.getAttribute('y')).toBe('-10')
        expect(rect?.getAttribute('width')).toBe('120')
        expect(rect?.getAttribute('height')).toBe('120')
    })
})

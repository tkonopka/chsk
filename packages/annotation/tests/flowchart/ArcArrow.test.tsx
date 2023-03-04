import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { ArcArrow } from '../../src/'

describe('ArcArrow', () => {
    it('creates a straight arrow', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <ArcArrow variant="left" start={[10, 90]} end={[10, 20]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('arc-arrow')
        expect(result.getAttribute('d')).toContain('L')
        expect(result.getAttribute('d')).not.toContain('A')
    })

    it('creates a curved arrow', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <ArcArrow variant="left" start={[10, 90]} end={[10, 20]} r={200} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('arc-arrow')
        expect(result.getAttribute('d')).toContain('L')
        expect(result.getAttribute('d')).toContain('A')
    })

    it('creates a two-sided curved arrow', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <ArcArrow
                        variant="right"
                        start={[10, 50]}
                        end={[10, 200]}
                        heads={[true, true]}
                        r={200}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('arc-arrow')
        expect(result.getAttribute('d')).toContain('L')
        expect(result.getAttribute('d')).toContain('A')
    })
})

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Pie, Slice } from '../../src'
import { pieProps } from './props'
import { useState } from 'react'

describe('Slice', () => {
    it('creates a default slice', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slice innerRadius={10} outerRadius={10} startAngle={0} endAngle={Math.PI} />
                </Pie>
            </Chart>
        )
        const path = screen.getByRole('view-pie').querySelector('path')
        expect(path?.getAttribute('d')).toContain('A')
    })

    it('creates a slice with rounded corner', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slice
                        innerRadius={10}
                        outerRadius={30}
                        r={5}
                        startAngle={0}
                        endAngle={Math.PI}
                    />
                </Pie>
            </Chart>
        )
        const path = screen.getByRole('view-pie').querySelector('path')
        expect(path?.getAttribute('d')?.split('A')).toHaveLength(7)
    })

    it('animates slice shape', async () => {
        const CustomSlice = () => {
            const [angle, setAngle] = useState<number>(Math.PI / 2)
            return (
                <>
                    <circle
                        key={1}
                        role="button"
                        onClick={() => {
                            setAngle(value => value + Math.PI / 2)
                        }}
                    />
                    <Slice innerRadius={0} outerRadius={50} startAngle={0} endAngle={angle} />
                </>
            )
        }
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <Pie {...pieProps}>
                    <CustomSlice />
                </Pie>
            </Chart>
        )
        // initial slice should have an angle of 90deg, i.e. quarter circle
        expect(screen.getByRole('slice').getAttribute('d')).toContain('50,0')
        // click, slice should expand to a semi-circle
        fireEvent.click(screen.getByRole('button'))
        await waitFor(() => {
            expect(screen.getByRole('slice').getAttribute('d')).toContain('0,50')
        })
        // click, slice should expand further to 3/4 of a circle
        fireEvent.click(screen.getByRole('button'))
        await waitFor(() => {
            expect(screen.getByRole('slice').getAttribute('d')).toContain('-50,0')
        })
    })
})

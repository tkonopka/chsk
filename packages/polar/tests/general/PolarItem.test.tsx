import { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, ContinuousScaleProps, View } from '@chsk/core'
import { PolarItem } from '../../src'
import { getTransform } from '../../../core/tests/utils'

describe('PolarItem', () => {
    const scaleLinear11: Omit<ContinuousScaleProps, 'size'> = { variant: 'linear', domain: [-1, 1] }

    it('create a text element', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarItem>
                        <text>abc</text>
                    </PolarItem>
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelectorAll('text')
        expect(result).toHaveLength(1)
    })

    it('create a text element without role', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarItem setRole={false}>
                        <text>abc</text>
                    </PolarItem>
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('text')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('avoid work when label is empty', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarItem></PolarItem>
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelector('text')).toBeNull()
    })

    it('animates the position of the label', async () => {
        const CustomLabel = () => {
            const [angle, setAngle] = useState<number>(0)
            return (
                <>
                    <circle
                        key={1}
                        role="button"
                        onClick={() => {
                            setAngle(value => value + 170)
                        }}
                    />
                    <PolarItem variant={'custom'} position={[100, angle]} angleUnit={'degree'}>
                        <text>abc</text>
                    </PolarItem>
                </>
            )
        }
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <CustomLabel />
                </View>
            </Chart>
        )
        const g = screen.getByRole('custom')
        expect(getTransform(g, 'X')).toBe(0)
        expect(getTransform(g, 'Y')).toBe(-100)
        // click, rotation clockwise - label should move slowly to the right of the origin
        fireEvent.click(screen.getByRole('button'))
        await waitFor(() => {
            expect(getTransform(screen.getByRole('custom'), 'X')).toBeGreaterThan(0)
        })
        await waitFor(() => {
            expect(getTransform(screen.getByRole('custom'), 'Y')).toBeGreaterThan(50)
        })
        // click, more rotation - label should be on the left side of the origin
        fireEvent.click(screen.getByRole('button'))
        await waitFor(() => {
            expect(getTransform(screen.getByRole('custom'), 'X')).toBeLessThan(0)
        })
    })

    it('rotates radial labels in the left hemisphere', () => {
        render(
            <Chart size={[400, 300]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarItem key={0} radial position={[100, 10]} angleUnit={'degree'}>
                        <text>right</text>
                    </PolarItem>
                    <PolarItem key={1} radial position={[100, -10]} angleUnit={'degree'}>
                        <text>left</text>
                    </PolarItem>
                </View>
            </Chart>
        )
        const right = screen.queryByText('right')
        const left = screen.queryByText('left')
        // radial label on the right should be nearly vertical
        expect(right?.closest('g')?.getAttribute('style')).toContain('(-80deg)')
        // radial label on the left should be nearly vertical, but in opposite direction
        expect(left?.closest('g')?.getAttribute('style')).toContain('(80deg)')
    })

    it('rotates tangential labels in the bottom hemisphere', () => {
        render(
            <Chart size={[400, 300]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarItem key={0} tangential position={[100, 80]} angleUnit={'degree'}>
                        <text>top</text>
                    </PolarItem>
                    <PolarItem key={1} tangential position={[100, 100]} angleUnit={'degree'}>
                        <text>bottom</text>
                    </PolarItem>
                </View>
            </Chart>
        )
        const top = screen.queryByText('top')
        const bottom = screen.queryByText('bottom')
        // tangential label in top hemisphere should be nearly vertical
        expect(top?.closest('g')?.getAttribute('style')).toContain('(80deg)')
        // tangential label in bottom hemisphere be nearly vertical, but in opposite direction
        expect(bottom?.closest('g')?.getAttribute('style')).toContain('(280deg)')
    })
})

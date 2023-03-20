import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, ContinuousScaleProps, View } from '@chsk/core'
import { PolarTypography } from '../../src'
import { getTransform } from '../../../core/tests/utils'
import { useState } from 'react'

describe('PolarTypography', () => {
    const scaleLinear11: Omit<ContinuousScaleProps, 'size'> = { variant: 'linear', domain: [-1, 1] }

    it('create a text element', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarTypography>abc</PolarTypography>
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelectorAll('text')
        expect(result).toHaveLength(1)
        expect(result[0].getAttribute('class')).toContain('label ')
        expect(result[0].getAttribute('class')).toContain('polarLabel')
    })

    it('create a text element without role', () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarTypography setRole={false}>abc</PolarTypography>
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
                    <PolarTypography></PolarTypography>
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
                    <PolarTypography variant={'custom'} position={[100, angle]}>
                        abc
                    </PolarTypography>
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
                    <PolarTypography key={0} radial position={[100, 10]}>
                        right
                    </PolarTypography>
                    <PolarTypography key={1} radial position={[100, -10]}>
                        left
                    </PolarTypography>
                </View>
            </Chart>
        )
        const right = screen.queryByText('right')
        const left = screen.queryByText('left')
        // radial label on the right should be nearly vertical
        expect(right?.closest('g')?.getAttribute('style')).toContain('(-80deg)')
        expect(right?.getAttribute('class')).not.toContain('Hemisphere')
        expect(right?.getAttribute('class')).not.toContain('undefined')
        // radial label on the left should be nearly vertical, but in opposite direction
        expect(left?.closest('g')?.getAttribute('style')).toContain('(80deg)')
        expect(left?.getAttribute('class')).toContain('leftHemisphere')
        expect(left?.getAttribute('class')).not.toContain('undefined')
    })

    it('rotates tangential labels in the bottom hemisphere', () => {
        render(
            <Chart size={[400, 300]}>
                <View scaleX={scaleLinear11} scaleY={scaleLinear11}>
                    <PolarTypography key={0} tangential position={[100, 80]}>
                        top
                    </PolarTypography>
                    <PolarTypography key={1} tangential position={[100, 100]}>
                        bottom
                    </PolarTypography>
                </View>
            </Chart>
        )
        const top = screen.queryByText('top')
        const bottom = screen.queryByText('bottom')
        // tangential label in top hemisphere should be nearly vertical
        expect(top?.closest('g')?.getAttribute('style')).toContain('(80deg)')
        expect(top?.getAttribute('class')).not.toContain('Hemisphere')
        // tangential label in bottom hemisphere be nearly vertical, but in opposite direction
        expect(bottom?.closest('g')?.getAttribute('style')).toContain('(280deg)')
        expect(bottom?.getAttribute('class')).toContain('bottomHemisphere')
    })
})

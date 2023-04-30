import { render, screen } from '@testing-library/react'
import { Chart, View, LineProps } from '@chsk/core'
import { getNumberAttr } from '../../../core/tests/utils'
import { chartProps, viewProps } from '../props'
import { Connector } from '../../src'

describe('Connector', () => {
    const lineProps: Pick<LineProps, 'x1' | 'x2' | 'y1' | 'y2'> = {
        x1: 100,
        y1: 100,
        x2: 150,
        y2: 50,
    }

    it('creates a straight line', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'line'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const line = result.querySelector('line')
        expect(getNumberAttr(line, 'x1')).toBe(100)
        expect(getNumberAttr(line, 'x2')).toBe(150)
        expect(getNumberAttr(line, 'y1')).toBe(100)
        expect(getNumberAttr(line, 'y2')).toBe(50)
    })

    it('creates an arc-based connector with default settings', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'arc-left'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('path')).toHaveLength(1)
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100')
        expect(d).toContain(' 150 50')
    })

    it('creates an arc-based connector with custom settings', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'arc-right'} {...lineProps} rx={88} ry={99} angle={10} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('path')).toHaveLength(1)
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100')
        expect(d).toContain('A 88 99 10')
    })

    it('creates a segmented connector (h-start)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'h-start'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 125 100')
    })

    it('creates a segmented connector (h-end)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'h-end'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 125 50')
    })

    it('creates a segmented connector (v-start)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'v-start'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 100 75')
    })

    it('creates a segmented connector (v-end)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'v-end'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 150 75')
    })

    it('creates a segmented connector with absolute elbow distance (v-end)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'v-end'} elbow={10} elbowUnit={'absolute'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 150 60 L 150 50')
    })

    it('creates a segmented connector with absolute elbow distance (h-end)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'h-end'} elbow={10} elbowUnit={'absolute'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 140 50 L 150 50')
    })
})

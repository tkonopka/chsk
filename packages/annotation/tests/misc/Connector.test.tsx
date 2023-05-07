import { render, screen } from '@testing-library/react'
import { Chart, View, LineProps } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { Connector } from '../../src'

describe('Connector', () => {
    const lineProps: Pick<LineProps, 'x1' | 'x2' | 'y1' | 'y2'> = {
        x1: 100,
        y1: 100,
        x2: 150,
        y2: 50,
    }

    it('creates a path with class name', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'line'} {...lineProps} className={'custom'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('path')?.getAttribute('class')).toContain('connector custom')
    })

    it('creates a straight line', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'line'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('path')?.getAttribute('d')).toContain('M 100 100')
    })

    it('creates a segmented connector (hl)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'hl'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 125 100')
    })

    it('creates a segmented connector (lh)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'lh'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 125 50')
    })

    it('creates a segmented connector (vl)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'vl'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 100 75')
    })

    it('creates a segmented connector (lv)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'lv'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 150 75')
    })

    it('creates a segmented connector with absolute elbow distance (lv)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'lv'} elbow={10} elbowUnit={'absolute'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 150 60 L 150 50')
    })

    it('creates a segmented connector with absolute elbow distance (lh)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'lh'} elbow={10} elbowUnit={'absolute'} {...lineProps} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('M 100 100 L 140 50 L 150 50')
    })

    it('creates a segmented connector with bundle smoothing', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Connector variant={'vl'} {...lineProps} beta={0.5} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        const d = result.querySelector('path')?.getAttribute('d')
        expect(d).toContain('C')
    })
})

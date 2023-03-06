import { render, screen } from '@testing-library/react'
import { Chart, Path, NumericPositionSpec } from '../../src'
import { chartProps } from '../props'

const threePoints: NumericPositionSpec[] = [
    [20, 100],
    [60, 20],
    [100, 80],
]

describe('Path', () => {
    it('creates a default linear path', () => {
        render(
            <Chart {...chartProps}>
                <Path points={threePoints} curve={'Linear'} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('default')
        expect(result?.getAttribute('d')).toContain('M')
    })

    it('creates a default linear path without role', () => {
        render(
            <Chart {...chartProps}>
                <Path points={threePoints} curve={'Linear'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('path')).toHaveLength(1)
    })

    it('creates a custom path with natural curve', () => {
        render(
            <Chart {...chartProps}>
                <Path variant="custom" points={threePoints} curve={'Natural'} />
            </Chart>
        )
        const result = screen.getByRole('custom')
        expect(result?.getAttribute('d')).toContain('M')
    })

    it('assigns markers', () => {
        render(
            <Chart {...chartProps}>
                <Path points={threePoints} markerStart={'abc'} markerEnd={'xyz'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('path')?.getAttribute('marker-start')).toEqual('url(#abc)')
        expect(result.querySelector('path')?.getAttribute('marker-end')).toEqual('url(#xyz)')
    })
})

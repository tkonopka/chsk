import { render, screen } from '@testing-library/react'
import { Chart, Path, NumericPositionSpec } from '../../src'
import { chartProps } from '../props'

const threePoints: NumericPositionSpec[] = [
    [20, 100],
    [60, 20],
    [100, 80],
]

describe('Path', () => {
    it('creates a default path', () => {
        render(
            <Chart {...chartProps}>
                <Path points={threePoints} curve={'Linear'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('path')
        expect(result?.getAttribute('d')).toContain('M')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a path variant', () => {
        render(
            <Chart {...chartProps}>
                <Path variant={'custom-path'} points={threePoints} curve={'Linear'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('path')
        expect(result?.getAttribute('d')).toContain('M')
        expect(result?.getAttribute('class')).toBe('customPath')
        expect(result?.getAttribute('role')).toBe('custom-path')
    })

    it('creates a path variant without role', () => {
        render(
            <Chart {...chartProps}>
                <Path
                    variant={'custom-path'}
                    points={threePoints}
                    curve={'Linear'}
                    setRole={false}
                />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('path')
        expect(result?.getAttribute('d')).toContain('M')
        expect(result?.getAttribute('class')).toBe('customPath')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom path with natural curve', () => {
        render(
            <Chart {...chartProps}>
                <Path variant={'custom'} points={threePoints} curve={'Natural'} />
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

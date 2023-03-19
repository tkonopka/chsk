import { render, screen } from '@testing-library/react'
import {
    Chart,
    ContinuousAxisScale,
    defaultScaleX,
    defaultScaleY,
    ProcessedDataContextProps,
    roundDecimalPlaces,
    ScalesContextProps,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { Pie, isPieProcessedData, PieProcessedDataItem, Slices } from '../../src'
import { pieProps } from './props'

describe('Slices', () => {
    it('creates default slices', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slices />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('path')).toHaveLength(
            pieProps.data.length
        )
    })

    it('avoids work when data is empty', () => {
        render(
            <Chart>
                <Pie data={[]}>
                    <Slices />
                </Pie>
            </Chart>
        )
        expect(screen.queryByRole('slices')).toBeNull()
    })

    it('creates subset of slices', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slices ids={['alpha']} />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('path')).toHaveLength(1)
    })

    it('creates slices without role', () => {
        render(
            <Chart>
                <Pie {...pieProps}>
                    <Slices setRole={false} />
                </Pie>
            </Chart>
        )
        expect(screen.getByRole('view-pie').querySelectorAll('path')).toHaveLength(
            pieProps.data.length
        )
        expect(screen.queryByRole('slices')).toBeNull()
    })
})

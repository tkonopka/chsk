import { render, screen } from '@testing-library/react'
import {
    Chart,
    ContinuousAxisScale,
    defaultScaleX,
    defaultScaleY,
    ProcessedDataContextProps,
    roundDecimalPlaces,
    useProcessedData,
    useScales,
    Scales,
} from '@chsk/core'
import { Pie, isPieProcessedData, PieProcessedDataItem } from '../../src'
import { pieProps } from './props'

const round2dp = (x: number) => roundDecimalPlaces(x, 2)

describe('Pie', () => {
    it('defines a view', () => {
        render(
            <Chart>
                <Pie {...pieProps} />
            </Chart>
        )
        expect(screen.getByRole('view-pie')).not.toBeNull()
    })

    it('handles empty data', () => {
        render(
            <Chart>
                <Pie data={[]} />
            </Chart>
        )
        expect(screen.getByRole('view-pie')).not.toBeNull()
    })

    type PieProcessedContextProps = ProcessedDataContextProps & {
        /** data */
        data: Array<PieProcessedDataItem>
    }

    const GetProcessedData = ({ target }: { target: PieProcessedContextProps }) => {
        const temp = useProcessedData()
        if (isPieProcessedData(temp.data)) {
            target.data = temp.data
            target.seriesIndexes = temp.seriesIndexes
            target.keys = temp.keys
        }
        return null
    }

    it('defines processed data', () => {
        const processed: PieProcessedContextProps = { data: [], seriesIndexes: {}, keys: [] }
        render(
            <Chart>
                <Pie {...pieProps}>
                    <GetProcessedData target={processed} />
                </Pie>
            </Chart>
        )
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(pieProps.data.length)
        expect(processed.data).toHaveLength(pieProps.data.length)
        const expectedIds = ['alpha', 'beta', 'gamma']
        expectedIds.forEach((id, i) => {
            expect(processed.data[i].id).toEqual(id)
        })
        // first element should start at angle 0
        expect(processed.data[0].startAngle).toEqual(0)
    })

    it('defines scales with 1:1 aspect ratio', () => {
        let scales = { x: defaultScaleX, y: defaultScaleY } as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart>
                <Pie {...pieProps}>
                    <GetScales />
                </Pie>
            </Chart>
        )
        // coordinate distances should be the same on horizontal and vertical scales
        const scaleX = scales.x as ContinuousAxisScale
        const scaleY = scales.y as ContinuousAxisScale
        const dX = scaleX(1) - scaleX(0)
        const dY = scaleY(1) - scaleY(0)
        expect(round2dp(10 * Math.abs(dX))).toEqual(round2dp(10 * Math.abs(dY)))
    })

    it('adds global rotation', () => {
        const processed: PieProcessedContextProps = { data: [], seriesIndexes: {}, keys: [] }
        render(
            <Chart>
                <Pie {...pieProps} angle={Math.PI / 2} angleUnit={'radian'}>
                    <GetProcessedData target={processed} />
                </Pie>
            </Chart>
        )
        expect(processed.data[0].startAngle).toEqual(Math.PI / 2)
    })

    it('uses angle alignment', () => {
        const processed: PieProcessedContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const data = [
            { id: 'alpha', data: 60 },
            { id: 'beta', data: 50 },
            { id: 'beta', data: 40 },
        ]
        render(
            <Chart>
                <Pie data={data} angle={90} angleUnit={'degree'} angleAlign={0.5}>
                    <GetProcessedData target={processed} />
                </Pie>
            </Chart>
        )
        const startAngle = processed.data[0].startAngle
        expect(startAngle).toBeGreaterThan(0)
        expect(startAngle).toBeLessThan(Math.PI)
    })

    it('sets default scales', () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart>
                <Pie
                    {...pieProps}
                    scaleX={{ variant: 'linear', domain: 'auto' }}
                    scaleY={{ variant: 'linear', domain: 'auto' }}
                >
                    <GetScales />
                </Pie>
            </Chart>
        )
        const xDomain = scales.x.domain()
        const yDomain = scales.y.domain()
        expect(xDomain[0]).toBeLessThan(0)
        expect(xDomain[1]).toBeGreaterThan(0)
        expect(yDomain[0]).toBeLessThan(0)
        expect(yDomain[1]).toBeGreaterThan(0)
    })
})

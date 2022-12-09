import {
    Chart,
    ContinuousAxisScale,
    defaultScaleX,
    defaultScaleY,
    ScalesContextProps,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn2Props, venn3Props } from './props'
import { round2dp } from './intersections.test'
import { Venn, VennDataContextProps, isVennProcessedData } from '../src'

describe('Venn', () => {
    it('defines a view', () => {
        render(
            <Chart>
                <Venn {...venn2Props} />
            </Chart>
        )
        expect(screen.getByRole('view-venn')).not.toBeNull()
    })

    it('defines a view even for empty data', () => {
        render(
            <Chart>
                <Venn data={[]} />
            </Chart>
        )
        expect(screen.getByRole('view-venn')).not.toBeNull()
    })

    const GetProcessedData = ({ target }: { target: VennDataContextProps }) => {
        const temp = useProcessedData()
        if (isVennProcessedData(temp.data)) {
            target.data = temp.data
            target.seriesIndexes = temp.seriesIndexes
            target.keys = temp.keys
        }
        return null
    }

    it('defines processed data', () => {
        const processed: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <GetProcessedData target={processed} />
                </Venn>
            </Chart>
        )
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        const expectedIds = ['alpha', 'beta']
        expectedIds.forEach((id, i) => {
            expect(processed.data[i].id).toEqual(id)
        })
    })

    it('defines scales with 1:1 aspect ratio', () => {
        let scales = { x: defaultScaleX, y: defaultScaleY } as ScalesContextProps
        const GetScales = () => {
            const temp = useScales()
            scales = temp
            return null
        }
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <GetScales />
                </Venn>
            </Chart>
        )
        // coordinate distances must be the same on x- and y-axis scales
        const scaleX = scales.x as ContinuousAxisScale
        const scaleY = scales.y as ContinuousAxisScale
        const dX = scaleX(1) - scaleX(0)
        const dY = scaleY(1) - scaleY(0)
        expect(Math.abs(dX)).toBeGreaterThan(0)
        expect(Math.abs(dY)).toBeGreaterThan(0)
        expect(Math.round(10 * Math.abs(dX))).toEqual(Math.round(10 * Math.abs(dY)))
    })

    it('computes proportional sizes', () => {
        const processed: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const dataSizes = [
            {
                id: 'alpha',
                data: ['a', 'b', 'c', 'd'],
            },
            {
                id: 'beta',
                data: ['c', 'd', 'e'],
            },
        ]
        render(
            <Chart>
                <Venn data={dataSizes} proportional={true}>
                    <GetProcessedData target={processed} />
                </Venn>
            </Chart>
        )
        expect(processed.data[0].r).toBeGreaterThan(processed.data[1].r)
    })

    it('computes positions for disjoint sets', () => {
        const processed: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const dataDisjoint = [
            {
                id: 'alpha',
                data: ['a', 'b', 'c'],
            },
            {
                id: 'beta',
                data: ['d', 'e', 'f'],
            },
        ]
        render(
            <Chart>
                <Venn data={dataDisjoint}>
                    <GetProcessedData target={processed} />
                </Venn>
            </Chart>
        )
        expect(processed.data[0].position[X]).toBeLessThan(-1)
        expect(processed.data[1].position[X]).toBeGreaterThan(1)
    })

    it('computes positions for two sets at angle', () => {
        const processed0: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const processed1: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        render(
            <Chart>
                <Venn {...venn2Props} angle={0}>
                    <GetProcessedData target={processed0} />
                </Venn>
                <Venn {...venn2Props} angle={Math.PI / 2}>
                    <GetProcessedData target={processed1} />
                </Venn>
            </Chart>
        )
        // first dataset should have sets side-by-side along x-axis
        expect(processed0.data[0].position[X]).toBeLessThan(0)
        expect(Math.abs(processed0.data[0].position[Y])).toEqual(0)
        expect(processed0.data[1].position[X]).toBeGreaterThan(0)
        expect(Math.abs(processed0.data[1].position[Y])).toEqual(0)
        // second dataset should have sets above / below the y-axis
        expect(Math.abs(100 * processed1.data[0].position[X])).toBeLessThan(0.001)
        expect(processed1.data[0].position[Y]).toBeGreaterThan(0)
        expect(Math.abs(processed1.data[1].position[X])).toBeLessThan(0.001)
        expect(processed1.data[1].position[Y]).toBeLessThan(0)
    })

    it('computes positions for three sets at angle', () => {
        const processed0: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const processed1: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        render(
            <Chart>
                <Venn {...venn3Props} angle={0}>
                    <GetProcessedData target={processed0} />
                </Venn>
                <Venn {...venn3Props} angle={Math.PI}>
                    <GetProcessedData target={processed1} />
                </Venn>
            </Chart>
        )
        // first dataset should have two sets side-by-side, and one set below
        expect(Math.abs(round2dp(processed0.data[0].position[X]))).toEqual(
            Math.abs(round2dp(processed0.data[1].position[X]))
        )
        expect(Math.abs(round2dp(processed0.data[0].position[Y]))).toEqual(
            Math.abs(round2dp(processed0.data[1].position[Y]))
        )
        expect(processed0.data[0].position[Y]).toBeGreaterThan(0)
        expect(round2dp(processed0.data[2].position[X])).toEqual(0)
        expect(processed0.data[2].position[Y]).toBeLessThan(0)
        // rotated dataset should have two sets side-by-side, and one set above
        expect(Math.abs(round2dp(processed1.data[0].position[X]))).toEqual(
            Math.abs(round2dp(processed1.data[1].position[X]))
        )
        expect(Math.abs(round2dp(processed1.data[0].position[Y]))).toEqual(
            Math.abs(round2dp(processed1.data[1].position[Y]))
        )
        expect(processed1.data[0].position[Y]).toBeLessThan(0)
        expect(round2dp(processed1.data[2].position[X])).toEqual(0)
        expect(processed1.data[2].position[Y]).toBeGreaterThan(0)
    })
})

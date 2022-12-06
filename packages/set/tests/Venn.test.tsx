import {
    Chart,
    ContinuousAxisScale,
    defaultScaleX,
    defaultScaleY,
    ScalesContextProps,
    useProcessedData,
    useScales,
    X,
} from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn2Props } from './props'
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

    it('defines processed data', () => {
        const processed: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isVennProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <GetProcessedData />
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
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isVennProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
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
                    <GetProcessedData />
                </Venn>
            </Chart>
        )
        expect(processed.data[0].r).toBeGreaterThan(processed.data[1].r)
    })

    it('computes disjoint sets', () => {
        const processed: VennDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isVennProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
        const dataSizes = [
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
                <Venn data={dataSizes}>
                    <GetProcessedData />
                </Venn>
            </Chart>
        )
        expect(processed.data[0].position[X]).toBeLessThan(-1)
        expect(processed.data[1].position[X]).toBeGreaterThan(1)
    })
})

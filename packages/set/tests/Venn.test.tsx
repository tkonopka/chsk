import {
    Chart,
    ContinuousAxisScale,
    defaultScaleX,
    defaultScaleY,
    ScalesContextProps,
    useProcessedData,
    useScales,
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
        // the dataset has four sets, so four ids
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
        // the dataset has four sets, so four ids
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
})

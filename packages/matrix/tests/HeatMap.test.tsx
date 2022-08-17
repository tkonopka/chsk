import { render } from '@testing-library/react'
import { Chart, useProcessedData } from '@chask/core'
import { HeatMap, isHeatMapProcessedData } from '../src/heatmap'
import { heatmapProps } from './props'
import { HeatMapDataContextProps } from '../src/heatmap'

const keysXYZ = ['x', 'y', 'z']

describe('HeatMap', () => {
    it('defines processed data', () => {
        const processed: HeatMapDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isHeatMapProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={keysXYZ}>
                    <GetProcessedData />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(4)
        expect(processed.data).toHaveLength(4)
        expect(processed.keys).toEqual(keysXYZ)
    })
})

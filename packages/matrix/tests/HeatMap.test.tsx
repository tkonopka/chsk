import { render } from '@testing-library/react'
import { Chart } from '@chask/core'
import { HeatMap, useProcessedHeatMapData } from '../src/heatmap'
import { heatmapProps } from './props'
import { HeatMapDataContextProps } from '../src/heatmap'

const keysXYZ = ['x', 'y', 'z']

describe('HeatMap', () => {
    it('defines processed data', () => {
        let processed: HeatMapDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            processed = useProcessedHeatMapData()
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

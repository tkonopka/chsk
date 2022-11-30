import { render } from '@testing-library/react'
import { Chart, useProcessedData } from '@chsk/core'
import { UpSet, isUpSetProcessedData, UpSetDataContextProps } from '../src/upset'
import { upSetProps } from './props'

const ids = ['alpha', 'beta', 'gamma', 'delta']

describe('UpSet', () => {
    it('defines processed data', () => {
        const processed: UpSetDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isUpSetProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
        render(
            <Chart>
                <UpSet {...upSetProps}>
                    <GetProcessedData />
                </UpSet>
            </Chart>
        )
        // the dataset has four sets, so four ids
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(4)
        expect(processed.data).toHaveLength(4)
        ids.forEach((id, i) => {
            expect(processed.data[i].id).toEqual(id)
        })
        // the sets intersect so that:
        // 2 elements are present in (alpha)
        // 2 elements are present in (alpha, beta, gamma)
        // 2 elements are present in (beta, gamma)
        // 4 elements are present in (delta)
        // so there should be four keys
        expect(processed.keys).toHaveLength(4)
    })
})

import { render } from '@testing-library/react'
import { cloneProps, Chart } from '@chsk/core'
import { UpSet, isUpSetProcessedData } from '../../src/upset'
import { upSetProps } from '../props'
import { GetProcessedData, mockProcessedData } from '../contexts'

const ids = ['alpha', 'beta', 'gamma', 'delta']

describe('UpSet', () => {
    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <UpSet {...upSetProps}>
                    <GetProcessedData value={result} />
                </UpSet>
            </Chart>
        )
        expect(isUpSetProcessedData(result.data)).toBeTruthy()
        // the dataset has four sets, so four ids
        expect(Object.keys(result.seriesIndexes)).toHaveLength(4)
        expect(result.data).toHaveLength(4)
        ids.forEach((id, i) => {
            expect(result.data[i]?.id).toEqual(id)
        })
        // the sets intersect so that:
        // 2 elements are present in (alpha)
        // 2 elements are present in (alpha, beta, gamma)
        // 2 elements are present in (beta, gamma)
        // 4 elements are present in (delta)
        // so there should be four keys
        expect(result.keys).toHaveLength(4)
    })
})

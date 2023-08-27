import { render, screen } from '@testing-library/react'
import { cloneProps, Chart, PreparedDataContextProps } from '@chsk/core'
import {
    Dendrogram,
    DendrogramPreparedDataItem,
    isDendrogramProcessedData,
    useDendrogramPreparedData,
} from '../../src/dendrogram'
import { mockProcessedData } from '../props'
import { dendrogramProps } from './dendrogram.props'
import { GetProcessedData } from '../contexts'

describe('Dendrogram', () => {
    it('creates a view', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} />
            </Chart>
        )
        const result = screen.getByRole('view-dendrogram')
        expect(result).toBeDefined()
    })

    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <GetProcessedData value={result} />
                </Dendrogram>
            </Chart>
        )
        expect(isDendrogramProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(1)
        expect(result.data).toHaveLength(1)
        expect(result.keys).toHaveLength(4)
    })

    it('defines prepared data with default hang', () => {
        let prepared: PreparedDataContextProps<DendrogramPreparedDataItem> = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetPreparedData = () => {
            prepared = useDendrogramPreparedData()
            return null
        }
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <GetPreparedData />
                </Dendrogram>
            </Chart>
        )
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(1)
        expect(prepared.data).toHaveLength(1)
        expect(prepared.keys).toHaveLength(4)
        // the dataset represents a balanced tree with four nodes, so there are three merge nodes
        const data = prepared.data[0]
        expect(data?.height).toHaveLength(3)
        expect(data?.position).toHaveLength(3)
        // by default, hang is negative, and all leaf nodes should be at equal height
        const leafHeights = new Set<number>(data?.leafHeight)
        expect(Array.from(leafHeights)).toHaveLength(1)
    })

    it('defines prepared data with positive hang', () => {
        let prepared: PreparedDataContextProps<DendrogramPreparedDataItem> = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetPreparedData = () => {
            prepared = useDendrogramPreparedData()
            return null
        }
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} hang={0.1}>
                    <GetPreparedData />
                </Dendrogram>
            </Chart>
        )
        const data = prepared.data[0]
        expect(data?.height).toHaveLength(3)
        expect(data?.position).toHaveLength(3)
        // a balanced tree with four nodes will have leaf nodes at two distinct levels
        const leafHeights = new Set<number>(data?.leafHeight)
        expect(Array.from(leafHeights)).toHaveLength(2)
    })
})

import { render, screen } from '@testing-library/react'
import { cloneDeep } from 'lodash'
import { Chart } from '@chsk/core'
import {
    HeatMap,
    HeatMapCells,
    isHeatMapProcessedData,
    HeatMapProcessedDataItem,
} from '../src/heatmap'
import { heatmapProps } from './props'
import { mockProcessedData, mockScales, GetScales, GetProcessedData } from './contexts'

const ids = ['alpha', 'beta', 'gamma', 'delta']
const keysXYZ = ['x', 'y', 'z']

describe('HeatMap', () => {
    it('defines processed data', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={keysXYZ}>
                    <GetProcessedData value={result} />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(isHeatMapProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(4)
        expect(result.data).toHaveLength(4)
        expect(result.keys).toEqual(keysXYZ)
        ids.forEach((id, i) => {
            expect(result.data[i].id).toEqual(id)
            const size = result.data[i].size as number[]
            expect(size).toHaveLength(keysXYZ.length)
            expect(size.every(v => !isFinite(v))).toBeTruthy()
        })
    })

    it('determines domain for colors (auto)', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    scaleColor={{
                        variant: 'sequential',
                        colors: ['#fffff', '#000000'],
                        domain: 'auto',
                    }}
                >
                    <GetScales value={result} />
                </HeatMap>
            </Chart>
        )
        expect(result.color.variant).toEqual('sequential')
        expect(result.color.domain()).toEqual([0, 30])
    })

    it('determines domain for colors (semi-automatic)', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    scaleColor={{
                        variant: 'sequential',
                        colors: ['#fffff', '#000000'],
                        domain: ['auto', 'auto'],
                    }}
                >
                    <GetScales value={result} />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(result.color.variant).toEqual('sequential')
        expect(result.color.domain()).toEqual([0, 30])
    })

    it('determines middle of diverging color scale', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    scaleColor={{
                        variant: 'diverging',
                        colors: ['#fffff', '#000000'],
                        domain: [-70, 'auto', 'auto'],
                    }}
                >
                    <GetScales value={result} />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(result.color.variant).toEqual('diverging')
        expect(result.color.domain()).toEqual([-70, -20, 30])
    })

    it('accepts custom color domain', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    scaleColor={{
                        variant: 'diverging',
                        colors: ['#fffff', '#000000'],
                        domain: [-20, 0, 50],
                    }}
                >
                    <GetScales value={result} />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(result.color.variant).toEqual('diverging')
        expect(result.color.domain()).toEqual([-20, 0, 50])
    })

    it('accepts data for sizes', () => {
        const result = cloneDeep(mockProcessedData)
        const dataSize = heatmapProps.data
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={keysXYZ} dataSize={dataSize}>
                    <GetProcessedData value={result} />
                </HeatMap>
            </Chart>
        )
        expect(isHeatMapProcessedData(result.data)).toBeTruthy()
        // the dataset has four series
        expect(Object.keys(result.seriesIndexes)).toHaveLength(4)
        expect(result.data).toHaveLength(4)
        expect(result.keys).toEqual(keysXYZ)
        // none of the sizes should be null, although they can be zero
        ids.forEach((id, i) => {
            const d = result.data[i] as HeatMapProcessedDataItem
            expect(d.id).toEqual(id)
            expect(d.size).toHaveLength(keysXYZ.length)
            expect(d.size.every(v => isFinite(v))).toBeTruthy()
        })
    })

    it('accepts preset size scale', () => {
        const dataSize = heatmapProps.data
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    dataSize={dataSize}
                    scaleSize={{ variant: 'sqrt', size: 3, domain: [0, 'auto'] }}
                >
                    <HeatMapCells />
                </HeatMap>
            </Chart>
        )
        // size scale maps the domain to a tiny size.
        // So practical cells will also appear quite small
        const result = screen.getByRole('heatmap-cells').querySelectorAll('rect')
        result.forEach(rect => {
            expect(Number(rect.getAttribute('width'))).toBeLessThanOrEqual(15)
            expect(Number(rect.getAttribute('height'))).toBeLessThanOrEqual(15)
        })
    })

    it('fills size domain to start at zero', () => {
        const dataSize = heatmapProps.data
        render(
            <Chart>
                <HeatMap
                    {...heatmapProps}
                    keys={keysXYZ}
                    dataSize={dataSize}
                    scaleSize={{ variant: 'sqrt', size: 'auto', domain: ['auto', 5] }}
                >
                    <HeatMapCells />
                </HeatMap>
            </Chart>
        )
        // size scale domain should be set from 'auto' to 0
        // the dataset has some entries with size 0, so those should have height and width equal to zero
        const result = screen.getByRole('heatmap-cells').querySelectorAll('rect')
        let hits = 0
        result.forEach(rect => {
            const height0 = Number(rect.getAttribute('height')) === 0
            const width0 = Number(rect.getAttribute('height')) === 0
            hits += Number(height0 && width0)
        })
        expect(hits).toBeGreaterThan(0)
    })
})

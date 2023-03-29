import { render, screen } from '@testing-library/react'
import { Chart, ColorScale, defaultCategoricalScale, useProcessedData, useScales } from '@chsk/core'
import {
    HeatMap,
    HeatMapCells,
    isHeatMapProcessedData,
    HeatMapDataContextProps,
} from '../src/heatmap'
import { heatmapProps } from './props'

const ids = ['alpha', 'beta', 'gamma', 'delta']
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
        ids.forEach((id, i) => {
            expect(processed.data[i].id).toEqual(id)
            expect(processed.data[i].size).toHaveLength(keysXYZ.length)
            expect(processed.data[i].size.every(v => !isFinite(v))).toBeTruthy()
        })
    })

    it('determines domain for colors (auto)', () => {
        let scale: ColorScale = defaultCategoricalScale
        const GetColorScale = () => {
            scale = useScales().scales.color
            return null
        }
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
                    <GetColorScale />
                </HeatMap>
            </Chart>
        )
        expect(scale.variant).toEqual('sequential')
        expect(scale.domain()).toEqual([0, 30])
    })

    it('determines domain for colors (semi-automatic)', () => {
        let scale: ColorScale = defaultCategoricalScale
        const GetColorScale = () => {
            scale = useScales().scales.color
            return null
        }
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
                    <GetColorScale />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(scale.variant).toEqual('sequential')
        expect(scale.domain()).toEqual([0, 30])
    })

    it('determines middle of diverging color scale', () => {
        let scale: ColorScale = defaultCategoricalScale
        const GetColorScale = () => {
            scale = useScales().scales.color
            return null
        }
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
                    <GetColorScale />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(scale.variant).toEqual('diverging')
        expect(scale.domain()).toEqual([-70, -20, 30])
    })

    it('accepts custom color domain', () => {
        let scale: ColorScale = defaultCategoricalScale
        const GetColorScale = () => {
            scale = useScales().scales.color
            return null
        }
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
                    <GetColorScale />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(scale.variant).toEqual('diverging')
        expect(scale.domain()).toEqual([-20, 0, 50])
    })

    it('accepts data for sizes', () => {
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
        const dataSize = heatmapProps.data
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={keysXYZ} dataSize={dataSize}>
                    <GetProcessedData />
                </HeatMap>
            </Chart>
        )
        // the dataset has four series
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(4)
        expect(processed.data).toHaveLength(4)
        expect(processed.keys).toEqual(keysXYZ)
        // none of the sizes should be null, although they can be zero
        ids.forEach((id, i) => {
            expect(processed.data[i].id).toEqual(id)
            expect(processed.data[i].size).toHaveLength(keysXYZ.length)
            expect(processed.data[i].size.every(v => isFinite(v))).toBeTruthy()
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

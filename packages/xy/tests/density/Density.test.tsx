import { render } from '@testing-library/react'
import { cloneProps, Chart } from '@chsk/core'
import {
    Density,
    useDensityPreparedData,
    DensityDataContextProps,
    DENSITY_COUNT,
} from '../../src/density'
import { GetProcessedData, GetScales, mockProcessedData, mockScales } from '../contexts'
import { densityProps, densityRowData } from './density.props'
import { interpolateReds } from 'd3-scale-chromatic'

describe('Density', () => {
    it('defines scales', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Density {...densityProps}>
                    <GetScales value={result} />
                </Density>
            </Chart>
        )
        // the dataset has one series
        expect(result.color.domain()).toHaveLength(2)
        expect(result.x.domain()[0]).toBeLessThanOrEqual(1)
        expect(result.x.domain()[1]).toBeGreaterThanOrEqual(2)
        expect(result.y.domain()[0]).toBeLessThanOrEqual(1)
        expect(result.y.domain()[1]).toBeGreaterThanOrEqual(3)
    })

    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Density {...densityProps}>
                    <GetProcessedData value={result} />
                </Density>
            </Chart>
        )
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        // x and y arrays should hold [min, max] intervals
        expect(result.data[0]?.x).toEqual([1, 3])
        expect(result.data[0]?.y).toEqual([1, 3])
    })

    it('accepts data in verbose format', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Density {...densityProps} data={densityRowData}>
                    <GetProcessedData value={result} />
                </Density>
            </Chart>
        )
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: DensityDataContextProps = {
            data: [],
            binSize: 1,
            seriesIndexes: {},
            keys: [],
        }
        const GetPreparedData = () => {
            prepared = useDensityPreparedData()
            return null
        }
        render(
            <Chart>
                <Density {...densityProps}>
                    <GetPreparedData />
                </Density>
            </Chart>
        )
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        // the data should get binned into four bins (6 points, but some points are identical)
        expect(prepared.data).toHaveLength(4)
        // the data should be sorted with low-count entries first
        expect(prepared.data[0]?.[DENSITY_COUNT]).toEqual(1)
        expect(prepared.data[1]?.[DENSITY_COUNT]).toEqual(1)
        expect(prepared.data[2]?.[DENSITY_COUNT]).toEqual(2)
        expect(prepared.data[3]?.[DENSITY_COUNT]).toEqual(2)
    })

    it('defines prepared data with disabled series', () => {
        let prepared: DensityDataContextProps = {
            data: [],
            binSize: 1,
            seriesIndexes: {},
            keys: [],
        }
        const GetPreparedData = () => {
            prepared = useDensityPreparedData()
            return null
        }
        render(
            <Chart data={{ disabledKeys: new Set<string>(['beta']) }}>
                <Density {...densityProps} binSize={2.5}>
                    <GetPreparedData />
                </Density>
            </Chart>
        )
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.binSize).toEqual(2.5)
        // the data should get binned into four bins (6 points, but some points are identical)
        expect(prepared.data).toHaveLength(4)
        // the data should be sorted with low-count entries first, and one bin should be empty
        expect(prepared.data[0]?.[DENSITY_COUNT]).toEqual(0)
        expect(prepared.data[1]?.[DENSITY_COUNT]).toEqual(1)
        expect(prepared.data[2]?.[DENSITY_COUNT]).toEqual(1)
        expect(prepared.data[3]?.[DENSITY_COUNT]).toEqual(2)
    })

    it('accepts sequential color values (columns)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Density
                    {...densityProps}
                    valueColor={'c'}
                    scaleColor={{
                        variant: 'sequential',
                        domain: [0, 10],
                        colors: interpolateReds,
                    }}
                >
                    <GetScales value={result} />
                </Density>
            </Chart>
        )
        expect(result.color.variant).toEqual('sequential')
    })

    it('accepts sequential color values (rows)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Density
                    {...densityProps}
                    data={densityRowData}
                    valueColor={'c'}
                    scaleColor={{
                        variant: 'sequential',
                        domain: [0, 10],
                        colors: interpolateReds,
                    }}
                >
                    <GetScales value={result} />
                </Density>
            </Chart>
        )
        expect(result.color.variant).toEqual('sequential')
    })
})

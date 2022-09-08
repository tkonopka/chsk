import { isHeatMapData, isHeatMapProcessedData } from '../src/heatmap'

describe('isHeatMapData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                x: 20,
                y: 30,
            },
            {
                id: 'b',
                x: 10,
            },
        ]
        expect(isHeatMapData(input)).toBeTruthy()
    })

    it('rejects objects with missing ids', () => {
        const input = [
            {
                x: 10,
                y: 20,
            },
            {
                x: 30,
                y: 40,
            },
        ]
        expect(isHeatMapData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isHeatMapData(input)).toBeFalsy()
    })
})

describe('isHeatMapProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                value: [0, 1, 2],
            },
        ]
        expect(isHeatMapProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isHeatMapProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isHeatMapProcessedData(input)).toBeFalsy()
    })
})

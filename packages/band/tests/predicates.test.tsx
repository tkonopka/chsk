import {
    isBarProcessedData,
    isQuantileData,
    isQuantileProcessedData,
    isQuantileProcessedSummary,
    isStripData,
    isStripProcessedData,
    isScheduleData,
    isScheduleProcessedData,
    isScheduleProcessedSummary,
} from '../src/'

describe('isQuantileData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                id: 'b',
                data: [],
            },
        ]
        expect(isQuantileData(input)).toBeTruthy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                id: 'b',
            },
        ]
        expect(isQuantileData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isQuantileData(input)).toBeFalsy()
    })
})

describe('isQuantileProcessedSummary', () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('detects correct data format', () => {
        const input = { values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isQuantileProcessedSummary(input)).toBeTruthy()
    })

    it('rejects arrays', () => {
        const input = [1, 2, 3]
        expect(isQuantileProcessedSummary(input)).toBeFalsy()
    })

    it('rejects partial objects', () => {
        const input = { values: [1, 2, 3, 4, 5], quantiles: q5 }
        expect(isQuantileProcessedSummary(input)).toBeFalsy()
    })

    it('rejects incorrect lengths', () => {
        const inputV = { values: [1, 2, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isQuantileProcessedSummary(inputV)).toBeFalsy()
        const inputQ = { values: [1, 2, 3, 4, 5], quantiles: [0, 1], extrema: [0, 8] }
        expect(isQuantileProcessedSummary(inputQ)).toBeFalsy()
        const inputE = { values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8, 12] }
        expect(isQuantileProcessedSummary(inputE)).toBeFalsy()
    })
})

describe('isQuantileProcessedData', () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }],
                domain: [[0, 8]],
            },
        ]
        expect(isQuantileProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isQuantileProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isQuantileProcessedData(input)).toBeFalsy()
    })
})

describe('isStripData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                id: 'b',
                data: [],
            },
        ]
        expect(isStripData(input)).toBeTruthy()
    })

    it('rejects objects with missing id', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                data: [1, 2, 3],
            },
        ]
        expect(isStripData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isStripData(input)).toBeFalsy()
    })
})

describe('isStripProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ internal: [0, 1, 2], value: [0.5, 1.5, 1.0], r: [2, 2, 2] }],
                domain: [[0.5, 1.5]],
            },
        ]
        expect(isStripProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isStripProcessedData(input)).toBeFalsy()
    })
})

describe('isBarProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [0.5, 1.0, 1.5],
                domain: [[0.5, 1.5]],
            },
        ]
        expect(isBarProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isBarProcessedData(input)).toBeFalsy()
    })
})

describe('isScheduleData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [
                    { key: 'x', start: 1, end: 2 },
                    { key: 'y', start: 0, end: 1 },
                ],
            },
            {
                id: 'b',
                data: [],
            },
        ]
        expect(isScheduleData(input)).toBeTruthy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                data: [],
            },
            {
                id: 'b',
            },
        ]
        expect(isScheduleData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [{ key: 'x', start: 1, end: 2 }],
            },
            null,
        ]
        expect(isScheduleData(input)).toBeFalsy()
    })
})

describe('isScheduleProcessedSummary', () => {
    it('detects correct data format', () => {
        const input = { start: 0, end: 5, key: 'x' }
        expect(isScheduleProcessedSummary(input)).toBeTruthy()
    })

    it('rejects partial objects', () => {
        expect(isScheduleProcessedSummary({ start: 0, key: 'x' })).toBeFalsy()
        expect(isScheduleProcessedSummary({ end: 5, key: 'x' })).toBeFalsy()
        expect(isScheduleProcessedSummary({ start: 0, end: 5 })).toBeFalsy()
    })

    it('rejects arrays and non-objects', () => {
        expect(isScheduleProcessedSummary([1, 2, 3])).toBeFalsy()
        expect(isScheduleProcessedSummary(null)).toBeFalsy()
    })
})

describe('isScheduleProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ start: 0, end: 5, key: 'x' }],
                domain: [[0, 5]],
            },
        ]
        expect(isScheduleProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isScheduleProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        expect(isScheduleProcessedData([null])).toBeFalsy()
    })
})

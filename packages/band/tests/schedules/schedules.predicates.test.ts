import { isScheduleData, isScheduleProcessedData, isScheduleProcessedSummary } from '../../src'

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

    it('rejects empty data', () => {
        expect(isScheduleProcessedData([])).toBeFalsy()
    })
})

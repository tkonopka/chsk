import { isPieData, isPieProcessedData } from '../../src/pie'

describe('isPieData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: 10,
            },
            {
                id: 'b',
                data: 20,
            },
        ]
        expect(isPieData(input)).toBeTruthy()
    })

    it('rejects objects with missing ids', () => {
        const input = [
            {
                data: 10,
            },
            {
                data: 20,
            },
        ]
        expect(isPieData(input)).toBeFalsy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                value: 10,
            },
            {
                id: 'b',
                value: 20,
            },
        ]
        expect(isPieData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isPieData(input)).toBeFalsy()
    })

    it('rejects empty array', () => {
        expect(isPieData([])).toBeFalsy()
    })
})

describe('isPieProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: 10,
                startAngle: 0,
                endAngle: Math.PI,
                proportion: 1.0,
            },
            {
                id: 'b',
                index: 0,
                data: 10,
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                proportion: 0.5,
            },
        ]
        expect(isPieProcessedData(input)).toBeTruthy()
    })

    it('rejects data with missing index', () => {
        const input = [
            {
                id: 'a',
                data: 10,
                startAngle: 0,
                endAngle: Math.PI,
                proportion: 0.5,
            },
        ]
        expect(isPieProcessedData(input)).toBeFalsy()
    })

    it('rejects data with missing angles', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: 10,
                proportion: 1.0,
            },
        ]
        expect(isPieProcessedData(input)).toBeFalsy()
    })

    it('reject data with missing data', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                proportion: 1.0,
            },
        ]
        expect(isPieProcessedData(input)).toBeFalsy()
    })

    it('reject null', () => {
        const input = [null]
        expect(isPieProcessedData(input)).toBeFalsy()
    })

    it('reject empty array', () => {
        expect(isPieProcessedData([])).toBeFalsy()
    })
})

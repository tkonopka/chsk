import { createContinuousScale, getTickCoordinates } from '../../src/scales'

describe('getTickCoordinates', () => {
    it('gives specified number of tick coordinates', () => {
        const scale = createContinuousScale({
            variant: 'linear',
            domain: [0, 100],
            size: 200,
        })
        const result = getTickCoordinates(scale, 6)
        const expected = [0, 40, 80, 120, 160, 200]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })

    it('gives tick coordinates for specific values', () => {
        const scale = createContinuousScale({
            variant: 'linear',
            domain: [0, 100],
            size: 200,
        })
        const result = getTickCoordinates(scale, [0, 25, 75, 100])
        const expected = [0, 50, 150, 200]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })

    it('gives coordinates on time scale', () => {
        const start: Date = new Date(Date.parse('2000-01-01'))
        const end: Date = new Date(Date.parse('2000-01-06'))
        const scale = createContinuousScale({
            variant: 'time',
            domain: [start, end],
            size: 200,
        })
        const result = getTickCoordinates(scale, 6)
        const expected = [0, 40, 80, 120, 160, 200]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })

    it('get coordinates for specific time points', () => {
        const start: Date = new Date(Date.parse('2000-01-01'))
        const end: Date = new Date(Date.parse('2000-01-05'))
        const scale = createContinuousScale({
            variant: 'time',
            domain: [start, end],
            size: 200,
        })
        const t1 = new Date(Date.parse('2000-01-02'))
        const t2 = new Date(Date.parse('2000-01-04'))
        const result = getTickCoordinates(scale, [t1, t2])
        const expected = [50, 150]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })
})

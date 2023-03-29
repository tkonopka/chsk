import {
    createBandScale,
    createContinuousScale,
    defaultCategoricalScale,
    defaultSizeScale,
    getAbsolutePosition,
} from '../../src/scales'
import { Scales } from '../../src/scales/types'

describe('getAbsolutePosition', () => {
    const customBandScale = createBandScale({
        domain: ['a', 'b'],
        size: 100,
        padding: 0,
    })
    const customLinearScale = createContinuousScale({
        variant: 'linear',
        reverseRange: true,
        domain: [0, 10],
        size: 100,
    })
    const customScales: Scales = {
        x: customBandScale,
        y: customLinearScale,
        color: defaultCategoricalScale,
        size: defaultSizeScale,
    }

    it('accepts inputs in absolute units', () => {
        const result = getAbsolutePosition([10, 20], 'absolute', [100, 100], customScales)
        expect(result).toEqual([10, 20])
    })

    it('accepts inputs in relative units', () => {
        const resultA = getAbsolutePosition([0.5, 0.6], 'relative', [100, 100], customScales)
        expect(resultA).toEqual([50, 60])
        const resultB = getAbsolutePosition([1, 0], 'relative', [100, 100], customScales)
        expect(resultB).toEqual([100, 0])
    })

    it('accepts inputs in view units', () => {
        // 'a' is toward the left of the x-axis, so x position should be small
        // 1 is a low value along the y-axis, so will have a large svg position
        const resultA = getAbsolutePosition(['a', 1], 'view', [100, 100], customScales)
        expect(resultA.map(Math.round)).toEqual([25, 90])
        const resultB = getAbsolutePosition(['b', 9], 'view', [100, 100], customScales)
        expect(resultB.map(Math.round)).toEqual([75, 10])
    })

    it('accepts inputs in mixed units (view-relative)', () => {
        const resultA = getAbsolutePosition(
            ['a', 1],
            ['view', 'relative'],
            [100, 100],
            customScales
        )
        expect(resultA).toEqual([25, 100])
        const resultB = getAbsolutePosition(
            ['b', 0],
            ['view', 'relative'],
            [100, 100],
            customScales
        )
        expect(resultB).toEqual([75, 0])
    })

    it('accepts inputs in mixed units (relative-absolute)', () => {
        const resultA = getAbsolutePosition(
            [0.5, 0.5],
            ['relative', 'absolute'],
            [100, 100],
            customScales
        )
        expect(resultA).toEqual([50, 0.5])
        const resultB = getAbsolutePosition(
            [1, 20],
            ['relative', 'absolute'],
            [100, 100],
            customScales
        )
        expect(resultB).toEqual([100, 20])
    })
})

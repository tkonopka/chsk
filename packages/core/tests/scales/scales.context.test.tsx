import { render } from '@testing-library/react'
import { ScalesContextValue, useScales } from '../../src/scales'

export const GetScalesContext = ({ value }: { value: ScalesContextValue }) => {
    const result = useScales()
    value.scales = result.scales
    value.setScaleProps = result.setScaleProps
    value.scaleProps = result.scaleProps
    return null
}

describe('useScales', () => {
    it('retrieves default scales', () => {
        const result: ScalesContextValue = {} as ScalesContextValue
        render(
            <svg>
                <GetScalesContext value={result} />
            </svg>
        )
        expect(typeof result.scales.x).toEqual('function')
        expect(typeof result.scales.y).toEqual('function')
        result.setScaleProps(null)
        expect(typeof result.setScaleProps).toEqual('function')
    })
})

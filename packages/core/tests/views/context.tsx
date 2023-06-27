import { Scales, useScales } from '../../src'

export const GetScales = ({ value }: { value: Scales }) => {
    const { scales } = useScales()
    value.x = scales.x
    value.y = scales.y
    value.size = scales.size
    value.color = scales.color
    return null
}

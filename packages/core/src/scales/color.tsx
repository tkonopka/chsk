import { createCategoricalScale } from './categorical'
import { createDivergingScale } from './diverging'
import { createSequentialScale } from './sequential'
import { ColorScaleProps } from './types'

export const createColorScale = (props: ColorScaleProps) => {
    if (props.variant === 'diverging') return createDivergingScale(props)
    if (props.variant === 'sequential') return createSequentialScale(props)
    return createCategoricalScale(props)
}

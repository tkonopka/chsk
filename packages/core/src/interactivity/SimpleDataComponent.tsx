import { createElement } from 'react'
import { DataComponentProps, InteractivityProps } from './types'
import { SvgElementVariantProps } from '../general'

export const SimpleDataComponent = <
    DataSpec,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    props,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    return createElement(component, props)
}

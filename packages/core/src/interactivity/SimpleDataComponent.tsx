import { createElement } from 'react'
import { SimpleDataComponentProps, InteractivityProps } from './types'
import { SvgElementVariantProps } from '../general'

export const SimpleDataComponent = <
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    props,
}: SimpleDataComponentProps<ComponentProps>) => {
    return createElement(component, props)
}

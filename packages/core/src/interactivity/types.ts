import { FC, MouseEvent } from 'react'
import { SvgElementVariantProps } from '../general'

// handling events on svg elements
export interface InteractivityProps {
    /** function triggered upon mouse event */
    onMouseEnter?: (event: MouseEvent) => void
    /** function triggered upon mouse event */
    onMouseLeave?: (event: MouseEvent) => void
    /** function triggered upon mouse event */
    onClick?: (event: MouseEvent) => void
    /** function triggered upon mouse event */
    onMouseMove?: (event: MouseEvent) => void
}

// handling events in a data-dependent way (e.g. by points in scatter plot)
export interface DataInteractivityProps<
    DataSpec,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> {
    /** function triggered upon mouse event */
    onMouseEnter?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** function triggered upon mouse event */
    onMouseLeave?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** function triggered upon mouse event */
    onClick?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** function triggered upon mouse event */
    onMouseMove?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** function binding data to interactivity handlers */
    dataComponent?: FC<DataComponentProps<DataSpec, ComponentProps>>
}

// this interface is named Simple-*Data*-Component but it does not actually use a data type
// the name is meant to evoke that it is a simpler interface compared to DataComponentProps
export interface SimpleDataComponentProps<
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> {
    /** function to create a chart component */
    component: FC<ComponentProps>
    /** props passed to the component */
    props: ComponentProps
}

export interface DataComponentProps<
    DataSpec,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> extends SimpleDataComponentProps<ComponentProps>,
        Omit<DataInteractivityProps<DataSpec, ComponentProps>, 'dataComponent'> {
    /** data object */
    data?: DataSpec
}

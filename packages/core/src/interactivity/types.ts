import { FC, MouseEvent } from 'react'
import { CssProps, SvgElementVariantProps, WithId } from '../general'

// handling events on svg elements
export interface InteractivityProps {
    /** handler for mouse enter event */
    onMouseEnter?: (event: MouseEvent) => void
    /** handler for mouse leave event */
    onMouseLeave?: (event: MouseEvent) => void
    /** handler for mouse move event */
    onMouseMove?: (event: MouseEvent) => void
    /** handler for click event */
    onClick?: (event: MouseEvent) => void
}

export interface DataInteractivityHandlers<DataSpec extends WithId> {
    /** handler for mouse enter event */
    onMouseEnter?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for mouse leave event */
    onMouseLeave?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for mouse move event */
    onMouseMove?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for click event */
    onClick?: (data: DataSpec | undefined, event: MouseEvent) => void
}

export interface DataInteractivityModifiers {
    /** style modifier upon mouse enter event */
    onMouseEnter?: CssProps
    /** style modifier upon mouse leave event */
    onMouseLeave?: CssProps
    /** style modifier upon mouse move event */
    onMouseMove?: CssProps
    /** style modifier upon click */
    onClick?: CssProps
}

// handling events in a data-dependent way (e.g. by points in scatter plot)
export interface DataInteractivityProps<
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> {
    /** handlers for events */
    handlers?: DataInteractivityHandlers<DataSpec>
    /** style modifiers */
    modifiers?: DataInteractivityModifiers
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
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> extends SimpleDataComponentProps<ComponentProps>,
        Omit<DataInteractivityProps<DataSpec, ComponentProps>, 'dataComponent'> {
    /** data object */
    data?: DataSpec
}
